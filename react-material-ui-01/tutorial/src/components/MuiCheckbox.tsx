import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTermsAndConditions, setAcceptTermsAndConditions] =
    useState(false);

  const [skills, setSkills] = useState<string[]>([]);

  console.log(acceptTermsAndConditions);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTermsAndConditions(event.target.checked);
  };

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
          label="I accept terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTermsAndConditions}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTermsAndConditions}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  value="html"
                  checked={skills.includes("html")}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  value="css"
                  checked={skills.includes("css")}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
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

export default MuiCheckbox;
