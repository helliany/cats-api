import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelected } from "../../redux/fileTypesSlice";
import { setSelected as setSelectedBreed } from "../../redux/breedsSlice";
import { setSelected as setSelectedCategory } from "../../redux/categoriesSlice";

const FileTypesSelect = () => {
  const { fileTypes, selectedFileType } = useAppSelector((state) => state.files);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelected(event.target.value as string));
    dispatch(setSelectedBreed(''));
    dispatch(setSelectedCategory(''));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select">File Types</InputLabel>
      <Select
        labelId="select"
        value={selectedFileType}
        label="File Types"
        onChange={handleChange}
      >
        {Object.entries(fileTypes).map((type) => (
          <MenuItem key={type[0]} value={type[1]}>
            {type[1]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FileTypesSelect;
