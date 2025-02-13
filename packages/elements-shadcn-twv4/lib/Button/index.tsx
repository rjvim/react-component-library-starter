import React from "react";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="eln:rounded eln:bg-cyan-600 eln:px-2 eln:py-1 eln:text-xs eln:font-semibold eln:text-white eln:shadow-sm eln:hover:bg-cyan-500 eln:focus-visible:outline eln:focus-visible:outline-offset-2 eln:focus-visible:outline-cyan-600"
    >
      {JSON.stringify(props)}
    </button>
  );
}

export { Button };
