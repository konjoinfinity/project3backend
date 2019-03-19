module.exports = {
  create: (req, res) => {
    Stadium.create(req.body).then(stadium => res.json(stadium));
  },
  show: (req, res) => {
    Stadium.findOne({ _id: req.params.id }).then(stadium => res.json(stadium));
  },
  update: (req, res) => {
    console.log("update pet");
  },
  delete: (req, res) => {
    Stadium.remove({ _id: req.params.id }).then(stadium => res.json(stadium));
  }
};
