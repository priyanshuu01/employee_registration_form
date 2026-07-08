import {
  Paper,
  Typography,
  Button,
  Grid
} from "@mui/material";

import {
  useLocation,
  useNavigate
} from "react-router-dom";


function Success() {


  const location = useLocation();

  const navigate = useNavigate();


  const employee = location.state;



  if(!employee){

    return (

      <Typography variant="h5">
        No Employee Data Found
      </Typography>

    );

  }



  const downloadPDF = ()=>{

    alert("PDF generation will be added next");

  };





  return (

    <Grid
      container
      justifyContent="center"
      sx={{
        mt:5
      }}
    >


      <Grid item xs={12} md={6}>


        <Paper
          elevation={4}
          sx={{
            p:4,
            textAlign:"center"
          }}
        >


          <Typography
            variant="h4"
            color="success.main"
          >
            Employee Registered Successfully 🎉
          </Typography>



          <Typography
            sx={{
              mt:3
            }}
          >

            <strong>Name:</strong>{" "}
            {employee.firstName} {employee.lastName}

          </Typography>




          <Typography>

            <strong>Public ID:</strong>{" "}

            {employee.publicId}

          </Typography>






          {
            employee.profilePhoto &&

            <img

              src={
                URL.createObjectURL(
                  employee.profilePhoto
                )
              }

              alt="Profile"

              width="150"

              height="150"

              style={{
                marginTop:"20px",
                borderRadius:"50%",
                objectFit:"cover"
              }}

            />

          }







          <Typography
            sx={{
              mt:3
            }}
          >

            <strong>Email:</strong>{" "}

            {employee.email}

          </Typography>





          <Typography>

            <strong>Department:</strong>{" "}

            {employee.department}

          </Typography>





          <Typography>

            <strong>Employee ID:</strong>{" "}

            {employee.employeeId}

          </Typography>







          {
            employee.resume &&

            <Button

              variant="outlined"

              sx={{
                mt:3
              }}

              component="a"

              href={
                URL.createObjectURL(
                  employee.resume
                )
              }

              download={
                employee.resume.name
              }

            >

              Download Resume

            </Button>

          }







          <br />



          <Button

            variant="contained"

            sx={{
              mt:2
            }}

            onClick={downloadPDF}

          >

            Download Registration PDF

          </Button>






          <br />



          <Button

            sx={{
              mt:2
            }}

            onClick={()=>navigate("/")}

          >

            Go Home

          </Button>





        </Paper>


      </Grid>


    </Grid>

  );

}


export default Success;