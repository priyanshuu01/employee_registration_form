


import { useState, useRef } from "react";

import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  FormHelperText
} from "@mui/material";


import {
  CameraAlt,
  UploadFile,
  Delete
} from "@mui/icons-material";


import {
  useFormContext
} from "react-hook-form";



function Documents(){



const {

setValue,

setError,

clearErrors,

formState:{
errors
}

}=useFormContext();






const [preview,setPreview]=useState(null);


const [openCamera,setOpenCamera]=useState(false);


const videoRef=useRef(null);


const canvasRef=useRef(null);






// Upload Photo


const handlePhotoUpload=(e)=>{


const file=e.target.files[0];


if(!file) return;




if(!file.type.startsWith("image/")){


setError(

"profilePhoto",

{

type:"manual",

message:"Only image files allowed"

}

);


return;

}



clearErrors("profilePhoto");



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



};









// Open Camera


const openCameraModal=async()=>{


setOpenCamera(true);



try{


const stream=

await navigator.mediaDevices.getUserMedia({

video:true

});



videoRef.current.srcObject=stream;



}

catch(error){


alert(
"Camera permission denied"
);


}



};









// Capture Photo


const capturePhoto=()=>{


const canvas=canvasRef.current;


const video=videoRef.current;



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




closeCamera();



});


};









const closeCamera=()=>{


if(videoRef.current?.srcObject){


videoRef.current.srcObject

.getTracks()

.forEach(

track=>track.stop()

);


}



setOpenCamera(false);


};









// Resume Upload


const handleResumeUpload=(e)=>{


const file=e.target.files[0];


if(!file)return;




if(file.type!=="application/pdf"){


setError(

"resume",

{

type:"manual",

message:"Only PDF files allowed"

}

);


return;

}



clearErrors("resume");



setValue(

"resume",

file,

{

shouldValidate:true

}

);



};











return(



<Grid

container

spacing={3}

sx={{

mt:3

}}

>









{/* Profile Photo */}


<Grid

item

xs={12}

md={6}

>


<Paper

elevation={4}

sx={{

p:4,

borderRadius:3,

textAlign:"center",

height:"100%"

}}

>


<CameraAlt

fontSize="large"

color="primary"

/>


<Typography

variant="h6"

fontWeight="bold"

mt={1}

>

Profile Photo

</Typography>





<Box

mt={3}

>



{

preview &&

<img

src={preview}

alt="profile"

width="180"

height="180"

style={{

borderRadius:"50%",

objectFit:"cover"

}}

/>


}





{

!preview &&

<Box

sx={{

width:180,

height:180,

borderRadius:"50%",

background:"#eee",

display:"flex",

alignItems:"center",

justifyContent:"center",

margin:"auto"

}}

>


<CameraAlt

fontSize="large"

/>


</Box>


}



</Box>









<Button

component="label"

variant="outlined"

sx={{

mt:3

}}

>


Upload Photo


<input

hidden

type="file"

accept="image/*"

onChange={handlePhotoUpload}

/>


</Button>







<Button

variant="contained"

sx={{

mt:2,

ml:2

}}

onClick={openCameraModal}

>


Open Camera


</Button>







<FormHelperText error>

{errors.profilePhoto?.message}

</FormHelperText>






</Paper>


</Grid>













{/* Resume */}


<Grid

item

xs={12}

md={6}

>


<Paper

elevation={4}

sx={{

p:4,

borderRadius:3,

textAlign:"center"

}}

>


<UploadFile

fontSize="large"

color="primary"

/>



<Typography

variant="h6"

fontWeight="bold"

mt={1}

>

Upload Resume

</Typography>





<Box

sx={{

border:"2px dashed #1976d2",

borderRadius:3,

p:4,

mt:3

}}

>



<Typography>

Upload PDF Resume

</Typography>






<Button

component="label"

variant="contained"

sx={{

mt:2

}}

>


Choose File


<input

hidden

type="file"

accept=".pdf"

onChange={handleResumeUpload}

/>


</Button>



</Box>





<FormHelperText error>

{errors.resume?.message}

</FormHelperText>



</Paper>


</Grid>













{/* Camera Modal */}



<Dialog

open={openCamera}

onClose={closeCamera}

maxWidth="sm"

fullWidth

>


<DialogTitle>

Capture Profile Photo

</DialogTitle>




<DialogContent>


<video

ref={videoRef}

autoPlay

width="100%"

style={{

borderRadius:"15px"

}}

/>



<canvas

ref={canvasRef}

style={{

display:"none"

}}

/>



</DialogContent>




<DialogActions>


<Button

onClick={closeCamera}

>

Cancel

</Button>



<Button

variant="contained"

onClick={capturePhoto}

>

Capture

</Button>


</DialogActions>



</Dialog>








</Grid>


);



}


export default Documents;