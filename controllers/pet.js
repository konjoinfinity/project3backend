const mongoose = require("mongoose");
const { Pet } = require("../models/pet");

module.exports = {
  index: (req, res) => {
    Pet.find()
      .then(pets => res.json(pets))
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    Pet.create(req.body).then(pet => res.json(pet));
  },
  show: (req, res) => {
    Pet.findOne({ _id: req.params.id }).then(pet => res.json(pet));
  },
  update: (req, res) => {
    Pet.findByIdAndUpdate(
      { _id: req.params.id },
      { $inc: { licks: 1 } },
      req.body,
      {
        new: true
      }
    ).then(pet => res.json(pet));
  },
  delete: (req, res) => {
    Pet.remove({ _id: req.params.id }).then(pet => res.json(pet));
  },

  comment: (req, res) => {
    const createComment = {
      message: req.body.comment
    };
    Pet.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { comments: createComment } }
    ).then(pet => {
      pet.save((err, pet) => {
        res.json(pet);
      });
    });
  },

  delcomment: (req, res) => {
    const deleteComment = { _id: req.body.body };
    Pet.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { comments: deleteComment } }
    ).then(pet => {
      pet.save((err, pet) => {
        res.json(pet);
      });
    });
  }
};

// update: (req, res) => {
//   let currentLicks;
//   Pet.findOne({ _id: req.params.id }).then(pet => {
//     if (req.body.lick) {
//       currentLicks = pet.licks + 1;
//     }
//   })
//     .then(() => {
//       Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {
//         new: true
//       }).then(pet => res.json(pet));

//     })
// },
