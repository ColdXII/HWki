import type { CharacterDetails } from "../types";

export const kotoha: CharacterDetails = {
  skins: [
    {
      id: "kotoha-s1",
      name: "???",
      portrait: "/characters/kotoha/kotoha-s1p.webp",
      fullBody: "/characters/kotoha/kotoha-s1.webp",
      fullBodyCensored: "/characters/kotoha/kotoha-s1c.webp",
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
      note: "Substats Priority:\n1. Magic Attack\n2. Starting AP\n3. Max HP",
      weapon: { id: "fox-spirits-guidance", level: 60, dupe: 5 },
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
          set: "scorching-sun",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "scorching-sun",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. Magic Attack\n2. Max HP",
      weapon: { id: "fox-spirits-guidance", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Magic Attack\n2. Max HP",
      weapon: { id: "fox-spirits-guidance", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "maxHp", type: "percent", value: 5 },
          ],
        },
      ],
      generalTraits: [],
    },
  ],

  skills: [
    {
      id: "soulstrike",
      name: "Soulstrike",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/kotoha/ba.webp",
      description: `Hurls an ofuda at the target, dealing Immaterial DMG equal to {damage}% of Magic ATK.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Immaterial",
      },
    },
    {
      id: "kitsunes-footsteps",
      name: "Kitsune's Footsteps",
      type: "Passive",
      icon: "/skills/kotoha/p1.webp",
      description: `At the start of battle, gains {ap} AP, and SPD increases by {spd}% until the end of the first turn.`,
      values: {
        ap: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        spd: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      },
    },
    {
      id: "offering-of-life",
      name: "Offering of Life",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/kotoha/s1.webp",
      description: `Earns a stat boost for the rest of the battle by sacrificing current HP.
      Consumes {sacrifice}% of current HP to increase Magic ATK by {magicAtk}% for the rest of the battle. Can only be used once per battle.

      [SIGNATURE WEAPON EFFECT]:
      Reduces the AP cost of [Offering of Life] to 0 during battle.`,
      values: {
        sacrifice: [63, 66, 69, 72, 75, 78, 81, 84, 87, 90],
        magicAtk: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
    {
      id: "art-of-perfect-unity",
      name: "Art of Perfect Unity",
      type: "Active",
      ap: 0,
      cooldown: 3,
      icon: "/skills/kotoha/s2.webp",
      description: `Attaches her soul to an ally, becoming their guide in battle.
      Activates upon using [Offering of Life]. Grants [Perfect Unity] to the designated ally.

      - [Perfect Unity]: Increases the target's Melee ATK and Magic ATK by {buff}% of their base Melee ATK and base Magic ATK, respectively. The final increase is boosted by 2.5% for every 50 Magic ATK the caster has, up to a maximum bonus of 100%.
      
      While this effect is active, the caster cannot act or perform Responses, and becomes immune to status effects such as [Taunt] and [Stun].
      [Perfect Unity] is removed if the affected ally is defeated or if the Barrier granted by [Boundary Ward] is destroyed.

      [SIGNATURE WEAPON EFFECT]:
      While [Perfect Unity] is active, Elemental Boost increases by 40%, plus an additional 4% for each skill level of [Art of Perfect Unity].`,
      values: {
        buff: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      },
    },
    {
      id: "boundary-ward",
      name: "Boundary Ward",
      type: "Passive",
      icon: "/skills/kotoha/p2.webp",
      description: `Upon using [Art of Perfect Unity], gains a Barrier equal to {shield}% of the HP lost.
      When this Barrier is removed, or if the ally affected by [Perfect Unity] is defeated, gains 120 AP.

      While protected by the Barrier granted by [Boundary Ward], cannot be defeated. Additionally, the first time incoming damage exceeds the Barrier's remaining strength, the excess damage will not reduce HP. However, all incoming attacks are guaranteed to hit.`,
      values: {
        shield: [40, 48, 56, 64, 72, 80, 88, 96, 104, 112],
      },
    },
  ],

  weaponType: "Mana Shard",

  basic: { str: 4, tec: 8, int: 20, vit: 10, agi: 14 },

  gradeGains: {
    B: { int: 1 },
    A: { int: 2 },
    S: { agi: 2 },
    SS: { vit: 3, agi: 1 },
    EX1: { int: 2 },
    EX2: { int: 1, vit: 1 },
    EX3: { int: 2, vit: 1 },
    EX4: { int: 2, agi: 2 },
    EX5: { vit: 3, agi: 1 },
    EX6: { int: 4, vit: 2 },
  },

  traits: [
    "fox-spirits-blessing",
    "kindred-spirit",
    "human",
    "interested-magic",
    "blurry",
    "arrogant",
    "prepared",
  ],

  manual: {
    spd: 83,
    startApSeen: { value: 128, grade: "EX" },
  },

  profile: {
    age: "20",
    race: "Human",
    homeland: "East Asian Federation, Tokyo",
    height: "162cm",
    birthday: "March 5th",
    bwh: "92(K)-51-91",
    story: `Shiraishi Kotoha was abandoned as an infant outside a shrine in Tokyo dedicated to a fox spirit. When she was found, several white foxes had gathered around her, shielding her from the cold. From that day on, she became known as "the child brought by the foxes," and was taken in as one of the shrine's mikos.

    Raised in a shrine devoted to the fox spirit, Kotoha grew up surrounded by warmth and kindness. Gifted with both a sharp mind and a compassionate heart, she devoted herself to her training from an early age, determined to repay the shrine and the mikos who had given her a home. In time, her extraordinary spiritual power and graceful beauty earned her recognition as the shrine's foremost miko.

    The fox spirit she served guided the souls of the departed to the afterlife, and Kotoha often accompanied it in carrying out that sacred duty. One day, however, while escorting the dead, she sensed an unfamiliar fear among the spirits. Countless Abominations were descending upon Tokyo. Realizing the catastrophe before it unfolded, Kotoha acted without hesitation. She led her fellow mikos and countless civilians to safety in Nagoya, narrowly escaping the disaster that would soon engulf the city.

    The miracle came at a terrible cost. The shrine was reduced to ruins, and the fox spirit sacrificed its life to protect the people. Having lost both their home and the deity they had faithfully served, the displaced mikos were left without a shrine, or a god.

    Not long afterward, news reached them that a new Human God had appeared in Neo Seoul. When Kotoha and the other mikos witnessed the Human God's divine power from afar, their souls resonated with it. The feeling was so familiar that it was as though they had finally found their way home.

    After much deliberation, the mikos resolved to serve the Human God as their new deity. Chosen as their representative, Kotoha volunteered to become one of his Vanguards. The moment she arrived at the Bureau of Rift Management, she boldly announced,
    "The Human God's miko has arrived." From that day forward, she became a constant source of headaches for everyone around her.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/RSJa5ynx7qQ",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2086690424576782651",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2087091512727482719",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "soju", value: 20 },
    { gift: "glazed-fruit-stick", value: 20 },
    { gift: "grey-goose-vodka", value: 70 },
  ],
};
