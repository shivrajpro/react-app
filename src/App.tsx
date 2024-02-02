import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

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

  const onBtnClick = (evt: MouseEvent) => {
    console.log("evt", evt);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  const toggleAlert = () => {
    setAlertVisibility((status) => !status);
  };
  return (
    <div>
      {alertVisible && <Alert children={"new alert"} closeClicked={toggleAlert}  ></Alert>}
      <Button color="primary" onClick={toggleAlert}>
        primary
      </Button>
      <Button color="secondary" onClick={toggleAlert}>
        secondary
      </Button>
      <Button color="info" onClick={toggleAlert}>
        info
      </Button>
      <Button color="danger" onClick={toggleAlert}>
        danger
      </Button>
      <Button color="success" onClick={toggleAlert}>
        success
      </Button>
      <Button color="warning" onClick={toggleAlert}>
        warning
      </Button>
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
