// routes/myModelRoutes.js
const express = require('express');
const LoginRegisterController = require('../controller/LoginRegisterController.js');
const cors = require('cors');
const passport = require('passport');

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
            res.status(200).send(req.email);
        } else {
            res.status(500).send(req.user);
        }
    });
    router.post('/login', passport.authenticate('login', {}),
        async (err, user, info) => {
            try {
                if (info.error) {
                    return res.status(500).send(info)
                } else {
                    req.login(user, {
                        session: false
                    }, async (error) => {
                        if (error) return next(error)
                        const token = jwt.sign({
                            user
                        }, 'SECRET');
                        //Send back the token to the user
                        return res.status(200).send({
                            error: false,
                            data: token,
                            message: info.message
                        });
                    });
                }
            } catch (error) {
                return next(error);
            }
    });
router.post('/student/register', {});
router.get('/student/login', {});

return router;
}


module.exports = routes();
