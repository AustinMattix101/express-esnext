import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // initialize configuration
import express, { json, urlencoded } from "express";
import { join, resolve } from "path";

// Config
import connectDB from "./config/db.js";
import Onhttps from "./config/https.js";

// Middlewares
import errorHandler from "./middlewares/error.js";

// Routers
import apiRouter from "./routes/api.js";
import authRouter from "./routes/auth.js";
import TwoFARouter from "./routes/TwoFA.js";
import privateRouter from "./routes/private.js";
import adminRouter from "./routes/admin.js";
import profileRouter from "./routes/profile.js";
import uploadRouter from "./routes/uploadFile.js";
import uploadsRouter from "./routes/uploadFiles.js";

    // Connoect DB
    await connectDB();

// Express
const app = express();

    // Secure Socket Layers SSL
    await Onhttps(app);

app.all('*', (req, res, next) => {
    if (req.secure) return next();
    else { 
        res.redirect(307, "https://" + req.hostname + ":" + process.env.SECURE_PORT + req.url);
    }
});
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use('/api', express.static(join('public')));
app.use('/api/auth', authRouter);
app.use('/api/twofa', TwoFARouter);
app.use('/api/private', privateRouter); // User Privillege
app.use('/api/admin', adminRouter); // Admin Privillege
app.use('/api/profile', profileRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/uploads', uploadsRouter);

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(join('./public_html')));

    app.get('*', (req, res) =>
        res.sendFile(
            resolve('./', 'public_html', 'index.html')
        )
    );

} else {
    app.get('/', (req, res)  => res.send('Please set to production!'));
}

// Error Handler (Should be last piece of middleware
app.use(errorHandler);

const PORT = process.env.SERVER_PORT || 5000;

// Start the Express Server
const server = app.listen(PORT, () => {
    console.log(`HTTP Proxy [Unsecure] running on PORT: ${ PORT }`);
});

process.on("unhandleRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});