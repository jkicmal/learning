import { IconButton, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Homework001 = () => {
  const [value, setValue] = useState("");
  const [visibility, setVisibility] = useState<"visible" | "hidden">("hidden");

  return (
    <Stack padding={4} display="block">
      <Typography variant="h4" gutterBottom>
        Homework 001
      </Typography>
      <Typography variant="body2" paddingBottom={4}>
        Prepare password input with show/hide toggle button.
      </Typography>
      <TextField
        label="Password"
        type={visibility === "hidden" ? "password" : "text"}
        value={value}
        helperText={
          value.length < 8
            ? "Password must be more than 8 characters."
            : "Do not show your password to anyone."
        }
        required
        error={value.length < 8}
        onChange={(event) => setValue(event.target.value)}
        InputProps={{
          endAdornment:
            visibility === "hidden" ? (
              <IconButton onClick={() => setVisibility("visible")}>
                <VisibilityIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => setVisibility("hidden")}>
                <VisibilityOffIcon />
              </IconButton>
            ),
        }}
      />
    </Stack>
  );
};

export default Homework001;
