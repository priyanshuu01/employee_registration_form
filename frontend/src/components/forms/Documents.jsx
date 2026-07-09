import { useRef, useState } from "react";
import Webcam from "react-webcam";

import {
  Button,
  Grid,
  Typography,
  FormHelperText,
  Box
} from "@mui/material";

import { useFormContext } from "react-hook-form";

function Documents() {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useFormContext();

  const webcamRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);

  // Upload Photo
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("profilePhoto", {
        type: "manual",
        message: "Only image files are allowed."
      });
      return;
    }

    clearErrors("profilePhoto");

    setValue("profilePhoto", file, {
      shouldValidate: true
    });

    setPreview(URL.createObjectURL(file));
  };

  // Capture Photo
  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (!imageSrc) return;

    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File(
          [blob],
          "profile-photo.png",
          {
            type: "image/png"
          }
        );

        clearErrors("profilePhoto");

        setValue("profilePhoto", file, {
          shouldValidate: true
        });

        setPreview(imageSrc);

        setCameraOpen(false);
      });
  };

  // Resume Upload
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("resume", {
        type: "manual",
        message: "Only PDF files are allowed."
      });
      return;
    }

    clearErrors("resume");

    setValue("resume", file, {
      shouldValidate: true
    });
  };

  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {/* Profile Photo */}
      <Grid size={12}>
        <Typography variant="h6" gutterBottom>
          Profile Photo
        </Typography>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
        />

        <Button
          variant="contained"
          sx={{ ml: 2 }}
          onClick={() => setCameraOpen(true)}
        >
          Open Camera
        </Button>

        {cameraOpen && (
          <Box sx={{ mt: 3 }}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/png"
              width={320}
              style={{
                borderRadius: "10px"
              }}
            />

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={capturePhoto}
              >
                Capture Photo
              </Button>

              <Button
                color="error"
                variant="outlined"
                sx={{ ml: 2 }}
                onClick={() => setCameraOpen(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        )}

        {preview && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1">
              Photo Preview
            </Typography>

            <img
              src={preview}
              alt="Profile"
              width={180}
              height={180}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "10px"
              }}
            />

            <Box sx={{ mt: 2 }}>
              <Button
                color="warning"
                variant="outlined"
                onClick={() => {
                  setPreview(null);
                  setCameraOpen(true);
                }}
              >
                Retake Photo
              </Button>
            </Box>
          </Box>
        )}

        <FormHelperText error>
          {errors.profilePhoto?.message}
        </FormHelperText>
      </Grid>

      {/* Resume */}
      <Grid size={12}>
        <Typography variant="h6" gutterBottom>
          Upload Resume (PDF Only)
        </Typography>

        <input
          type="file"
          accept=".pdf"
          onChange={handleResumeUpload}
        />

        <FormHelperText error>
          {errors.resume?.message}
        </FormHelperText>
      </Grid>
    </Grid>
  );
}

export default Documents;