import { memo } from "react";

type AdFormat =
  | "leaderboard"      // 728x90 desktop, responsive mobile banner
  | "billboard"        // 970x250 large top
  | "rectangle"        // 300x250 in-content
  | "large-rectangle"  // 336x280
  | "skyscraper"       // 300x600 sidebar
  | "mobile-banner"    // 320x50/100
  | "in-article"       // fluid in-article
  | "footer";          // wide footer banner

interface AdSlotProps {
  format?: AdFormat;
  label?: string;
  slotId?: string;
  className?: string;
  /** Hide on mobile (e.g. sidebar/skyscraper) */
  desktopOnly?: boolean;
  /** Hide on desktop (e.g. mobile-only banners) */
  mobileOnly?: boolean;
}

/**
 * Reusable, CLS-safe ad placeholder.
 * - Reserves fixed height per format to avoid layout shift
 * - Uses content-visibility for off-screen perf
 * - Marked with data-ad-slot for easy programmatic targeting (AdSense, GAM, etc.)
 */
const sizeMap: Record<AdFormat, { h: string; max: string; mobileH?: string }> = {
  leaderboard:        { h: "h-[90px]",  max: "max-w-[728px]", mobileH: "h-[100px]" },
  billboard:          { h: "h-[250px]", max: "max-w-[970px]", mobileH: "h-[100px]" },
  rectangle:          { h: "h-[250px]", max: "max-w-[300px]" },
  "large-rectangle":  { h: "h-[280px]", max: "max-w-[336px]" },
  skyscraper:         { h: "h-[600px]", max: "max-w-[300px]" },
  "mobile-banner":    { h: "h-[100px]", max: "max-w-[320px]" },
  "in-article":       { h: "h-[280px]", max: "max-w-[680px]" },
  footer:             { h: "h-[120px]", max: "max-w-[970px]", mobileH: "h-[100px]" },
};

export const AdSlot = memo(
  ({
    format = "leaderboard",
    label = "Advertisement",
    slotId,
    className = "",
    desktopOnly = false,
    mobileOnly = false,
  }: AdSlotProps) => {
    const { h, max, mobileH } = sizeMap[format];

    const visibility = desktopOnly
      ? "hidden md:flex"
      : mobileOnly
      ? "flex md:hidden"
      : "flex";

    return (
      <div
        className={`w-full ${visibility} justify-center my-4 ${className}`}
        aria-label={label}
        role="complementary"
      >
        <div
          data-ad-slot={slotId ?? format}
          data-ad-format={format}
          style={{ contentVisibility: "auto" }}
          className={`w-full ${max} ${mobileH ?? h} md:${h} bg-muted/60 border border-dashed border-border rounded-md flex flex-col items-center justify-center text-muted-foreground`}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
            {label}
          </span>
          <span className="text-[10px] opacity-60 mt-1">{format}</span>
        </div>
      </div>
    );
  }
);

AdSlot.displayName = "AdSlot";
