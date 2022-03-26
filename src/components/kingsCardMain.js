import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import KingComponent from "./kingCard";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { useQuery } from "react-query";

let blockAccount = "3LrQZZkVyrR2bUsos8kcVUyr9N5pFvr1U7";

const KingsCardMain = () => {
  let blockAccount = "3LrQZZkVyrR2bUsos8kcVUyr9N5pFvr1U7";
  const fetchData = () => {
    return axios.get(
      `http://passyblockchain-admin.herokuapp.com/api/v1/addresses/${blockAccount}/`
    );
  };

  const theme = useTheme();
  const { data, isLoading } = useQuery("fetchData", () => fetchData());
  //console.log(data);

  const [inputParams, setInputParams] = useState([
    {
      color: "#00347A",
      subText: "Total Received",
      mainText: `${data?.data?.totalReceived / 100000000}`,
    },
    {
      color: "#0196D8",
      subText: "Total Sent",
      mainText: `${data?.data?.totalSent / 100000000}`,
    },
  ]);
  if (isLoading) return <h1>loading Data</h1>;

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
