const express = require("express");
const app = express();
const db = require("./config/dbConnection");
const session = require("express-session");
const bodyParser = require("body-parser");


//
const User = require("./models/Users")
const Product = require("./models/Product")
const ShoppingCar = require("./models/ShoppingCar");
const Address = require("./models/Address")
const ReviewProduct = require("./models/ReviewProduct")

//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//passport
//new comment

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");


app.use(cookieParser());
app.use(
  session({
    secret: "Bierfass",
  })
);

app.use(passport.initialize());
app.use(passport.session());

//passport strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function verify(email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false); // EL SEGUNDO PARAMETRO DICE SI ESTA AUTENTICADO O NO
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              alert("Contraseña incorrecta")
              return done(null, false); // contrasena invalida
            }
            return done(null, user); // autenticado exitosamente 
          });
        })
        .catch(done);
    }
  )
);

// guarda el usuario
passport.serializeUser(function(user, done) {
  done(null, user.id);
});


// busca el usuario
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});



const port = 8000;




//coneccion con la base de datos 

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log("Server running in port", port);
  });
});