import Card from "./card";
import { Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

let blockAccount = "3LrQZZkVyrR2bUsos8kcVUyr9N5pFvr1U7";

const Cards = () => {
  const fetchData = () => {
    // setLoading(true);
    return axios.get(
      `http://passyblockchain-admin.herokuapp.com/api/v1/addresses/${blockAccount}?pageNumber=${page}&pageSize=5&sort=-1`
    );
  };

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState([]);

  const pageEnd = useRef();

  const loadMore = () => {
    setPage((oldPrev) => oldPrev + 1);
  };
  const onSucesss = () => {
    setLoading(true);
    setTransactions([...transactions, ...data?.data?.transactions?.data]);
  };
  const { data, isLoading } = useQuery(
    ["fetchData", page],
    () => fetchData(page),
    {
      onSuccess: () => onSucesss(),
    }
  );

  // console.log(data);
  let num = 1;
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num++;
            loadMore();
            if (num >= data.data.transactions.totalPages) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );

      observer.observe(pageEnd.current);
    }
  }, [loading, num]);

  if (isLoading) return <h1>loading Data</h1>;

  return (
    <Container>
      <Grid container>
        {transactions?.map((dta, i) => (
          <Grid item xs={12} md={6}>
            <Card data={dta} key={i} />
          </Grid>
        ))}
      </Grid>

      <button onClick={loadMore} ref={pageEnd}>
        Load More
      </button>
    </Container>
  );
};

export default Cards;
