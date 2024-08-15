const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require("./config/mongodb");
const principalRoutes = require('./controller/principal');
const loginRoutes = require("./controller/login")
const app = express();
const port = process.env.PORT || 3001; 

connectDB();

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use('/api/principal', principalRoutes);
app.use('/login',loginRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});