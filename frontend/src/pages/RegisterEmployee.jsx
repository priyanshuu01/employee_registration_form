// import {
//  Container,
//  Paper,
//  Typography
// } from "@mui/material";

// import Header from "../components/layout/Header";

// import EmployeeStepper from "../components/stepper/EmployeeStepper";


// function RegisterEmployee(){

// return(

// <>

// <Header/>


// <Container maxWidth="lg" sx={{mt:5}}>


// <Paper elevation={4} sx={{p:4}}>


// <Typography
// variant="h4"
// align="center"
// gutterBottom
// >
// Employee Registration
// </Typography>


// <EmployeeStepper/>


// </Paper>


// </Container>


// </>

// )

// }


// export default RegisterEmployee;


// import { Grid } from "@mui/material";

// import Header from "../components/layout/Header";
// import MainLayout from "../components/layout/MainLayout";
// import Sidebar from "../components/layout/Sidebar";
// import EmployeeStepper from "../components/stepper/EmployeeStepper";

// function RegisterEmployee() {
//   return (
//     <>
//       <Header />

//       <MainLayout>
//         {/* Left Sidebar */}
//         <Sidebar />

//         {/* Right Form Section */}
//         <Grid
//           size={{ xs: 12, md: 8 }}
//           sx={{
//             p: { xs: 3, md: 5 },
//             bgcolor: "#ffffff",
//           }}
//         >
//           <EmployeeStepper />
//         </Grid>
//       </MainLayout>
//     </>
//   );
// }

// export default RegisterEmployee;



import { Grid, Box, Typography } from "@mui/material";

import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/layout/Sidebar";
import EmployeeStepper from "../components/stepper/EmployeeStepper";

function RegisterEmployee() {
  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Main Layout */}
      <MainLayout>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Grid
          size={{ xs: 12, md: 9 }}
          sx={{
            backgroundColor: "#f8fafc",
            minHeight: "100%",
            p: 4,
          }}
        >
          <Box
            sx={{
              mb: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
            >
             
            </Typography>

            <Typography
              color="text.secondary"
              mt={1}
            >
              
            </Typography>
          </Box>

          <EmployeeStepper />
        </Grid>

      </MainLayout>
    </>
  );
}

export default RegisterEmployee;