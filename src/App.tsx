import ListGroup from "./components/ListGroup";

function App() {
  const items: any[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  return <div>
    <ListGroup items={items} heading="Cities" />
  </div>;
}

export default App;
