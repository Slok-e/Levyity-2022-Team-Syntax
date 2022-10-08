import Card from "./Card";

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
  <div className={`grid grid-cols-${section.size}`}>
    <Card title={section.title} description={section.description} />
  </div>
));

function Live() {
  return <div className="grid">{cards}</div>;
}

export default Live;
