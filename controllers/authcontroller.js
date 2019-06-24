var exports = module.exports = {}
 
 
exports.signup = function(req, res) {
 
    res.render('SignUp');
 
}
 
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
 
 
exports.dashboard = function(req, res) {
 
    res.render('Dashboard');
 
}

exports.logout = function(req, res){
    res.render("hi")
}