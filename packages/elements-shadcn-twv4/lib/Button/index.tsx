import React from "react";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="twps sdel-rounded sdel-bg-cyan-600 sdel-px-2 sdel-py-1 sdel-text-xs sdel-font-semibold sdel-text-white sdel-shadow-sm sdel-hover:bg-cyan-500 focus-visible:sdel-outline focus-visible:sdel-outline-2 focus-visible:sdel-outline-offset-2 focus-visible:sdel-outline-cyan-600"
    >
      {JSON.stringify(props)}
    </button>
  );
}

export { Button };
