import Card from "./card";
import { Container, Grid } from "@mui/material";
const Cards = () => {
  return (
    <Container>
      <Grid container>
        {[1, 2, 4, 5, 3, 6, 9, 7].map((_, i) => (
          <Grid item xs={12} md={6}>
            <Card key={i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
