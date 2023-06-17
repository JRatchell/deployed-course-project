const passport = require('passport');
const data = require('../data/data.js');
const Comic = require('../models/comic-model');
module.exports = {
/*index: async function (request, response) { 
    //response.render('This route points to the Home page');
    await Comic.find({}, (err, data) => {
        if (err) {
            return err
        } else {
            response.render('pages/index', { 
                data: data
            }).exec(); 
        }
    })
   
},*/

index: (request, response) => {
    response.render('pages/index', {data: data});
  },

about: (request, response) => {
    response.render('pages/about');

},

login: (request, response) => {
    response.render('pages/login');

},

login_post: (request, response) => {
    const user = new User({
        username: request.body.username,
        password: request.body.password,
        googleId: request.body.googleId
    });

    request.login(user, (error) => {
        if (error) {
            response.redirect('/login') 
            return error
            
        } else {
            passport.authenticate('local')(request, response, () => {
                response.redirect('/admin');
            });
        }
    });
},

logout: (request, response) => {
    // new code as of 6/2022 - the correct logout function
    request.logout(function(err) {
      // destroy the session for the user
      if (err) { return next(err); }
      // redirect back to the homepage
      response.redirect('/');
    });
  },

register: (request, response) => {
    response.render('pages/register');
},

register_post:(request, response) => {
    User.register({username: request.body.username}, {password: request.body.password}, (error, user) => {
        if (error) {
            console.log(error);
            response.redirect('/register');
        } else {
            passport.authenticate('local')(request, response, () => {
                response.redirect('/login');
            });
        }
    });
},

//KEEP YOUR GREASY ASS HANDS OFF OF THIS CODE

google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),

google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(request, response) {
        // Successful authentication, redirect home.
        res.redirect('/admin');

    }
],
}

//Replace data.js and require UserSchema
// Mongoose method to search from database?