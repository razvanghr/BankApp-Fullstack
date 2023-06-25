const express = require("express");

const {
  accountTransfer,
  accountTransaction,
  deleteAccount,
  requestLoan,
  accountInfo,
} = require("../controller/accountOptions.js");

const router = express.Router();

router.delete("/delete/:id", deleteAccount);

router.put("/loan/:id", requestLoan);

router.get("/info/:id", accountInfo);

router.get("/transaction/:id", accountTransaction);

router.put("/transfer/:id", accountTransfer);

module.exports = router;
