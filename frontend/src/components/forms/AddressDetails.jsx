import {
  TextField,
  Grid,
  MenuItem
} from "@mui/material";

import {
  useFormContext
} from "react-hook-form";


function AddressDetails(){


  const {
    register,
    setValue,
    watch,
    formState:{
      errors
    }
  } = useFormContext();




  const state = watch("state");
  const country = watch("country");




  return (


    <Grid 
      container 
      spacing={3} 
      sx={{mt:3}}
    >




      {/* Address */}

      <Grid item xs={12}>


        <TextField

          fullWidth

          label="Address"

          multiline

          rows={3}

          {...register("address")}


          error={
            !!errors.address
          }


          helperText={
            errors.address?.message
          }


        />


      </Grid>







      {/* City */}

      <Grid item xs={12} md={6}>


        <TextField

          fullWidth

          label="City"

          {...register("city")}


          error={
            !!errors.city
          }


          helperText={
            errors.city?.message
          }


        />


      </Grid>









      {/* State */}

      <Grid item xs={12} md={6}>


        <TextField

          select

          fullWidth

          label="State"


          value={state || ""}



          onChange={(e)=>{


            setValue(
              "state",
              e.target.value,
              {
                shouldValidate:true,
                shouldDirty:true
              }
            );


          }}



          error={
            !!errors.state
          }



          helperText={
            errors.state?.message
          }


        >



          <MenuItem value="Uttar Pradesh">
            Uttar Pradesh
          </MenuItem>


          <MenuItem value="Delhi">
            Delhi
          </MenuItem>


          <MenuItem value="Maharashtra">
            Maharashtra
          </MenuItem>


          <MenuItem value="Rajasthan">
            Rajasthan
          </MenuItem>


          <MenuItem value="Gujarat">
            Gujarat
          </MenuItem>



        </TextField>


      </Grid>









      {/* Country */}


      <Grid item xs={12} md={6}>


        <TextField

          select

          fullWidth

          label="Country"


          value={country || ""}



          onChange={(e)=>{


            setValue(
              "country",
              e.target.value,
              {
                shouldValidate:true,
                shouldDirty:true
              }
            );


          }}



          error={
            !!errors.country
          }



          helperText={
            errors.country?.message
          }


        >



          <MenuItem value="India">
            India
          </MenuItem>


          <MenuItem value="USA">
            USA
          </MenuItem>


          <MenuItem value="Canada">
            Canada
          </MenuItem>


          <MenuItem value="UK">
            UK
          </MenuItem>



        </TextField>


      </Grid>









      {/* Pincode */}


      <Grid item xs={12} md={6}>


        <TextField

          fullWidth

          label="Pincode"


          {...register("pincode")}



          inputProps={{
            maxLength:6
          }}



          onInput={(e)=>{


            e.target.value =
            e.target.value.replace(
              /[^0-9]/g,
              ""
            );


          }}



          error={
            !!errors.pincode
          }



          helperText={
            errors.pincode?.message
          }



        />


      </Grid>




    </Grid>


  );

}


export default AddressDetails;