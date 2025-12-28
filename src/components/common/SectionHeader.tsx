interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader = ({ badge, title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? "bg-accent-foreground/10 text-accent-foreground" 
            : "bg-accent/10 text-accent"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-accent-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
          light ? "text-accent-foreground/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
