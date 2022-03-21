import { Box, useTheme } from "@mui/material";

const KingComponent = ({ color, mainText, subText }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: color,
        padding: "20px",
        width: "100%",
        color: "white",
        margin: "25px",
        marginX: "34px",
        [theme.breakpoints.down("sm")]: {
          margin: "10px",
        },
      }}
    >
      <h6 style={{ marginBottom: "-20px" }}>{subText}</h6>
      <h1>{mainText}</h1>
    </Box>
  );
};

export default KingComponent;
