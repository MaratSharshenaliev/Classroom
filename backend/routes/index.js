const  express = require('express');
const controllersCourses = require("../controllers/getCourses")
const authController = require("../controllers/authController")
const router = express.Router();
const {check} = require("express-validator")


//auth
router.post('/login',
    [
        check("email",'Некоректные данные email').normalizeEmail().isEmail(),
        check("password",'Введите пороль').exists()
    ],
    authController.login);
router.post('/logout',
    [
        check("email",'Некоректные данные email').normalizeEmail().isEmail(),
        check("password",'Минимальная длина 6 символов').isLength({min:6})
    ],
    authController.logout)


//get Courses
router.post("/Course",controllersCourses.getCouse);
router.post("/Courses",controllersCourses.getCouses);
router.post("/Courses/getCourse",controllersCourses.getCourse);




module.exports = router;
