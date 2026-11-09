import type { CharacterDetails } from "../types";

export const nika: CharacterDetails = {
  skins: [
    {
      id: "nika-s1",
      name: "Angelic Vacation",
      portrait: "/characters/nika/nika-s1p.webp",
      fullBody: "/characters/nika/nika-s1.webp",
      fullBodyCensored: "/characters/nika/nika-s1c.webp",
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
          url: "https://youtu.be/0zBVmxuIEQQ",
          title: "Official PV",
        },
      ],
    },
    {
      id: "nika-s2",
      name: "Thoroughly Wet",
      portrait: "/characters/nika/nika-s2p.webp",
      fullBody: "/characters/nika/nika-s2.webp",
      fullBodyCensored: "/characters/nika/nika-s2c.webp",
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
          url: "https://youtu.be/JqLEdomCiJM",
          title: "Official PV",
        },
      ],
    },
    {
      id: "nika-s3",
      name: "Resort Part-timer",
      portrait: "/characters/nika/nika-s3p.webp",
      fullBody: "/characters/nika/nika-s3.webp",
      fullBodyCensored: "/characters/nika/nika-s3c.webp",
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
          url: "https://youtu.be/indnoW9UKGE",
          title: "Official PV",
        },
      ],
    },
  ],

  builds: [
    {
      id: "late-game",
      name: "Late Game",
      recommended: true,
      note: "Substats Priority: \n1. Accuracy\n2. AP Recovery",
      weapon: { id: "the-ninth-bite", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-nobles-tactics", slot: "left", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "bottom", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority: \n1. Accuracy\n2. AP Recovery",
      weapon: { id: "the-ninth-bite", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "record-of-orphan", slot: "top", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
          ],
        },
        {
          set: "the-nobles-tactics", slot: "left", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "accuracy", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
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
      icon: "/skills/nika/ba.webp",
      description: `After attacking the designated enemy, leaps low backward to move 4m away from the target.
      Deals Pierce DMG equal to {damage}% of Melee ATK.`,
      damage: { stat: "meleeAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {   
      id: "shadow-step",
      name: "Shadow Step",
      type: "Passive",
      icon: "/skills/nika/p1.webp",
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
      id: "poison-arrow",
      name: "Poison Arrow",
      type: "Active",
      ap: 30,
      cooldown: 2,
      icon: "/skills/nika/s1.webp",
      description: `Targets up to 3 enemies in order of proximity and fires poisoned arrows drenched in a special toxin.
      On hit, deals Melee ATK {damage}% as Pierce DMG and inflicts 1 stack of [Necrotoxin].`,
      damage: { stat: "meleeAtk", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Pierce" },
      values: {
        accuracy: [70, 77, 84, 91, 98, 105, 112, 119, 126, 133],
      },
    },
    {   
      id: "deadly-poison",
      name: "Deadly Poison",
      type: "Passive",
      icon: "/skills/nika/p2.webp",
      description: `When the user's attack hits, inflicts 1 stack of [Necrotoxin].
      If the target is already afflicted, additionally deals {damage}% of the accumulated Necrotoxin as Additional Poison DMG.
      (This bonus damage does not scale with the user's Additional DMG Boost or Poison Boost.)

      [Necrotoxin]:
      Accumulates based on the user's Accuracy {accuracy}%.
      Newly applied stacks also scale with the user's Additional DMG Boost and Poison Boost.
      At the start of each round, the afflicted target takes Additional Poison DMG equal to 100% of accumulated Necrotoxin.
      This effect can stack up to 6 times with the same name.`,
      damage: { stat: "additionalPoisonDmg", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Poison" },
      values: {
        accuracy: [70, 77, 84, 91, 98, 105, 112, 119, 126, 133],
      },
    },
    {
      id: "lethal-poison",
      name: "Lethal Poison",
      type: "Active",
      ap: 60,
      cooldown: 3,
      icon: "/skills/nika/s2.webp",
      description: `Targets an enemy afflicted with [Necrotoxin] and strikes with a toxin-laced dagger.

      Deals Melee ATK {damage}% as Pierce DMG.
      On hit, additionally deals {damage2}% of the accumulated Necrotoxin as Additional Poison DMG.
      (This damage is not affected by the user's Additional DMG Boost or Poison Boost.)

      If the target is killed, inflicts 2 stacks of [Necrotoxin] on enemies affected by the Venom Accumulation skill.`,
      damage: [
        { stat: "meleeAtk", percent: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57], damageType: "Pierce" },
        { stat: "additionalPoisonDmg", percent: [300, 310, 320, 330, 340, 350, 360, 370, 380, 390], damageType: "Poison" },
      ],
    },
    {   
      id: "poison-accumulation",
      name: "Poison Accumulation",
      type: "Passive",
      icon: "/skills/nika/p3.webp",
      description: `At the start of a random turn or when the user activates a skill, all enemies within 5m have their Poison DEF reduced by {poisonDef} until the end of the turn.`,
      values: {
        poisonDef: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      },
    },
  ],

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
    "dirty-pair-marhim",
    "lack-of-presence",
    "catsidhe",
    "interested-melee",
    "paranoid",
    "blurry",
    "masterful",
  ],

  manual: {
    spd: 123,
    startApSeen: { value: 133, grade: "EX" },
  },

  profile: {
    age: "23",
    race: "Catsidhe",
    homeland: "Ere, Square Path",
    height: "158cm",
    birthday: "April 2nd",
    bwh: "81(G)-49-90",
    story: `Like many Catsidhe, Nika chose the path of a professional assassin under "Valolana." As an honorable member of Valolana, she assassinated quite a few villains, earning herself the nickname "Petal's Shadow" for her distinctive petal-shaped blade.

    After the Rift Crisis, Valolana fortunately discovered an underground Rift and, despite heavy sacrifices, managed to migrate to Earth through it. However, with assassination being illegal on Earth, Nika quickly found herself without purpose and fell into despair.

    Introverted and timid, she spent much of her time confined to the house assigned to Valolana, with her self-esteem inevitably plummeting. The news of the Bureau of Rift Management recruiting Vanguards offered her a new sense of purpose. As an expert in assassination, the chance to continue her work meant that she could regain her confidence.`,
    pv: [
        {
          source: "youtube",
          url: "https://youtu.be/AeqdqNBWbv4",
          title: "Affection PV",
        },
      ],
  },

  gifts: [
    { gift: "gloomy-chromi-keyring", value: 30 },
    { gift: "catnip-pouch", value: 20 },
    { gift: "strawberry-chubby-macaron", value: 20 },
  ],
};
