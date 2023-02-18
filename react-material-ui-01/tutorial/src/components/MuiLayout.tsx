import { Box, Stack, Divider, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const MuiLayout: React.FC = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid", borderColor: "primary.main" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "150px",
            width: "150px",
            padding: "",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Box 1
        </Box>
        <Box
          display="flex"
          height="150px"
          width="150px"
          bgcolor="success.light"
          p={2}
        >
          Box 2
        </Box>
      </Stack>
      <Box>
        <Grid container my={4} columnSpacing={2} rowSpacing={2}>
          <Grid xs={6} color="white">
            <Box bgcolor="primary.main" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid xs={6} color="white">
            <Box bgcolor="primary.main" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid xs={6} color="white">
            <Box bgcolor="primary.main" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid xs={6} color="white">
            <Box bgcolor="primary.main" p={2}>
              Item 1
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default MuiLayout;
