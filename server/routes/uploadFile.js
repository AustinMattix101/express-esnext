import { Router } from 'express';
import { protect } from "../middlewares/auth.js";
import { corsWithOptions } from "../middlewares/cors.js";
import { 
    InitOnlyEmailConfirmation,
    InitpreferedTwoFAOption 
} from "../middlewares/init.js";

import Upload, { postUpload, getUpload, putUpload, deleteUpload } from "../controllers/upload.js";

import UploadImg, { postUploadImg, getUploadImg, putUploadImg, deleteUploadImg } from "../controllers/uploadImg.js";

const uploadRouter = Router();

const key = "File";
const upload = new Upload;

const keyImg = "imageFile";
const uploadImg = new UploadImg;

uploadRouter
    .route('/')
    .options(corsWithOptions)
        .post(
            protect,
            InitOnlyEmailConfirmation, 
            InitpreferedTwoFAOption, 
            upload.single(key),
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

uploadRouter
    .route('/img')
    .options(corsWithOptions)
        .post(
            protect, 
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption,
            uploadImg.single(keyImg),
            postUploadImg
            )
        
        .get( 
            protect, 
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption,
            getUploadImg, 
            err => next(err)
        )

        .put( 
            protect, 
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption,
            putUploadImg, 
            err => next(err))

        .delete( 
            protect, 
            InitOnlyEmailConfirmation,
            InitpreferedTwoFAOption,
            deleteUploadImg, 
            err => next(err));

export default uploadRouter;