// import { AppBar, Toolbar, Typography } from "@mui/material";

// function Header() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6">
//           Employee Registration System
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;

// import {
// Box,
// Typography,
// Avatar
// } from "@mui/material";


// function Header(){


// return(

// <Box

// sx={{

// height:65,

// display:"flex",

// alignItems:"center",

// justifyContent:"space-between",

// px:4,

// borderBottom:"1px solid #eee"

// }}

// >


// <Typography

// fontWeight={700}

// color="#2563eb"

// >

// Employee Management System

// </Typography>




// <Box

// sx={{

// display:"flex",

// alignItems:"center",

// gap:1

// }}

// >


// <Avatar

// sx={{

// width:35,

// height:35,

// bgcolor:"#2563eb"

// }}

// >

// P

// </Avatar>


// <Typography

// fontSize={14}

// >

// Priyanshu

// </Typography>


// </Box>


// </Box>

// )

// }


// export default Header;


import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        background: "#ffffff",
        color: "#222",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "70px",
        }}
      >
        {/* Left */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#2563eb",
          }}
        >
          Employee Management System
        </Typography>

        {/* Right */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#2563eb",
              width: 42,
              height: 42,
            }}
          >
            P
          </Avatar>

          <Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Priyanshu
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              Administrator
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;