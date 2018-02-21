const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const port = 3005;
const app = express();

app.use(cors());
app.use(json());

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});

// yarn add express cors body-parser

// If you are using a server and you need to connect with the front end, you might have to put this code into your terminal
// Change 3005 to whatever number your port is
//                 port     port
//                  ||       ||
//                  \/       \/
// adb reverse tcp:3005 tcp:3005

// Note: You need put this in your terminal everytime you reconnect your phone again to your computer!

// If it doesn't work, try running: adb devices
// To check if your phone is connected!
