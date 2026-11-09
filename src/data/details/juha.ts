import type { CharacterDetails } from "../types";

export const juha: CharacterDetails = {
  skins: [
    {
      id: "juha-s1",
      name: "Tender Gingerbread Girl",
      portrait: "/characters/juha/juha-s1p.webp",
      fullBody: "/characters/juha/juha-s1.webp",
      fullBodyCensored: "/characters/juha/juha-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "juha-s2",
      name: "Spec Ops Divine Unit",
      portrait: "/characters/juha/juha-s2p.webp",
      fullBody: "/characters/juha/juha-s2.webp",
      fullBodyCensored: "/characters/juha/juha-s2c.webp",
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
          url: "https://youtu.be/9u_zPbNayX4",
          title: "Official PV",
        },
      ],
    },
    {
      id: "juha-s4",
      name: "Track Mate",
      portrait: "/characters/juha/juha-s4p.webp",
      fullBody: "/characters/juha/juha-s4.webp",
      fullBodyCensored: "/characters/juha/juha-s4c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
    },
    {
      id: "juha-s6",
      name: "Summer Confidence",
      portrait: "/characters/juha/juha-s6p.webp",
      fullBody: "/characters/juha/juha-s6.webp",
      fullBodyCensored: "/characters/juha/juha-s6c.webp",
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
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-wings-of-glory", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "the-wind-that-wanders-the-world", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "the-wind-that-wanders-the-world", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent", "efficient", "improvising", "mysterious"],
    },
    {
      id: "late-game-2",
      name: "Late Game 2",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-wings-of-glory", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent", "efficient", "improvising", "mysterious"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. AP Recovery\n2. Starting AP",
      weapon: { id: "the-wings-of-glory", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss", slot: "top", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "left", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "bottom", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss", slot: "right", level: 25,
          subs: [
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "apRecovery", type: "percent", value: 2 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent", "efficient", "improvising", "mysterious"],
    },
  ],

  skills: [
    {
      id: "military-shooting",
      name: "Military Shooting",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/juha/ba.webp",
      description: `Fires an accurate shot at the enemy with a rifle.
      On hit, deals {damage}% of Ranged ATK as Pierce DMG.

      [SIGNATURE WEAPON EFFECT]:
      On Basic Attack, there is a 50% chance to reduce the cooldown of the skills [Combat Roll], [Mental Corrosion] and [The Executioner] by 1 round.`,
      damage: { stat: "rangedAtk", percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114], damageType: "Pierce" },
    },
    {
      id: "combat-roll",
      name: "Combat Roll",
      type: "Active",
      ap: 30,
      cooldown: 2,
      icon: "/skills/juha/s1.webp",
      description: `Jump low to the designated location and gain AP of {ap}.`,
      values: {
        ap: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "mental-corrosion",
      name: "Mental Corrosion",
      type: "Active",
      ap: 20,
      cooldown: 1,
      icon: "/skills/juha/s2.webp",
      description: `Applies the [Mental Defeat] effect to enemies within a 45º, 12m cone for 2R.

      [Mental Defeat]: Reduces Pierce DEF by {pierceDef}.`,
      values: {
        pierceDef: [180, 195, 210, 225, 240, 255, 270, 285, 300, 315],
      },
    },
    {   
      id: "blazing-zeal",
      name: "Blazing Zeal",
      type: "Passive",
      icon: "/skills/juha/p1.webp",
      description: `Allies with over 50% HP who attack using a <Firearm> based skill receive the [Blessing of Firepower] effect from the Bullet Priestess.

      [Blessing of Firepower]: Increases AP Recovery by {apRecovery}%, Ranged ATK by {rangedAtk}%, and Pierce Boost and Crush Boost by {boost}% until the start of the next round.
      When the effect ends, inflicts fixed damage equal to 5% of current HP.`,
      values: {
        apRecovery: [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 28.5],
        rangedAtk:　[25, 28, 31, 34, 37, 40, 43, 46, 49, 52],
        boost: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5],
      },
    },
    {
      id: "the-executioner",
      name: "The Executioner",
      type: "Active",
      ap: 90,
      cooldown: 2,
      icon: "/skills/juha/s3.webp",
      description: `Blesses an ally with Orke's divinity for an inevitable victory.
      If another spirit is already there, some "mischief" may occur…
      The designated ally gains {ap} AP and enters [The Executioner] state for 1 round.
      At the end of any turn during which the ally in [The Executioner] state attacks, they gain the [Executioner's Bullet] effect, lasting for 1 round.

      - [The Executioner]: Increases Ranged ATK by {rangedAtk}% of the Saint of Bullet's base Ranged ATK.
      - [Executioner's Bullet]: Increases All ATK by {allAtk}% of the Saint of Bullet's base Ranged ATK. Can stack up to 3 times.`,
      values: {
        ap: [100, 104, 108, 112, 116, 120, 124, 128, 132, 136],
        rangedAtk:　[40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        allAtk: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      },
    },
    {   
      id: "brothers-and-sisters-of-faith",
      name: "Brothers and Sisters of Faith",
      type: "Passive",
      icon: "/skills/juha/p2.webp",
      description: `Increases Accuracy of allies within a 3m radius by {accuracy}%.`,
      values: {
        accuracy: [40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
      },
    },
  ],

  weaponType: "Rifle",

  basic: { str: 7, tec: 14, int: 9, vit: 8, agi: 11 },

  gradeGains: {
    B: { tec: -1 },
    A: { agi: -1 },
    S: { tec: -1 },
    SS: { agi: -1 },
    EX1: { tec: 1 },
    EX2: { tec: 1 },
    EX3: { agi: 1 },
    EX4: { tec: 1 },
    EX5: { agi: 1 },
    EX6: { tec: 1 },
  },

  traits: [
    "fervent-soul",
    "whisper-of-the-gun",
    "orke",
    "interested-ranged",
    "competent",
    "arrogant",
    "faithful",
  ],

  manual: {
    spd: 87,
    startApSeen: { value: 118, grade: "EX" },
  },

  profile: {
    age: "22",
    race: "Orke",
    homeland: "Orke Republic, Morrim Island",
    height: "172cm",
    birthday: "22nd-Month 22nd",
    bwh: "84(G)-51-93",
    story: `The Orke, a race of mercenaries across the universe, are particularly fond of firearms, but some of them, those who awaken their mental abilities, replace bullets and grenades with their own mental energy. These individuals are called "shamans," and Juha of the prestigious Daeyeon family is one of the most talented among them.

    Born into the renowned Daeyeon family, Juha joined her clan's mercenary business as soon as she turned twenty. During battle, she awakened as a shaman, gaining the ability to channel her mental energy through her gun.

    However, this wasn't entirely a good thing for Juha. Her mental energy was so powerful that she began to lose control, and her thoughts started to become audible to those around her. Fortunately, those in her vicinity kept this fact from her, considering her high status, and, taking the political ramifications into account, they decided to send her off-world for training until she could master her abilities and suppress her thoughts.

    Not knowing the real reason, Juha was resentful about being suddenly dispatched to Earth, almost like an exile, but she is determined to prove her worth as a capable mercenary. She hopes to find the Human Gods, the combat leaders of Earth, and offer the combat prowess of herself and her subordinates.`,
  },

  gifts: [
    { gift: "orca-documentary", value: 30 },
    { gift: "forbidden-romance", value: 20 },
    { gift: "training-equipment-set", value: 20 },
  ],
};
