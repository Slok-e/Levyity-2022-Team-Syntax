import Card from "./Card";

const sections = [
  { title: "Water bill", description: "Pay your bill" },
  { title: "Play", description: "play in hollywood" },
];

const cards = sections.map((section) => (
  <Card title={section.title} description={section.description} />
));

function Live() {
  return <div>{cards}</div>;
}

export default Live;
