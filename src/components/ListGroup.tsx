import { Fragment, useState } from "react";

interface Props{
    items: string[];
    heading:string;
}

function ListGroup({items, heading}:Props) {

  const handleClick = (event: MouseEvent) => console.log(event);
  //   let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      {!items.length ? (
        <>
          <h1>no items found</h1>
        </>
      ) : (
        <>
          <h1>{heading}</h1>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                key={item}
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => setSelectedIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
  if (!items.length) {
    return (
      <div>
        <h1>no items found</h1>
      </div>
    );
  }

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((i) => (
          <li className="list-group-item" key={i}>
            {i}
          </li>
        ))}
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
