import { FormControl, FormLabel, FormControlLabel, Checkbox, Box, TextField, Stack, Radio, RadioGroup, Typography, ToggleButton, ToggleButtonGroup, Button, MenuItem } from "@mui/material";
import { useState } from "react";

const LoginSignUp = () => {
  const [genres, setGenres] = useState([]);
  const [gender, setGender] = useState("");
  const [mode, setMode] = useState("login");
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   password: ""
  // });

  // toggle
  const handleModeChange = (e, newMode) => {
    if (newMode !== null) setMode(newMode);
  };

  // checkbox
  const handleGenresChange = (event) => {
    const value = event.target.value;

    if (genres.includes(value)) {
      setGenres(genres.filter((g) => g !== value));
    } else {
      setGenres([...genres, value]);
    }
  };

  // radio
  const handleGenderChange = (event, value) => {
    setGender(value);
  };

  // inputs
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      mode,
      // formData,
      gender,
      genres
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 400,
        margin: "33px auto",
        padding: { xs: 2, sm: 3 },
        borderRadius: 3,
        border: "1px solid indigo",
        boxShadow: 3,
        backgroundColor: "#20212e81",
        color: "white",

        "& .MuiInputLabel-root": {
          color: "white",
        },
        "& .MuiOutlinedInput-input": {
          color: "white",
        },
        "& .MuiSvgIcon-root": {
          color: "#5c6ac4",
        }
      }}
    // eff1f810
    >
      {/* toggle */}
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        fullWidth
        sx={{
          mb: 3,
          color: "white",
          "& .MuiToggleButton-root": {
            color: "white",
            borderColor: "#5c6ac4",
          },
          "& .Mui-selected": {
            backgroundColor: "#5c6ac4 !important",
            color: "white",
          },
        }}
      >
        <ToggleButton value="login">Login</ToggleButton>
        <ToggleButton value="signup">Sign Up</ToggleButton>
      </ToggleButtonGroup>

      <Stack spacing={2}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          sx={{
            input: { color: "white" },
            label: { color: "white" },

            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
            },
            "& input:-webkit-autofill": {
              // WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
              WebkitTextFillColor: "white",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          sx={{
            input: { color: "white" },
            label: { color: "white" },


            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
            },
            "& input:-webkit-autofill": {
              // WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
              WebkitTextFillColor: "white",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }}
        />
        {mode === "signup" && (
          <>
            <TextField
              label="Name"
              name="Name"
              fullWidth
              sx={{
                input: { color: "white" },
                label: { color: "white" },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                },
                "& input:-webkit-autofill": {
                  // WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
                  WebkitTextFillColor: "white",
                  transition: "background-color 5000s ease-in-out 0s",
                },
              }}
            />
            <TextField
              select
              label="Preferred Language"
              value={language}
              onChange={handleLanguageChange}
              fullWidth
              // sx={{
              //   input: { color: "white" },
              //   label: { color: "white" },
              //   select: { color: "white" },
              //   "& .MuiOutlinedInput-root": {
              //     "& fieldset": { borderColor: "white" },
              //     "&:hover fieldset": { borderColor: "white" },
              //   },
              //   "& input:-webkit-autofill": {
              //     // WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
              //     WebkitTextFillColor: "white",
              //   },
              // }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                },
                "& .MuiSelect-icon": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                }
              }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Arabic">Arabic</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </TextField>
          </>

        )}
        {/* genres */}
        {mode === "signup" && (

          <FormControl>
            <FormLabel sx={{ color: "white" }}>Genres You Prefer</FormLabel>

            <Box display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "repeat(2, 1fr)" }}
              gap={1}
              sx={{ color: "white" }}>
              <FormControlLabel
                control={<Checkbox sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "#5c6ac4", 
                  },
                }} />}
                label="Action"
                value="Action"
                onChange={handleGenresChange}
              />
              <FormControlLabel
                control={<Checkbox sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "#5c6ac4", 
                  },
                }} />}
                label="Comedy"
                value="Comedy"
                onChange={handleGenresChange}
              />
              <FormControlLabel
                control={<Checkbox sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "#5c6ac4", // keep primary color when checked
                  },
                }} />}
                label="Drama"
                value="Drama"
                onChange={handleGenresChange}
              />
              <FormControlLabel
                control={<Checkbox sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "#5c6ac4", 
                  },
                }} />}
                label="Sci-Fi"
                value="Sci-Fi"
                onChange={handleGenresChange}
              />
            </Box>

          </FormControl>
        )}

        {/* gender */}
        {mode === "signup" && (
          <FormControl>
            <FormLabel sx={{ color: "white" }}>Gender</FormLabel>

            <RadioGroup row value={gender} onChange={handleGenderChange}>
              <FormControlLabel value="Female" control={<Radio sx={{ color: "white" }} />} label="Female" sx={{ color: "white" }} />
              <FormControlLabel value="Male" control={<Radio sx={{ color: "white" }} />} label="Male" sx={{ color: "white" }} />
            </RadioGroup>
          </FormControl>
        )}

        {/* submit */}
        <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#5c6ac4", color: "white", "&:hover": { backgroundColor: "#747edb" } }}>
          {mode === "login" ? "Login" : "Sign Up"}
        </Button>

      </Stack>
    </Box>
  );
};
export default LoginSignUp;
