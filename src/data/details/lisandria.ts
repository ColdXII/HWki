import type { CharacterDetails } from "../types";

export const lisandria: CharacterDetails = {
  skins: [
    {
      id: "lisandria-s1",
      name: "Dark Black Bunny Girl",
      portrait: "/characters/lisandria/lisandria-s1p.webp",
      fullBody: "/characters/lisandria/lisandria-s1.webp",
      fullBodyCensored: "/characters/lisandria/lisandria-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "lisandria-s2",
      name: "Enchanting Demon",
      portrait: "/characters/lisandria/lisandria-s2p.webp",
      fullBody: "/characters/lisandria/lisandria-s2.webp",
      fullBodyCensored: "/characters/lisandria/lisandria-s2c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "lisandria-s5",
      name: "Thorns of Guilt Lingerie",
      portrait: "/characters/lisandria/lisandria-s5p.webp",
      fullBody: "/characters/lisandria/lisandria-s5.webp",
      fullBodyCensored: "/characters/lisandria/lisandria-s5c.webp",
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
          url: "https://youtu.be/EHv8r7zCgGk",
          title: "Official PV",
        },
      ],
    },
    {
      id: "lisandria-s6",
      name: "Chained Devotion",
      portrait: "/characters/lisandria/lisandria-s6p.webp",
      fullBody: "/characters/lisandria/lisandria-s6.webp",
      fullBodyCensored: "/characters/lisandria/lisandria-s6c.webp",
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
          url: "https://youtu.be/I8fwVB-wFks",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2030933365218754998",
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
      note: "Substats Priority: \n1. Starting AP\n2. AP Recovery\n3. Melee Attack",
      weapon: { id: "vengeful-thornblade", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jupiter-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Melee Attack\n2. AP Recovery",
      weapon: { id: "vengeful-thornblade", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Melee Attack\n2. AP Recovery",
      weapon: { id: "vengeful-thornblade", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "spinning-slash",
      name: "Spinning Slash",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/lisandria/ba.webp",
      description: `Conjures blades of wind to attack.
      Deals Slash DMG equal to {damage}% of Magic ATK and knocks the target back by 1.5m.

      [SIGNATURE WEAPON EFFECT]:
      During battle, AP cost of Basic Attacks decreases by 16%.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "light-in-the-darkness",
      name: "Light in the Darkness",
      type: "Passive",
      icon: "/skills/lisandria/p1.webp",
      description: `When using a skill or attacking, restores HP to self and allies within a 5m radius based on {recoverHp}% of Magic ATK.`,
      values: {
        recoverHp: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
    {
      id: "sword-of-the-unknown",
      name: "Sword of the Unknown",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/lisandria/s1.webp",
      description: `Channels divine power into the sword through prayer.
      Grants self a shield effect equal to {shield}% of Magic ATK for 3R and the [Sword of the Unknown] effect.

      [Sword of the Unknown]: Basic attacks additionally deal Immaterial DMG equal to {damage}% of Melee ATK.

      [SIGNATURE WEAPON EFFECT]:
      Using [Sword of the Unknown], grants 60 AP and reduces its cooldown by 1R.`,
      damage: {
        stat: "meleeAtk",
        percent: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
        damageType: "Immaterial",
      },
      values: {
        shield: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
      },
    },
    {
      id: "exorcist-s-crusade",
      name: "Exorcist's Crusade",
      type: "Passive",
      icon: "/skills/lisandria/p2.webp",
      description: `On a successful attack, gains [Salvation] and [Judgment] effects.

      - [Salvation]: Increases own Magic ATK by {buff}%. Stacks up to 9 times.
      - [Judgment]: Increases own Melee ATK by {buff}%. Stacks up to 9 times.`,
      values: {
        buff: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "blood-judgment",
      name: "Blood Judgment",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/lisandria/s2.webp",
      description: `Creates a [Blood Judgment] zone on the battlefield and earns 1 stack of [Salvation] effect.

      At the end of any turn, enemies within the zone take Additional Immaterial DMG equal to {damage}% of Melee ATK, and 1 [Salvation] effect and 9% of Max HP are lost.
      This effect repeatedly triggers while [Salvation] is possessed.
      If [Salvation] is no longer possessed, the [Blood Judgment] zone disappears.

      [SIGNATURE WEAPON EFFECT]:
      Using [Blood Judgment], grants [Penance].

      - [Penance]: If current HP is 50% or higher, gains 1 [Salvation] at the end of any turn and Additional DMG Boost increases by 10%.
      At the end of the effect holder's turn, these effects are doubled. This Additional DMG Boost can stack up to 20 times.
      If [Salvation] is not possessed, [Penance] and all Additional DMG Boost gained from this effect are removed.`,
      damage: {
        stat: "meleeAtk",
        percent: [200, 225, 250, 275, 300, 325, 350, 375, 400, 425],
        damageType: "Immaterial",
      },
      values: {
        ap: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      },
    },
  ],

  weaponType: "One-handed Sword",

  basic: { str: 8, tec: 7, int: 8, vit: 12, agi: 13 },

  gradeGains: {
    B: { str: -1 },
    A: { int: -1 },
    S: { agi: -1 },
    EX: { str: 1 },
    EX1: { int: 1 },
    EX2: { str: 1 },
    EX3: { int: 1 },
    EX4: { agi: 1 },
    EX5: { str: 1 },
    EX6: { int: 1 },
  },

  traits: [
    "judgment-of-vengeance",
    "enthusiast",
    "marlon",
    "interested-melee",
    "dogmatic",
    "strict",
    "faithful",
  ],

  manual: {
    spd: 133,
    startApSeen: { value: 114, grade: "SS" },
  },

  profile: {
    age: "29",
    race: "Marlon",
    homeland: "The Empire, Bethelburg",
    height: "168cm",
    birthday: "January 7th",
    bwh: "91(J)-50-98",
    story: `Once a renowned swordswoman alongside her friend, Lisandria lost her lifelong companion to the abominations of the Rift during the Rift Crisis, and she herself suffered a grievous injury that took her sight. Taken in by the nuns of Hirinna and her sword, Lisandria spent her days drowning in despair at the convent until she heard a voice promising her power in exchange for her soul upon death. Overwhelmed by her hopelessness, she agreed to the offer, gaining extraordinary senses to replace her lost vision.

    Afterwards, Lisandria became a knight nun, dedicating herself to protecting the convent and fighting the abominations. Following her battles against the horrors of the Rift, she arrived on Earth, where her thirst for vengeance remains unquenched.

    She believes that becoming a Vanguard of the Human God will provide her the greatest opportunity to slaughter more of these abominations, and she has applied to join as a Vanguard.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/SUcoV5ebD7c",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1950458387113918524",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "antique-music-box", value: 50 },
    { gift: "scripture-of-the-goddess-of-the-split-twigs", value: 30 },
    { gift: "forbidden-romance", value: 20 },
  ],
};
