import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <button className="relative bg-transparent border border-border rounded-full px-6 py-3 mt-4 overflow-hidden group animated-border">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{overflow: "visible"}}
      >
        <path
          d="M 30, 1 A 29, 29 0 0 0 1, 30 L 1, 30 A 29, 29 0 0 0 30, 59 L 170"
          fill="none"
          stroke="var(--color-primary)"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative flex items-center gap-2 justify-center">
        <Download size={20} />
        Download
      </span>
    </button>
  );
};
