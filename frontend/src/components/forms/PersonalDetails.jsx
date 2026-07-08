import {
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem
} from "@mui/material";

import { useFormContext } from "react-hook-form";


function PersonalDetails() {


  const {
    register,
    setValue,
    formState: {
      errors
    }
  } = useFormContext();



  return (

    <Grid container spacing={3} sx={{ mt: 3 }}>


      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="First Name"

          {...register("firstName")}

          error={!!errors.firstName}

          helperText={errors.firstName?.message}

        />

      </Grid>




      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="Last Name"

          {...register("lastName")}

          error={!!errors.lastName}

          helperText={errors.lastName?.message}

        />

      </Grid>





      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="Email"

          {...register("email")}

          error={!!errors.email}

          helperText={errors.email?.message}

        />

      </Grid>





      <Grid item xs={12} md={6}>

        <TextField

          fullWidth

          label="Phone"

          {...register("phone")}

          error={!!errors.phone}

          helperText={errors.phone?.message}

        />

      </Grid>





      <Grid item xs={12}>


        <FormControl error={!!errors.gender}>


          <FormLabel>
            Gender
          </FormLabel>


          <RadioGroup

            row

            onChange={(e)=>

              setValue(
                "gender",
                e.target.value,
                {
                  shouldValidate:true
                }
              )

            }

          >


            <FormControlLabel

              value="Male"

              control={<Radio />}

              label="Male"

            />



            <FormControlLabel

              value="Female"

              control={<Radio />}

              label="Female"

            />


          </RadioGroup>



          {
            errors.gender &&

            <p style={{color:"red"}}>
              {errors.gender.message}
            </p>

          }


        </FormControl>


      </Grid>






      <Grid item xs={12} md={6}>


        <TextField

          select

          fullWidth

          label="Blood Group"

          defaultValue=""

          {...register("bloodGroup")}

          error={!!errors.bloodGroup}

          helperText={errors.bloodGroup?.message}

        >


          <MenuItem value="A+">
            A+
          </MenuItem>


          <MenuItem value="B+">
            B+
          </MenuItem>


          <MenuItem value="O+">
            O+
          </MenuItem>


          <MenuItem value="AB+">
            AB+
          </MenuItem>


        </TextField>


      </Grid>


    </Grid>

  );

}


export default PersonalDetails;






// import {
//   TextField,
//   Grid,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   MenuItem,
//   Button
// } from "@mui/material";

// import { useDispatch } from "react-redux";
// import { saveFormData } from "../../redux/employeeSlice";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object({
//   firstName: yup.string().required("First name is required"),

//   lastName: yup.string().required("Last name is required"),

//   email: yup
//     .string()
//     .email("Enter valid email")
//     .required("Email is required"),

//   phone: yup
//     .string()
//     .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
//     .required("Phone is required"),

//   gender: yup.string().required("Gender is required"),

//   bloodGroup: yup.string().required("Blood group is required")
// });

// function PersonalDetails() {
//   const dispatch = useDispatch();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       gender: "",
//       bloodGroup: ""
//     }
//   });

//   const onSubmit = (data) => {
//     console.log(data);

//     dispatch(saveFormData(data));

//     alert("Personal Details Saved Successfully!");
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="First Name"
//             {...register("firstName")}
//             error={!!errors.firstName}
//             helperText={errors.firstName?.message}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Last Name"
//             {...register("lastName")}
//             error={!!errors.lastName}
//             helperText={errors.lastName?.message}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Email"
//             {...register("email")}
//             error={!!errors.email}
//             helperText={errors.email?.message}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Phone"
//             {...register("phone")}
//             error={!!errors.phone}
//             helperText={errors.phone?.message}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <FormControl error={!!errors.gender}>
//             <FormLabel>Gender</FormLabel>

//             <RadioGroup
//               row
//               onChange={(e) =>
//                 setValue("gender", e.target.value, {
//                   shouldValidate: true
//                 })
//               }
//             >
//               <FormControlLabel
//                 value="Male"
//                 control={<Radio />}
//                 label="Male"
//               />

//               <FormControlLabel
//                 value="Female"
//                 control={<Radio />}
//                 label="Female"
//               />
//             </RadioGroup>

//             <p style={{ color: "red" }}>
//               {errors.gender?.message}
//             </p>
//           </FormControl>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             select
//             fullWidth
//             label="Blood Group"
//             defaultValue=""
//             {...register("bloodGroup")}
//             error={!!errors.bloodGroup}
//             helperText={errors.bloodGroup?.message}
//           >
//             <MenuItem value="A+">A+</MenuItem>
//             <MenuItem value="B+">B+</MenuItem>
//             <MenuItem value="O+">O+</MenuItem>
//             <MenuItem value="AB+">AB+</MenuItem>
//           </TextField>
//         </Grid>

//         <Grid item xs={12}>
//           <Button type="submit" variant="contained">
//             Save Personal Details
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }

// export default PersonalDetails;