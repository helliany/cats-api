import { Box, Card, Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getImagesAsync } from "../../redux/imagesSlice";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const RandomImage = () => {
  const {image, status} = useAppSelector((state) => state.images);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImagesAsync());
  }, []);

  const handleClick = () => {
    dispatch(getImagesAsync());
  }

  return (
    <Box textAlign='center'>
      <Button
        color='primary'
        variant='contained'
        size='large'
        disableElevation
        sx={{ mb: 3 }}
        onClick={handleClick}
      >
        <AutorenewIcon />
        Next
      </Button>
      <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3, height: 'calc(100vh - 300px)' }} elevation={4}>
        {status === 'loading' ? (
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
