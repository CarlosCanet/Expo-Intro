export const colors = {
  accent: "#ea7a53",
  background: "#fff9e3",
  border: "rgba(0, 0, 0, 0.1)",
  card: "#fff8e7",
  destructive: "#dc2626",
  foreground: "#081126",
  muted: "#f6eecf",
  mutedForeground: "rgba(0, 0, 0, 0.6)",
  primary: "#081126",
  subscription: "#8fd1bd",
  success: "#16a34a",
} as const

export const spacing = {
  0: 0,
  1: 4,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  2: 8,
  20: 80,
  24: 96,
  3: 12,
  30: 120,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
} as const

export const components = {
  tabBar: {
    height: spacing[18],
    horizontalInset: spacing[5],
    iconFrame: spacing[12],
    itemPaddingVertical: spacing[2],
    radius: spacing[8],
  },
} as const

export const theme = {
  colors,
  components,
  spacing,
} as const
