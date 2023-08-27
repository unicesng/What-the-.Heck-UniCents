const express = require('express');
const cors = require('cors');
const passport = require('passport');
const UniComparisonController = require("../controller/UniComparisonController.js");

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

    router.get('/getAllUnis', UniComparisonController.getAllUnis);
    router.get('/filterUnis', UniComparisonController.filterUnis);
    
    return router;
}
    
    
module.exports = routes();