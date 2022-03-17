const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.static(path.join(__dirname, "../photos")))
app.use(express.static(path.join(__dirname, "../javascript")))


// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'f56574e5d5f8427f8eeaced774a70f48',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


app.get("/api/error", (req, res) => {
    rollbar.error("Hello world!");
  });


const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});

