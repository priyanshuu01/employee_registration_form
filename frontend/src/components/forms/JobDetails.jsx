// import {
//   Grid,
//   TextField,
//   MenuItem,
//   Typography,
//   Box,
//   Paper,
//   FormControl,
//   FormLabel,
//   FormHelperText
// } from "@mui/material";


// import {
//   Work,
//   BusinessCenter,
//   Badge,
//   CurrencyRupee
// } from "@mui/icons-material";


// import {useFormContext} from "react-hook-form";



// function JobDetails(){


// const {
//   register,
//   setValue,
//   watch,
//   formState:{
//     errors
//   }
// }=useFormContext();


// const selectedJobType = watch("jobType");


// const jobTypes=[
// "Full Time",
// "Part Time",
// "Intern",
// "Contract"
// ];


// const departments=[

// "Engineering",
// "HR",
// "Finance",
// "Marketing",
// "Sales"

// ];



// return(
// <Paper
// elevation={4}
// sx={{

// mt:3,

// p:4,

// borderRadius:3

// }}

// >



// <Box

// display="flex"

// alignItems="center"

// gap={1}

// mb={3}

// >


// <BusinessCenter

// color="primary"

// />


// <Typography

// variant="h5"

// fontWeight="bold"

// >

// Work Information

// </Typography>



// </Box>







// <Grid

// container

// spacing={3}

// >



// {/* Employee ID */}


// <Grid

// item

// xs={12}

// md={6}

// >


// <TextField


// fullWidth


// label="Employee ID"


// placeholder="Enter Employee ID"


// InputProps={{

// startAdornment:

// <Badge

// sx={{

// mr:1

// }}

// />

// }}


// {...register("employeeId")}



// error={!!errors.employeeId}



// helperText={

// errors.employeeId?.message

// }



// />


// </Grid>










// {/* Department */}


// <Grid

// item

// xs={12}

// md={6}

// >


// <TextField


// select


// fullWidth


// label="Department"



// defaultValue=""


// InputProps={{

// startAdornment:

// <BusinessCenter

// sx={{

// mr:1

// }}

// />

// }}


// {...register("department")}



// error={!!errors.department}



// helperText={

// errors.department?.message

// }



// >


// {

// departments.map((dept)=>(


// <MenuItem

// key={dept}

// value={dept}

// >

// {dept}

// </MenuItem>


// ))

// }



// </TextField>



// </Grid>









// {/* Job Type */}


// <Grid

// item

// xs={12}

// >



// <FormControl

// error={!!errors.jobType}

// >


// <FormLabel
//   sx={{
//     fontWeight:"bold",
//     mb:2,
//     display:"flex",
//     alignItems:"center",
//     gap:1
//   }}
// >

// <Work color="primary"/>

// Job Type

// </FormLabel>





// <Grid

// container

// spacing={2}

// >


// {

// jobTypes.map((type)=>(


// <Grid

// item

// xs={12}

// sm={6}

// md={3}

// key={type}

// >



// <Paper


// onClick={()=>


// setValue(

// "jobType",

// type,

// {

// shouldValidate:true

// }

// )


// }



// sx={{


// p:2,


// cursor:"pointer",


// textAlign:"center",


// border:

// selectedJobType===type

// ?

// "2px solid #1976d2"

// :

// "1px solid #ddd",


// borderRadius:2,


// background:

// selectedJobType===type

// ?

// "#e3f2fd"

// :

// "white"



// }}


// >


// <Work

// color={

// selectedJobType===type

// ?

// "primary"

// :

// "inherit"

// }

// />



// <Typography>


// {type}


// </Typography>



// </Paper>



// </Grid>


// ))


// }



// </Grid>





// <FormHelperText>


// {errors.jobType?.message}


// </FormHelperText>


// </FormControl>



// </Grid>









// {/* Salary */}



// <Grid

// item

// xs={12}

// md={6}

// >


// <TextField


// fullWidth


// label="Salary"


// placeholder="Enter salary"



// InputProps={{


// startAdornment:


// <CurrencyRupee

// sx={{

// mr:1

// }}

// />


// }}



// {...register("salary")}



// error={!!errors.salary}



// helperText={

// errors.salary?.message

// }



// />


// </Grid>







// </Grid>



// </Paper>


// );


// }


// export default JobDetails;



import {

TextField,

Grid,

MenuItem,

InputAdornment,

Paper,

Typography,

Box

} from "@mui/material";



import {

BusinessCenter,

Badge,

CurrencyRupee,

Work

} from "@mui/icons-material";



import {

useFormContext

} from "react-hook-form";



import "./JobDetails.css";





function JobDetails(){



const {

register,

setValue,

watch,

formState:{
errors
}

}=useFormContext();




const jobType = watch("jobType");






const selectJobType=(value)=>{


setValue(

"jobType",

value,

{

shouldValidate:true,

shouldDirty:true

}

);


};






const inputStyle={

"& .MuiOutlinedInput-root":{

borderRadius:"14px"

}

};







return(



<Paper className="job-container">





<Typography className="job-title">

💼 Employment Information

</Typography>








<Grid container spacing={3}>









{/* Employee ID */}



<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="Employee ID"

className="job-input"



{...register("employeeId")}



error={!!errors.employeeId}

helperText={errors.employeeId?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<Badge className="job-icon"/>

</InputAdornment>

)

}

}}



/>



</Grid>









{/* Department */}


<Grid size={{xs:12,md:6}}>



<TextField

select

fullWidth

label="Department"

className="job-input"


{...register("department")}



error={!!errors.department}

helperText={errors.department?.message}



slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<BusinessCenter className="job-icon"/>

</InputAdornment>

)

}

}}



>



<MenuItem value="IT">

IT Department

</MenuItem>



<MenuItem value="HR">

Human Resource

</MenuItem>



<MenuItem value="Finance">

Finance

</MenuItem>



<MenuItem value="Marketing">

Marketing

</MenuItem>



<MenuItem value="Operations">

Operations

</MenuItem>



</TextField>



</Grid>









{/* Job Type */}



<Grid size={{xs:12}}>


<Typography className="salary-label">

Job Type

</Typography>



<Box

display="flex"

gap={2}

mt={2}

flexWrap="wrap"

>



{

[

"Full Time",

"Part Time",

"Internship",

"Contract"

].map((type)=>(


<Paper

key={type}

className={

jobType===type

?

"job-card active"

:

"job-card"

}


onClick={()=>selectJobType(type)}

>



<Work

className="job-icon"

/>



<Typography className="job-card-title">

{type}

</Typography>



</Paper>



))


}





</Box>




{

errors.jobType &&

<Typography

className="error-text"

>

{errors.jobType.message}

</Typography>

}




</Grid>









{/* Salary */}



<Grid size={{xs:12,md:6}}>


<TextField

fullWidth

label="Annual Salary"

className="job-input"



{...register("salary")}



error={!!errors.salary}

helperText={errors.salary?.message}




slotProps={{

input:{

startAdornment:(

<InputAdornment position="start">

<CurrencyRupee className="job-icon"/>

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



export default JobDetails;