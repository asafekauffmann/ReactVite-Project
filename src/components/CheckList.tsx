
function Item({name, isPacked}: {name :string, isPacked: boolean}) {
  if (isPacked) {
    return <li className="item">{name} '✔'</li>
  }
  return <li className="item">{name}</li>
}

export default function CheckList() {
  
  return (
    <section>
      <h1>Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Modern style" />
        <Item isPacked={false} name="Market mode" />
      </ul>
    </section>
  );
}
