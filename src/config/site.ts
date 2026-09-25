export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Jujutsu School Wiki",
  shortName: "Jujutsu School",
  logoText: "JS",
  tagline: "Anomaly Guide, Ending & Tips",
  description: "Jujutsu School Wiki provides anomaly guides, walkthroughs, ending tips, visitor checks and gameplay resources for Roblox players exploring cursed school game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jujutsu-school-anomaly.wiki",
  supportEmail: "support@jujutsu-school-anomaly.wiki",
  gameUrl: "https://www.roblox.com/games/120468139832999/Jujutsu-School",
  heroVideoId: "hw6IaIGjR0U", // Jujutsu School (Anomaly) - Trailer
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/watch?v=hw6IaIGjR0U",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
