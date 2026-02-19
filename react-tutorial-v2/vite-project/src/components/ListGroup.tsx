function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>Lists</h1>
        <p>No Item Found.</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
