import type { CharacterDetails } from "../types";

export const pantheri: CharacterDetails = {
  skins: [
    {
      id: "pantheri-s1",
      name: "Navy Blue Bunny Girl",
      portrait: "/characters/pantheri/pantheri-s1p.webp",
      fullBody: "/characters/pantheri/pantheri-s1.webp",
      fullBodyCensored: "/characters/pantheri/pantheri-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 650,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2105561121092714918",
          title: "Dance PV",
        },
      ],
    },
    {
      id: "pantheri-s2",
      name: "The Chilling Grim Reaper",
      portrait: "/characters/pantheri/pantheri-s2p.webp",
      fullBody: "/characters/pantheri/pantheri-s2.webp",
      fullBodyCensored: "/characters/pantheri/pantheri-s2c.webp",
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
          url: "https://youtu.be/PqN1dn1JImY",
          title: "Official PV",
        },
      ],
    },
    {
      id: "pantheri-s3",
      name: "Mischief Maid",
      portrait: "/characters/pantheri/pantheri-s3p.webp",
      fullBody: "/characters/pantheri/pantheri-s3.webp",
      fullBodyCensored: "/characters/pantheri/pantheri-s3c.webp",
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
          url: "https://youtu.be/niUwsXji3m4",
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
      note: "Substats Priority: \n1. Evade \n2. Melee Attack\n3. Crit Damage",
      weapon: { id: "tideblossom", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "jupiter-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-knight-of-seven-petals",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-blacksmith-gods-blessing",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "jupiter-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "shattering", level: 5 },
        { id: "plunder", level: 5, optional: true },
      ],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority: \n1. Evade \n2. Melee Attack\n3. Crit Damage",
      weapon: { id: "tideblossom", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-thousand-mile-weaver",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-thousand-mile-weaver",
          slot: "right",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
      might: [
        { id: "shattering", level: 5 },
        { id: "plunder", level: 5, optional: true },
      ],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Evade \n2. Melee Attack\n3. Crit Damage",
      weapon: { id: "tideblossom", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-blacksmith-gods-blessing",
          slot: "top",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-blacksmith-gods-blessing",
          slot: "left",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-blacksmith-gods-blessing",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "meleeAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-blacksmith-gods-blessing",
          slot: "right",
          level: 25,
          subs: [
            { stat: "evade", type: "percent", value: 5 },
            { stat: "evade", type: "percent", value: 5 },
            { stat: "critDmg", type: "percent", value: 10 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "sabre-strike",
      name: "Sabre Strike",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/pantheri/ba.webp",
      description: `Delivers a powerful and elegant slash to a nearby enemy.
      Deals Slash DMG equal to {damage}% of Melee ATK.`,
      damage: {
        stat: "meleeAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
    {
      id: "determination",
      name: "Determination",
      type: "Passive",
      icon: "/skills/pantheri/p1.webp",
      description: `When attacked, instead of the basic Counterattack (once per round), use the [Sensory Concentration] skill during the Counterattack phase. After activation, follow up with a Support Counterattack.

      [Sensory Concentration]:
      Steadies the mind and focuses the senses.
      Increases Evade by {evade}% for 1R.`,
      values: {
        evade: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380],
      },
    },
    {
      id: "outlaws-mockery",
      name: "Outlaw's Mockery",
      type: "Active",
      ap: 45,
      cooldown: 3,
      icon: "/skills/pantheri/s1.webp",
      description: `Performs an elegant sword dance to draw the attention of enemies and prepare for their attacks.
      Decreases Accuracy of enemies within a 5m radius by {accuracy}% for 2R and temporarily forces them to focus on the user.
      The user gains the [Counter Stance] effect for 2R, and Aggro Adjustment increases.

      - [Counter Stance]: When attacked by enemies within basic attack range, counterattacks regardless of the normal counter limit.`,
      values: {
        accuracy: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
      },
    },
    {
      id: "master-of-skirmish",
      name: "Master of Skirmish",
      type: "Passive",
      icon: "/skills/pantheri/p2.webp",
      description: `The SwashBuckler's dazzling attacks create a chaotic state where friend and foe are indistinguishable.
      When attacking during own turn, there is a {chance}% chance that the attacked target will mistake their counterattack target. In this case, the enemy will attack their own ally.
      Additionally, own Evade increases by {evade}%, and attacks from behind will not be counted as Weak Point attacks.`,
      values: {
        chance: [50, 55, 60, 65, 70, 75, 80, 85, 90, 100],
        evade: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "that-one-strike",
      name: "That One Strike",
      type: "Active",
      ap: 90,
      cooldown: 3,
      icon: "/skills/pantheri/s2.webp",
      description: `Delivers an unavoidable strike based on the mastery of the sword.
      Deals Pierce DMG equal to {damage}% of Melee ATK to the enemy.

      [SIGNATURE WEAPON EFFECT]:
      When using [That One Strike], temporarily sets Crit Rate to 100% and increases Crit DMG by 39% of Evade. If it hits a Weak Point, the cooldown is reduced by 1 round.`,
      damage: {
        stat: "meleeAtk",
        percent: [250, 275, 300, 325, 350, 375, 400, 425, 450, 475],
        damageType: "Pierce",
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Sacred Duel",
      icon: "/skills/pantheri/sacred-duel.webp",
      description: `When using [Outlaw's Mockery], increases all attack ranges by 1m for 2R.

      When evading an Active Skill (excluding Counterattacks), has a {chance}% chance to perform a Support Counterattack with [That One Strike].
      Each Support Counterattack increases Combat Skill DMG by {combatSkillDmg}%. Stacks up to 10 times.

      If an enemy hit by [That One Strike] has [Archnemesis' aura], grants [Sacred Duel].

      [Sacred Duel]: At the start of your turn, increases the caster's Aggro Adjustment by 200.`,
      values: {
        chance: [40, 50, 60, 70, 80, 90, 100],
        combatSkillDmg: [20, 22, 24, 26, 28, 30, 32],
      },
    },
  },

  weaponType: "One-handed Sword",

  basic: { str: 11, tec: 7, int: 6, vit: 7, agi: 16 },

  gradeGains: {
    B: { agi: -1 },
    A: { str: -1 },
    SS: { agi: 1 },
    EX: { agi: 1 },
    EX1: { vit: 1 },
    EX2: { agi: 1 },
    EX3: { str: 1 },
    EX4: { agi: 1 },
    EX5: { agi: 1 },
    EX6: { vit: 1 },
  },

  traits: [
    "friend-of-the-people",
    "overwhelming",
    "marlon",
    "interested-melee",
    "righteous",
    "renowned",
    "noticeable",
  ],

  manual: {
    spd: 117,
    startApSeen: { value: 121, grade: "S" },
  },

  profile: {
    age: "26",
    race: "Marlon",
    homeland: "The Empire, Laguna Island",
    height: "168cm",
    birthday: "September 25th",
    bwh: "86(G)-50-94",
    story: `Laguna Island, far removed from the continent, had long been a place of exploitation. In such a place, Pantheri emerged like a comet, rescuing the common people, a righteous outlaw. Calling herself a freebooter or hero, Pantheri demonstrated incredible swordsmanship alone, representing the people in trial by combat or assassinating corrupt nobles, among other daring deeds. In truth, she was Elena, the daughter of the viceroy of Laguna, and when that fact became known, she had no choice but to flee to the Imperial mainland.

    After the Rift Crisis, Pantheri arrived on Earth and discovered that there were also suffering people here, even in the outskirts. Moreover, the exploitation on Earth was far more subtle and systematic, requiring her to be even more cautious.

    It was Yeon Chae-young of the Bureau of Rift Management who sought her out. Yeon Chae-young showed Pantheri records from the past and explained that the hardships these people endured ultimately stemmed from the Rifts. She convinced Pantheri that the real enemy was the monsters of the Rift. Pantheri accepted Yeon Chae-young's words and decided to fight as a Vanguard to make this world a better place.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/r6GbIMV_u8o",
        title: "Affection PV",
      },
    ],
  },

  gifts: [
    { gift: "dartagnan-romance", value: 30 },
    { gift: "a-single-rose", value: 20 },
  ],
};
