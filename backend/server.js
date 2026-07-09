const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const employeeRoutes = require("./routes/employeeRoutes");


const app = express();



// Database Connection

connectDB();



// Middlewares

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true
    })
);


app.use(
    express.json()
);



// For handling form-data files later

app.use(
    express.urlencoded({
        extended:true
    })
);



// Static folder for uploaded files

app.use(
    "/uploads",
    express.static("uploads")
);



// Routes

app.use(
    "/api/employees",
    employeeRoutes
);



// Test API

app.get("/",(req,res)=>{

    res.status(200).json({

        success:true,

        message:"Employee Backend API Running"

    });

});



// Error Handler

app.use((err,req,res,next)=>{

    console.log(err);

    res.status(500).json({

        success:false,

        message:"Server Error"

    });

});




// Server

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});