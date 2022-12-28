import { Router } from "express";
const router = Router();
import { corsWithOptions } from "../middlewares/cors.js";
import { getPrivateData } from "../controllers/private.js";
import { protect } from "../middlewares/auth.js";
import { 
    InitOnlyEmailConfirmation,
    InitpreferedTwoFAOption 
} from "../middlewares/init.js";

router.route("/")
    .options(corsWithOptions)
    .get(
        protect, 
        InitOnlyEmailConfirmation, 
        InitpreferedTwoFAOption, 
        getPrivateData
    );

export default router;