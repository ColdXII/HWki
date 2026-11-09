import type { CharacterDetails } from "../types";

export const eugenia: CharacterDetails = {
  skins: [
    {
      id: "eugenia-s1",
      name: "Bound Lust",
      portrait: "/characters/eugenia/eugenia-s1p.webp",
      fullBody: "/characters/eugenia/eugenia-s1.webp",
      fullBodyCensored: "/characters/eugenia/eugenia-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2028670132206383313",
          title: "Official PV",
        },
      ],
    },
    {
      id: "eugenia-s2",
      name: "???",
      portrait: "/characters/eugenia/eugenia-s2p.webp",
      fullBody: "/characters/eugenia/eugenia-s2.webp",
      fullBodyCensored: "/characters/eugenia/eugenia-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2101927480848502796",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Max HP\n2. Starting AP\n3. AP Recovery",
      weapon: { id: "lumen-veritas", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2: HP",
      note: "Substats Priority: \n1. Max HP\n2. Starting AP",
      weapon: { id: "lumen-veritas", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Max HP\n2. Starting AP\n3. AP Recovery",
      weapon: { id: "lumen-veritas", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "energy-sword",
      name: "Energy Sword",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/eugenia/ba.webp",
      description: `Deals Immaterial DMG equal to {damage}% of Magic ATK to all enemies within range.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Immaterial",
      },
    },
    {
      id: "efficient-reconfiguration",
      name: "Efficient Reconfiguration",
      type: "Passive",
      icon: "/skills/eugenia/p1.webp",
      description: `During battle, increases Max HP by {maxHp}%.
      For each point of Vitality above 13, increases Immaterial Boost by 16%.`,
      values: {
        maxHp: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      },
    },
    {
      id: "energy-form-shift",
      name: "Energy Form Shift",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/eugenia/s1.webp",
      description: `Grants [Soul Resonance] to 1 selected ally for 2R and increases their Aggro Adjustment by 50.

      [Soul Resonance]:
      Increases Melee ATK and Ranged ATK by {buff}% of the target's Max HP.
      Additionally, for every 200 Max HP of the caster, the final ATK increase is further increased by 10%, up to a maximum additional 100%.

      When the target successfully attacks, they deal Additional Immaterial DMG equal to {additionalDmg}% of their Max HP.
      This damage increases by 1% for every 10 HP lost, up to a maximum of 75%.
      When the target with the effect is hit, the attacker also takes this Additional Immaterial DMG.

      [SIGNATURE WEAPON EFFECT]:
      Reduces the AP cost of [Energy Form Shift] by 15.
      During battle, increases Crit Rate by an amount equal to 10% of the ATK increase gained from [Soul Resonance].`,
      values: {
        buff: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        additionalDmg: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
      },
    },
    {
      id: "mark-modulation",
      name: "Mark Modulation",
      type: "Passive",
      icon: "/skills/eugenia/p2.webp",
      description: `Using [Soul Resonance] increases your Magic ATK by {magicAtk}% of your Max HP.
      This effect can increase Magic ATK by up to {scale}.

      When an ally with the [Soul Resonance] effect attacks, they apply [Trace of Light] to the target.

      When you attack an enemy with [Trace of Light], you deal Additional Immaterial DMG equal to {additionalDmg}% of the combined value of your Magic ATK and Max HP%.`,
      values: {
        magicAtk: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        scale: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
        additionalDmg: [85, 94, 103, 112, 121, 130, 139, 148, 157, 166],
      },
    },
    {
      id: "flow-overdrive",
      name: "Flow Overdrive",
      type: "Active",
      ap: 75,
      cooldown: 2,
      icon: "/skills/eugenia/s2.webp",
      description: `Can only be used while an ally has [Soul Resonance].

      Increases the target's AP by {ap}, and increases the Additional Immaterial DMG triggered by [Soul Resonance] by {additionalDmg}%.

      This effect is removed when [Soul Resonance] ends.

      [SIGNATURE WEAPON EFFECT]:
      Reduces the AP cost of [Flow Overdrive] by 15.
      During battle, increases the damage boost effect of [Flow Overdrive] by 50%.`,
      values: {
        ap: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        additionalDmg: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
      },
    },
  ],

  weaponType: "One-handed Sword",

  basic: { str: 5, tec: 5, int: 8, vit: 11, agi: 7 },

  gradeGains: {
    B: { vit: -1 },
    A: { vit: -1 },
    S: { str: -1 },
    SS: { agi: -1 },
    EX1: { vit: 1 },
    EX2: { vit: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { agi: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "inner-desire",
    "energy-alignment",
    "half-elf",
    "interested-hp",
    "faithful",
    "strict",
    "hidden",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 114, grade: "EX" },
  },

  profile: {
    age: "111",
    race: "Half-Elf",
    homeland: "Northern Highlands, Citadel of Change",
    height: "172cm",
    birthday: "February 22th",
    bwh: "79(E)-47-98",
    story: `Like many Half-Elves, Eugenia was born into the transmutation school known as the Crownseekers, a faction deeply devoted to the study and refinement of the body. Yet she was unlike her kin. Where others surrendered themselves to instinct and indulgence, Eugenia chose control. Rather than be ruled by desire, she sought to master it. Instead of yielding to the tides of her own blood, she forged that very force into power.

    From instinct and longing, she shaped a blade of arcane energy, and trained relentlessly in the art of the sword. Her discipline was so absolute that, despite her youth, she rose to the rank of Suprema, the effective leader among the Crownseekers. Through mastery of radiant blade techniques and enchantment, Eugenia advanced by pure merit.

    More than that, she spread her creed of restraint and endurance among her order. Under her influence, a culture once obsessed with life's most primal urges began to cultivate patience, refinement, and control.

    Now, with the Crownseekers' stronghold, the Citadel of Change, reduced to ruin by the Rift Crisis, Eugenia offers both sword and sorcery to its restoration. On that path, she carries two unwavering vows: Devotion to the Human God. And the rebirth of the Crownseekers.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/EDGWNDYkgLE",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2025869858039353752",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2029035445649326205",
        title: "X PV 2",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2025871300573663696",
        title: "X PV 3",
      },
    ],
  },

  gifts: [
    { gift: "finest-black-tea", value: 40, highlight: true },
    { gift: "americano-voucher", value: 20 },
    { gift: "human-gods-hair", value: 70 },
  ],
};
