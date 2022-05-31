import { Grid, Box, Container, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#603F8B", color: "#FD49A0" }}>
      <Container sx={{ py: 2 }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="h5" component="h2">
              The Cats
            </Typography>
          </Grid>
          <Grid item>
            <PetsIcon />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
