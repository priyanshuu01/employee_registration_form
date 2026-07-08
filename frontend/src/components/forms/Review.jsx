import {
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
  Box
} from "@mui/material";

import {
  useFormContext
} from "react-hook-form";

import {
  useEffect,
  useState
} from "react";



function Review(){


  const {
    watch
  } = useFormContext();



  const data = watch();



  const [photoPreview,setPhotoPreview] = useState(null);

  const [resumeURL,setResumeURL] = useState(null);





  // Profile Photo Preview

  useEffect(()=>{


    if(data.profilePhoto){


      const url = URL.createObjectURL(
        data.profilePhoto
      );


      setPhotoPreview(url);



      return ()=>{

        URL.revokeObjectURL(url);

      };

    }


  },[data.profilePhoto]);






  // Resume URL

  useEffect(()=>{


    if(data.resume){


      const url = URL.createObjectURL(
        data.resume
      );


      setResumeURL(url);



      return ()=>{

        URL.revokeObjectURL(url);

      };


    }


  },[data.resume]);








  return (


<Grid container spacing={3}>


<Grid item xs={12}>


<Paper

elevation={3}

sx={{
padding:3
}}

>


<Typography variant="h5">

Employee Details Review

</Typography>




<Divider
sx={{
my:2
}}
/>





<Typography>

<strong>Public ID:</strong>{" "}

{
data.publicId ||
"Will be generated after submission"
}

</Typography>





{/* Personal Details */}


<Typography
variant="h6"
sx={{
mt:3
}}
>

Personal Details

</Typography>



<Typography>

<strong>Name:</strong>{" "}

{data.firstName} {data.lastName}

</Typography>



<Typography>

<strong>Email:</strong>{" "}

{data.email}

</Typography>




<Typography>

<strong>Phone:</strong>{" "}

{data.phone}

</Typography>




<Typography>

<strong>Gender:</strong>{" "}

{data.gender}

</Typography>




<Typography>

<strong>Blood Group:</strong>{" "}

{data.bloodGroup}

</Typography>






<Divider
sx={{
my:2
}}
/>






{/* Address Details */}



<Typography variant="h6">

Address Details

</Typography>




<Typography>

{data.address}

</Typography>



<Typography>

{data.city}, {data.state}

</Typography>



<Typography>

{data.country} - {data.pincode}

</Typography>






<Divider
sx={{
my:2
}}
/>






{/* Job Details */}



<Typography variant="h6">

Job Details

</Typography>




<Typography>

<strong>Employee ID:</strong>{" "}

{data.employeeId}

</Typography>




<Typography>

<strong>Department:</strong>{" "}

{data.department}

</Typography>




<Typography>

<strong>Job Type:</strong>{" "}

{data.jobType}

</Typography>




<Typography>

<strong>Salary:</strong>{" "}

{data.salary}

</Typography>







<Divider
sx={{
my:2
}}
/>







{/* Documents */}



<Typography variant="h6">

Documents

</Typography>






{
photoPreview &&


<Box

component="img"

src={photoPreview}

alt="Profile"

sx={{

width:150,

height:150,

objectFit:"cover",

borderRadius:"10px",

mt:2

}}


/>


}






<Typography
sx={{
mt:2
}}
>


<strong>Resume:</strong>{" "}

{
data.resume?.name || "Not uploaded"
}


</Typography>







{
resumeURL &&


<Button

variant="outlined"

component="a"

href={resumeURL}

target="_blank"

download={data.resume?.name}

sx={{
mt:2
}}

>

View / Download Resume


</Button>


}






</Paper>


</Grid>


</Grid>


  );

}



export default Review;