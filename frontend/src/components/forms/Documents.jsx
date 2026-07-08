import { useRef, useState } from "react";

import {
  Button,
  Grid,
  Typography,
  TextField
} from "@mui/material";

import {
  useFormContext
} from "react-hook-form";



function Documents(){


const {
  setValue,
  formState:{
    errors
  }
}=useFormContext();



const [preview,setPreview]=useState(null);


const cameraRef = useRef();





// Upload Photo

const handlePhotoUpload=(e)=>{


const file=e.target.files[0];


if(file){


setValue(
"profilePhoto",
file,
{
shouldValidate:true
}
);


setPreview(
URL.createObjectURL(file)
);


}


};







// Camera Capture

const handleCameraCapture=()=>{


navigator.mediaDevices
.getUserMedia({
video:true
})
.then(stream=>{


const video=document.createElement("video");


video.srcObject=stream;


video.play();



setTimeout(()=>{


const canvas=document.createElement("canvas");


canvas.width=300;

canvas.height=300;



canvas
.getContext("2d")
.drawImage(
video,
0,
0,
300,
300
);



canvas.toBlob((blob)=>{


const file=new File(
[blob],
"profile-photo.png",
{
type:"image/png"
}
);



setValue(
"profilePhoto",
file,
{
shouldValidate:true
}
);



setPreview(
URL.createObjectURL(file)
);



stream
.getTracks()
.forEach(
track=>track.stop()
);



});


},1000);



});


};








// Resume Upload

const handleResumeUpload=(e)=>{


const file=e.target.files[0];


if(file){


setValue(

"resume",

file,

{
shouldValidate:true
}

);


}


};








return(

<Grid container spacing={3}>


<Grid item xs={12}>


<Typography variant="h6">

Profile Photo

</Typography>


<input

type="file"

accept="image/*"

onChange={handlePhotoUpload}

/>



<Button

variant="contained"

onClick={handleCameraCapture}

sx={{
mt:2
}}

>

Capture Photo

</Button>



{
preview &&

<img

src={preview}

width="150"

height="150"

style={{
display:"block",
marginTop:"15px",
borderRadius:"10px"
}}

/>

}



{
errors.profilePhoto &&

<p style={{color:"red"}}>

{errors.profilePhoto.message}

</p>

}



</Grid>








<Grid item xs={12}>


<Typography variant="h6">

Upload Resume

</Typography>



<input

type="file"

accept=".pdf,.doc,.docx"

onChange={handleResumeUpload}

/>



{
errors.resume &&

<p style={{color:"red"}}>

{errors.resume.message}

</p>

}



</Grid>





</Grid>


);


}


export default Documents;