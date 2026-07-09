import {
  Paper,
  Typography,
  Button,
  Grid
} from "@mui/material";

import jsPDF from "jspdf";


function Success({ employeeData }) {



  const createDetails = (pdf) => {


    pdf.setFontSize(12);


    let y = 45;



    const details = [


      ["Public ID", employeeData.publicId],


      [
        "Name",
        `${employeeData.firstName} ${employeeData.lastName}`
      ],


      ["Email", employeeData.email],


      ["Phone", employeeData.phone],


      ["Gender", employeeData.gender],


      ["Blood Group", employeeData.bloodGroup],


      ["Address", employeeData.address],


      ["City", employeeData.city],


      ["State", employeeData.state],


      ["Country", employeeData.country],


      ["Pincode", employeeData.pincode],


      ["Employee ID", employeeData.employeeId],


      ["Department", employeeData.department],


      ["Job Type", employeeData.jobType],


      ["Salary", employeeData.salary],


      ["Resume", employeeData.resume]

    ];




    details.forEach((item)=>{


      pdf.text(

        `${item[0]} : ${item[1] || ""}`,

        20,

        y

      );


      y += 10;


    });




    pdf.save(

      `${employeeData.publicId}_Employee_Registration.pdf`

    );


  };








  const generatePDF = () => {


    const pdf = new jsPDF();



    pdf.setFontSize(18);


    pdf.text(

      "Employee Registration Details",

      55,

      20

    );






    // If photo exists

    if(employeeData.profilePhoto instanceof File){



      const reader = new FileReader();



      reader.readAsDataURL(
        employeeData.profilePhoto
      );



      reader.onload = ()=>{


        pdf.addImage(

          reader.result,

          "JPEG",

          150,

          30,

          40,

          40

        );



        createDetails(pdf);


      };



    }

    else{


      createDetails(pdf);


    }



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

{" "}

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

{" "}

{employeeData.publicId}


</Typography>







<Button

variant="contained"

sx={{

mt:3

}}

onClick={generatePDF}

>

Download Employee PDF

</Button>





</Paper>


</Grid>


</Grid>


);


}


export default Success;