import type { CharacterDetails } from "../types";

export const min_eun_sol: CharacterDetails = {
  skins: [
    {
      id: "mineunsol-s1",
      name: "Pastel Pink Bunny Girl",
      portrait: "/characters/mineunsol/mineunsol-s1p.webp",
      fullBody: "/characters/mineunsol/mineunsol-s1.webp",
      fullBodyCensored: "/characters/mineunsol/mineunsol-s1c.webp",
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
      id: "late-game",
      name: "Late Game",
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Magic Attack",
      weapon: { id: "the-black-idol", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Max HP\n2. AP Recovery\n3. Magic Attack",
      weapon: { id: "the-black-idol", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "mental-shock",
      name: "Mental Shock",
      type: "Active",
      ap: 60,
      cooldown: 0,
      icon: "/skills/mineunsol/ba.webp",
      description: `Inflicts an unavoidable attack by shocking the enemy's mind.
      Deals Immaterial DMG equal to {damage}% of Magic ATK and reduces the target's AP by 5.
      If the target has the [One Who Disturbed the King's Offering] effect, deals an Additional Immaterial DMG equal to {damage2}% of Magic ATK.`,
      damage: [
        { stat: "magicAtk", percent: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95], damageType: "Immaterial" },
        { stat: "magicAtk", percent: [70, 77, 84, 91, 98, 105, 112, 119, 126, 133], damageType: "Immaterial" },
      ],
    },
    {   
      id: "kings-offering",
      name: "King's Offering",
      type: "Passive",
      icon: "/skills/mineunsol/p1.webp",
      description: `"This creature is the offering of the Dark King, and none shall covet it."
      When attacked by an enemy, deals Additional Immaterial DMG equal to {damage}% of Magic ATK to the target and applies [One Who Disturbed the King's Offering] for 2 rounds.

      - [One Who Disturbed the King's Offering]: Reduces AP recovery by {apRecovery}% and reduces All ATK by {allAtk}%.`,
      damage: { stat: "magicAtk", percent: [25, 27, 30, 32, 35, 38, 41, 44, 47, 50], damageType: "Immaterial" },
      values: {
        apRecovery: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        allAtk: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
    {
      id: "devour-will",
      name: "Devour Will",
      type: "Active",
      ap: 30,
      cooldown: 1,
      icon: "/skills/mineunsol/s1.webp",
      description: `The authority of the Dark King devours the enemy's will to survive. Deals unblockable Magic ATK equal to {damage}% as Immaterial DMG to an enemy, inflicting [Devour Will] for 2R and [Taunt].

      - [Devour Will]: Reduces Evade by {evade}% and makes Counterattack impossible.`,
      damage: { stat: "magicAtk", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Immaterial" },
      values: {
        evade: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
    {   
      id: "kings-favor",
      name: "King's Favor",
      type: "Passive",
      icon: "/skills/mineunsol/p2.webp",
      description: `Upon successful attack, gain a shield equal to Magic ATK of {shield}% lasting for 2R.

      [SIGNATURE WEAPON EFFECT]:
      At the start of any turn, if you have the [King's Favor] effect, all allies except yourself gain 1000 to All DEF for the duration of the turn.`,
      values: {
        shield: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
      },
    },
    {
      id: "the-kings-wrath",
      name: "The King's Wrath",
      type: "Active",
      ap: 90,
      cooldown: 3,
      icon: "/skills/mineunsol/s2.webp",
      description: `This skill can only target an enemy with the [Touched the King's Offering] effect originating from yourself that exists on the battlefield.
      Deals unblockable Magic ATK equal to {damage}% as Immaterial DMG to an enemy.
      This attack does not trigger a critical hit, and always hit as a Weak Point Attack if the target has a weakness.`,
      damage: { stat: "magicAtk", percent: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380], damageType: "Immaterial" },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 5, tec: 6, int: 14, vit: 13, agi: 5 },

  gradeGains: {
    B: { int: -1 },
    S: { agi: 1 },
    SS: { vit: 1 },
    EX: { int: 2 },
    EX1: { int: 2 },
    EX2: { int: 1 },
    EX3: { agi: 1 },
    EX4: { vit: 1 },
    EX5: { int: 2 },
    EX6: { int: 2 },
  },

  traits: [
    "wholehearted",
    "mental-bulwark",
    "human",
    "interested-magic",
    "peaceful",
    "dogmatic",
  ],

  manual: {
    spd: 79,
    startApSeen: { value: 110, grade: "A" },
  },

  profile: {
    age: "21",
    race: "Human",
    homeland: "East Asia Federation, Seoul",
    height: "158cm",
    birthday: "January 20th",
    bwh: "72(C)-51-86",
    story: `Now forgotten by everyone, Eun-sol was one of the victims aboard the ship where the Human God first awakened. She was targeted by the Forsaken God, and the Human God gambled with his life to protect her.

    Eun-sol remembers that sacrifice, and after pondering how she might help the Human God, she made a selfless but dangerous choice.`,
  },

  gifts: [
    { gift: "forbidden-romance", value: 20 },
    { gift: "human-gods-hair", value: 70 },
  ],
};
