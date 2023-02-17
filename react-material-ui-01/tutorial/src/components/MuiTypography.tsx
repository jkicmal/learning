import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3" component="h1">
        h3 Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        quibusdam facilis praesentium aliquid voluptas facere rerum corporis
        ipsum voluptatibus, ab saepe optio in quae adipisci distinctio nostrum!
        Voluptates, sapiente fugiat!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        unde dolore? Laborum veniam ab natus adipisci eius provident, unde
        facilis enim rem laboriosam blanditiis delectus at expedita, cum
        suscipit sint.
      </Typography>
    </div>
  );
};
export default MuiTypography;
