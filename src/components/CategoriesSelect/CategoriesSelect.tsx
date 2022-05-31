import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { getCategoriesAsync } from "../../redux/categoriesSlice";

const CategoriesSelect = () => {
  const [value, setValue] = useState("");
  const categories = useAppSelector((state) => state.categories.categories);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="select">Category</InputLabel>
      <Select
        labelId="select"
        value={value}
        label="Category"
        onChange={handleChange}
      >
        {categories.length > 0 &&
          categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CategoriesSelect;
