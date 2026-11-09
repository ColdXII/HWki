import type { CharacterDetails } from "../types";

export const everette: CharacterDetails = {
  skins: [
    {
      id: "everette-s1",
      name: "Thousand Years of Gratitude",
      portrait: "/characters/everette/everette-s1p.webp",
      fullBody: "/characters/everette/everette-s1.webp",
      fullBodyCensored: "/characters/everette/everette-s1c.webp",
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
          url: "https://youtu.be/PFw7FBoXLlY",
          title: "Official PV",
        },
      ],
    },
    {
      id: "everette-s2",
      name: "Golden Qipao",
      portrait: "/characters/everette/everette-s2p.webp",
      fullBody: "/characters/everette/everette-s2.webp",
      fullBodyCensored: "/characters/everette/everette-s2c.webp",
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
          url: "https://youtu.be/n9Pikj1YcPg",
          title: "Official PV",
        },
      ],
    },
    {
      id: "everette-s4",
      name: "Chiffon Sunset Vacation",
      portrait: "/characters/everette/everette-s4p.webp",
      fullBody: "/characters/everette/everette-s4.webp",
      fullBodyCensored: "/characters/everette/everette-s4c.webp",
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
          url: "https://youtu.be/QEqno0n1B_Y",
          title: "Official PV",
        },
      ],
    },
    {
      id: "everette-s5",
      name: "???",
      portrait: "/characters/everette/everette-s5p.webp",
      fullBody: "/characters/everette/everette-s5.webp",
      fullBodyCensored: "/characters/everette/everette-s5c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
  ],

    builds: [
    {
      id: "late-game-1",
      name: "Late Game 1",
      recommended: true,
      note: "Substats Priority:\n1. Magic Attack\n2. Crit Damage",
      weapon: { id: "the-queens-platinum-staff", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex", slot: "top", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex", slot: "left", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex", slot: "right", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: ["evil", "strange", "doom", "dogmatic", "enlightened"],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Magic Attack\n2. Crit Damage",
      weapon: { id: "the-queens-platinum-staff", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-eternal-battle", slot: "top", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle", slot: "left", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle", slot: "bottom", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "the-eternal-battle", slot: "right", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: ["evil", "strange", "doom", "dogmatic", "enlightened"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic Attack\n2. Crit Damage",
      weapon: { id: "the-queens-platinum-staff", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss", slot: "top", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss", slot: "left", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss", slot: "right", level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: ["evil", "strange", "doom", "dogmatic", "enlightened"],
    },
  ],

  skills: [
    {
      id: "summon-energy",
      name: "Summon Energy",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/everette/ba.webp",
      description: `Releases pure energy in the form of a heat ray to attack.
      Deals Heat DMG equal to {damage}% of Magic ATK to enemies within a 1m by 7m rectangular area.
      This skill cannot be used for a Weakness Attack.`,
      damage: { stat: "magicAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Heat" },
    },
    {
      id: "spatial-shift",
      name: "Spatial Shift",
      type: "Active",
      ap: 30,
      cooldown: 1,
      icon: "/skills/everette/s1.webp",
      description: `Crosses through space-time to reach the desired location.
      Teleports to a specified location within a radius of {distance}m.`,
      values: {
        distance: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      },
    },
    {
      id: "starlight-gaze",
      name: "Starlight Gaze",
      type: "Active",
      ap: 60,
      cooldown: 2,
      icon: "/skills/everette/s2.webp",
      description: `Starlight shines upon the enemy.
      Applies the [Starlight Gaze] effect to the enemy and grants the [Aurora] effect to the user 3 times.

      - [Starlight Gaze]: Reduces All ATK by {allAtk}% and generates a 7m circular [Starlight] area that tracks the target.
      - [Aurora]: While possessing this effect, allies attacking enemies with the [Starlight Gaze] effect inside the [Starlight] area will be supported by [Delayed Aurora].

      [Delayed Aurora]:
      Deals Heat DMG equal to {damage}% of Magic ATK to enemies with the [Starlight Gaze] effect within a 1m by 7m rectangular area.
      Recovers the HP of all allies within the [Starlight] area by {healing}% of Magic ATK.
      Consumes one [Aurora] effect.
      This skill cannot be used for a Weakness Attack.`,
      damage: { stat: "magicAtk", percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152], damageType: "Heat" },
      values: {
        allAtk: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        healing: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {   
      id: "warped-starlight",
      name: "Warped Starlight",
      type: "Passive",
      icon: "/skills/everette/p.webp",
      description: `Distorted starlight illuminates the battlefield, twisting possibilities to forcibly turn the tide in favor.
      At the start of each round, increases the CRIT rate of all allies by {critRate1}% for 1R.
      At the start of each round, decreases the CRIT rate of all enemies by {critRate2}% for 1R.`,
      values: {
        critRate1: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        critRate2: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "cast-starlight-shower",
      name: "Cast: Starlight Shower",
      type: "Active",
      ap: 80,
      cooldown: 0,
      icon: "/skills/everette/s3.webp",
      description: `Prepares a grand spell.
      During casting, movement, evasion, and response are not possible, and own Aggro Adjustment increases.
      On the next turn, gains 100 AP to activate the [Starlight Shower] skill.
      Alternatively, can prepare the spell once more in the same manner.
      In this case, on the following turn, gains 200 AP to activate the [Starlight Shower - Ultimate] skill.

      [Starlight Shower]
      Calls forth starlight to attack enemies.
      Deals Immaterial DMG equal to {damage}% of Magic ATK to all enemies within a 5m radius.

      [Starlight Shower - Ultimate]
      Calls forth even more starlight to attack enemies.
      Deals Immaterial DMG equal to {damage2}% of Magic ATK to all enemies within a 7m radius.`,
      damage: [
        { stat: "magicAtk", percent: [130, 143, 156, 169, 182, 195, 208, 221, 234, 247], damageType: "Immaterial", label: "AoE Damage" },
        { stat: "magicAtk", percent: [380, 418, 456, 494, 532, 570, 608, 646, 684, 722], damageType: "Immaterial", label: "AoE Damage" },
      ],
    },
  ],

  basic: { str: 5, tec: 7, int: 23, vit: 11, agi: 11 },

  gradeGains: {
    B: { int: -2 },
    A: { vit: -2 },
    S: { vit: -2 },
    SS: { int: -2 },
    EX1: { int: 2 },
    EX2: { int: 1 },
    EX3: { agi: 2 },
    EX4: { vit: 2 },
    EX5: { int: 2 },
    EX6: { int: 2 },
  },

  traits: [
    "ancient-archmage",
    "the-world-contract",
    "highland-elf",
    "interested-magic",
    "ancient",
    "noble",
    "mysterious",
  ],

  weaponType: "Staff",

  manual: {
    spd: 83,
    startApSeen: { value: 112, grade: "EX" },
  },

  profile: {
    age: "997",
    race: "Highland Elf",
    homeland: "Kingdom of Platinum Bough, Skyplateau Palace",
    height: "188cm",
    birthday: "???",
    bwh: "112(N)-62-115",
    story: `At the highest point of the Noctis Nebula world lies the heart of the ancient, exalted Kingdom of Platinum Bough, where the slumbering Sorceress Queen resides. This Elven Queen, whose transcendent power once caused even the spirits to tremble, made a pact: the spirits would watch over all Highland Elves, and in return, she would refrain from interfering in worldly matters, pledging herself to an eternal slumber. All humans and elves alike have long revered this powerful being, calling her the "Eternal Queen."

    However, when the Rift brought about an age of destruction, the spirits fled from the threat, breaking their golden pact. This caused the queen to awaken. She was horrified to find the Kingdom of Platinum Bough in ruins, and enraged at the spirits for breaking their vow.

    Determined to protect her people herself, she tore through space with her immense power, opening a passage to Earth, a relatively nearby and intact world, and led her people there. Though the effort took a heavy toll on her strength, the queen felt satisfaction in having guided her people to safety.

    Now, as she rests to regain her power, her fury against the Rift remains strong. It won't be long before she returns to the battlefield, ready to fight once again.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtube.com/shorts/utnGR81mkoE?si=0PISzrq4gWyiThPM",
        title: "Ads PV",
      },  
    ]
  },

  gifts: [
    { gift: "queens-tiara", value: 120 },
    { gift: "antique-music-box", value: 40 },
    { gift: "finest-black-tea", value: 40 },
    { gift: "anti-aging-skincare-product", value: 30 },
    { gift: "strawberry-chubby-macaron", value: 20 },
  ],
};
