import cors from "cors";

const whitelist = ['http://127.0.0.1:3000', 'http://127.0.0.1:5000', 'https://127.0.0.1:8000'];
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
const _cors = cors();
export { _cors as cors };
export const corsWithOptions = cors(corsOptionsDelegate);