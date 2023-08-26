const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const localStrategy = require('passport-local').Strategy;
const crypto = require('./cryptoFunction.js');

const {db, userTable} = require('../config/db.config.js');

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "SECRET"
},

    function (jwtPayload, cb) {
        if (!jwtPayload) {
            return cb(err)
        }
        return cb(null, jwtPayload);
    }
))

//Create a passport middleware to handle user registration
passport.use('register', new localStrategy({
    passReqToCallback: true,
    usernameField: 'email',
}, async (req, email, password, done) => {
    try {
        const salt = crypto.genRandomString(16); /** Gives us salt of length 16 */
        const passwordData = crypto.sha512(password, salt);

        if (email != null &&
            email != undefined &&
            password != null &&
            password != undefined
            ) {
            try {

                const checkEmailparams = {
                    TableName: userTable,
                    Key: {
                        email
                    }
                };
                
                const rows = await db.get(checkEmailparams).promise();
                if (!rows.Item) {
                    const params = {
                        TableName: userTable,
                        Item: {
                          email,
                          name: req.body.name,
                          password: passwordData.passwordHash,
                          type: "donor",
                          salt
                        }
                    };

                    await db.put(params).promise();
        
                    return done(null, {
                        error: false,
                        data: {},
                        message: "User " + email + " has been created"
                    });
                } 
                else {
                    return done(null, {
                        error: true,
                        data: {},
                        message: "User already exists"
                    });
                }

            } catch (e) {
                console.log(e);
                return done(null, {
                    error: true,
                    data: {},
                    message: "Error occured creating user"
                });
            }
        } else {
            return done(null, {
                error: true,
                data: {},
                message: "Required fields needed are not entered"
            });
        }
    } catch (error) {
        console.log(error);
        return done(null, {
            error: true,
            data: {},
            message: "Error occured creating user"
        });
    }
}));

//Create a passport middleware to handle User login
passport.use('login', new localStrategy({
    usernameField: 'email',
}, async (email, password, done) => {
    if (email != null &&
        email != undefined &&
        password != null &&
        password != undefined) {

        try {
            const checkEmailparams = {
                TableName: userTable,
                Key: {
                    email
                }
            };

            const rows = await db.get(checkEmailparams).promise();

            if (rows.Item) {
                console.log(rows.Item)
                if (rows.Item.password == crypto.sha512(password, rows.Item.salt).passwordHash) {
                    const user = {
                        email: rows.Item.email
                    }
                    return done(null, user, {
                        error: false,
                        data: {},
                        message: 'Logged In',
                    });
                } else {
                    return done(null, false, {
                        error: true,
                        data: {},
                        message: 'Incorrect Username or Password'
                    });
                }
            } else {
                return done(null, false, {
                    error: true,
                    data: {},
                    message: 'Incorrect Username or Password'
                });
            }
        } catch (e) {
            console.log(e);
            return done(null, false, {
                error: true,
                data: {},
                message: "Error occured trying receive user"
            });
        }
    } else {
        return done(null, false, {
            error: true,
            data: {},
            message: "Required fields needed are not entered"
        });
    }
}));