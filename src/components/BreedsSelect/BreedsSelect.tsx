import { useEffect } from "react";
import { getBreedsAsync, setSelected } from "../../redux/breedsSlice";
import { setSelected as setSelectedCategory } from "../../redux/categoriesSlice";
import { setSelected as setSelectedFile } from "../../redux/fileTypesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const BreedsSelect = () => {
  const { breeds, selectedBreed } = useAppSelector((state) => state.breeds);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelected(event.target.value as string));
    dispatch(setSelectedCategory(''));
    dispatch(setSelectedFile(''));
  };

  useEffect(() => {
    dispatch(getBreedsAsync());
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="select">Breed</InputLabel>
      <Select
        labelId="select"
        value={selectedBreed}
        label="Breed"
        onChange={handleChange}
      >
        {breeds.length > 0 &&
          breeds.map((breed) => (
            <MenuItem key={breed.id} value={breed.id}>
              {breed.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default BreedsSelect;
