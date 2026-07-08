import { Button, Box } from "@mui/material";


function StepNavigation({
  activeStep,
  stepsLength,
  handleNext,
  handleBack
}) {


  return (

    <Box
      sx={{
        display:"flex",
        justifyContent:"space-between",
        mt:4
      }}
    >


      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        variant="outlined"
      >
        Back
      </Button>



      <Button
        onClick={handleNext}

variant="contained"

>

{
 activeStep === stepsLength - 1
 ? "Submit Employee"
 : "Next"
}

      </Button>


    </Box>

  );

}


export default StepNavigation;