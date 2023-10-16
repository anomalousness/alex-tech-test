const validatePayment = require('../util/validatePayment.js');

const getPayments = (req, res) => {
  try {
    res.status(200).
      json({ message: "GET World!" });
    // console.log("GET route accessed successfully!")
  } catch (err) {
    res.status(500).
      json({ message: err });
    console.error(err)
  }
};

const addPayment = (req, res) => {
  const validation = validatePayment(req.body);
  try {
    if (validation) { 
      res.status(201).
        json({ message: "POST World!" });
    } else {
      res.status(400).
        json({ message: "Missing fields" });
    }
    } catch (err) {
      res.status(500).
        json({ message: err });
      console.error(err)
    }
  
}


module.exports = {
  getPayments,
  addPayment,
};
