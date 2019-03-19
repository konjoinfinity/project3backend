module.exports = {
  index: (req, res) => {
    console.log("show all pets");
  },
  create: (req, res) => {
    console.log("create pet");
  },
  show: (req, res) => {
    console.log("show single pet");
  },
  update: (req, res) => {
    console.log("update pet");
  },
  delete: (req, res) => {
    console.log("delete pet");
  }
};
