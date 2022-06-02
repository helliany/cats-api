import { Box, Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { catsAPI } from "../../api/api";
import { ICard } from "../../types/FavoriteCard";

const FavoriteCats = () => {
  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await catsAPI.getFavorite();
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  return (
    <Grid container spacing={3}>
      {data.length > 0 &&
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
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default FavoriteCats;
