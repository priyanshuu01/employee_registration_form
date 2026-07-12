// import {
//   TextField,
//   Grid,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   MenuItem,
//   InputAdornment,
//   Paper,
//   Typography
// } from "@mui/material";

// import "./PersonalDetails.css";

// import {
//   Person,
//   Email,
//   Phone,
//   Bloodtype
// } from "@mui/icons-material";

// import { useFormContext } from "react-hook-form";


// function PersonalDetails() {


//   const {
//     register,
//     setValue,
//     watch,
//     formState:{
//       errors
//     }
//   } = useFormContext();



//   const gender = watch("gender");



//   const inputStyle = {

//     "& .MuiOutlinedInput-root":{

//       borderRadius:"12px",

//       backgroundColor:"#fafafa",

//       "&:hover fieldset":{
//         borderColor:"#1976d2"
//       }

//     }

//   };





//   return (

//     <Paper

//       elevation={3}

//       sx={{

//         mt:3,

//         p:4,

//         borderRadius:"20px"

//       }}

//     >


//       <Typography

//         variant="h5"

//         sx={{

//           mb:3,

//           fontWeight:600

//         }}

//       >

//         Personal Information

//       </Typography>





//       <Grid container spacing={3} size={6}>



//         {/* First Name */}

//         <Grid item xs={12} md={6}>


//           <TextField

//             fullWidth

//             label="First Name"

//             {...register("firstName")}

//             error={!!errors.firstName}

//             helperText={errors.firstName?.message}

//             sx={inputStyle}

//             InputProps={{

//               startAdornment:(

//                 <InputAdornment position="start">

//                   <Person color="primary"/>

//                 </InputAdornment>

//               )

//             }}

//           />


//         </Grid>






//         {/* Last Name */}

//         <Grid size={{ xs: 12, md: 6 }}>


//           <TextField

//             fullWidth

//             label="Last Name"

//             {...register("lastName")}

//             error={!!errors.lastName}

//             helperText={errors.lastName?.message}

//             sx={inputStyle}

//             InputProps={{

//               startAdornment:(

//                 <InputAdornment position="start">

//                   <Person color="primary"/>

//                 </InputAdornment>

//               )

//             }}

//           />


//         </Grid>







//         {/* Email */}

//        <Grid size={{ xs: 12, md: 6 }}>


//           <TextField

//             fullWidth

//             label="Email"

//             {...register("email")}

//             error={!!errors.email}

//             helperText={errors.email?.message}

//             sx={inputStyle}

//             InputProps={{

//               startAdornment:(

//                 <InputAdornment position="start">

//                   <Email color="primary"/>

//                 </InputAdornment>

//               )

//             }}

//           />


//         </Grid>








//         {/* Phone */}

//         <Grid size={{ xs: 12, md: 6 }}>


//           <TextField

//             fullWidth

//             label="Phone Number"

//             {...register("phone")}

//             error={!!errors.phone}

//             helperText={errors.phone?.message}

//             sx={inputStyle}

//             InputProps={{

//               startAdornment:(

//                 <InputAdornment position="start">

//                   <Phone color="primary"/>

//                 </InputAdornment>

//               )

//             }}

//           />


//         </Grid>









//         {/* Gender */}

//         <Grid item xs={12}>


//           <FormControl error={!!errors.gender}>


//             <FormLabel

//               sx={{

//                 fontWeight:600,

//                 mb:2

//               }}

//             >

//               Gender

//             </FormLabel>



//             <RadioGroup

//               row

//               value={gender || ""}

//               onChange={(e)=>{


//                 setValue(

//                   "gender",

//                   e.target.value,

//                   {

//                     shouldValidate:true,

//                     shouldDirty:true

//                   }

//                 );


//               }}

//             >




//               <Paper

//                 elevation={gender==="Male"?5:1}

//                 sx={{

//                   mr:2,

//                   borderRadius:"15px",

//                   border:

//                   gender==="Male"

//                   ?

//                   "2px solid #1976d2"

//                   :

//                   "1px solid #ddd"

//                 }}

//               >


//                 <FormControlLabel

//                   value="Male"

//                   control={<Radio/>}

//                   label="👨 Male"

//                   sx={{

//                     px:2

//                   }}

//                 />


//               </Paper>








//               <Paper

//                 elevation={gender==="Female"?5:1}

//                 sx={{

//                   borderRadius:"15px",

//                   border:

//                   gender==="Female"

//                   ?

//                   "2px solid #1976d2"

//                   :

//                   "1px solid #ddd"

//                 }}

//               >


//                 <FormControlLabel

//                   value="Female"

//                   control={<Radio/>}

//                   label="👩 Female"

//                   sx={{

//                     px:2

//                   }}

//                 />


//               </Paper>



//             </RadioGroup>



//             {

//               errors.gender &&

//               <Typography

//                 color="error"

//                 variant="caption"

//               >

//                 {errors.gender.message}

//               </Typography>

//             }



//           </FormControl>


//         </Grid>









//         {/* Blood Group */}


//       <Grid size={{ xs: 12, md: 6 }}>


//           <TextField

//             select

//             fullWidth

//             label="Blood Group"

//             defaultValue=""

//             {...register("bloodGroup")}

//             error={!!errors.bloodGroup}

//             helperText={errors.bloodGroup?.message}

//             sx={inputStyle}

//             InputProps={{

//               startAdornment:(

//                 <InputAdornment position="start">

//                   <Bloodtype color="error"/>

//                 </InputAdornment>

//               )

//             }}

//           >



//             <MenuItem value="A+">

//               A+

//             </MenuItem>


//             <MenuItem value="A-">

//               A-

//             </MenuItem>


//             <MenuItem value="B+">

//               B+

//             </MenuItem>


//             <MenuItem value="B-">

//               B-

//             </MenuItem>


//             <MenuItem value="O+">

//               O+

//             </MenuItem>


//             <MenuItem value="O-">

//               O-

//             </MenuItem>


//             <MenuItem value="AB+">

//               AB+

//             </MenuItem>


//             <MenuItem value="AB-">

//               AB-

//             </MenuItem>

//           </TextField>

//         </Grid>

//       </Grid>

//     </Paper>

//   );

// }

// export default PersonalDetails;

import {
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  InputAdornment,
  Paper,
  Typography
} from "@mui/material";


import {
  Person,
  Email,
  Phone,
  Bloodtype
} from "@mui/icons-material";


import { useFormContext } from "react-hook-form";


import "./PersonalDetails.css";



function PersonalDetails(){


const {

register,

setValue,

watch,

formState:{
errors
}

}=useFormContext();



const gender = watch("gender");

const bloodGroup = watch("bloodGroup");





const handleGenderChange=(e)=>{


setValue(

"gender",

e.target.value,

{
shouldValidate:true,
shouldDirty:true
}

);


};






const handleBloodChange=(e)=>{


setValue(

"bloodGroup",

e.target.value,

{
shouldValidate:true,
shouldDirty:true
}

);


};






return (

<Paper className="personal-container">



<Typography className="personal-title">

👤 Personal Information

</Typography>





<Grid

container

spacing={3}

>



{/* First Name */}

<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="First Name"

className="personal-input"

{...register("firstName")}

error={!!errors.firstName}

helperText={errors.firstName?.message}


slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Person className="input-icon"/>

</InputAdornment>

)

}

}}


/>


</Grid>







{/* Last Name */}


<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="Last Name"

className="personal-input"

{...register("lastName")}

error={!!errors.lastName}

helperText={errors.lastName?.message}


slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Person className="input-icon"/>

</InputAdornment>

)

}

}}


/>


</Grid>









{/* Email */}


<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="Email Address"

className="personal-input"

{...register("email")}

error={!!errors.email}

helperText={errors.email?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Email className="input-icon"/>

</InputAdornment>

)

}

}}


/>


</Grid>










{/* Phone */}


<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="Phone Number"

className="personal-input"

{...register("phone")}

error={!!errors.phone}

helperText={errors.phone?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Phone className="input-icon"/>

</InputAdornment>

)

}

}}


/>


</Grid>









{/* Gender */}


<Grid size={{xs:12}}>


<FormControl error={!!errors.gender}>


<FormLabel className="gender-label">

Gender

</FormLabel>





<RadioGroup

row

value={gender || ""}

onChange={handleGenderChange}

>




<Paper

className={

gender==="Male"

?

"gender-card gender-selected"

:

"gender-card"

}

>


<FormControlLabel

value="Male"

control={<Radio/>}

label="👨 Male"

/>


</Paper>







<Paper

className={

gender==="Female"

?

"gender-card gender-selected"

:

"gender-card"

}

>


<FormControlLabel

value="Female"

control={<Radio/>}

label="👩 Female"

/>


</Paper>





</RadioGroup>






{

errors.gender &&

<Typography

className="error-text"

>

{errors.gender.message}

</Typography>

}





</FormControl>


</Grid>









{/* Blood Group */}


<Grid size={{xs:12,md:6}}>


<TextField

select

fullWidth

label="Blood Group"

className="personal-input"


value={bloodGroup || ""}


onChange={handleBloodChange}



error={!!errors.bloodGroup}

helperText={errors.bloodGroup?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Bloodtype color="error"/>

</InputAdornment>

)

}

}}



>



<MenuItem value="A+">
A+
</MenuItem>


<MenuItem value="A-">
A-
</MenuItem>


<MenuItem value="B+">
B+
</MenuItem>


<MenuItem value="B-">
B-
</MenuItem>


<MenuItem value="O+">
O+
</MenuItem>


<MenuItem value="O-">
O-
</MenuItem>


<MenuItem value="AB+">
AB+
</MenuItem>


<MenuItem value="AB-">
AB-
</MenuItem>



</TextField>


</Grid>





</Grid>





</Paper>


);


}



export default PersonalDetails;