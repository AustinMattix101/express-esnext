import * as fs from 'fs';
import https from "https";
async function Onhttps(payload) {

    const options = {
        key: fs.readFileSync('./server/config/keys/private.pem'),
        cert: fs.readFileSync('./server/config/keys/certificate.pem')
    }

    const secureServer = https.createServer(options, payload);
    const PORT = process.env.SECURE_PORT;
    secureServer.listen(PORT, () =>{
        console.log(`Secure Socket Layers [SSL] running on PORT: ${PORT} `);
    });

    process.on("unhandleRejection", (err, promise) => {
        console.log(`Logged Error: ${err}`);
        secureServer.close(() => process.exit(1));
    });
}

export default Onhttps;