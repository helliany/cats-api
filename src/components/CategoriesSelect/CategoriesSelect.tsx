import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { getCategoriesAsync, setSelected } from "../../redux/categoriesSlice";
import { setSelected as setSelectedBreed } from "../../redux/breedsSlice";
import { setSelected as setSelectedFile } from "../../redux/fileTypesSlice";

const CategoriesSelect = () => {
  const { categories, selectedCategory } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelected(event.target.value as string));
    dispatch(setSelectedBreed(''));
    dispatch(setSelectedFile(''));
  };

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="select">Category</InputLabel>
      <Select
        labelId="select"
        value={selectedCategory}
        label="Category"
        onChange={handleChange}
      >
        {categories.length > 0 &&
          categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CategoriesSelect;
