import { Box, Card, Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getImagesAsync } from "../../redux/imagesSlice";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const RandomImage = () => {
  const { image, status } = useAppSelector((state) => state.images);
  const { selectedBreed } = useAppSelector((state) => state.breeds);
  const { selectedCategory } = useAppSelector((state) => state.categories);
  const { selectedFileType } = useAppSelector((state) => state.files);
  const dispatch = useAppDispatch();

  const data = {
    breed: selectedBreed,
    category: selectedCategory,
    fileType: selectedFileType,
  }

  useEffect(() => {
    dispatch(getImagesAsync(data));
  }, []);

  const handleClick = () => {
    dispatch(getImagesAsync(data));
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
        }}
        elevation={4}
      >
        {status === "loading" ? (
          <CircularProgress size={100} />
        ) : (
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
        )}
      </Card>
    </Box>
  );
};

export default RandomImage;
