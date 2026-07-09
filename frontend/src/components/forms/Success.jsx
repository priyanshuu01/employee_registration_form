import {
  Paper,
  Typography,
  Button,
  Grid
} from "@mui/material";


function Success({employeeData}) {


  const downloadPDF = ()=>{


    const content = `

Employee Registration Details

Public ID:
${employeeData.publicId}


Name:
${employeeData.firstName} ${employeeData.lastName}


Email:
${employeeData.email}


Phone:
${employeeData.phone}


Gender:
${employeeData.gender}


Blood Group:
${employeeData.bloodGroup}


Address:
${employeeData.address}


City:
${employeeData.city}


State:
${employeeData.state}


Country:
${employeeData.country}


Employee ID:
${employeeData.employeeId}


Department:
${employeeData.department}


Job Type:
${employeeData.jobType}


Salary:
${employeeData.salary}


Profile Photo:
${employeeData.profilePhoto}


Resume:
${employeeData.resume}

`;



    const blob = new Blob(
      [content],
      {
        type:"text/plain"
      }
    );


    const url = URL.createObjectURL(blob);



    const link=document.createElement("a");


    link.href=url;

    link.download=
    `${employeeData.publicId}.txt`;


    link.click();


  };





return (

<Grid container spacing={3}>


<Grid item xs={12}>


<Paper

elevation={4}

sx={{

padding:4,

textAlign:"center"

}}

>



<Typography variant="h4">

🎉 Employee Registered Successfully

</Typography>




<Typography

variant="h6"

sx={{
mt:3
}}

>

Employee Name:

{employeeData.firstName}

{" "}

{employeeData.lastName}


</Typography>





<Typography

variant="h6"

sx={{
mt:2
}}

>

Public ID:

{employeeData.publicId}


</Typography>







<Typography

sx={{
mt:2
}}

>

Your documents have been saved successfully.


</Typography>






<Button

variant="contained"

sx={{

mt:3

}}

onClick={downloadPDF}

>

Download Registration PDF


</Button>





</Paper>


</Grid>


</Grid>


);


}


export default Success;