import {
  TextField,
  Grid,
  MenuItem
} from "@mui/material";

import {
  useFormContext
} from "react-hook-form";



function JobDetails() {


  const {
    register,
    formState:{
      errors
    }
  } = useFormContext();




  return (


    <Grid
      container
      spacing={3}
      sx={{mt:3}}
    >



      <Grid xs={12} md={6}>


        <TextField

          fullWidth

          label="Employee ID"

          {...register("employeeId")}

          error={!!errors.employeeId}

          helperText={
            errors.employeeId?.message
          }

        />


      </Grid>





      <Grid xs={12} md={6}>


        <TextField

          fullWidth

          label="Department"

          {...register("department")}

          error={!!errors.department}

          helperText={
            errors.department?.message
          }

        />


      </Grid>







      <Grid xs={12} md={6}>


        <TextField

          select

          fullWidth

          label="Job Type"

          defaultValue=""

          {...register("jobType")}

          error={!!errors.jobType}

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


        </TextField>


      </Grid>






      <Grid xs={12} md={6}>


        <TextField

          fullWidth

          label="Salary"

          {...register("salary")}

          error={!!errors.salary}

          helperText={
            errors.salary?.message
          }

        />


      </Grid>



    </Grid>


  );


}



export default JobDetails;