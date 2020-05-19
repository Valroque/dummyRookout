const express = require("express");
const app = express();
const port = 3000
const rookout = require('rookout');

rookout.start({
    token: '3215e83e5a7c528bd771d9737fe557ba8cda78ba7e79102c2bac1f75c0618078'
})

app.get('/test', (req, res) => {
  if (req.query.command === "rookout") {
    try {
      throw Error("nice");
    } catch(err) {
      console.log(err);
      return res.send("done with error handling");
    }
  } else {
    res.send("done");
  }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))