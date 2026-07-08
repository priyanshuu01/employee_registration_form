import {
 Container,
 Paper,
 Typography
} from "@mui/material";

import Header from "../components/layout/Header";

import EmployeeStepper from "../components/stepper/EmployeeStepper";


function RegisterEmployee(){

return(

<>

<Header/>


<Container maxWidth="lg" sx={{mt:5}}>


<Paper elevation={4} sx={{p:4}}>


<Typography
variant="h4"
align="center"
gutterBottom
>
Employee Registration
</Typography>


<EmployeeStepper/>


</Paper>


</Container>


</>

)

}


export default RegisterEmployee;