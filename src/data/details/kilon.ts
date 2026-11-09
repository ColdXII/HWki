import type { CharacterDetails } from "../types";

export const kilon: CharacterDetails = {
  skins: [
    {
      id: "kilon-human",
      name: "Human Form",
      portrait: "/characters/kilon/kilon-hp.webp",
      fullBody: "/characters/kilon/kilon-h.webp",
      fullBodyCensored: "/characters/kilon/kilon-hc.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/yoA3FijDfko",
          title: "Official PV",
        },
      ],
    },
    {
      id: "kilon-s1",
      name: "Bound by Loyalty",
      portrait: "/characters/kilon/kilon-s1p.webp",
      fullBody: "/characters/kilon/kilon-s1.webp",
      fullBodyCensored: "/characters/kilon/kilon-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/eTWRG0oOWJs",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1911669969219436618",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority:\n1. Max HP",
      weapon: { id: "aronbite", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "harmony-ex", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ex", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Max HP",
      weapon: { id: "aronbite", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "harmony-ss", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "harmony-ss", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "brotherhoods-strike",
      name: "Brotherhood's Strike",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/kilon/ba.webp",
      description: `Swings the greatsword horizontally, slashing enemies within a fan-shaped range.
      Deals Slash DMG equal to {damage}% of Melee ATK.

      [SIGNATURE WEAPON EFFECT]:
      On Basic ATK, has a 29% chance to reduce the cooldown of [Split the Crown] by 1 round.`,
      damage: { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Slash" },
    },
    {   
      id: "thousand-arms-stance",
      name: "Thousand Arms Stance",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/kilon/s1.webp",
      description: `Raises the greatsword and assumes a counterattack stance.
      Enters [Counterattack Posture] until the start of the next round, increasing Crit Rate by {critRate}% and performing counterattacks regardless of the base number of counterattacks.

      [SIGNATURE WEAPON EFFECT]:
      While holding the [Fortitude] effect, using the [Thousand Arms Stance] skill also restores HP equal to the amount consumed.`,
      values: {
        critRate: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "taunting-roar",
      name: "Taunting Roar",
      type: "Active",
      ap: 15,
      cooldown: 3,
      icon: "/skills/kilon/s2.webp",
      description: `Plant your sword into the ground and unleash a roar.
      Deals Crush DMG equal to {damage}% of Magic ATK in a 5m circular AoE.
      Enemies hit are inflicted with [Taunt] for 2 rounds and have all ATK reduced by {allAtk}% for 2 rounds.
      Your Aggro Adjustment increases for the duration.
      This attack temporarily increases Accuracy by 300%.

      [SIGNATURE WEAPON EFFECT]:
      Using the [Taunting Roar] skill grants 3 stacks of [Unyielding Bulwark] and triggers a follow-up attack with [Thousand Arms Stance].

      - [Unyielding Bulwark]: Increases All DEF by 120. Stacks up to 3 times. Loses 1 stack at the start of each round.`,
      damage: { stat: "magicAtk", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Crush" },
      values: {
        allAtk: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "split-the-crown",
      name: "Split the Crown",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/kilon/s3.webp",
      description: `Strikes downward with a greatsword to deliver a powerful blow.
      Deals Slash DMG equal to {damage}% of Melee ATK.
      This skill's Slash Boost increases proportionally to missing HP, up to 200% for the turn it's used.
      If this skill defeats an enemy, restores {recoverHp}% of Max HP as HP Recovery`,
      damage: { stat: "meleeAtk", percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190], damageType: "Slash" },
      values: {
        recoverHp: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
  ],

  weaponType: "Two-handed Sword",

  basic: { str: 12, tec: 7, int: 6, vit: 13, agi: 8 },

  gradeGains: {
    B: { vit: -1 },
    A: { str: -1 },
    S: { agi: -1 },
    EX: { vit: 1 },
    EX1: { str: 2 },
    EX2: { vit: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { str: 2 },
  },

  traits: [
    "alpha-dog",
    "grrik-chivalry",
    "grrik",
    "powerful",
    "persistent",
    "based",
  ],

  manual: {
    spd: 92,
    startApSeen: { value: 135, grade: "S" },
  },

  profile: {
    age: "45",
    race: "Grrik",
    homeland: "Grrik Alliance, Karr Menka",
    height: "219cm",
    birthday: "Whale's Month 17th",
    bwh: "???",
    story: `The fracture between the Grrik Federation and humanity resulted from the rogue actions of certain human magicians following the Rift Crisis. Outraged by the atrocities these magicians committed during that devastating period, the Grrik king severed a friendship with humans that had persisted for thousands of years, declaring that the Grrik would pursue their own path toward salvation.

    However, this decision was not unanimous. Kilon, the ruler of Karr Menka, argued against severing ties entirely due to the actions of a few, insisting that such a decision betrayed genuine loyalty.

    Consequently, Kilon was exiled by the Grrik king, who had himself lost a prince, to the Great Wilderness, a dangerous borderland adjacent to human territories. In exile, Kilon quietly continued their fight, protecting marginalized humans and Grrik alike within the wilderness.

    It remains unclear exactly how Kilon escaped safely to Earth, but upon arrival, they immediately resumed their commitment to safeguarding all individuals, driven by their sense of responsibility as both a ruler and a warrior.`,
  },
};
