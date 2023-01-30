module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", tutorials.create);
    router.put("/update/:id",tutorials.update)
  
    router.delete("/:id",tutorials.delete);
    router.get("/all",tutorials.findAllPublished)
    app.use('/api/tutorials', router);
  }