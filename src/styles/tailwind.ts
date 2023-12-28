import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";

export const useAppStyle = () => resolveConfig(config);
