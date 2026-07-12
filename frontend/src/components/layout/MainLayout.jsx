// import { Box, Grid, Paper } from "@mui/material";

// function MainLayout({ children }) {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         bgcolor: "#f5f7fb",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         p: 4,
//       }}
//     >
//       <Paper
//         elevation={5}
//         sx={{
//           width: "100%",
//           maxWidth: 1300,
//           borderRadius: 4,
//           overflow: "hidden",
//         }}
//       >
//         <Grid container>
//           {children}
//         </Grid>
//       </Paper>
//     </Box>
//   );
// }

// export default MainLayout;


// import Sidebar from "./Sidebar";
// import Header from "./Header";

// import "./layout.css";

// import { Box, Paper } from "@mui/material";


// function Layout({ children }) {


//   return (

//     <Box

//       sx={{

//         minHeight: "100vh",

//         width: "100%",

//         background:

//           "linear-gradient(135deg,#eef2ff,#f8fafc)",


//         display: "flex",

//         justifyContent: "center",

//         alignItems: "center",


//         padding: {

//           xs: 2,

//           sm: 3,

//           md: 5

//         },


//       }}

//     >



//       <Paper


//         elevation={8}


//         sx={{


//           width: "100%",


//           maxWidth: "1400px",


//           minHeight: {

//             xs:"auto",

//             md:"85vh"

//           },


//           borderRadius: {


//             xs: 2,

//             md: 5

//           },


//           overflow:"hidden",



//           backgroundColor:"#ffffff",



//           boxShadow:

//           "0 20px 50px rgba(0,0,0,0.08)",



//           transition:"0.3s ease",



//           "&:hover":{


//             boxShadow:

//             "0 25px 60px rgba(0,0,0,0.12)"


//           }


//         }}


//       >



//         {children}



//       </Paper>



//     </Box>


//   );

// }


// export default Layout;

import {
  Box,
  Paper,
  Grid
} from "@mui/material";


function MainLayout({children}) {


return (

<Box

sx={{

minHeight:"100vh",

background:
"linear-gradient(135deg,#eef2ff,#f8fafc)",

p:3

}}

>


<Paper

elevation={8}

sx={{

maxWidth:1400,

margin:"auto",

minHeight:"95vh",

borderRadius:4,

overflow:"hidden",

background:"#fff"

}}

>


<Grid container>


{children}


</Grid>


</Paper>


</Box>


);


}


export default MainLayout;