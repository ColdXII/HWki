// Every grade a unit can be upgraded to
export const GRADES = [
  "B",
  "A",
  "S",
  "SS",
  "EX",
  "EX1",
  "EX2",
  "EX3",
  "EX4",
  "EX5",
  "EX6",
] as const;
export type Grade = (typeof GRADES)[number];

export type SkinSource = {
  type: "shop" | "battlepass" | "event" | "exchange" | "story" | "other";
  price?: number;
  label?: string;
  available?: boolean;
  note?: string;
};

export type Skin = {
  id: string;
  name: string;
  portrait?: string;
  fullBody: string;
  fullBodyCensored?: string;
  limited?: boolean;
  sources?: SkinSource[];
  pv?: PvLink[];
};

export type StigmaSetData = Omit<StigmaSet, "grade">;

export type StatBlock = {
  str: number;
  tec: number;
  int: number;
  vit: number;
  agi: number;
  meleeAtk: number;
  rangedAtk: number;
  magicAtk: number;
  allAtk: number;
  maxHp: number;
  spd: number;
  startAp: number;
  apRecovery: number;
  accuracy: number;
  evade: number;
  critRate: number;
  critDmg: number;
  slashBoost: number;
  pierceBoost: number;
  crushBoost: number;
  heatBoost: number;
  coldBoost: number;
  electricBoost: number;
  immaterialBoost: number;
  poisonBoost: number;
  elementalBoost: number;
  slashDef: number;
  pierceDef: number;
  crushDef: number;
  heatDef: number;
  coldDef: number;
  electricDef: number;
  immaterialDef: number;
  poisonDef: number;
  blockChance: number;
};

export const elementalBoost = [
  "slashBoost",
  "pierceBoost",
  "crushBoost",
  "heatBoost",
  "coldBoost",
  "electricBoost",
  "poisonBoost",
  "immaterialBoost",
] as const;

export const physicalDef = ["slashDef", "pierceDef", "crushDef"] as const;
export const elementsDef = [ "heatDef", "coldDef", "electricDef", "poisonDef", "immaterialDef"] as const;
export const allAtk = ["meleeAtk", "rangedAtk", "magicAtk"] as const;
export const allDef = ["slashDef", "pierceDef", "crushDef", "heatDef", "coldDef", "electricDef", "poisonDef", "immaterialDef"] as const;

export const STAT_KEYS = [
  "str",
  "tec",
  "int",
  "vit",
  "agi",
  "meleeAtk",
  "rangedAtk",
  "magicAtk",
  "allAtk",
  "maxHp",
  "spd",
  "startAp",
  "apRecovery",
  "accuracy",
  "evade",
  "critRate",
  "critDmg",
  "formationCost",
  "weakSpot",
  "weakAng",
  "aggroAdj",
  "knockbackRes",
  "nonAttrDef",
  "slashBoost",
  "pierceBoost",
  "crushBoost",
  "heatBoost",
  "coldBoost",
  "electricBoost",
  "poisonBoost",
  "immaterialBoost",
  "elementalBoost",

  "slashDef",
  "pierceDef",
  "crushDef",
  "heatDef",
  "coldDef",
  "electricDef",
  "poisonDef",
  "immaterialDef",
  "physicalDef",
  "elementsDef",
  "allDef",

  "basicAttackDmg",
  "combatSkillDmg",
  "counterattackDmg",
  "supportAttackDmg",
  "supportCounterattackDmg",
  "responseDmg",

  "additionalSlashDmg",
  "additionalPierceDmg",
  "additionalPoisonDmg",
  "additionalImmaterialDmg",
  "additionalDmgBoost",
  
  "finalDmg",
  "blockChance",
] as const;
export type StatKey = (typeof STAT_KEYS)[number];

export type TraitEffect = {
  stat: StatKey;
  type: "flat" | "percent"; 
  value: number;
  battleOnly?: boolean;
  condition?: "maxAffection";
  maxStacks?: number;
  stackKey?: string;
  stackLabel?: string;
};

export type Trait = {
  id: string;
  name: string;
  kind: "unique" | "general";
  grade?: number;
  category?: string[];
  categories?: string[];
  icon?: string;
  description?: string;
  effects: TraitEffect[];
  flavor?: string;
};

export type GradeStats = { lv1: StatBlock; lv60: StatBlock };

export type BasicKey = "str" | "tec" | "int" | "vit" | "agi";
export type BasicStats = Record<BasicKey, number>;

export type CharacterDetails = {
  basic?: BasicStats;

  gradeGains?: Partial<Record<Grade, Partial<BasicStats>>>;

  traits?: string[];

  manual?: {
    spd?: number;
    startApSeen?: { value: number; grade: Grade };
  };

  skins?: Skin[];
  profile?: Profile;
  gifts?: LikedGift[];
  skills?: Skill[];

  stats?: Partial<Record<Grade, GradeStats>>;

  weaponType?: string;
  builds?: Build[];
  demiGod?: DemiGod;
};

// ===== WEAPONS =====
export const WEAPON_TYPES = [
  "One-handed Sword",
  "Twin Swords",
  "One-handed Sword & Shield",
  "Club & Shield",
  "Two-handed Sword",
  "Torturas",
  "Dual Pistols",
  "Rifle",
  "Staff",
  "Arcane Orb",
  "Mana Shard",
  "Calculation Unit",
  "Two-handed Blunt",
  "Ancient Core",
] as const;
export type WeaponType = (typeof WEAPON_TYPES)[number];

export type LevelValue = { lv1: number; lv60: number };

export const WEAPON_GRADES = ["A", "S", "SS", "EX"] as const;
export type WeaponGrade = (typeof WEAPON_GRADES)[number];

export type WeaponStat = {
  stat: StatKey;
  type: "flat" | "percent";
  value: LevelValue;
};

export type WeaponUniqueEffect = {
  stat: StatKey;
  type: "flat" | "percent";
  value?: number;
  valueKey?: string;
  battleOnly?: boolean;
  condition?: "maxAffection";
  maxStacks?: number;
  stackKey?: string;
  stackLabel?: string;
};

export type Weapon = {
  id: string;
  name: string;
  grade: WeaponGrade;
  type: WeaponType;
  icon?: string;

  mainStat: WeaponStat | WeaponStat[];
  subStats?: WeaponStat[];

  unique?: {
    name: string;
    description: string;
    values?: Record<string, number[]>;
    effects?: WeaponUniqueEffect[];
  };

  exclusive?: {
    characterId: string;
    name: string;
    description: string;
    effects?: TraitEffect[];
  };
};

// ===== STIGMAS =====
export type StigmaSlot = "top" | "left" | "bottom" | "right";

// Stigma grades, from green (A) to yellow (EX)
export const STIGMA_GRADES = ["SS", "EX"] as const;
export type StigmaGrade = (typeof STIGMA_GRADES)[number];

export const STIGMA_MAX_LEVEL = 25;

// A stat with two numbers: at Lv 1 and at Lv 25, e.g. 5.5% (17.5%)
export type StartMax = { lv1: number; lv25: number };

// One piece of a set (Top, Left, Right or Bottom)
export type StigmaPiece = {
  name?: string;
  icon?: string;
  mainStat: {
    stat: StatKey | StatKey[];
    type: "flat" | "percent";
    // Different numbers for each grade. Add only the grades you have.
    value: Partial<Record<StigmaGrade, StartMax>>;
  };
};

// A full set, e.g. Reckoning of Sin. The 2-set and 4-set bonuses are the same at every grade.
export type StigmaSet = {
  id: string;
  name: string;
  grade: StigmaGrade;
  icon?: string;
  twoSet: { description: string; effects: TraitEffect[] };
  fourSet: { description: string; effects: TraitEffect[] };
  pieces: Record<StigmaSlot, StigmaPiece>;
};

// One piece a character wears in a build
export type EquippedStigma = {
  set: string; // id from stigmas.ts
  slot: StigmaSlot;
  grade?: StigmaGrade; // can differ from piece to piece
  level: number; // 1 to 25
  subs: TraitEffect[]; // the 3 substats
};

/// Stats a substat can roll on: everything except attribute stats (Boost and DEF)
export const SUBSTAT_STATS = [
  "meleeAtk",
  "rangedAtk",
  "magicAtk",
  "maxHp",
  "spd",
  "startAp",
  "apRecovery",
  "accuracy",
  "evade",
  "critRate",
  "critDmg",
] as const satisfies readonly StatKey[];

// Substats that roll as flat numbers and not percent
export const SUBSTAT_FLAT: StatKey[] = ["startAp"];

// Rolls can repeat, so one piece can have the same substat 3 times.
export const SUBSTAT_RANGES: Partial<
  Record<StatKey, { min: number; max: number }>
> = {
  apRecovery: { min: 1, max: 2 },
  critDmg: { min: 6, max: 10 },
};
export const SUBSTAT_DEFAULT_RANGE = { min: 3, max: 5 };

// Level of a main stat: a straight line from Lv 1 to Lv 25
export const stigmaValue = (v: StartMax, level: number) =>
  v.lv1 + ((v.lv25 - v.lv1) * (level - 1)) / (STIGMA_MAX_LEVEL - 1);

// ===== BUILDS =====
export type Build = {
  id: string;
  name: string; // e.g. "Build 1"
  recommended?: boolean; // shows a "Recommended" mark, opens by default
  note?: string; // short text from the guide author
  weapon?: { id: string; level: number; dupe: number }; // level 1 to 60, dupe 1 to 5
  stigmas: EquippedStigma[]; // 4 of them, one for each slot
  generalTraits: string[]; // up to 6 trait ids from traits.ts
  might?: BuildMight | BuildMight[]; // the Might Skill given by Demi-God Ascension, level 1 to 5
};

// The Profile tab: the facts shown on the encyclopedia's Profile screen
export type Profile = {
  age?: string; // text on purpose, in case a character's age isn't a plain number
  race?: string; // e.g. "Orke"
  homeland?: string; // e.g. "Orke Republic, Morrim Island"
  height?: string; // e.g. "189cm"
  birthday?: string; // e.g. "July 4th"
  bwh?: string; // e.g. "94(H)-55-100"
  story?: string; // the story text
  pv?: PvLink[];
};

export type SkillDamage = {
  stat: StatKey;
  percent: (number | null)[];
  damageType?: string;
  label?: string; // for example "Splash (3m)". Leave out to show "Damage"
};

// One skill, as shown on the Skills tab
export type Skill = {
  id: string;
  name: string;
  type: string; // "Active", "Passive"...
  ap?: number; // AP cost
  cooldown?: number; // in rounds
  icon?: string; // image path
  maxLevel?: number; // leave out for Lv 10. Use 1 for skills that cannot level up
  // The text. {damage} becomes the percent for the chosen level.
  description: string;
  // Damage: which stat it scales from, and the percent for each level (Lv 1 first)
  damage?: SkillDamage | SkillDamage[];
  values?: Record<string, number[]>;
  flavor?: string; // the italic story line
  enchanted?: Partial<Omit<Skill, "id" | "enchanted">>;
};

// Gift grades (the color of the icon frame) and the value range of each
export const GIFT_GRADES = [
  "gray",
  "green",
  "blue",
  "purple",
  "yellow",
] as const;
export type GiftGrade = (typeof GIFT_GRADES)[number];

export const GIFT_RANGE: Record<GiftGrade, { min: number; max: number }> = {
  gray: { min: 10, max: 30 },
  green: { min: 20, max: 40 },
  blue: { min: 30, max: 50 },
  purple: { min: 50, max: 70 },
  yellow: { min: 100, max: 120 },
};

// A gift item. Its value is not here, because it depends on the character.
export type Gift = {
  id: string;
  name: string;
  grade: GiftGrade;
  icon?: string; // leave out to use /gifts/<id>.webp
};

// A gift a character likes, with the value they give it
export type LikedGift = {
  gift: string; // id from gifts.ts
  value: number; // must be inside the gift grade's range
  highlight?: boolean; // for the ones shown in bold on your sheet
};

// A Might Skill. The list is shared by all units, one is given at random (Lv 1 to 5).
export type MightSkill = {
  id: string;
  name: string;
  icon?: string;
  description: string; // {name} is replaced by the number for the chosen level
  values?: Record<string, number[]>; // 5 numbers per name, Lv 1 to Lv 5
  effects?: TraitEffect[]; // stat effects, if it has any
};

export type BuildMight = {
  id: string;
  level: number;       // 1 to 5
  optional?: boolean;  // shows an Optional badge
  note?: string;       // for example "Needs another unit to make it work"
};

// A unit's own Demi-God effect, for example Blade of Genesis. Its level comes from the EX rank.
export type DemiGodEffect = {
  name: string;
  icon?: string;
  description: string; // {name} is replaced by the number for the level
  values?: Record<string, (number | null)[]>; // 6 numbers per name, Lv 1 to Lv 6 (EX0 to EX5)
};

export type DemiGod = {
  effect?: DemiGodEffect;
  stats?: Partial<BasicStats>; // the basic stat change (waiting for your numbers)
  skills?: Skill[];
};

// EX0 to EX6 give Lv 1 to Lv 7
export const demiGodLevel = (grade: string) => {
  const i = ["EX", "EX1", "EX2", "EX3", "EX4", "EX5", "EX6"].indexOf(grade);
  return i < 0 ? 0 : i + 1;
};

export type PvSource = "youtube" | "x";

export type PvLink = {
  source: PvSource;
  url: string;       // full YouTube or X post URL
  title?: string;    // button label
};
