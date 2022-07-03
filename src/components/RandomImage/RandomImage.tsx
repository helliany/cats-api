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
  const [likedId, setLikedId] = useState(null);

  const data = {
    breed: selectedBreed,
    category: selectedCategory,
    fileType: selectedFileType,
  };

  useEffect(() => {
    dispatch(getImagesAsync(data));
  }, []);

  useEffect(() => {
    setIsLiked(false);
    setLikedId(null);
  }, [image])

  const handleClick = () => {
    dispatch(getImagesAsync(data));
  };

  const handleAddFavorite = async () => {
    if (isLiked && likedId) {
      try {
        await catsAPI.removeFavorite(likedId);
        setLikedId(null);
        setIsLiked(false);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        if (image.id) {
          const res = await catsAPI.addFavorite({ image_id: image.id });
          setLikedId(res.data.id);
          setIsLiked(true);
        }
      } catch (e) {
        console.log(e);
      }
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
          py: 3,
          px: 7,
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
                right: 0,
                top: 0,
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
