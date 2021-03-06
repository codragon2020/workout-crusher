// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/newWorkout", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newWorkout.html"));
  });

  // app.get("/workout/:id", (req, res) => {
  //   console.log("ID Route", req.params.id);
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // blog route loads blog.html
  app.get("/logWorkout", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/logWorkout.html"));
  });

  app.get("/cms", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newWorkout.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
