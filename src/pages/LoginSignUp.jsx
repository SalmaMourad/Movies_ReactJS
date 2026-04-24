import { FormControl, FormLabel, FormControlLabel, Checkbox, Box, TextField, Stack, Radio, RadioGroup, Typography, ToggleButton, ToggleButtonGroup, Button, MenuItem } from "@mui/material";
import { useState } from "react";

const LoginSignUp = () => {
  // state
  const [genres, setGenres] = useState([]);
  const [gender, setGender] = useState("");
  const [mode, setMode] = useState("login");
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });

  // toggle login/signup
  const handleModeChange = (e, newMode) => {
    if (newMode !== null) setMode(newMode);
  };

  // checkbox (genres)
  const handleGenresChange = (event) => {
    const value = event.target.value;

    if (genres.includes(value)) {
      setGenres(genres.filter((g) => g !== value));
    } else {
      setGenres([...genres, value]);
    }
  };

  // radio (gender)
  const handleGenderChange = (event, value) => {
    setGender(value);
  };

  // inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      mode,
      formData,
      gender,
      genres
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 400,
        margin: "33px auto",
        padding: 3,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "#eff1f8"
      }}
    >
      {/* title */}
      {/* <Typography variant="h4" color="black" textAlign="center" mb={2} sx={{ color: "black" }}>
        Movies
      </Typography> */}

      {/* toggle */}
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        fullWidth
        sx={{ mb: 3 }}
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
            input: { color: "black" },

            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "gray" },
              "&:hover fieldset": { borderColor: "black" },
            },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
              WebkitTextFillColor: "black",
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
            input: { color: "black" },

            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "gray" },
              "&:hover fieldset": { borderColor: "black" },
            },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
              WebkitTextFillColor: "black",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }}
        />
        {/* inputs */}
        {mode === "signup" && (
          <>
            <TextField
              label="Name"
              name="Name"
              fullWidth
              sx={{
                input: { color: "black" },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "black" },
                },
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
                  WebkitTextFillColor: "black",
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
              sx={{
                input: { color: "black" },
                label: { color: "gray" },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "black" },
                },

                // fix autofill (لو حصل)
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 100px #eff1f8 inset",
                  WebkitTextFillColor: "black",
                },
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
            <FormLabel sx={{ color: "black" }}>Genres You Prefer</FormLabel>

            {/* <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="space-between" sx={{ color: "black" }} > */}
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1} sx={{ color: "black" }}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Action"
                value="Action"
                onChange={handleGenresChange}
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Comedy"
                value="Comedy"
                onChange={handleGenresChange}
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Drama"
                value="Drama"
                onChange={handleGenresChange}
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Sci-Fi"
                value="Sci-Fi"
                onChange={handleGenresChange}
              />
              {/* </Stack> */}
            </Box>

          </FormControl>
        )}

        {/* gender */}
        {mode === "signup" && (
          <FormControl>
            <FormLabel sx={{ color: "black" }}>Gender</FormLabel>

            <RadioGroup row value={gender} onChange={handleGenderChange}>
              <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" sx={{ color: "black" }} />
              <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" sx={{ color: "black" }} />
            </RadioGroup>
          </FormControl>
        )}

        {/* submit */}
        <Button type="submit" variant="contained" color="primary">
          {mode === "login" ? "Login" : "Sign Up"}
        </Button>

      </Stack>
    </Box>
  );
};
export default LoginSignUp;
