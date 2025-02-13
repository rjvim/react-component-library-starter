import React from "react";

function Badge(
  props: {
    children?: React.ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  return (
    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-500/10">
      {JSON.stringify(props)}
    </span>
  );
}

export { Badge };
