import type { CharacterDetails } from "../types";

export const dorothea: CharacterDetails = {
  skins: [
    {
      id: "dorothea-s1",
      name: "Torta Traditional Costume",
      portrait: "/characters/dorothea/dorothea-s1p.webp",
      fullBody: "/characters/dorothea/dorothea-s1.webp",
      fullBodyCensored: "/characters/dorothea/dorothea-s1c.webp",
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
          url: "https://youtu.be/sbH5wpony8s",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1881644338788417683",
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
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit DMG",
      weapon: { id: "wail-of-the-vengeful-dead", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit DMG",
      weapon: { id: "wail-of-the-vengeful-dead", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "lifebound",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "lifebound",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Crit Rate (60%)\n2. Crit DMG",
      weapon: { id: "wail-of-the-vengeful-dead", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jesters-mask-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
        {
          set: "jesters-mask-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critRate", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "hide-splitter",
      name: "Hide Splitter",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/osla/ba.webp",
      description: `Swings a deadly Torturas to deal Slash DMG equal to {damage}% of Melee ATK to the enemy.
      
      [Domain of the Cursed Tree: Blood Eagle]
      ONLY SCALE WITH [Domain of the Cursed Tree] SKILL
      
      [Opening Lariat]:
      Channels strength into the arm to deliver a powerful lariat.
      Charges to the designated location, dealing Crush DMG equal to {damage2}% of Melee ATK to all enemies along the path within a 1.5m radius.
      Also pushes all enemies along the path to the designated location. Large enemies cannot be pushed.
      
      Then gains 2 opportunities to act again through [Extra Action].
      Until the end of the turn, [Opening Lariat] is replaced with [Big Boot Supreme].
      Only the first [Extra Action] effect applied takes effect, and gaining additional [Extra Action] effects does not extend its duration.
      
      [Big Boot Supreme]:
      Stomps down with full force. 
      Charges Nm forward, dealing Crush DMG equal to {damage3}% of Melee ATK to all enemies along the path within a 1.5m radius. 
      Also pushes all enemies along the path in one direction. Until the end of the turn, [Big Boot Supreme] is replaced with [Lethal Dropkick].
      
      [Lethal Dropkick]:
      Launches the entire body toward the enemy.
      Charges 4m forward, dealing Crush DMG equal to {damage4}% of Melee ATK to all enemies along the path within a 1.5m radius.
      Also pushes all enemies along the path in one direction. `,
      damage: [
        {
          stat: "meleeAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Slash",
        },
        {
          stat: "meleeAtk",
          percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
          damageType: "Crush",
        },
        {
          stat: "meleeAtk",
          percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
          damageType: "Crush",
        },
        {
          stat: "meleeAtk",
          percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
          damageType: "Crush",
        },
      ],
    },
    {
      id: "predatory-range",
      name: "Predatory Range",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/osla/s1.webp",
      description: `Throws a chained Torturas to pull the enemy closer.
      Deals Slash DMG equal to {damage}% of Melee ATK and removes Counterattack.
      If the target is a large enemy, instead of pulling them closer, moves self to the front of the enemy.
      
      [Domain of the Cursed Tree: Blood Eagle]
      ONLY SCALE WITH [Domain of the Cursed Tree] SKILL
      
      [Soul Shock]:
      Snatches the souls of enemies.
      Deals Crush DMG equal to {damage2}% of Melee ATK to enemies within a 160º, 7Nm cone and pulls them closer.
      
      Then gains 1 opportunity to act again through [Extra Action].
      Until the end of the turn, [Soul Shock] is replaced with [Deadly Sole Butt].
      Only the first [Extra Action] effect applied takes effect, and gaining additional [Extra Action] effects does not extend its duration.
      
      [Deadly Sole Butt]:
      Gathers strength, spins around, and delivers a powerful kick.
      Deals Crush DMG equal to {damage3}% of Melee ATK to enemies within a 3m*4m rectangular area in front.
      Also pushes all enemies along the path in one direction.`,
      damage: [
        {
          stat: "meleeAtk",
          percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
          damageType: "Slash",
        },
        {
          stat: "meleeAtk",
          percent: [80, 88, 96, 104, 112, 120, 128, 136, 144, 152],
          damageType: "Crush",
        },
        {
          stat: "meleeAtk",
          percent: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
          damageType: "Crush",
        },
      ],
    },
    {
      id: "afflict-pain",
      name: "Afflict Pain",
      type: "Passive",
      icon: "/skills/osla/p1.webp",
      description: `Each time an attack is successfully made, has a {chance}% chance to Taunt the target.`,
      values: {
        chance: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "domain-of-the-cursed-tree",
      name: "Domain of the Cursed Tree",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/dorothea/s2.webp",
      description: `Uses sorcery to create a mystical domain. Creates a cursed area with a 6m radius at the designated location.
      Applies [Blood Curse] to enemies within the area. During allies turns, enemies attempting to leave the cursed area are repelled by a mysterious force and pulled back toward its center.
      
      [Blood Curse]: When pushed or pulled, takes Crush DMG equal to (damage)% of the caster's Melee ATK.
      
      Then gains [Blood Eagle].

      [Blood Eagle]: Increases SPD by 100%.
      - [Hide Splitter] are replaced with [Opening Lariat], [Big Boot Supreme] and [Lethal Dropkick].
      - [Predatory Range] are replaced with [Soul Shock] and [Deadly Sole Butt].
      - [Domain of the Cursed Tree] are replaced with [Storm Barrage] and [Curse Reaping].
      
      [Storm Barrage]:
      Together with the ancestors, pummels enemies to a pulp.
      Deals Crush DMG equal to {damage2}% of Melee ATK. Then deals Additional Crush DMG equal to {damage2}% of Melee ATK and pushes enemies back.
      
      [Curse Reaping]:
      Ends the effects of [Domain of the Cursed Tree] and [Blood Eagle].`,
      damage: [
        {
          stat: "meleeAtk",
          percent: [400, 440, 480, 520, 560, 600, 640, 680, 720, 760],
          damageType: "Crush",
        },
        {
          stat: "meleeAtk",
          percent: [600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140],
          damageType: "Crush",
        },
      ],
    },
    {
      id: "grudge-accumulation",
      name: "Grudge Accumulation",
      type: "Passive",
      icon: "/skills/dorothea/p2.webp",
      description: `Each time an ally is hit, gains [Grudge Accumulation].
      When using a skill other than Standby, gains [Muscle Hypertrophy] for 1R.
      
      - [Grudge Accumulation]: Increases Melee ATK by {buff}% and Crush Boost by {buff}%. Stacks up to 100 times.
      - [Muscle Hypertrophy]: Increases Melee ATK by {meleeAtk}% and Crush Boost by {crushBoost}%. Stacks up to 5 times.`,
      values: {
        buff: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        meleeAtk: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        crushBoost: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
      },
    },
  ],

  weaponType: "Two-handed Blunt",

  basic: { str: 19, tec: 8, int: 6, vit: 17, agi: 9 },

  gradeGains: {
    B: { str: -1 },
    A: { vit: -1 },
    S: { str: -1 },
    SS: { vit: -1 },
    EX1: { str: 2 },
    EX2: { str: 1 },
    EX3: { vit: 1 },
    EX4: { str: 1 },
    EX5: { vit: 1 },
    EX6: { str: 2 },
  },

  traits: [
    "spot-me-ancestor",
    "the-thrill-of-battle",
    "torta",
    "interested-melee",
    "muscular",
    "uncanny",
    "radical",
  ],

  manual: {
    spd: 49,
    startApSeen: { value: 102, grade: "EX" },
  },

  profile: {
    age: "35",
    race: "Torta",
    homeland: "Noctis Nebula",
    height: "188cm",
    birthday: "October 14th",
    bwh: "122(P)-65-128",
    story: `.`,
    pv: [
      {
        source: "youtube",
        url: "https://www.youtube.com/shorts/noG4OAgPeXU",
        title: "Ads PV 1",
      },
      {
        source: "youtube",
        url: "https://www.youtube.com/shorts/arfTAeXwuxs",
        title: "Ads PV 2",
      },
    ],
  },

  gifts: [
    { gift: "300kg-dumbbell", value: 40 },
    { gift: "hamburg-steak", value: 20 },
    { gift: "grey-goose-vodka", value: 70 },
  ],
};
