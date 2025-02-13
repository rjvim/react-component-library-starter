import type { Config } from "tailwindcss";
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from "tailwindcss-scoped-preflight";

export default {
  prefix: "el-",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".twp", {
        except: ".no-twp",
      }),
    }),
  ],
} satisfies Config;
