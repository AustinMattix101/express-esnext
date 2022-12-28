import { Router } from 'express';
import { protect } from "../middlewares/auth.js";
import { corsWithOptions } from "../middlewares/cors.js";
import Upload, { postUpload, getUpload, putUpload, deleteUpload } from "../controllers/upload.js";
import { 
    InitOnlyEmailConfirmation,
    InitpreferedTwoFAOption 
} from "../middlewares/init.js";

const uploadRouter = Router();

const key = "Files";
const upload = new Upload;

uploadRouter
    .route('/')
    .options(corsWithOptions)
        .post(
            protect,
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption, 
            upload.array(key, 5),
            postUpload
            )
        
        .get( 
            protect,
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption, 
            getUpload, 
            err => next(err)
        )

        .put( 
            protect, 
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption,
            putUpload, 
            err => next(err))

        .delete( 
            protect, 
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption,
            deleteUpload, 
            err => next(err));

export default uploadRouter;