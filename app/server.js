const express = require('express')
const app = express();
const router = require("./routers/root.router"); 
const port = 3000
app.use(router); 

app.use(express.json()); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
