import { Box, Card, CircularProgress, Grid, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { catsAPI } from "../../api/api";
import { ICard } from "../../types/FavoriteCard";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavoriteCats = () => {
  const [data, setData] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      try {
        const res = await catsAPI.getFavorite();
        setData(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  const handleRemoveFavorite = async (id: number) => {
    try {
      if (id) {
        await catsAPI.removeFavorite(id);
        setData((data) => data.filter((item) => item.id !== id));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container spacing={3}>
      {isLoading && (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "calc(100vh - 100px)" }}>
          <CircularProgress size={100} />
        </Grid>
      )}
      {!isLoading && data.length > 0 &&
        data.map((card) => (
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                height: { xs: "200px" },
                backgroundColor: "#e5dbff",
                position: "relative",
              }}
              elevation={4}
              key={card.id}
            >
              <Box
                component="img"
                sx={{
                  borderRadius: "4px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                alt=""
                src={card.image.url}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  fontSize: "2 rem",
                }}
                onClick={() => handleRemoveFavorite(card.id)}
              >
                <FavoriteIcon sx={{ color: "#FD49A0" }} />
              </IconButton>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default FavoriteCats;
