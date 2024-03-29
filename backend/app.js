const express = require('express');
const cors = require('cors');
// const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const passport = require('passport');
const app = express();

require('./auth/auth');

app.use(express.json({
    limit: "5mb",
    extended: true
}));
app.use(cors());
app.use(passport.initialize());

// app.use(express.static(__dirname + '/images'));// you can access image 

// Import routes into application
app.use('/', require('./routes/loginRegister'));
app.use('/uni', require('./routes/uniComparison'));

module.exports = app;

// Enable if you do not want to run serverless for application
// const server = app.listen(3000, () => {
//     console.log('Server started on port ' + 3000);
// });

// const loginRoutes = require('./routes/loginRoutes.js');
// const contactRoutes = require('./routes/contactRoutes.js');
// const userWorkshopRoutes = require('./routes/userWorkshopRoutes.js');
// const workshopRoutes = require('./routes/workshopRoutes.js');
// const adminRoutes = require('./routes/adminRoutes.js');

// app.use('/', loginRoutes);
// app.use('/contact', contactRoutes);
// app.use('/userworkshop', userWorkshopRoutes);
// app.use('/workshop', passport.authenticate('jwt', {session:false}), workshopRoutes);
// app.use('/admin', passport.authenticate('jwt', {session:false}), adminRoutes);