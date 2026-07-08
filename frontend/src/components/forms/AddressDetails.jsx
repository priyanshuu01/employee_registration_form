import {
  TextField,
  Grid,
  MenuItem
} from "@mui/material";

import { useFormContext } from "react-hook-form";


function AddressDetails() {


  const {
    register,
    formState: {
      errors
    }
  } = useFormContext();



  return (

    <Grid container spacing={3} sx={{ mt: 3 }}>


      <Grid xs={12}>

        <TextField

          fullWidth

          label="Address"

          {...register("address")}

          error={!!errors.address}

          helperText={errors.address?.message}

        />

      </Grid>





      <Grid xs={12} md={6}>

        <TextField

          fullWidth

          label="City"

          {...register("city")}

          error={!!errors.city}

          helperText={errors.city?.message}

        />

      </Grid>





      <Grid xs={12} md={6}>

        <TextField

          select

          fullWidth

          label="State"

          defaultValue=""

          {...register("state")}

          error={!!errors.state}

          helperText={errors.state?.message}

        >

          <MenuItem value="Delhi">
            Delhi
          </MenuItem>


          <MenuItem value="Uttar Pradesh">
            Uttar Pradesh
          </MenuItem>


          <MenuItem value="Haryana">
            Haryana
          </MenuItem>


        </TextField>

      </Grid>






      <Grid xs={12} md={6}>

        <TextField

          select

          fullWidth

          label="Country"

          defaultValue=""

          {...register("country")}

          error={!!errors.country}

          helperText={errors.country?.message}

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


        </TextField>

      </Grid>






      <Grid xs={12} md={6}>

        <TextField

          fullWidth

          label="Pincode"

          {...register("pincode")}

          error={!!errors.pincode}

          helperText={errors.pincode?.message}

        />

      </Grid>


    </Grid>

  );

}


export default AddressDetails;