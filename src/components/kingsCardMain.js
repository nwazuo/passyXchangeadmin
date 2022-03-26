import { useState, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';
import KingComponent from './kingCard';
import { useTheme } from '@emotion/react';
import axios from 'axios';
import { useQuery } from 'react-query';

let blockAccount = '3LrQZZkVyrR2bUsos8kcVUyr9N5pFvr1U7';

/* I moved this out of the component to prevent         re-declaring it on every render
 This may not have any performance effects but its good practice
 Other alternatives to this can be either to
 pass the function value directly to useQuery or
 to include it in the component but wrap it with
 a React.useMemo() hook(for memoization)
*/
const fetchData = () => {
  return axios.get(
    `http://passyblockchain-admin.herokuapp.com/api/v1/addresses/${blockAccount}/`
  );
};

const KingsSkeleton = () => (
  <>
    <Skeleton
      width="100%"
      sx={{ margin: '25px', marginX: '34px', padding: '20px' }}
    >
      <h6>Infer height</h6>
      <h1>Inferrr</h1>
    </Skeleton>
    <Skeleton
      width="100%"
      sx={{ margin: '25px', marginX: '34px', padding: '20px' }}
    >
      <h6>Infer height</h6>
      <h1>Inferrr</h1>
    </Skeleton>
  </>
);

const KingsCardMain = () => {
  const theme = useTheme();
  const { data, isLoading } = useQuery('fetchData', fetchData);

  const inputParams = [
    {
      color: '#00347A',
      subText: 'Total Received',
      mainText: `${data?.data?.totalReceived / 100000000}`,
    },
    {
      color: '#0196D8',
      subText: 'Total Sent',
      mainText: `${data?.data?.totalSent / 100000000}`,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
        }}
      >
        {isLoading ? (
          <KingsSkeleton />
        ) : (
          inputParams?.map((param, i) => <KingComponent {...param} key={i} />)
        )}
      </Box>
    </>
  );
};

export default KingsCardMain;
