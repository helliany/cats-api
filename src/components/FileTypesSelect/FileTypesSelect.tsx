import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const FileTypesSelect = () => {
  const [value, setValue] = useState("");
  const types = {
    animated: "gif",
    static: "jpg, png",
    all: "gif, jpg, png",
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select">File Types</InputLabel>
      <Select
        labelId="select"
        value={value}
        label="File Types"
        onChange={handleChange}
      >
        {Object.entries(types).map((type) => (
          <MenuItem key={type[0]} value={type[1]}>
            {type[1]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FileTypesSelect;
