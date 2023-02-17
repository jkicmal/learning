import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [skills, setSkills] = useState<string[]>([]);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const index = skills.indexOf(value);
    if (index === -1) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  console.log(skills);

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Switch
                  onChange={handleSkillChange}
                  value="html"
                  checked={skills.includes("html")}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  onChange={handleSkillChange}
                  value="css"
                  checked={skills.includes("css")}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Switch
                  onChange={handleSkillChange}
                  value="javascript"
                  checked={skills.includes("javascript")}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection.</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiSwitch;
