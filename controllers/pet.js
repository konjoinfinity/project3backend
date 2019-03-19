module.exports = {
  index: (req, res) => {
    res.send("show all pets");
  },
  create: (req, res) => {
    console.log("create pet");
  },
  show: (req, res) => {
    res.send("show single pet");
  },
  update: (req, res) => {
    console.log("update pet");
  },
  delete: (req, res) => {
    console.log("delete pet");
  }
};
