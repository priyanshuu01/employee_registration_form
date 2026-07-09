import {
  TextField,
  Grid,
  MenuItem
} from "@mui/material";

import {
  useFormContext
} from "react-hook-form";


function JobDetails(){


  const {
    register,
    setValue,
    watch,
    formState:{
      errors
    }
  } = useFormContext();




  const department = watch("department");

  const jobType = watch("jobType");






  return(


    <Grid 
      container 
      spacing={3} 
      sx={{mt:3}}
    >



      {/* Employee ID */}

      <Grid item xs={12} md={6}>


        <TextField

          fullWidth

          label="Employee ID"

          {...register("employeeId")}

          error={
            !!errors.employeeId
          }

          helperText={
            errors.employeeId?.message
          }

        />


      </Grid>








      {/* Department */}


      <Grid item xs={12} md={6}>


        <TextField

          select

          fullWidth

          label="Department"


          value={department || ""}



          onChange={(e)=>{


            setValue(
              "department",
              e.target.value,
              {
                shouldValidate:true,
                shouldDirty:true
              }
            );


          }}



          error={
            !!errors.department
          }



          helperText={
            errors.department?.message
          }


        >



          <MenuItem value="IT">
            IT
          </MenuItem>


          <MenuItem value="HR">
            HR
          </MenuItem>


          <MenuItem value="Finance">
            Finance
          </MenuItem>


          <MenuItem value="Marketing">
            Marketing
          </MenuItem>



        </TextField>


      </Grid>









      {/* Job Type */}


      <Grid item xs={12} md={6}>


        <TextField

          select

          fullWidth

          label="Job Type"


          value={jobType || ""}



          onChange={(e)=>{


            setValue(
              "jobType",
              e.target.value,
              {
                shouldValidate:true,
                shouldDirty:true
              }
            );


          }}



          error={
            !!errors.jobType
          }



          helperText={
            errors.jobType?.message
          }



        >



          <MenuItem value="Full Time">
            Full Time
          </MenuItem>


          <MenuItem value="Part Time">
            Part Time
          </MenuItem>


          <MenuItem value="Internship">
            Internship
          </MenuItem>


          <MenuItem value="Contract">
            Contract
          </MenuItem>



        </TextField>


      </Grid>









      {/* Salary */}


      <Grid item xs={12} md={6}>


        <TextField


          fullWidth


          label="Salary"



          {...register("salary")}



          error={
            !!errors.salary
          }



          helperText={
            errors.salary?.message
          }



        />


      </Grid>






    </Grid>


  );

}



export default JobDetails;