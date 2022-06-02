import { Box, Card, Button, CircularProgress, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getImagesAsync } from "../../redux/imagesSlice";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { catsAPI } from "../../api/api";

const RandomImage = () => {
  const { image, status } = useAppSelector((state) => state.images);
  const { selectedBreed } = useAppSelector((state) => state.breeds);
  const { selectedCategory } = useAppSelector((state) => state.categories);
  const { selectedFileType } = useAppSelector((state) => state.files);
  const dispatch = useAppDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const data = {
    breed: selectedBreed,
    category: selectedCategory,
    fileType: selectedFileType,
  };

  useEffect(() => {
    dispatch(getImagesAsync(data));
  }, []);

  const handleClick = () => {
    dispatch(getImagesAsync(data));
  };

  const handleAddFavorite = async () => {
    if (isLiked) return;

    try {
      if (image.id) {
        await catsAPI.addFavorite({ image_id: image.id });
        setIsLiked(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box textAlign="center">
      <Button
        color="primary"
        variant="contained"
        size="large"
        disableElevation
        sx={{ mb: 3 }}
        onClick={handleClick}
      >
        <AutorenewIcon sx={{ mr: "6px" }} />
        Next
      </Button>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
          height: { xs: "400px", md: "calc(100vh - 300px)" },
          backgroundColor: "#e5dbff",
          position: "relative",
        }}
        elevation={4}
      >
        {status === "loading" ? (
          <CircularProgress size={100} />
        ) : (
          <>
            <Box
              component="img"
              sx={{
                borderRadius: "4px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              alt=""
              src={image?.url}
            />
            <IconButton
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
                fontSize: "2 rem",
              }}
              size="large"
              onClick={handleAddFavorite}
            >
              {isLiked ? (
                <FavoriteIcon fontSize="large" sx={{ color: "#FD49A0" }} />
              ) : (
                <FavoriteBorderIcon fontSize="large" />
              )}
            </IconButton>
          </>
        )}
      </Card>
    </Box>
  );
};

export default RandomImage;
