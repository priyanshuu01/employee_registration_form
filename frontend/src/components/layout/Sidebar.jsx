// import {
//   Grid,
//   Typography,
//   Box,
//   Avatar,
// } from "@mui/material";

// import BusinessIcon from "@mui/icons-material/Business";

// function Sidebar() {
//   return (
//     <Grid
//       size={{ xs: 12, md: 4 }}
//       sx={{
//         background: "linear-gradient(135deg,#1565c0,#42a5f5)",
//         color: "white",
//         p: 5,
//       }}
//     >
//       <Avatar
//         sx={{
//           width: 70,
//           height: 70,
//           mb: 3,
//         }}
//       >
//         <BusinessIcon fontSize="large" />
//       </Avatar>

//       <Typography variant="h4" fontWeight="bold">
//         Employee Portal
//       </Typography>

//       <Typography sx={{ mt: 2 }}>
//         Register employees quickly with a professional HR Management System.
//       </Typography>

//       <Box sx={{ mt: 5 }}>
//         <Typography>✔ Personal Details</Typography>

//         <Typography sx={{ mt: 2 }}>
//           ✔ Address Information
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           ✔ Job Details
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           ✔ Documents Upload
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           ✔ Review & Submit
//         </Typography>
//       </Box>
//     </Grid>
//   );
// }

// export default Sidebar;

import {

Box,

Typography,

List,

ListItemButton,

ListItemIcon,

ListItemText

} from "@mui/material";


import {

Dashboard,

PersonAdd,

People,

Settings

} from "@mui/icons-material";




function Sidebar(){


const menu=[


{
name:"Dashboard",
icon:<Dashboard/>
},


{
name:"Register Employee",
icon:<PersonAdd/>
},


{
name:"Employees",
icon:<People/>
},


{
name:"Settings",
icon:<Settings/>
}


];



return(


<Box

sx={{

width:220,

borderRight:"1px solid #eee",

p:3

}}

>



<Typography

variant="h6"

fontWeight={700}

color="primary"

mb={3}

>

HR Portal

</Typography>





<List>


{

menu.map((item,index)=>(


<ListItemButton

key={index}

sx={{

borderRadius:2,

mb:1,


"&:hover":{

background:"#eef2ff"

}


}}

>


<ListItemIcon>

{item.icon}

</ListItemIcon>


<ListItemText

primary={item.name}

/>


</ListItemButton>


))


}


</List>



</Box>


)


}


export default Sidebar;