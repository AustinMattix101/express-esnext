import { getAPI, getCamunitedAPI } from "../controllers/api.js";
import { protect, AdminProtect } from "../middlewares/auth.js";
import { cors, corsWithOptions } from "../middlewares/cors.js";
import { Router} from "express";
import {  // Hotel
    postHotel, 
    updateHotel,
    deleteHotel,
    findHotels,
    findHotel,
    countByCity,
    countByType
} from "../controllers/api.js";
import { // Room
    postRoom,
    updateRoom,
    deleteRoom,
    findRooms,
    findRoom,
} from "../controllers/api.js";

const apiRouter = Router();

apiRouter
    .route("/")
    .options(corsWithOptions)
    .get(cors, getAPI)
    .post(cors, getAPI)
    .put(cors, getAPI)
    .delete(cors, getAPI);

apiRouter
    .route("/camunited")
    .options(corsWithOptions)
    .get(cors, getCamunitedAPI);

    // Hotel
apiRouter
    .route('/hotel')
    .options(corsWithOptions)
    .post(protect, AdminProtect, postHotel);

apiRouter
    .route('/hotel/:id')
    .options(corsWithOptions)
    .put(protect, AdminProtect, updateHotel);

apiRouter
    .route('/hotel/:id')
    .options(corsWithOptions)
    .delete(protect, AdminProtect, deleteHotel);

apiRouter
    .route('/hotel')
    .options(corsWithOptions)
    .get(protect, findHotels);

apiRouter
    .route('/hotel/find/:id')
    .options(corsWithOptions)
    .get(protect, findHotel);

    // Hotel Query
apiRouter
    .route('/hotel/countByCity')
    .options(corsWithOptions)
    .get(protect, countByCity);

apiRouter
    .route('/hotel/countByType')
    .options(corsWithOptions)
    .get(protect, countByType);
    // Room
apiRouter
    .route('/room/:hotelid')
    .options(corsWithOptions)
    .post(protect, postRoom);

apiRouter
    .route('/room/:id')
    .options(corsWithOptions)
    .put(protect, updateRoom);

apiRouter
    .route('/room/:id/:hotelid')
    .options(corsWithOptions)
    .delete(protect, deleteRoom);

apiRouter
    .route('/room')
    .options(corsWithOptions)
    .get(protect, findRooms);

apiRouter
    .route('/room/:id')
    .options(corsWithOptions)
    .get(protect, findRoom);

export default apiRouter;