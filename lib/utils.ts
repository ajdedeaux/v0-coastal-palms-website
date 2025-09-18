import clsx from "clsx"

// Simple replacement for tailwind-merge
function twMerge(classes: string) {
  return classes
}

export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs))
}
