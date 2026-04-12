import { icons } from "./icons"

export const tabs: AppTab[] = [
  { icon: icons.home, name: "index", title: "Home" },
  { icon: icons.wallet, name: "subscriptions", title: "Subscriptions" },
  { icon: icons.activity, name: "insights", title: "Insights" },
  { icon: icons.setting, name: "settings", title: "Settings" },
]

export const HOME_USER = {
  name: "Adrian | JS Mastery",
}

export const HOME_BALANCE = {
  amount: 2489.48,
  nextRenewalDate: "2026-03-18T09:00:00.000Z",
}

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
  {
    currency: "USD",
    daysLeft: 2,
    icon: icons.spotify,
    id: "spotify",
    name: "Spotify",
    price: 5.99,
  },
  {
    currency: "USD",
    daysLeft: 4,
    icon: icons.notion,
    id: "notion",
    name: "Notion",
    price: 12,
  },
  {
    currency: "USD",
    daysLeft: 6,
    icon: icons.figma,
    id: "figma",
    name: "Figma",
    price: 15,
  },
]

export const HOME_SUBSCRIPTIONS: Subscription[] = [
  {
    billing: "Monthly",
    category: "Design",
    color: "#f5c542",
    currency: "USD",
    icon: icons.adobe,
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    paymentMethod: "Visa ending in 8530",
    plan: "Teams Plan",
    price: 77.49,
    renewalDate: "2026-03-20T10:00:00.000Z",
    startDate: "2025-03-20T10:00:00.000Z",
    status: "active",
  },
  {
    billing: "Monthly",
    category: "Developer Tools",
    color: "#e8def8",
    currency: "USD",
    icon: icons.github,
    id: "github-pro",
    name: "GitHub Pro",
    paymentMethod: "Mastercard ending in 2408",
    plan: "Developer",
    price: 9.99,
    renewalDate: "2026-03-24T10:00:00.000Z",
    startDate: "2024-11-24T10:00:00.000Z",
    status: "active",
  },
  {
    billing: "Monthly",
    category: "AI Tools",
    color: "#b8d4e3",
    currency: "USD",
    icon: icons.claude,
    id: "claude-pro",
    name: "Claude Pro",
    paymentMethod: "Amex ending in 1010",
    plan: "Pro Plan",
    price: 20,
    renewalDate: "2026-03-27T10:00:00.000Z",
    startDate: "2025-06-27T10:00:00.000Z",
    status: "paused",
  },
  {
    billing: "Yearly",
    category: "Design",
    color: "#b8e8d0",
    currency: "USD",
    icon: icons.canva,
    id: "canva-pro",
    name: "Canva Pro",
    paymentMethod: "Visa ending in 7784",
    plan: "Yearly Access",
    price: 119.99,
    renewalDate: "2026-04-02T10:00:00.000Z",
    startDate: "2024-04-02T10:00:00.000Z",
    status: "cancelled",
  },
]
