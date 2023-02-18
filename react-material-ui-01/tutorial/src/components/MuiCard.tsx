import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard: React.FC = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            placeat doloremque dolores autem, id velit eligendi suscipit
            temporibus! Corporis pariatur culpa, dolor quasi explicabo amet
            inventore eum adipisci veniam delectus?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Lean More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
