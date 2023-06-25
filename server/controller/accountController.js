const bcrypt = require("bcrypt");
const db = require("../database/database.js");

const accountRegister = async (req, res) => {
  const { firstName, lastName, email, password, pin, dateOfBirth } = req.body;
  const cryptPassword = await bcrypt.hash(password, 5);
  const cryptPIN = await bcrypt.hash(pin, 5);

  try {
    if ((firstName, lastName, email, cryptPassword, cryptPIN, dateOfBirth)) {
      const query = `INSERT INTO accounts(first_Name , last_Name , email , account_password , PIN , date_of_birth , register_date) 
      values ('${firstName}' , '${lastName}' , '${email}' , '${cryptPassword}' , '${cryptPIN}' , '${dateOfBirth}' , NOW());`;
      await db.promise().query(query);
      res.status(201).send("Account registered");
    } else {
      res.status(400).send("Bad Request :(");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const accountLogin = async (req, res) => {
  const { email, password, pin } = req.body;

  try {
    if ((email, password, pin)) {
      const query = `SELECT * from accounts WHERE email = '${email}'`;
      const result = await db.promise().query(query);
      const [
        [
          {
            account_id: account_id,
            first_Name: ac_firstName,
            last_Name: ac_lastName,
            account_money: ac_money,
            email: ac_email,
            account_password: encryptPassword,
            PIN: encryptedPIN,
            date_of_birth: ac_birthDay,
            register_date: ac_regDate,
          },
        ],
      ] = result;

      const match = await bcrypt.compare(password, encryptPassword);
      if (match) {
        const accountID = [
          {
            account_id: account_id,
          },
        ];

        res.send(accountID);
      } else {
        res.send("false");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { accountRegister, accountLogin };
