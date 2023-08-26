// routes/myModelRoutes.js
const express = require('express');
const LoginRegisterController = require('../controller/LoginRegisterController.js');
const cors = require('cors');

const routes = () => {
    const router = express.Router();

    router.use(express.urlencoded({
        extended: true
    }));

    router.use(express.json({
        limit: '1mb'
    }));

    router.options('*', cors());
    router.use(cors());

// Define routes
router.get('/register', LoginRegisterController.donorRegister);
router.post('/login', LoginRegisterController.donorLogin);
router.post('/student/register', LoginRegisterController.studentRegister);
router.get('/student/login', LoginRegisterController.studentLogin);

return router;
}


module.exports = routes();
