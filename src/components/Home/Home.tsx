import { Box, Grid } from "@mui/material";
import BreedsSelect from "../BreedsSelect/BreedsSelect";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";
import FileTypesSelect from "../FileTypesSelect/FileTypesSelect";
import RandomImage from "../RandomImage/RandomImage";

const Home = () => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} sm={4}>
          <BreedsSelect />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CategoriesSelect />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FileTypesSelect />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, mx: "auto", maxWidth: "800px" }}>
        <RandomImage />
      </Box>
    </>
  );
};

export default Home;
