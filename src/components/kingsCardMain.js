import { useState } from "react";
import { Box } from "@mui/material";
import KingComponent from "./kingCard";
import { useTheme } from "@emotion/react";

const KingsCardMain = () => {
  const theme = useTheme();
  const [inputParams, setInputParams] = useState([
    { color: "#00347A", subText: "Total Received", mainText: "$500,000" },
    { color: "#0196D8", subText: "Total Sent", mainText: "$500,000" },
  ]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        {inputParams?.map((param, i) => (
          <KingComponent {...param} key={i} />
        ))}
      </Box>
    </>
  );
};

export default KingsCardMain;
