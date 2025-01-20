import React from "react";

function Badge(
  props: {
    children?: React.ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  return (
    <span className="el-inline-flex el-items-center el-rounded-md el-bg-red-50 el-px-2 el-py-1 el-text-xs el-font-medium el-text-red-600 el-ring-1 el-ring-inset el-ring-red-500/10">
      {JSON.stringify(props)}
    </span>
  );
}

export { Badge };
