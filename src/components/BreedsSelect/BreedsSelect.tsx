import { useEffect, useState } from "react";
import { getBreedsAsync } from "../../redux/breedsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const BreedsSelect = () => {
  const [value, setValue] = useState("");
  const breeds = useAppSelector((state) => state.breeds.breeds);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  useEffect(() => {
    dispatch(getBreedsAsync());
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="select">Breed</InputLabel>
      <Select
        labelId="select"
        value={value}
        label="Breed"
        onChange={handleChange}
      >
        {breeds.length > 0 &&
          breeds.map((breed) => (
            <MenuItem key={breed.id} value={breed.name}>
              {breed.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default BreedsSelect;
