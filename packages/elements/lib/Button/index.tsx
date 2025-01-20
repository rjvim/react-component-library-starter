import React from "react";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="el-rounded el-bg-cyan-600 el-px-2 el-py-1 el-text-xs el-font-semibold el-text-white el-shadow-sm el-hover:bg-cyan-500 focus-visible:el-outline focus-visible:el-outline-2 focus-visible:el-outline-offset-2 focus-visible:el-outline-cyan-600"
    >
      {JSON.stringify(props)}
    </button>
  );
}

export { Button };
