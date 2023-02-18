import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions: Skill[] = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log({ value });
  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={(event: unknown, newValue: string | null) =>
          setValue(newValue)
        }
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(event: unknown, newValue: Skill | null) =>
          setSkill(newValue)
        }
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
