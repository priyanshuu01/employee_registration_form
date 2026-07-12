import {
  Paper,
  Typography,
  Grid,
  Box,
  Avatar,
  Button,
  Divider
} from "@mui/material";


import {
  Person,
  Home,
  Work,
  Description,
  Edit
} from "@mui/icons-material";


import {
  useFormContext
} from "react-hook-form";




function Review({goToStep}){


const {
  getValues
}=useFormContext();



const data=getValues();





const DetailRow=({label,value})=>(

<Box

display="flex"

justifyContent="space-between"

sx={{

mb:1.5

}}

>


<Typography

color="text.secondary"

>

{label}

</Typography>



<Typography

fontWeight="500"

>

{value || "-"}

</Typography>



</Box>

);









const Section=({

title,

icon,

step,

children

})=>(


<Box

sx={{

mt:3

}}

>


<Box

display="flex"

alignItems="center"

justifyContent="space-between"

mb={2}

>


<Box

display="flex"

alignItems="center"

gap={1}

>


{icon}


<Typography

variant="h6"

fontWeight="bold"

>

{title}

</Typography>


</Box>




<Button

size="small"

startIcon={<Edit/>}

onClick={()=>goToStep(step)}

>

Edit

</Button>



</Box>




{children}



<Divider

sx={{

mt:3

}}

/>


</Box>


);









return(



<Paper

elevation={5}

sx={{

mt:4,

p:5,

borderRadius:4

}}

>





{/* Header */}



<Box

display="flex"

alignItems="center"

gap={3}

mb={4}

>



<Avatar


src={

data.profilePhoto

?

URL.createObjectURL(data.profilePhoto)

:

""

}


sx={{

width:110,

height:110

}}

/>





<Box>


<Typography

variant="h4"

fontWeight="bold"

>

{data.firstName} {data.lastName}

</Typography>



<Typography

color="text.secondary"

>

Employee ID : {data.employeeId}

</Typography>




<Typography

color="text.secondary"

>

Public ID : {data.publicId}

</Typography>


</Box>



</Box>





<Divider/>









{/* Personal Section */}



<Section

title="Personal Information"

icon={<Person color="primary"/>}

step={0}

>



<Grid

container

spacing={4}

>


<Grid

item

xs={12}

md={6}

>


<DetailRow

label="Email"

value={data.email}

/>


<DetailRow

label="Phone"

value={data.phone}

/>


</Grid>




<Grid

item

xs={12}

md={6}

>


<DetailRow

label="Gender"

value={data.gender}

/>


<DetailRow

label="Blood Group"

value={data.bloodGroup}

/>


</Grid>



</Grid>


</Section>









{/* Address Section */}



<Section

title="Address Information"

icon={<Home color="primary"/>}

step={1}

>


<Grid

container

spacing={4}

>


<Grid

item

xs={12}

md={6}

>


<DetailRow

label="Address"

value={data.address}

/>



<DetailRow

label="City"

value={data.city}

/>



</Grid>





<Grid

item

xs={12}

md={6}

>


<DetailRow

label="State"

value={data.state}

/>


<DetailRow

label="Country"

value={data.country}

/>


<DetailRow

label="Pincode"

value={data.pincode}

/>


</Grid>



</Grid>


</Section>









{/* Job Section */}



<Section

title="Employment Information"

icon={<Work color="primary"/>}

step={2}

>



<Grid

container

spacing={4}

>


<Grid

item

xs={12}

md={6}

>


<DetailRow

label="Department"

value={data.department}

/>


<DetailRow

label="Job Type"

value={data.jobType}

/>



</Grid>





<Grid

item

xs={12}

md={6}

>


<DetailRow

label="Salary"

value={`₹ ${data.salary}`}

/>



</Grid>



</Grid>


</Section>









{/* Documents Section */}



<Section

title="Documents"

icon={<Description color="primary"/>}

step={3}

>



<DetailRow

label="Profile Photo"

value={data.profilePhoto?.name}

/>



<DetailRow

label="Resume"

value={data.resume?.name}

/>



</Section>








</Paper>



);


}



export default Review;