import Card from "./Card";
import { Grid } from "@mui/material";

const sections = [
  {
    title: "Crypto",
    description: "$$$",
    size: 6,
  },
  { title: "Stocks", description: "$", size: 6 },
  { title: "h", description: "l", size: 12 },
];

const cards = sections.map((section) => (
  <Grid container item xs={6}>
    <Card title={section.title} description={section.description} />
  </Grid>
));

function Live() {
  return <div className="grid">{cards}</div>;
}

export default Live;
