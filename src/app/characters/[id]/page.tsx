import Link from "next/link";
import { notFound } from "next/navigation";
import { characters } from "@/data/characters";
import { SkinViewer } from "@/components/skin-viewer";
import { CharacterTabs } from "@/components/character-tabs";
import { BuildTab } from "@/components/build-tab";
import { ProfileTab } from "@/components/profile-tab";
import { SkillsTab } from "@/components/skills-tab";
import { StatsTab } from "@/components/stats-tab"; // Edit 1
import { getDetails } from "@/data/details"; // Edit 1
import { CustomBuildProvider } from "@/components/custom-build";

// Tells Next.js to build one page for every character
export function generateStaticParams() {
  return characters.map((c) => ({ id: c.id }));
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Read the id from the address, for example "arham"
  const { id } = await params;

  // Find that character in your data. Show a 404 page if it doesn't exist
  const char = characters.find((c) => c.id === id);
  if (!char) notFound();

  // Edit 2: load this character's extra data (stats, and more later)
  const extra = getDetails(char.id);
  const ATK_KEY = {
    "Melee ATK": "meleeAtk",
    "Ranged ATK": "rangedAtk",
    "Magic ATK": "magicAtk",
  } as const;
  const basicAtk = char.baseAttack?.[0]
    ? ATK_KEY[char.baseAttack[0]]
    : undefined;

  return (
    <div className="space-y-6">
      <Link
        href="/characters"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← All Vanguard
      </Link>

      {/* Header: rarity icon, name, and cost */}
      <div className="flex items-end gap-4">
        <img
          src={`/icons/rarity/${char.rarity.toLowerCase()}.webp`}
          alt={char.rarity}
          className="h-16 w-16 object-contain"
        />
        <div>
          <p className="text-sm text-muted-foreground">{char.title}</p>
          <h1 className="text-3xl font-bold tracking-tight">{char.name}</h1>
        </div>
        <div className="ml-auto flex flex-col items-end leading-none">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Cost
          </span>
          <span className="text-4xl font-light tabular-nums">
            {char.cost.padStart(2, "0")}
          </span>
        </div>
      </div>

      <CustomBuildProvider>
        <CharacterTabs
          tabs={[
            // Edit 3: this is the Stats line that changed
            {
              key: "build",
              label: "Build",
              content: <BuildTab details={extra} charId={char.id} />,
            },
            {
              key: "profile",
              label: "Profile",
              content: <ProfileTab char={char} details={extra} />,
            },
            {
              key: "skills",
              label: "Skills",
              content: <SkillsTab details={extra} />,
            },
            {
              key: "stats",
              label: "Stats",
              content: (
                <StatsTab
                  details={extra}
                  startGrade={char.rarity}
                  basicAtk={basicAtk}
                  characterId={char.id}
                />
              ),
            },
            {
              key: "skin",
              label: "Skin",
              content: <SkinViewer char={char} skins={extra.skins} />,
            },
          ]}
        />
      </CustomBuildProvider>
    </div>
  );
}
