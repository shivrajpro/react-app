import Alert from "./components/Alert";
import Button from "./components/Button";
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

  const onBtnClick = (evt:MouseEvent)=>{
    console.log('evt',evt);
  }

  return (
    <div>
      <Button color="primary" onClick={onBtnClick} >primary</Button>
      <Button color="secondary" onClick={onBtnClick} >secondary</Button>
      <Button color="info" onClick={onBtnClick} >info</Button>
      <Button color="danger" onClick={onBtnClick} >danger</Button>
      <Button color="success" onClick={onBtnClick} >success</Button>
      <Button color="warning" onClick={onBtnClick} >warning</Button>
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
