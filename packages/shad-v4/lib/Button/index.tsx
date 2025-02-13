import React from "react";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="rounded bg-cyan-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
    >
      {JSON.stringify(props)}
    </button>
  );
}

export { Button };
