const db = require("../database/database.js");

// Info Account
const accountInfo = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      if (id) {
        const checkQuery = `SELECT * FROM accounts WHERE account_id = ${id}`;
        const [rows] = await db.promise().query(checkQuery);

        if (rows.length === 0) {
          res.status(404).send("Account not found");
        } else {
          const getQuerry = `SELECT * FROM accounts WHERE account_id = ${id}`;
          const result = await db.promise().query(getQuerry);
          res.status(200).send(result[0]);
        }
      } else {
        res.status(404).send({ msg: "Bad Request" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server error" });
  }
};

// Account R

//Request Loan

const requestLoan = async (req, res) => {
  const { loan_value } = req.body;
  const id = req.params.id;
  try {
    if (loan_value > 0 && loan_value <= 5000 && id) {
      const checkQuery = `SELECT * FROM accounts WHERE account_id = ${id}`;
      const [rows] = await db.promise().query(checkQuery);

      if (rows.length === 0) {
        res.status(404).send("Account not found");
      } else {
        // Put Query
        const putQuery = `UPDATE accounts SET account_money = account_money + ${loan_value} WHERE account_id = ${id}`;
        await db.promise().query(putQuery);

        // Insert Query
        const insertQuery = `INSERT INTO transactions(transaction_amount , transaction_type , account_id , transaction_date) values ('${loan_value}' , 'Loan' , ${id} , now());`;
        await db.promise().query(insertQuery);

        res.status(200).send({ loan_value: loan_value, type: "Loan" });
      }
    } else if (loan_value >= 5000) {
      res
        .status(400)
        .send({ msg: "The loan request cannot be higher than 5000€" });
    } else {
      res.status(400).send({ msg: "The loan request or id are invalid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete
const deleteAccount = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const checkQuery = `SELECT * FROM accounts WHERE account_id = ${id}`;
      const [rows] = await db.promise().query(checkQuery);
      if (rows.length === 0) {
        res.status(404).send("Account not found");
      } else {
        const deleteQuerry = `DELETE FROM accounts WHERE account_id = ${id}`;
        const result = await db.promise().query(deleteQuerry);
        res.status(200).send({ AccountDeleted: true });
      }
    } else {
      res.status(400).send("Invalid account id");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

// GetTransactions

const accountTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const checkQuery = `SELECT * FROM transactions WHERE account_id = ${id}`;
      const [rows] = await db.promise().query(checkQuery);

      if (rows.leght === 0) {
        res.status(404).send({ msg: "Account not found" });
      } else {
        const getQuerry = `SELECT * FROM transactions WHERE account_id = ${id}`;
        const result = await db.promise().query(getQuerry);
        res.status(200).send(result[0]);
      }
    } else {
      res.status(400).send({ msg: "Invalid account id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

// transfer

const accountTransfer = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, transfer_value, account_balance } = req.body;
  try {
    if (
      (id,
      firstName,
      lastName,
      transfer_value > 0,
      account_balance > transfer_value)
    ) {
      const checkQuery = `SELECT * FROM accounts WHERE first_Name = '${firstName}' AND last_Name = '${lastName}'`;
      const [rows] = await db.promise().query(checkQuery);

      if (rows.length === 0) {
        res.status(404).send({ msg: "Account not found" });
      } else {
        const putQuery = `UPDATE accounts SET account_money = account_money - ${transfer_value} WHERE account_id = ${id}`;
        await db.promise().query(putQuery);

        const putQuery2 = `UPDATE accounts SET account_money = account_money + ${transfer_value} WHERE first_Name = '${firstName}' AND last_Name = '${lastName}'; `;
        await db.promise().query(putQuery2);

        const insertQuery = `INSERT INTO transactions(transaction_amount , transaction_type , account_id , transaction_date) values ('${transfer_value}' , 'Transfer' , ${id} , now());`;
        await db.promise().query(insertQuery);

        res
          .status(200)
          .send({ transfer_value: transfer_value, type: "Transfer" });
      }
    } else if (account_balance < transfer_value) {
      res.status(400).send({ msg: "Insufficient funds" });
    } else {
      res.status(400).send({ msg: "Bad Request" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  accountTransfer,
  deleteAccount,
  requestLoan,
  accountInfo,
  accountTransaction,
};
