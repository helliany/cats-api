import { Grid, Box, Container, Typography, Button } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#603F8B", color: "#FD49A0" }}>
      <Container sx={{ py: 2 }}>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            container
            item
            spacing={1}
            alignItems="center"
            xs={6}
            component={Link}
            to="/"
            sx={{ color: "#FD49A0", textDecoration: "none" }}
          >
            <Grid item>
              <Typography variant="h5" component="h2">
                The Cats
              </Typography>
            </Grid>
            <Grid item>
              <PetsIcon />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Button
              color="primary"
              component={Link}
              to="/favorite"
              sx={{ color: "#FD49A0" }}
            >
              <FavoriteOutlinedIcon />
              <Box component="span" ml={1}>
                Favorite
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
