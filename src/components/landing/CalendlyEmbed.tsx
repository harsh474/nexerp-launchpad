import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export const CalendlyEmbed = ({ url, height = 700 }: CalendlyEmbedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget rounded-xl overflow-hidden border border-border bg-background"
      data-url={url}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
};
