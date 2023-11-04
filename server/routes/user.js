const express = require("express")

const{ signupUser, loginUser } = require("../controllers/userController");
// import { uploadImage , getImage} from "../controller/image-controller.js";
// import upload from "../utlis/upload.js"

const router = express.Router();


router.post('/signup', signupUser)
router.post('/login', loginUser)



module.exports =  router;