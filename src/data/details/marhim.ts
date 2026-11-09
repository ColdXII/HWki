import type { CharacterDetails } from "../types";

export const marhim: CharacterDetails = {
  skins: [
    {
      id: "marhim-s1",
      name: "Black Cat Vacation",
      portrait: "/characters/marhim/marhim-s1p.webp",
      fullBody: "/characters/marhim/marhim-s1.webp",
      fullBodyCensored: "/characters/marhim/marhim-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 650,
          available: true,
        },
      ],
      pv: [
        {
          source: "youtube",
          url: "https://youtu.be/XRS9lO9P43U",
          title: "Official PV",
        },
      ],
    },
    {
      id: "marhim-s2",
      name: "Resort Manager",
      portrait: "/characters/marhim/marhim-s2p.webp",
      fullBody: "/characters/marhim/marhim-s2.webp",
      fullBodyCensored: "/characters/marhim/marhim-s2c.webp",
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
          url: "https://youtu.be/CwNxDPh8qsQ",
          title: "Official PV",
        },
      ],
    },
    {
      id: "marhim-s3",
      name: "Purrfectly Wet",
      portrait: "/characters/marhim/marhim-s3p.webp",
      fullBody: "/characters/marhim/marhim-s3.webp",
      fullBodyCensored: "/characters/marhim/marhim-s3c.webp",
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
          url: "https://youtu.be/fANf4c-uMcQ",
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
      note: "Substats Priority: \n1. Crit Damage\n3. Melee Attack",
      weapon: { id: "the-crimson-executioner", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "pursuit", level: 5 },
        { id: "shattering", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Crit Damage\n3. Melee Attack",
      weapon: { id: "the-crimson-executioner", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "phantom-banquet",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "phantom-banquet",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "pursuit", level: 5 },
        { id: "shattering", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Crit Damage\n3. Melee Attack",
      weapon: { id: "the-crimson-executioner", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "thorny-heart",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "thorny-heart",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "cat-attack",
      name: "Cat Attack",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/marhim/ba.webp",
      description: `After attacking the designated enemy, leaps low backward to move 4m away from the target.
      Deals Pierce DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
    },
    {
      id: "shadow-step",
      name: "Shadow Step",
      type: "Passive",
      icon: "/skills/marhim/p1.webp",
      description: `If not under the Stealth effect at the end of the turn, and there are no enemies within a 5m radius, gains the [Shadow Steps] effect for 1R.
      At the start of own turn, if under the Stealth effect, gains the [Shining Steps from the Shadows] effect.
      While in Stealth, can perform a support attack using the [Dirty Pair · Dagger Throw] skill.

      - [Shadow Steps]: Enters Stealth, preventing the user from becoming a target of enemy skills.
      - [Shining Steps from the Shadows]: Increases SPD by {spd}.
      This effect is removed at the end of the turn.`,
      values: {
        spd: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "mark-of-silent-blood",
      name: "Mark of Silent Blood",
      type: "Active",
      ap: 15,
      cooldown: 1,
      icon: "/skills/marhim/s1.webp",
      description: `Grants the [Assassin's mark] effect to the designated target for the current round, while increasing own SPD by {spd}% for 1R.

      - [Assassin's mark]: Reduces Pierce DEF by {pierceDef} and prevents counterattacks.`,
      values: {
        spd: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
        pierceDef: [150, 165, 180, 195, 210, 225, 240, 255, 270, 285],
      },
    },
    {
      id: "bloodsoaked-execution",
      name: "Bloodsoaked Execution",
      type: "Active",
      ap: 60,
      cooldown: 3,
      icon: "/skills/marhim/s2.webp",
      description: `Unleashes a lethal flurry on the target.
      Deals {damage}% of Melee ATK as Pierce DMG.
      On Weak Point hit, cooldown is reset. If the target is killed, gain 60 AP.

      [SIGNATURE WEAPON EFFECT]:
      Using the [Bloodsoaked Execution] skill during battle reduces its cooldown by 2 rounds.`,
      damage: {
        stat: "meleeAtk",
        percent: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228],
        damageType: "Pierce",
      },
      values: {
        ap: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228],
      },
    },
    {
      id: "crimson-terror",
      name: "Crimson Terror",
      type: "Passive",
      icon: "/skills/marhim/p2.webp",
      description: `When the user defeats an enemy, gains the [Crimson Terror] effect for 2R and applies the [Crimson Oppression] effect to all enemies within a 5m radius.

      - [Crimson Terror]: Increases Melee ATK by {meleeAtk}%.
      - [Crimson Oppression]: Prevents counterattacks until the end of the turn in which they are attacked.`,
      values: {
        meleeAtk: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Slaughtering Fangs",
      icon: "/skills/marhim/slaughtering-fangs.webp",
      description: `[Bloodsoaked Execution] is changed to target the selected enemy and all enemies within a 3m radius, and its Cooldown decreases by 1R. During your turn, gain [Slaughtering Fangs].

      [Slaughtering Fangs]: Increases Melee ATK by {meleeAtk}% of base Melee ATK and increases Combat Skill DMG by {combatSkillDmg}%. This effect is removed at the end of your turn.
      When using [Bloodsoaked Execution] while in [Stealth], the attack is treated as a Back Attack. If an enemy is defeated with this skill, [Slaughtering Fangs] is doubled. Stacks up to 5 times.`,
      values: {
        meleeAtk: [30, 36, 42, 48, 54, 60, 66],
        combatSkillDmg: [15, 18, 21, 24, 27, 30, 33],
      },
    },
  },

  weaponType: "Twin Swords",

  basic: { str: 12, tec: 10, int: 6, vit: 8, agi: 16 },

  gradeGains: {
    B: { str: -1 },
    A: { vit: -1 },
    S: { agi: -1 },
    SS: { str: -1 },
    EX1: { agi: 1 },
    EX2: { str: 1 },
    EX3: { vit: 1 },
    EX4: { agi: 1 },
    EX5: { str: 1 },
    EX6: { agi: 1 },
  },

  traits: [
    "dirty-pair-nika",
    "crimson-momentum",
    "catsidhe",
    "interested-melee",
    "agile",
    "piercing",
    "arrogant",
  ],

  manual: {
    spd: 138,
    startApSeen: { value: 132, grade: "EX" },
  },

  profile: {
    age: "23",
    race: "Catsidhe",
    homeland: "Ere, Square Path",
    height: "161cm",
    birthday: "April 2nd",
    bwh: "82(H)-50-91",
    story: `Marhim is a girl with clear likes and dislikes. Her sharp and straightforward personality often left her isolated, but she believed that as long as she demonstrated exceptional skill, people would eventually acknowledge her. With this mindset, she dedicated herself to her career as an assassin.

    Unfortunately, while she earned recognition as a highly skilled assassin, she never managed to make friends. After arriving on Earth, Marhim spent her days idly, which eventually led her to struggle with depression.

    Fortunately, she found a friend in Nika, someone her own age. Afterward, she applied to become a Vanguard alongside Nika, eager to showcase her abilities.

    Marhim dreams of becoming a Vanguard and one day building a small house where she and Nika can live together. She thinks of Nika as a sister and cannot imagine ever being separated from her, to the point of even imagining marrying the same man as Nika.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/60Wj3XyeDZs",
        title: "Official PV 1",
      },
      {
        source: "youtube",
        url: "https://youtu.be/upCnPY6NOpQ",
        title: "Official PV 2",
      },
    ],
  },

  gifts: [
    { gift: "catnip-pouch", value: 30 },
    { gift: "strawberry-chubby-macaron", value: 20 },
    { gift: "frog-plush", value: 20 },
    { gift: "setflix-membership-voucher", value: 20 },
  ],
};
