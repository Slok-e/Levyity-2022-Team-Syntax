import Card from "./Card";

const sections = [
  {
    title: "Become a Developer",
    description: "Write code",
  },
  { title: "Connect w/professionals", description: "hackathon" },
];

const cards = sections.map((section) => (
  <Card title={section.title} description={section.description} />
));

function Live() {
  return <div>{cards}</div>;
}

export default Live;
