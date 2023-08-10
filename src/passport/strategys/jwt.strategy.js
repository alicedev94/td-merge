const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { getUser } = require("../../controllers/main.controller");

var options = {
  secretOrKey: "secret",
  issuer: "http://localhost:3000/profile",
  //audience: "yoursite.net",
};

options.jwtFromRequest  = ExtractJwt.fromBodyField(auth);
//console.log(options);

passport.use(new JwtStrategy(options, function (jwt_payload, done) {
    getUser(jwt_payload.auth, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
