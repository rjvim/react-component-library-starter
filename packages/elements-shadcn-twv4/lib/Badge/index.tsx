import React from "react";

function Badge(
  props: {
    children?: React.ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  return (
    <span className="eln:inline-flex eln:items-center eln:rounded-md eln:bg-red-50 eln:px-2 eln:py-1 eln:text-xs eln:font-medium eln:text-red-600 eln:ring-1 eln:ring-inset eln:ring-red-500/10">
      {JSON.stringify(props)}
    </span>
  );
}

export { Badge };
