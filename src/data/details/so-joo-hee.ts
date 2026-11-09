import type { CharacterDetails } from "../types";

export const so_joo_hee: CharacterDetails = {
  skins: [
    {
      id: "sojoohee-s1",
      name: "Work Memo",
      portrait: "/characters/sojoohee/sojoohee-s1p.webp",
      fullBody: "/characters/sojoohee/sojoohee-s1.webp",
      fullBodyCensored: "/characters/sojoohee/sojoohee-s1c.webp",
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
          url: "https://youtu.be/ZyW7RWfPsmE",
          title: "Official PV",
        },
      ],
    },
    {
      id: "sojoohee-s2",
      name: "???",
      portrait: "/characters/sojoohee/sojoohee-s2p.webp",
      fullBody: "/characters/sojoohee/sojoohee-s2.webp",
      fullBodyCensored: "/characters/sojoohee/sojoohee-s2c.webp",
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
          url: "https://youtu.be/hxzCo_jlGIM",
          title: "Official PV",
        },
      ],
    },
    {
      id: "sojoohee-s4",
      name: "???",
      portrait: "/characters/sojoohee/sojoohee-s4p.webp",
      fullBody: "/characters/sojoohee/sojoohee-s4.webp",
      fullBodyCensored: "/characters/sojoohee/sojoohee-s4c.webp",
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
          url: "https://youtube.com/shorts/r6FTtIuLNkc",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2112106496624668975",
          title: "X PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      note: "Substats Priority:\n1. Starting AP\n2. AP Recovery\n3. SPD",
      weapon: { id: "fleure-de-vanita-92", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Starting AP\n2. AP Recovery\n3. SPD",
      weapon: { id: "fleure-de-vanita-92", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "spd", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "pistol-fire",
      name: "Pistol Fire",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/sojoohee/ba.webp",
      description: `Calmly shoots at the target.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.`,
      damage: { stat: "rangedAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {   
      id: "conceal",
      name: "Conceal",
      type: "Passive",
      icon: "/skills/sojoohee/p1.webp",
      description: `When attacking an enemy's weak point, uses optical camouflage to hide.
      Once per Round, at the end of a turn where you performed a Weak Point Attack, there is a {chance}% chance to gain [Conceal: Stealth].
      Activation chance increases by 1% for every 1% of your missing HP.

      - [Conceal: Stealth]: Becomes hidden and cannot be targeted by enemy skills. SPD decreases by 10%, and Accuracy increases by 50% for the first attack while hidden.

      [SIGNATURE WEAPON EFFECT]:
      At the start of the next turn after ending your own turn, if there is an ally within a 3m range who is not in a Stealth or Banish state, gain the [Conceal: Stealth] effect.`,
      values: {
        chance: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "assassination",
      name: "Assassination",
      type: "Active",
      ap: 45,
      cooldown: 1,
      icon: "/skills/sojoohee/s1.webp",
      description: `Approaches the enemy and delivers an Unblockable point-blank shot.
      Deals Pierce DMG equal to {damage}% of Ranged ATK.
      This attack is always considered to be from behind the enemy and ignores counterattack effects.
      During this attack, Accuracy temporarily increases by 300%.`,
      damage: { stat: "rangedAtk", percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190], damageType: "Pierce" },
    },
    {
      id: "mass-execution",
      name: "Mass Execution",
      type: "Active",
      ap: 90,
      cooldown: 1,
      icon: "/skills/sojoohee/s2.webp",
      description: `Performs a quick and precise rapid shot on up to 3 enemies.
      Executes a distributed attack in order of proximity, dealing Pierce DMG equal to {damage}% of Ranged ATK divided by the number of targets.`,
      damage: { stat: "rangedAtk", percent: [180, 198, 216, 234, 252, 270, 288, 306, 324, 342], damageType: "Pierce" },
    },
    {   
      id: "unavoidable-eyes",
      name: "Unavoidable Eyes",
      type: "Passive",
      icon: "/skills/sojoohee/p2.webp",
      description: `Identifies the enemy's weak point and guides allies.
      Increases Accuracy of all allies by {accuracy}%.`,
      values: {
        accuracy: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
  ],

  weaponType: "Dual Pistols",

  basic: { str: 7, tec: 12, int: 9, vit: 10, agi: 6 },

  gradeGains: {
    B: { vit: -1 },
    S: { tec: 1 },
    SS: { agi: 1 },
    EX: { vit: 1 },
    EX1: { tec: 1 },
    EX2: { vit: 1 },
    EX3: { tec: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { tec: 1 },
  },

  traits: [
    "upstarts-pride",
    "unearned-confidence",
    "human",
    "interested-ranged",
    "inferiority-complex",
    "parachute",
    "immature",
  ],

  manual: {
    spd: 88,
    startApSeen: { value: 119, grade: "A" },
  },

  profile: {
    age: "30",
    race: "Human",
    homeland: "East Asia Federation, Seongnam",
    height: "169cm",
    birthday: "December 1st",
    bwh: "100(J)-60-103",
    story: `So Joo-hee is the daughter of the Vice Minister of the Interior, which oversees the Bureau of Rift Management, and her family has long been celebrated as a prestigious line of bureaucrats. However, Joo-hee herself didn't quite live up to the family's standards. Unable to join one of the older, more established departments, she was instead hired as a special recruit for the Dimension Immigration Department of the Bureau of Rift Management, which was severely understaffed.

    Later, she managed to transfer to the Intelligence Department, a core division, which allowed her to maintain the title of an elite bureaucrat. This series of events, however, significantly hurt her self-esteem and contributed to her impulsive and attention-seeking personality. To make matters worse, her father, concerned about the family's reputation, severely restricted her romantic relationships, which only heightened her yearning for freedom.

    Given these circumstances, it was almost inevitable that she would clash with Yeon Chae-young, who was regarded as the top elite of the Bureau of Rift Management, and soon enough, the two developed a notorious rivalry. Though she is often dismissed as an incompetent nepotism hire, some believe that she has untapped potential.`,
  },

  gifts: [
    { gift: "anti-aging-skincare-product", value: 30 },
    { gift: "luxury-bag", value: 70 },
    { gift: "grey-goose-vodka", value: 60 },
  ],
};
