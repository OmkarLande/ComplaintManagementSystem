const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')

const database = require("./config/database");
const complaintRoutes = require("./routes/complaint");
const userRoutes = require("./routes/user");


// port
dotenv.config();
const PORT = process.env.PORT || 3000;

//dbConnect
database.connect();

//middlewares
app.use(express.json());

app.use(cors({
  origin: "*"
}))
// Routers
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});
app.use('/api', complaintRoutes);
app.use('/user', userRoutes);



//listen
app.listen(PORT, () => {
  console.log(`App is running at ${PORT} `);
});
