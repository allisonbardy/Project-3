const authController = require('../controllers/authcontroller.js');
const passport = require('../config/passport');

module.exports = function(app) {
     
     
    app.get('/signup', authController.signup);
    
    
    app.get('/signin', authController.signin);
    
    
    app.post('/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            console.log('Info ', info)
            if (info) {
                return res.json(info)
            }
            req.logIn(user, function(err) {
                console.log('USER ', user)
                res.json(user)
                
            })
        })(req, res, next);
    });
    
    
    // app.get('/search', isLoggedIn, authController.dashboard);
    
    
    
    app.get('/logout', authController.logout);
    

    app.post('/signin', function(req,res,next){
        passport.authenticate('local-signin', function(err, user, info){
            console.log('Info', info)
            if(info){
                return res.json(info)
            }
            req.logIn(user, function(err){
                console.log('USER', user)
                res.json(user)
            })
        })(req,res,next)
    })
    
    // app.post('/signin', passport.authenticate('local-signin', {
    //         successRedirect: '/search',
    
    //         failureRedirect: '/signin'
    //     }
    
    // ));
    
    
    function isLoggedIn(req, res, next) {
    
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/signin');
        }
    }
}