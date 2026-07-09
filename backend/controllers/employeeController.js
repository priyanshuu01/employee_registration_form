const Employee = require("../models/Employee");


// CREATE EMPLOYEE

exports.createEmployee = async (req, res) => {

    try {


        const employeeData = {

            ...req.body,


            profilePhoto:
                req.files?.profilePhoto
                ? req.files.profilePhoto[0].filename
                : null,


            resume:
                req.files?.resume
                ? req.files.resume[0].filename
                : null

        };



        const employee = await Employee.create(
            employeeData
        );



        res.status(201).json({

            success:true,

            message:"Employee created successfully",

            employee

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};







// GET ALL EMPLOYEES


exports.getEmployees = async(req,res)=>{


    try{


        const employees = await Employee.find();



        res.status(200).json({

            success:true,

            employees

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// GET SINGLE EMPLOYEE


exports.getEmployeeById = async(req,res)=>{


    try{


        const employee = await Employee.findById(
            req.params.id
        );



        if(!employee){

            return res.status(404).json({

                success:false,

                message:"Employee not found"

            });

        }



        res.status(200).json({

            success:true,

            employee

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// UPDATE EMPLOYEE


exports.updateEmployee = async(req,res)=>{


    try{


        const employee = await Employee.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true,
                runValidators:true
            }

        );



        if(!employee){

            return res.status(404).json({

                success:false,

                message:"Employee not found"

            });

        }



        res.status(200).json({

            success:true,

            message:"Employee updated successfully",

            employee

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// DELETE EMPLOYEE


exports.deleteEmployee = async(req,res)=>{


    try{


        const employee = await Employee.findByIdAndDelete(
            req.params.id
        );



        if(!employee){

            return res.status(404).json({

                success:false,

                message:"Employee not found"

            });

        }



        res.status(200).json({

            success:true,

            message:"Employee deleted successfully"

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};