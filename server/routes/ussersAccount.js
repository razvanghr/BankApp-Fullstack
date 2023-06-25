const express = require("express");
const {
  accountRegister,
  accountLogin,
} = require("../controller/accountController.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("salut din user");
});

//register
router.post("/register", accountRegister);

//login
router.post("/login", accountLogin);

module.exports = router;
