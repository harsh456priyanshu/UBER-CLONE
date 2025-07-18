const dotenv = require('dotenv');
dotenv.config();
const express =  require("express");
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const morgan = require('morgan');
const mapsRoutes =require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');         

connectToDb();

// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173', // Change to your frontend URL
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());




app.get( '/', (req, res) => {
    res.send("HEllo World");
});

app.use('/users' , userRoutes);
app.use('/captains' , captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides' , rideRoutes)

module.exports = app;