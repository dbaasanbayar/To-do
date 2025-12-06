export function Button(props) {
  const { HandleOnClicK } = props;
  return (
    <button
      className={`border-2 rounded font-semibold border-blue-600 hover:bg-blue-400 transition-all text-blue-700 duration-600 hover:text-white cursor-pointer py-1 px-2`}
      onClick={HandleOnClicK}
    >
      Add
    </button>
  );
}
