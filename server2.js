const express = require('express');
const app = express();

app.listen(1002, _ => {
  console.log('server1 is listening at 1002')
})

app.use(express.static('./'));
