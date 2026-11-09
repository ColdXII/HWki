import type { CharacterDetails } from "../types";

export const echidna: CharacterDetails = {
  skins: [
    {
      id: "echidna-s1",
      name: "A Simple Dream",
      portrait: "/characters/echidna/echidna-s1p.webp",
      fullBody: "/characters/echidna/echidna-s1.webp",
      fullBodyCensored: "/characters/echidna/echidna-s1c.webp",
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
          url: "https://youtu.be/2-HQodof8tk",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2015691313635795204",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority: \n1. Accuracy\n2. Starting AP\n3. AP Recovery",
      weapon: { id: "scales-of-blight", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jupiter-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Accuracy\n2. Starting AP\n3. AP Recovery",
      weapon: { id: "scales-of-blight", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: ["overworked"],
    },
  ],

  skills: [
    {
      id: "arcane-explosion",
      name: "Arcane Explosion",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/echidna/ba.webp",
      description: `Releases arcane energy, causing a massive explosion.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to enemies within a 3m Circular Range at the designated location, and Additional Crush DMG equal to {additionalDmg}% of Magic ATK.
      When attacking with this skill, temporarily increases ACC by 100%.`,
      damage: [
        {
          stat: "magicAtk",
          percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
          damageType: "Immaterial",
          label: "Damage",
        },
        {
          stat: "magicAtk",
          percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
          damageType: "Crush",
          label: "Damage Splash",
        },
      ],
    },
    {
      id: "arcane-purge",
      name: "Arcane Purge",
      type: "Passive",
      icon: "/skills/echidna/p1.webp",
      description: `At the start of the round, grants the [Arcane Purge] effect to allies except Arcane Elementals.
      When the [Arcane Purge] effect expires, the Arcane Elemental on the battlefield gains 1 stack of [Pure Energy].

      - [Arcane Purge]: Becomes a valid target for other abilities of the Arcane Elemental.
      - [Pure Energy]: A stacking effect gained by the Arcane Elemental when [Arcane Purge] expires.
      Increases Magic ATK by {magicAtk}%, up to 3 times.`,
      values: {
        magicAtk: [10.3, 10.6, 10.9, 11.2, 11.5, 11.8, 12.1, 12.4, 12.7, 13],
      },
    },
    {
      id: "toxic-carrier",
      name: "Toxic Carrier",
      type: "Active",
      ap: 30,
      cooldown: 1,
      icon: "/skills/echidna/s1.webp",
      description: `Liquefies her body and seeps into the ground, then erupts from another location, scattering corrosive venom.
      Teleports to a designated location and deals Magic ATK ×{damage}% as Poison DMG to all enemies within a 4m radius, inflicting 1 stack of [Acid Venom].
      This attack cannot trigger Weak Point Attacks and ignores enemy Counterattacks.

      [Acid Venom]:
      Accumulates Acid Venom based on {accuracy}% of the caster's Accuracy.
      For every point above 13 INT and 22 AGI, an additional 10% is added.
      The amount of additional Acid Venom applied is affected by the caster's Additional DMG Boost and Poison Boost.
      At the end of each turn, afflicted targets take Additional Poison DMG equal to {posion}% of the total accumulated Acid Venom. Stacks up to 6 times with effects of the same name.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Poison",
      },
      values: {
        accuracy: [70, 77, 84, 91, 98, 105, 112, 119, 126, 133],
        posion: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "flesh-eating-froth",
      name: "Flesh-Eating Froth",
      type: "Passive",
      icon: "/skills/echidna/p2.webp",
      description: `When an ally with the [Arcane Purge] effect successfully attacks on their turn, triggers a Support Attack with [Flesh-Eating Froth].
      At the end of the turn, the acting ally's [Arcane Purge] effect is removed if this Support Attack was triggered.

      [Flesh-Eating Froth]:
      Unleashes Poison DMG equal to {dmg}% of the caster's Magic ATK to all enemies in a 30° cone within 7m, and applies 1 stack of [Acid Venom].

      [Acid Venom]:
      Accumulates Acid Venom based on {accuracy}% of the caster's Accuracy.
      For every point above 13 INT and 22 AGI, an additional 10% is added.
      The amount of additional Acid Venom applied is affected by the caster's Additional DMG Boost and Poison Boost.
      At the end of each turn, afflicted targets take Additional Poison DMG equal to {posion}% of the total accumulated Acid Venom. Stacks up to 6 times with effects of the same name.`,
      values: {
        dmg: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        accuracy: [70, 77, 84, 91, 98, 105, 112, 119, 126, 133],
        posion: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "comforting-venom",
      name: "Comforting Venom",
      type: "Active",
      ap: 90,
      cooldown: 0,
      icon: "/skills/echidna/s2.webp",
      description: `Consumes 3 stacks of [Pure Energy] to activate.
      Select a target afflicted with [Acid Venom] to overload their body with toxins, causing all accumulated poisons to erupt violently.
      Deals Poison DMG equal to {damage}% of Magic ATK to all enemies within 6m, and applies [Venom Reflux].
      If the target already has [Venom Reflux], the effect is removed and reapplied.

      [Venom Reflux]:
      Accumulates an additional {poison}% of all poison stacks the target currently holds, plus an amount equal to {accuracy}% of the caster's Accuracy.
      Each poison type accumulated through Accuracy cannot exceed a maximum of {stack}.`,
      damage: {
        stat: "magicAtk",
        percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
        damageType: "Poison",
      },
      values: {
        poison: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
        accuracy: [300, 330, 360, 390, 420, 450, 480, 510, 540, 570],
        stack: [750, 825, 900, 975, 1050, 1125, 1200, 1275, 1350, 1425],
      },
    },
    {
      id: "lingering-miasma",
      name: "Lingering Miasma",
      type: "Passive",
      icon: "/skills/echidna/p3.webp",
      description: `Reduces the Poison DEF of all enemies within a 9m radius by {poisonDef}.

      [SIGNATURE WEAPON EFFECT]:
      Enemies affected by [Lingering Miasma] take Additional Poison DMG equal to 85% of their total accumulated poison.`,
      values: {
        poisonDef: [400, 440, 480, 520, 560, 600, 640, 680, 720, 760],
      },
    },
  ],

  weaponType: "Arcane Orb",

  basic: { str: 6, tec: 7, int: 20, vit: 9, agi: 19 },

  gradeGains: {
    B: { int: -1 },
    A: { int: -2 },
    S: { agi: -2 },
    SS: { agi: -3 },
    EX1: { int: 2 },
    EX2: { int: 1 },
    EX3: { int: 2 },
    EX4: { agi: 2 },
    EX5: { agi: 3 },
    EX6: { int: 2 },
  },

  traits: [
    "distroted-wish",
    "do-not-touch",
    "elemental-of-magic",
    "interested-magic",
    "doom",
    "venomous",
    "uncanny",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 130, grade: "EX" },
  },

  profile: {
    age: "Unknown",
    race: "Arcane Elemental",
    homeland: "Unknown",
    height: "158cm",
    birthday: "Unknown",
    bwh: "79(G)-52-91",
    story: `To fight the Abominations, the Federation's weapon factories ran without pause. Caught in a relentless wartime system, there was no room to care about the environment. Acidic wastewater, the pain of those suffering from the Oblivia phenomenon, and their blood, all flowed into the rivers.

    And when the desperate wish to be freed from that pain finally took root… Echidna was born. But her birth was a misunderstanding. She took that wish as a plea for release through death, and began slaughtering indiscriminately.

    Even as the screams rang out, a part of her sensed something was wrong. But she had no way to fix it.

    She continued killing as always, until one day, among the dying minds and tangled regrets, she became aware of the Human God. And with that faint hope, Echidna set off through the desert, in search of the one who might finally make her whole.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/PfpiaxqUu_s",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://www.youtube.com/shorts/Nf6Ulwj8-SI",
        title: "Ads PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2015691345336426560",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2016020035232522333",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "snow-globe", value: 40 },
    { gift: "finest-black-tea", value: 40 },
    { gift: "300kg-dumbbell", value: 30 },
    { gift: "americano-voucher", value: 20 },
    { gift: "gloomy-chromi-keyring", value: 20 },
    { gift: "human-gods-hair", value: 70 },
  ],
};
