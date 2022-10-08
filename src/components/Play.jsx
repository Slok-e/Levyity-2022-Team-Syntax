import Card from "./Card";

const sections = [
  {
    title: "Go to a concert",
    description: "Music that will rock your socks off",
  },
  { title: "Play", description: "play from shakespeare" },
];

const cards = sections.map((section) => (
  <Card title={section.title} description={section.description} />
));

function Live() {
  return <div>{cards}</div>;
}

export default Live;
