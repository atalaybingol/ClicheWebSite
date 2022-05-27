const express = require("express");
const Cliche = require("../models/Cliche");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res) => {
  res.render("site/index");
});

router.get("/more", (req, res) => {
  Cliche.find({})
    .lean()
    .then((cliches) => {
      res.render("site/more", { cliches: cliches });
    });
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .lean()
    .then((movies) => {
      res.render("site/movies", { movies: movies });
    });
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .lean()
    .then((movies) => {
      res.render("site/post", { movies: movies });
    });
});

router.get("/more/:id", (req, res) => {
  Cliche.findById(req.params.id)
    .lean()
    .then((cliches) => {
      res.render("site/cliches", { cliches: cliches });
    });
});

// function escapeRegex(text) {
//   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// };

// router.get("/search", function(req, res) {
//   if (req.query.search) {
//      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
//      Post.find({ "name": regex }, function(err, foundjobs) {
//          if(err) {
//              console.log(err);
//          } else {
//             res.render("jobs/index", { jobs: foundjobs });
//          }
//      });
//   }
// }

module.exports = router;
