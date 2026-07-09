import { useState } from "react";

import PersonalDetails from "../forms/PersonalDetails";
import AddressDetails from "../forms/AddressDetails";
import JobDetails from "../forms/JobDetails";
import Documents from "../forms/Documents";
import Review from "../forms/Review";
import Success from "../forms/Success";


import {
  Stepper,
  Step,
  StepLabel
} from "@mui/material";


import StepNavigation from "./StepNavigation";


import {
  useForm,
  FormProvider
} from "react-hook-form";


import {
  yupResolver
} from "@hookform/resolvers/yup";


import { useDispatch } from "react-redux";


import {
  saveFormData
} from "../../redux/employeeSlice";


import * as yup from "yup";





const steps = [
  "Personal Details",
  "Address Details",
  "Job Details",
  "Documents",
  "Review"
];





const schema = yup.object({


  firstName:yup.string()
    .required("First name is required")
    .matches(
      /^[A-Za-z\s]+$/,
      "Only alphabets are allowed"
    ),


  lastName:yup.string()
    .required("Last name is required")
    .matches(
      /^[A-Za-z\s]+$/,
      "Only alphabets are allowed"
    ),



  email:yup.string()
    .email("Enter valid email")
    .required("Email is required"),



  phone:yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Phone must be 10 digits"
    )
    .required("Phone is required"),



  gender:yup.string()
    .required("Gender is required"),



  bloodGroup:yup.string()
    .required("Blood group is required"),





  address:yup.string()
    .required("Address is required"),



  city:yup.string()
    .required("City is required"),



  state:yup.string()
    .required("State is required"),



  country:yup.string()
    .required("Country is required"),



  pincode:yup.string()
    .matches(
      /^[0-9]{6}$/,
      "Pincode must be 6 digits"
    )
    .required("Pincode is required"),





  employeeId:yup.string()
    .required("Employee ID is required"),



  department:yup.string()
    .required("Department is required"),



  jobType:yup.string()
    .required("Job type is required"),



  salary:yup.string()
    .required("Salary is required"),






  profilePhoto:yup.mixed()
    .required("Profile photo is required"),



  resume:yup.mixed()
    .required("Resume is required")



});









function EmployeeStepper(){



  const [activeStep,setActiveStep] = useState(0);



  const [submittedData,setSubmittedData] = useState(null);



  const dispatch = useDispatch();







  const methods = useForm({


    resolver:yupResolver(schema),


    mode:"all",


    shouldUnregister:false,



    defaultValues:{


      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      gender:"",
      bloodGroup:"",



      address:"",
      city:"",
      state:"",
      country:"",
      pincode:"",



      employeeId:"",
      department:"",
      jobType:"",
      salary:"",



      profilePhoto:null,


      resume:null,


      publicId:""



    }


  });









  const {
    trigger,
    handleSubmit
  } = methods;









  const generatePublicId=()=>{


    return (

      "EMP-" +

      Math.floor(
        100000 + Math.random()*900000
      )

    );


  };









  const goToStep=(step)=>{

    setActiveStep(step);

  };









  const handleNext = async()=>{


    let fields=[];





    if(activeStep===0){

      fields=[

        "firstName",
        "lastName",
        "email",
        "phone",
        "gender",
        "bloodGroup"

      ];

    }






    if(activeStep===1){

      fields=[

        "address",
        "city",
        "state",
        "country",
        "pincode"

      ];

    }






    if(activeStep===2){

      fields=[

        "employeeId",
        "department",
        "jobType",
        "salary"

      ];

    }






    if(activeStep===3){

      fields=[

        "profilePhoto",
        "resume"

      ];

    }






    const valid = await trigger(fields);




    if(!valid){

      return;

    }







    if(activeStep === steps.length-1){



      handleSubmit((data)=>{



        const finalData={

          ...data,

          publicId:generatePublicId()

        };




        console.log(
          "Final Employee Data:",
          finalData
        );




        dispatch(
          saveFormData(finalData)
        );




        setSubmittedData(finalData);



      })();



      return;

    }








    setActiveStep(
      prev=>prev+1
    );



  };









  const handleBack=()=>{


    if(activeStep>0){


      setActiveStep(
        prev=>prev-1
      );


    }


  };









  if(submittedData){


    return (

      <Success

        employeeData={submittedData}

      />

    );


  }









  return(


    <FormProvider {...methods}>


      <Stepper

        activeStep={activeStep}

        alternativeLabel

      >


        {
          steps.map((label)=>(


            <Step key={label}>


              <StepLabel>

                {label}

              </StepLabel>


            </Step>


          ))
        }


      </Stepper>








      {
        activeStep===0 &&
        <PersonalDetails/>
      }





      {
        activeStep===1 &&
        <AddressDetails/>
      }





      {
        activeStep===2 &&
        <JobDetails/>
      }





      {
        activeStep===3 &&
        <Documents/>
      }





      {
        activeStep===4 &&
        <Review 
          goToStep={goToStep}
        />
      }








      <StepNavigation

        activeStep={activeStep}

        stepsLength={steps.length}

        handleNext={handleNext}

        handleBack={handleBack}

      />



    </FormProvider>


  );


}



export default EmployeeStepper;