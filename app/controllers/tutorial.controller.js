const db = require("../models");
const tutorialModel = require("../models/tutorial.model");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const tutorial={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email
  }
  Tutorial.create(tutorial).then((data)=>res.send(data))
  .catch(err=>{
    res.status(500).send({
        message:
        err.message||"Some error occured"
    })
  })
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Tutorial.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        console.log(num,"updated")
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  console.log(id,"lll")
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        res.send({
            message:"Particular Id is deleted"
        })
        // console.log(num,"found")
        // if (num == 1) {
        //   res.send({
        //     message: "Tutorial was deleted successfully!"
        //   });
        // } else {
        //   res.send({
        //     message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        //   });
        // }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
    }
   
    exports.findAllPublished = (req, res) => {
        Tutorial.findAll({ attributes:['id','firstName','lastName','email','updatedAt','createdAt']} )
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
      };