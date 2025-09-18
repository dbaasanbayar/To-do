export function Button(props) {
  const { HandleOnClicK } = props;
  return <button onClick={HandleOnClicK}>Add</button>;
}
