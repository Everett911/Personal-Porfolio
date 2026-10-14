// Single source for project data: the homepage cards and the
// /projects/[slug] case-study pages both render from this list.

import type { StaticImageData } from "next/image";
import digiExpressImage from "@/assets/digi-express.png";
import weatherAppImage from "@/assets/weather-app.png";

export interface Challenge {
  title: string;
  body: string;
}

export interface StackItem {
  name: string;
  why: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One line for the card and social previews. */
  tagline: string;
  /** Two or three sentences for the card. */
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  tags: string[];
  liveUrl?: `https://${string}`;
  repoUrl?: `https://${string}`;
  /** Rough build window, e.g. "Jul – Oct 2026". */
  period: string;
  type: string;
  overview: string[];
  features: string[];
  stack: StackItem[];
  challenges: Challenge[];
  learned: string[];
  next: string[];
}

export const projects: Project[] = [
  {
    slug: "digi-express",
    title: "Digi-Express",
    tagline: "A full-stack fashion and homeware store with payments, accounts and an admin dashboard.",
    summary:
      "My biggest project so far: a working online store where shoppers search a catalogue, pay with Stripe and track their orders, and an admin manages products and orders from a dashboard.",
    image: digiExpressImage,
    imageAlt: "Digi-Express homepage: navigation for Men, Women, Kids and Homewares above a “Fresh Arrivals, Freshly Discounted” banner",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Better Auth"],
    liveUrl: "https://digi-express-alpha.vercel.app/",
    repoUrl: "https://github.com/Everett911/digi-express",
    period: "Jul – Oct 2026",
    type: "Full-stack web app · Solo project",
    overview: [
      "I wanted a project that forced me past the frontend. An online store touches nearly everything a real product needs: a database, sign-in, payments, emails, an admin area and pages that still have to look good on a phone.",
      "I built Digi-Express on my own with the Next.js App Router. It is a practice store, so payments run in Stripe's test mode, but every flow works end to end — from searching for a product to receiving the order confirmation email.",
    ],
    features: [
      "Catalogue with filters for size, colour, brand, price and department, plus search that forgives typos and plurals",
      "Accounts with email verification, and Google or GitHub sign-in",
      "Cart that keeps one line per size and colour, with a delivery option for each line",
      "Checkout with Stripe Payment Elements; a webhook creates the order and sends a confirmation email",
      "Order history with status, and a “buy again” button",
      "Admin dashboard for sales, products (with photo uploads), orders and customers",
    ],
    stack: [
      { name: "Next.js 16 (App Router)", why: "Server components and server actions let me query the database directly from pages without building a separate API." },
      { name: "PostgreSQL + Prisma", why: "Products, carts and orders are relational data. Prisma gave me typed queries and migrations." },
      { name: "Better Auth", why: "Email verification and social sign-in without writing session handling myself." },
      { name: "Stripe", why: "The standard for card payments, with a test mode that behaves like the real thing." },
      { name: "Resend", why: "Sends the verification and order-confirmation emails." },
      { name: "Zod + Vitest", why: "Zod validates form input on the server; Vitest covers the checkout totals." },
    ],
    challenges: [
      {
        title: "Making search understand what people type",
        body: "A plain “contains” match isn't good enough for a store: “men” also matches women's products, and “shoes” misses items named “Shoe”. I rewrote it to split the query into words, drop filler words like “the” and “for”, reduce plurals to a shared stem, and match on word boundaries in Postgres. Now “best shoes for men” returns men's shoes, and “snekers” still finds sneakers.",
      },
      {
        title: "Never trusting prices from the browser",
        body: "It's easy to send the cart total from the browser, but anyone can edit that number before paying. In Digi-Express the server recalculates the total from database prices when it creates the Stripe payment, prices are stored as whole cents to avoid rounding errors, and the order is only created by Stripe's signed webhook after the payment actually succeeds.",
      },
      {
        title: "Getting auth working in production",
        body: "Sign-in worked locally and broke on Vercel. Over a long day I worked through generated Prisma client imports, a missing trusted origin, a 403 from the auth route, and Next.js 16 renaming middleware to proxy. My commit history from that day is honestly messy — it taught me to read the full error and the docs before trying the next guess.",
      },
      {
        title: "Keeping the admin area safe",
        body: "Hiding the admin link isn't security. Every admin server action checks the session's role itself, and the role can't be changed from inside the app.",
      },
    ],
    learned: [
      "How data flows through a real app: database → server → page → form → server action → database.",
      "Payments and auth are mostly about deciding what to trust. The server owns prices, roles and order creation.",
      "Writing tests for the code that handles money gave me confidence to refactor it.",
      "Mobile layout needs testing on a real phone, not just a narrow browser window.",
    ],
    next: [
      "Add end-to-end tests for the checkout flow",
      "Product reviews and a wishlist",
      "Improve image loading on the catalogue page",
    ],
  },
  {
    slug: "weather-app",
    title: "Weather App",
    tagline: "A map-based weather dashboard with hourly and daily forecasts and air quality.",
    summary:
      "Pick any place on the map or search for a city to see current conditions, an hourly and 8-day forecast, air quality and weather map layers.",
    image: weatherAppImage,
    imageAlt: "Weather App dashboard: a cloud-cover map of the Philippines, current weather, hourly and daily forecasts, and an air pollution panel",
    tags: ["React", "TypeScript", "TanStack Query", "Zod", "Leaflet", "shadcn/ui", "Tailwind CSS"],
    liveUrl: "https://weather-app-three-topaz-49.vercel.app/",
    repoUrl: "https://github.com/Everett911/Weather-App",
    period: "Mar 2026, updated Oct 2026",
    type: "Frontend web app · Solo project",
    overview: [
      "This was the project where I learned to work with data I don't control. Weather APIs return large, deeply nested responses, and the app has to stay usable while requests are loading or failing.",
      "You can click anywhere on the map or search for a city. The side panel then shows current conditions, forecasts, air pollution and details like wind, UV index, pressure, sunrise and sunset.",
    ],
    features: [
      "Interactive Leaflet map: click a location or search for a city",
      "Current weather, 48-hour hourly forecast and 8-day daily forecast",
      "Air quality index with a breakdown of each pollutant",
      "Map layers for clouds, precipitation, temperature, pressure and wind",
      "Loading skeletons, error recovery and a light/dark theme",
    ],
    stack: [
      { name: "React + TypeScript (Vite)", why: "A fast single-page app; no server was needed." },
      { name: "TanStack Query", why: "Caching and loading/error states for every request, so revisiting a location doesn't refetch it." },
      { name: "Zod", why: "Validates every API response before the UI uses it, so a surprise in the data fails loudly instead of rendering “undefined”." },
      { name: "Leaflet + MapTiler", why: "Free, flexible maps with custom tile layers." },
      { name: "shadcn/ui + Tailwind CSS", why: "Accessible components I could restyle quickly." },
    ],
    challenges: [
      {
        title: "Using fewer paid API calls",
        body: "The first version called OpenWeather for everything, which uses up the free limit quickly. In my October update I moved the forecast and air-quality data to Open-Meteo, which needs no API key, and kept OpenWeather only for city search and the map layers. Open-Meteo returns data as columns rather than rows, so I wrote a small mapping step that turns it back into the shape my cards already expected. That meant I didn't have to rewrite the UI.",
      },
      {
        title: "Trusting API data less",
        body: "Without validation, one missing field in a response can crash a whole card. With Zod schemas, bad data is caught at the edge, in one place, with a clear error. I also filter out pollutants that a station doesn't measure, instead of showing them as zero.",
      },
      {
        title: "Loading and error states",
        body: "Each location fires several requests that finish at different times. Skeleton components that match each card's layout stop the page from jumping while data loads, and an error boundary lets a failed card retry on its own instead of breaking the whole page.",
      },
    ],
    learned: [
      "Validating at the boundary: parse external data once, then trust its types everywhere else.",
      "Server state (API data) and UI state are different problems; TanStack Query handles the first.",
      "Adding an adapter layer is often cheaper than rewriting the components when a data source changes.",
    ],
    next: [
      "Let users switch between °C and °F",
      "Save favourite locations",
      "Add a README with setup steps and screenshots",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
