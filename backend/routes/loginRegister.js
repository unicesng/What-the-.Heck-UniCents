const express = require('express');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');

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

    router.post('/register', passport.authenticate('register', {
        session: false
    }), async (req, res, next) => {
        if (!req.user.error) {
            res.status(200).send({
                error: false,
                data: {},
                message: "Successfully registered user"
            });
        } else {
            res.status(500).send({
                error: true,
                data: {},
                message: "Error registering user"
            });
        }
    });
    router.post('/login', passport.authenticate('login', {
        session: false
    }), async (req, res, next) => {
            try {
                if (req.authInfo.error) {
                    console.log(req)
                    return res.status(500).send({
                        error: req.authInfo.error,
                        data: {},
                        message: req.authInfo.message
                    })
                } else {
                    const token = jwt.sign({
                        email: req.user.email
                    }, 'SECRET');
                    //Send back the token to the user
                    return res.status(200).send({
                        error: req.authInfo.error,
                        data: token,
                        message: req.authInfo.message
                    });
                }
            } catch (error) {
                console.log(error);
                res.status(500).send({
                    error: true,
                    data: {},
                    message: "Error logging in"
                });
            }
    });
// router.post('/student/register', {});
// router.get('/student/login', {});

return router;
}


module.exports = routes();
