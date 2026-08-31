import { cn } from "@/lib/cn";
import Image from "next/image";

const RATIO = 1931 / 286;

type Props = {
  className?: string;
  height?: number;
  priority?: boolean;
};

export function Logo({ className, height = 28, priority = false }: Props) {
  const width = Math.round(height * RATIO);

  return (
    <Image
      src="/thedobra-logo.png"
      alt="TheDobra"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
      style={{ height, width }}
    />
  );
}
