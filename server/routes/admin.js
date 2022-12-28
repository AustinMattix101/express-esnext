import { Router } from "express";
const router = Router();
import { corsWithOptions } from "../middlewares/cors.js";
import { getAdminData } from "../controllers/admin.js";
import { protect, AdminProtect } from "../middlewares/auth.js";
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
        AdminProtect, getAdminData
    );

export default router;