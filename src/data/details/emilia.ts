import type { CharacterDetails } from "../types";

export const emilia: CharacterDetails = {
  skins: [
    {
      id: "emilia-s1",
      name: "Combat Field Medic",
      portrait: "/characters/emilia/emilia-s1p.webp",
      fullBody: "/characters/emilia/emilia-s1.webp",
      fullBodyCensored: "/characters/emilia/emilia-s1c.webp",
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
          url: "https://youtu.be/C2NO2FFs7V4",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1995751129934918004",
          title: "X PV",
        },
      ],
    },
    {
      id: "emilia-s2",
      name: "Private Checkup",
      portrait: "/characters/emilia/emilia-s2p.webp",
      fullBody: "/characters/emilia/emilia-s2.webp",
      fullBodyCensored: "/characters/emilia/emilia-s2c.webp",
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
          url: "https://youtube.com/shorts/hBYGpiynacE?si=YnTCrpGjrtS4Bqmg",
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
      note: "Substats Priority: \n1. Crit Rate (48%)\n2. Magic Attack\n3. Starting AP",
      weapon: { id: "seryel-medical-hammer", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "blessing-of-dawn",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "blessing-of-dawn",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "blessing-of-dawn",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "blessing-of-dawn",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "frost", level: 5 },
        { id: "protection", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Crit Rate (48%)\n2. Magic Attack\n3. Starting AP",
      weapon: { id: "seryel-medical-hammer", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "frost", level: 5 },
        { id: "protection", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Rate (48%)\n2. Magic Attack\n3. Starting AP",
      weapon: { id: "seryel-medical-hammer", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "guardians-strike",
      name: "Guardian's Strike",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/emilia/ba.webp",
      description: `Swings a mace to attack the enemy.
      Deals Crush DMG equal to {damage}% of Melee ATK and reduces the target's AP by 5.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Crush",
      },
    },
    {
      id: "grace-of-healing",
      name: "Grace of Healing",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/emilia/s1.webp",
      description: `Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally.
      Recovers the HP of a designated ally by {heal}% of Magic ATK.`,
      values: {
        heal: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "sacred-prescription-protocol",
      name: "Sacred Prescription Protocol",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/emilia/s2.webp",
      description: `Performs a preventative checkup on allies.
      Only allies compatible with modern medicine can be targeted.
      Restores HP to all allies within a 2m radius around the designated point (excluding self), equal to {heal}% of Magic ATK, and grants [Sacred Prescription] to allies compatible with modern medicine for 2 Rounds.

      - [Sacred Prescription]: Increases Crit DMG by {critDmg}% and Elemental Boost by {elementalBoost}%.`,
      values: {
        heal: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        critDmg: [24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
        elementalBoost: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      },
    },
    {
      id: "field-medbay",
      name: "Field Medbay",
      type: "Passive",
      icon: "/skills/emilia/p1.webp",
      description: `At the start of battle, increases Crit Rate by {critRate}%.`,
      values: {
        critRate: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
      },
    },
    {
      id: "miraculous-injection",
      name: "Miraculous Injection",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/emilia/s3.webp",
      description: `When the effect activates, consumes 20% of the target's current HP and grants [Miracle Prescription] for 2R.

      [Miracle Prescription]:
      Increases the target's All ATK by {allAtk}% of the caster's base Magic ATK.
      For each point of INT above 13, increases the cap of the All ATK increase by 10%.`,
      values: {
        allAtk: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152],
      },
    },
    {
      id: "overflowing-grace",
      name: "Overflowing Grace",
      type: "Passive",
      icon: "/skills/emilia/p2.webp",
      description: `When using a skill on an ally, also grants [Sacred Overdose] for 2R.

      [Sacred Overdose]: Increases Base DMG by {allAtk}%. Stacks up to 2 times.`,
      values: {
        allAtk: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Radiance Born of Trial",
      icon: "/skills/ines/radiance-born-of-trial.webp",
      description: `Increases Skill Range by 3m.
      When using a skill other than Standby on an ally, consumes 20% of their current HP and increases their Crush Boost by {crushBoost}% for 2R. Stacks up to 3 times.
      While the Crush Boost effect is active, recovers 30% of HP lost when attacking.

      When using a skill other than Standby, grants all allies except the target a Shield equal to {shield}% of Magic ATK for 2R.
      Increases Healing Received by all allies by 100%.`,
      values: {
        crushBoost: [8, 15, 22, 29, 36, 43, 50],
        shield: [10, 20, 30, 40, 50, 60, 70],
      },
    },
  },

  weaponType: "Club & Shield",

  basic: { str: 10, tec: 6, int: 10, vit: 11, agi: 10 },

  gradeGains: {
    B: { int: -1 },
    A: { str: -1 },
    S: { int: -1 },
    SS: { str: -1 },
    EX1: { vit: 1 },
    EX2: { int: 1 },
    EX3: { str: 1 },
    EX4: { int: 1 },
    EX5: { str: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "emilias-diagnosis-method",
    "case-collection",
    "marlon",
    "interested-magic",
    "intelligent",
    "rational",
    "prepared",
  ],

  manual: {
    spd: 84,
    startApSeen: { value: 108, grade: "EX" },
  },

  profile: {
    age: "21",
    race: "Marlon",
    homeland: "Tranel Republic, Reina",
    height: "156cm",
    birthday: "June 10th",
    bwh: "73(E)-44-81",
    story: `Emilia was once an orphan entrusted to a branch of the Split Twigs Church in Tranel. Frail from birth yet blessed with a boundless thirst for knowledge, she immersed herself in books and acquired a wide range of expertise on her own. Even after the Church withdrew from Tranel, she remained behind with her older brother, continuing their relief work together.

    But when illness took her brother's life, Emilia's faith in the Church shattered. After crossing the Rift to Earth, she quickly adapted to this new world.

    Armed with her intellect, she completed advanced training programs in record time and was officially appointed as a researcher by the Bureau of Rift Management. Yet even with such credentials, her desire to save lives on the front lines never faded.

    Through tireless research, she pursued ways to enhance physical abilities by combining science and sacred power. Her efforts paid off, granting her stamina rivaling that of a battle priest. Now, Emilia stands ready to fight beside the Human God, determined to bring hope and healing to even more people.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/YRIsK-R7ztI",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/pCyXrmXTBiE",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1995419004979278213",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1995787765238444138",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "snow-globe", value: 40 },
    { gift: "terrarium", value: 40 },
    { gift: "lamora-military-ration", value: 30 },
    { gift: "americano-voucher", value: 20 },
    { gift: "frog-plush", value: 20 },
  ],
};
