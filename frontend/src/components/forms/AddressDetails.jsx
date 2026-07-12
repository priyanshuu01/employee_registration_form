// import {
//   TextField,
//   Grid,
//   Paper,
//   Typography,
//   InputAdornment
// } from "@mui/material";


// import {
//   Home,
//   LocationCity,
//   Public,
//   PinDrop
// } from "@mui/icons-material";


// import {
//   useFormContext
// } from "react-hook-form";




// function AddressDetails(){



// const {

// register,

// formState:{
// errors
// }

// }=useFormContext();






// const inputStyle={


// "& .MuiOutlinedInput-root":{

// borderRadius:"12px",

// background:"#fafafa",

// "&:hover fieldset":{

// borderColor:"#1976d2"

// }

// }

// };








// return(


// <Paper

// elevation={3}

// sx={{

// mt:3,

// p:4,

// borderRadius:"20px"

// }}

// >




// <Typography

// variant="h5"

// fontWeight="600"

// mb={3}

// >

// Address Information

// </Typography>







// <Grid container spacing={3}>






// {/* Address */}


// <Grid item xs={12}>


// <TextField


// fullWidth


// label="Full Address"


// multiline


// rows={3}


// {...register("address")}


// error={!!errors.address}


// helperText={errors.address?.message}


// sx={inputStyle}



// InputProps={{


// startAdornment:(


// <InputAdornment position="start">


// <Home color="primary"/>


// </InputAdornment>


// )


// }}


// />


// </Grid>









// {/* City */}


// <Grid item xs={12} md={6}>


// <TextField


// fullWidth


// label="City"


// {...register("city")}


// error={!!errors.city}


// helperText={errors.city?.message}


// sx={inputStyle}



// InputProps={{


// startAdornment:(


// <InputAdornment position="start">


// <LocationCity color="primary"/>


// </InputAdornment>


// )


// }}


// />



// </Grid>









// {/* State */}


// <Grid item xs={12} md={6}>


// <TextField


// fullWidth


// label="State"


// {...register("state")}


// error={!!errors.state}


// helperText={errors.state?.message}


// sx={inputStyle}



// InputProps={{


// startAdornment:(


// <InputAdornment position="start">


// <Public color="primary"/>


// </InputAdornment>


// )


// }}


// />


// </Grid>









// {/* Country */}


// <Grid item xs={12} md={6}>


// <TextField


// fullWidth


// label="Country"


// {...register("country")}


// error={!!errors.country}


// helperText={errors.country?.message}


// sx={inputStyle}



// InputProps={{


// startAdornment:(


// <InputAdornment position="start">


// <Public color="success"/>


// </InputAdornment>


// )


// }}


// />


// </Grid>









// {/* Pincode */}


// <Grid item xs={12} md={6}>


// <TextField


// fullWidth


// label="Pincode"


// {...register("pincode")}


// error={!!errors.pincode}


// helperText={errors.pincode?.message}


// sx={inputStyle}



// InputProps={{


// startAdornment:(


// <InputAdornment position="start">


// <PinDrop color="error"/>


// </InputAdornment>


// )


// }}


// />


// </Grid>







// </Grid>



// </Paper>



// );



// }



// export default AddressDetails;


import {
    TextField,
    Grid,
    MenuItem,
    InputAdornment,
    Paper,
    Typography
} from "@mui/material";


import {
    Home,
    LocationCity,
    Public,
    PinDrop,
    Map
} from "@mui/icons-material";


import {
    useFormContext
} from "react-hook-form";


import "./AddressDetails.css";





function AddressDetails(){



const {

register,

setValue,

watch,

formState:{
errors
}

}=useFormContext();




const country = watch("country");

const state = watch("state");






const handleSelect=(field,value)=>{


setValue(

field,

value,

{
shouldValidate:true,
shouldDirty:true
}

);


};








return(


<Paper className="address-container">





<Typography className="address-title">

📍 Address Information

</Typography>







<Grid

container

spacing={3}

>





{/* Address */}


<Grid size={{xs:12}}>


<TextField

fullWidth

label="Complete Address"

className="address-input"


{...register("address")}



error={!!errors.address}


helperText={errors.address?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Home className="location-icon"/>

</InputAdornment>

)

}

}}


/>



</Grid>









{/* City */}


<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="City"

className="address-input"



{...register("city")}



error={!!errors.city}

helperText={errors.city?.message}




slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<LocationCity className="location-icon"/>

</InputAdornment>

)

}

}}


/>



</Grid>









{/* State */}


<Grid size={{xs:12,md:6}}>


<TextField

select

fullWidth

label="State"

className="address-input"


value={state || ""}



onChange={(e)=>
handleSelect(
"state",
e.target.value
)
}




error={!!errors.state}

helperText={errors.state?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Map className="location-icon"/>

</InputAdornment>

)

}

}}


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


<MenuItem value="Karnataka">

Karnataka

</MenuItem>



</TextField>



</Grid>









{/* Country */}


<Grid size={{xs:12,md:6}}>



<TextField

select

fullWidth

label="Country"

className="address-input"


value={country || ""}



onChange={(e)=>

handleSelect(

"country",

e.target.value

)

}



error={!!errors.country}

helperText={errors.country?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Public className="location-icon"/>

</InputAdornment>

)

}

}}


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









{/* Pincode */}



<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="Pincode"

className="address-input"



{...register("pincode")}




error={!!errors.pincode}


helperText={errors.pincode?.message}




slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<PinDrop className="location-icon"/>

</InputAdornment>

)

}

}}


/>



</Grid>






</Grid>





</Paper>



);



}



export default AddressDetails;