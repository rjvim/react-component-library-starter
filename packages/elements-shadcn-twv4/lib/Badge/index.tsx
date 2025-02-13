import React from "react";

function Badge(
  props: {
    children?: React.ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  return (
    <span className="twps sdel-inline-flex sdel-items-center sdel-rounded-md sdel-bg-red-50 sdel-px-2 sdel-py-1 sdel-text-xs sdel-font-medium sdel-text-red-600 sdel-ring-1 sdel-ring-inset sdel-ring-red-500/10">
      {JSON.stringify(props)}
    </span>
  );
}

export { Badge };
