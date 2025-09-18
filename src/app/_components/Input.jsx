export function Input(props) {
  const { HandleOnChange, newTasks } = props;
  return (
    <input
      type="text"
      value={newTasks}
      placeholder=" Add a new task..."
      onChange={HandleOnChange}
      className="border-2"
    ></input>
  );
}
