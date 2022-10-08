import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const sections = [
    { title: "Live", description: "life in hollywood" },
    { title: "Play", description: "play in hollywood" },
  ];

  const cards = sections.map((section) => (
    <Card title={section.title} description={section.description} />
  ));

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Navbar />
      <div>{cards}</div>
    </div>
  );
}

export default App;
