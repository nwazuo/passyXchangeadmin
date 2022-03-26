import Card from './card';
import { Container, Grid, Skeleton } from '@mui/material';
import { useInfiniteQuery, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// I don't know how sensitive this is. If it is indeed sensitive,
// reference it as an environment variable
let blockAccount = '3LrQZZkVyrR2bUsos8kcVUyr9N5pFvr1U7';

// skeleton
const CardsSkeleton = () => (
  <Grid container>
    <Grid item xs={12} md={6}>
      <Skeleton height={200} sx={{ marginX: '10px' }} />
    </Grid>
    <Grid item xs={12} md={6}>
      <Skeleton height={200} sx={{ marginX: '10px' }} />
    </Grid>
  </Grid>
);

const Cards = () => {
  const { ref, inView } = useInView();

  // useInfiniteQuery is a module that's more suited to
  // doing infinite scroll UIs
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'addresses',
    async ({ pageParam = 1 }) => {
      const res = await axios.get(
        `http://passyblockchain-admin.herokuapp.com/api/v1/addresses/${blockAccount}?pageNumber=${pageParam}&pageSize=6&sort=-1`
      );
      return res.data;
    },
    {
      // check if the recently returned data is the
      // last set of data
      // return undefined to indicate last page
      getNextPageParam: (lastPage) =>
        lastPage.transactions.pageNumber >= lastPage.transactions.totalPages &&
        undefined,
    }
  );

  /* 
    register effect to use intersection observer to check
    when the user has scrolled to bottom of page
  */
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      {status === 'loading' ? (
        <>
          <CardsSkeleton />
          <CardsSkeleton />
          <CardsSkeleton />
        </>
      ) : status === 'error' ? (
        <p>Something went wrong...[{error.message}]</p>
      ) : (
        <>
          <Grid container>
            {data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.transactions.data.map((transaction) => (
                  <Grid item xs={12} md={6}>
                    <Card data={transaction} key={transaction.hash} />
                  </Grid>
                ))}
              </React.Fragment>
            ))}
            {isFetchingNextPage && <CardsSkeleton />}
          </Grid>
          <button
            onClick={fetchNextPage}
            ref={ref}
            disabled={isFetchingNextPage || !hasNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load more'
              : 'Nothing more to load'}
          </button>
        </>
      )}
    </Container>
  );
};

export default Cards;
