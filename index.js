const { Notion } = require("@neurosity/notion");
require("dotenv").config();
const deviceId = process.env.DEVICE_ID || "";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";
const powerOnThought = process.env.POWERON_THOUGHT || "";
const login = require('./login')
const xbox = require('./xbox')
const consolecontrol = require('./consolecontrol')

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
    console.log("Logged in to Neurosity APIs.");
    notion.kinesis(powerOnThought).subscribe(intent => {
      var localxbox = xbox.GetFirstConsole();
      consolecontrol.PowerOnConsole(localxbox);
      console.log("Detected PowerOnThought and sent power on command to Xbox.");
    });
  };
  
main();