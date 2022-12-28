import { Router } from 'express';
import { protect, AdminProtect } from "../middlewares/auth.js";
import { 
    InitOnlyEmailConfirmation,
    InitpreferedTwoFAOption 
} from "../middlewares/init.js";
import { corsWithOptions } from "../middlewares/cors.js";

import { findProfile, findProfileByUsername, writeProfile, updateProfile, clearProfile } from "../controllers/profile.js";

import { updateProfileByUsername, deleteProfileByUsername } from "../controllers/profile.js"; // Admin Only

const profilesRouter = Router();

profilesRouter
    .options(corsWithOptions)
    .get(
        '/',
        protect,
        InitOnlyEmailConfirmation, 
        InitpreferedTwoFAOption, 
        findProfile, 
        err => next(err)
    );

profilesRouter  // init email conf... 
    .options(corsWithOptions)
    .get(
        '/:username', 
        protect,
        InitOnlyEmailConfirmation,
        InitpreferedTwoFAOption,  
        findProfileByUsername,
        err => next(err)
    );

profilesRouter
    .options(corsWithOptions)
    .post(
        '/', 
        protect, 
        InitOnlyEmailConfirmation,
        InitpreferedTwoFAOption,
        writeProfile, 
        err => next(err)
    );

profilesRouter
    .options(corsWithOptions)
    .put(
        '/', 
        protect,
        InitOnlyEmailConfirmation,
        InitpreferedTwoFAOption, 
        updateProfile,
        err => next(err)
    );

profilesRouter
    .options(corsWithOptions)
    .delete(
        '/',
        protect,
        InitOnlyEmailConfirmation,
        InitpreferedTwoFAOption, 
        clearProfile,
        err => next(err)
    );

profilesRouter
    .options(corsWithOptions)
    .put(
        '/:username', 
        protect,
        InitOnlyEmailConfirmation,
        InitpreferedTwoFAOption,
        AdminProtect, 
        updateProfileByUsername,
        err => next(err)
    );

profilesRouter
    .options(corsWithOptions)
    .delete(
        '/:username',
        protect,
        InitOnlyEmailConfirmation,
        InitpreferedTwoFAOption,
        AdminProtect, 
        deleteProfileByUsername,
        err => next(err)
    );

export default profilesRouter;