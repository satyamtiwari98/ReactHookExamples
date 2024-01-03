import { useState } from "react";
import { useLocalstorage } from "../../Custom_Hooks/UseLocalstorage";

const UseLocalstoragePage = () => {
  const [value, setValue] = useState("");

  const { setItem, getItem, removeItem } = useLocalstorage("value");
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="mx-2 mb-10 text-3xl font-bold">useLocalStorage</h2>
      </div>
      <div>
        <input
          className=" mx-2 mb-4 rounded-r-3xl border-2 border-orange-700 hover:bg-orange-400"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => setItem(value)}
          className="bg-red-700 rounded-lg mx-2 p-4"
        >
          Set
        </button>
        <button
          onClick={() => console.log(getItem())}
          className="bg-red-700 rounded-lg mx-2 p-4"
        >
          Get
        </button>
        <button
          onClick={() => removeItem()}
          className="bg-red-700 rounded-lg mx-2 p-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default UseLocalstoragePage;
