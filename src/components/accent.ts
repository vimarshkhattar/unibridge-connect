export type Accent = "primary" | "violet" | "mint" | "amber";

export const accentSurface: Record<Accent, string> = {
  primary: "bg-primary/10 text-primary",
  violet: "bg-violet/10 text-violet",
  mint: "bg-mint/15 text-mint-foreground",
  amber: "bg-amber/20 text-amber-foreground",
};

export const accentSolid: Record<Accent, string> = {
  primary: "bg-primary text-primary-foreground",
  violet: "bg-violet text-violet-foreground",
  mint: "bg-mint text-mint-foreground",
  amber: "bg-amber text-amber-foreground",
};
