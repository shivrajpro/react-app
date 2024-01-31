import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items: any[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Alert text="Hello World" />
    </div>
  );
}

export default App;
