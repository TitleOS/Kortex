const { Notion } = require("@neurosity/notion");
require("dotenv").config();
const deviceId = process.env.DEVICE_ID || "";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";
const login = require('./login')

login.verifyEnvs(email, password, deviceId);
const notion = new Notion({
    deviceId
  });

const main = async () => {
    await notion
      .login({
        email,
        password
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
    console.log("Logged in");
  };
  
main();