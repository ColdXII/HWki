# HWki

An unofficial fan wiki for **Horizon Walker**: vanguards, weapons, traits, stigmas, gifts and redeem codes. Built with Next.js and exported as a static site, so it can be hosted for free.

> Fan project (Vibe Coding). It is not affiliated with the game's developer or publisher. Game names, art and text belong to their owners.

## Features

- **Vanguards**: searchable list with filters (rarity, cost, base ATK, damage type), sorting, and a toggle for B units
- **Character pages** with tabs:
  - **Build**: preset builds (weapon, 4 stigmas, general traits, Might Skills) with a **Custom** build where visitors swap pieces
  - **Profile**: facts, story, exclusive weapon, liked gifts, unique traits
  - **Skills**: skills with level selector, damage types in color, Demi-God Ascension toggle
  - **Stats**: Pure Stats and per-build stats, grade (B to EX6) and level (1 to 60), radar chart, Combat mode
  - **Skin**: skin viewer with zoom, censored versions and how to get each skin
- **Weapons**, **Traits**, **Stigma** and **Gifts** pages with search and filters
- **Redeem codes** with automatic expiry and tap to copy, also shown on the Home page
- **Home page** banner carousel that reads every `.webp` in `public/banners`

## Tech stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · shadcn/ui · lucide-react

## Getting started

Needs **Node.js 20.9 or newer**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in the out/ folder
```

## Project structure

```
src/
  app/            pages (home, characters, weapons, traits, stigma, gifts, codes)
  components/     tabs, cards, filter panel, carousel
  data/           all the wiki data (see below)
  lib/calc-stats.ts   the stat calculator
public/           images
```

### Data files (`src/data`)

| File | What it holds |
|---|---|
| `types.ts` | All types and shared constants (grades, stat keys, ranges) |
| `characters.ts` | One entry per vanguard for the list: name, rarity, cost, title, images |
| `details/<id>.ts` | The heavy data for one vanguard: basic stats, grade gains, traits, skills, builds, skins, profile, gifts, Demi-God |
| `details/index.ts` | Connects each id to its details file |
| `traits.ts` | Every trait, written once and shared |
| `weapons.ts` | Every weapon |
| `stigmas.ts` | Stigma sets (SS and EX versions are separate entries) |
| `gifts.ts` | Gift items and their grades |
| `mightSkills.ts` | The shared Might Skill list |
| `codes.ts` | Redeem codes |

### Image paths

All images are optional. A missing file shows a letter placeholder instead of a broken icon.

| Image | Path |
|---|---|
| Portrait / full body | `/characters/<id>-portrait.webp`, `/characters/<id>-full.webp` |
| Rarity icons | `/icons/rarity/ex.webp`, `ss.webp`, `s.webp`, `a.webp`, `b.webp` |
| Stat icons | `/icons/stats/<stat>.webp` (for example `meleeAtk.webp`) |
| Stigma pieces | `/stigmas/<set-id>-<slot>.webp` (`top`, `left`, `right`, `bottom`) |
| Weapons | the `icon` field in `weapons.ts` |
| Skills | the `icon` field in `<character-id>.ts` |
| Traits | the `icon` field in `<traits-id>.ts` |
| Gifts | `/icons/gifts/<gift-id>.webp` |
| Might Skills | `/icons/might/<id>.webp` |
| Demi-God effects | the `icon` field in `<character-id>.ts` |
| Banners | `/banners/*.webp` |

## How stats are calculated

The calculator (`src/lib/calc-stats.ts`) was worked out from in-game screenshots, so it can be off for some units.

- ATK, Evade and Accuracy: basic stat × a level multiplier (1 at Lv 1, 12.8 at Lv 60)
- Max HP: Vitality × a level multiplier (5 at Lv 1, 64 at Lv 60)
- All percent bonuses are added together, then applied once
- Weapon ATK is multiplied by (basic stat ÷ 10) and added before the percents
- Crit Rate and Crit DMG add as points to 10 and 150
- **Pure Stats**: no weapon and no general traits; unique traits and max affection count
- **Build stats**: adds the build's weapon, stigmas and general traits
- **Combat mode**: also counts battle-only effects and stigma set bonuses

## Deploying

The site is a static export (`output: "export"` in `next.config.ts`).

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variable | `NODE_VERSION` = `20` (or newer) |

## License

The code is released under the [MIT License](LICENSE).

The MIT license covers the code only. Game names, art, icons, text and data belong to their owners and are not covered by it.

## Work In Progress

- Adding Missing Icon.
- Effect Page
- Add Stigma, Some Trait & Demigod stat to stats calculator
- UI for Mobile
