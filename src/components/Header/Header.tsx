import { Grid, Box, Container, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: '#3D5B59', color: '#FCB5AC'}}>
      <Container sx={{ py: 2 }}>
        <Grid container spacing={1}>
          <Grid item>
          <Typography variant="h5" component="h2">The Cats</Typography></Grid>
          <Grid item>
            <PetsIcon />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
