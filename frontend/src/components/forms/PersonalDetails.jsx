import {
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem
} from "@mui/material";

import {
  useFormContext
} from "react-hook-form";


function PersonalDetails() {


  const {
    register,
    setValue,
    watch,
    formState:{
      errors
    }
  } = useFormContext();



  const gender = watch("gender");
  const bloodGroup = watch("bloodGroup");




  // Only alphabets allowed
  const handleNameInput = (e)=>{

    e.target.value = e.target.value.replace(
      /[^A-Za-z\s]/g,
      ""
    );

  };



  // Only numbers allowed
  const handlePhoneInput = (e)=>{

    e.target.value = e.target.value.replace(
      /[^0-9]/g,
      ""
    );

    if(e.target.value.length > 10){

      e.target.value =
      e.target.value.slice(0,10);

    }

  };




  return (

    <Grid 
      container 
      spacing={3} 
      sx={{mt:3}}
    >


      {/* First Name */}

      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="First Name"

          {...register("firstName")}

          onInput={handleNameInput}

          error={!!errors.firstName}

          helperText={
            errors.firstName?.message
          }

        />

      </Grid>





      {/* Last Name */}

      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="Last Name"

          {...register("lastName")}

          onInput={handleNameInput}

          error={!!errors.lastName}

          helperText={
            errors.lastName?.message
          }

        />

      </Grid>






      {/* Email */}

      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="Email"

          {...register("email")}

          error={!!errors.email}

          helperText={
            errors.email?.message
          }

        />

      </Grid>






      {/* Phone */}

      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="Phone"

          {...register("phone")}

          onInput={handlePhoneInput}

          inputProps={{
            maxLength:10
          }}

          error={!!errors.phone}

          helperText={
            errors.phone?.message
          }

        />

      </Grid>






      {/* Gender */}

      <Grid item xs={12}>


        <FormControl 
          error={!!errors.gender}
        >


          <FormLabel>
            Gender
          </FormLabel>



          <RadioGroup

            row

            value={gender || ""}

            onChange={(e)=>{

              setValue(
                "gender",
                e.target.value,
                {
                  shouldValidate:true,
                  shouldDirty:true
                }
              );

            }}

          >


            <FormControlLabel

              value="Male"

              control={
                <Radio/>
              }

              label="Male"

            />



            <FormControlLabel

              value="Female"

              control={
                <Radio/>
              }

              label="Female"

            />


          </RadioGroup>





          {
            errors.gender &&

            <p style={{
              color:"red"
            }}>

              {
                errors.gender.message
              }

            </p>

          }



        </FormControl>


      </Grid>








      {/* Blood Group */}

      <Grid item xs={12} md={6}>


        <TextField

          select

          fullWidth

          label="Blood Group"


          value={bloodGroup || ""}


          onChange={(e)=>{

            setValue(
              "bloodGroup",
              e.target.value,
              {
                shouldValidate:true,
                shouldDirty:true
              }
            );

          }}



          error={!!errors.bloodGroup}


          helperText={
            errors.bloodGroup?.message
          }


        >


          <MenuItem value="A+">
            A+
          </MenuItem>


          <MenuItem value="B+">
            B+
          </MenuItem>


          <MenuItem value="O+">
            O+
          </MenuItem>


          <MenuItem value="AB+">
            AB+
          </MenuItem>



          <MenuItem value="A-">
            A-
          </MenuItem>


          <MenuItem value="B-">
            B-
          </MenuItem>



          <MenuItem value="O-">
            O-
          </MenuItem>


          <MenuItem value="AB-">
            AB-
          </MenuItem>


        </TextField>


      </Grid>



    </Grid>

  );

}


export default PersonalDetails;