import type { CharacterDetails } from "../types";

export const korabi: CharacterDetails = {
  skins: [
    {
      id: "korabi-s2",
      name: "Witch of Ardor",
      portrait: "/characters/korabi/korabi-s2p.webp",
      fullBody: "/characters/korabi/korabi-s2.webp",
      fullBodyCensored: "/characters/korabi/korabi-s2c.webp",
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
          url: "https://youtu.be/HYNGTksqM_s",
          title: "Official PV",
        },
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/1965259425469571403",
          title: "X PV",
        },
      ],
    },
    {
      id: "korabi-s3",
      name: "???",
      portrait: "/characters/korabi/korabi-s3p.webp",
      fullBody: "/characters/korabi/korabi-s3.webp",
      fullBodyCensored: "/characters/korabi/korabi-s3c.webp",
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
      note: "Substats Priority:\n1. Crit Damage (Min 200%)\n2. Magic ATK\n3. AP Recovery",
      weapon: { id: "red-pudding", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
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
      name: "Late Game 2: Slash",
      note: "Substats Priority:\n1. Crit Damage (Min 200%)\n2. Magic ATK\n3. AP Recovery\n4. Starting AP",
      weapon: { id: "red-pudding", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "lifebound",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "lifebound",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "magicAtk", type: "percent", value: 5 },
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
      note: "Substats Priority:\n1. Crit Damage (Min 200%)\n2. Magic ATK\n3. AP Recovery",
      weapon: { id: "red-pudding", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "magicAtk", type: "percent", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "critDmg", type: "percent", value: 10 },
            { stat: "magicAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: ["overworked", "persistent", "efficient", "improvising"],
    },
  ],

  skills: [
    {
      id: "sharp-wave",
      name: "Sharp Wave",
      type: "Active",
      ap: 45,
      cooldown: 0,
      icon: "/skills/korabi/ba.webp",
      description: `Targets an enemy and unleashes blades of water in a 25º, 7m cone.
      Deals Slash DMG equal to {damage}% of Magic ATK, restores HP to allies along the path by {recoverHp}% of Magic ATK, and grants 1 stack of [Tip of the Wave] for 2 rounds.

      - [Tip of the Wave]: Crit Rate increases by 4%, stacks up to 2 times.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
      values: {
        recoverHp: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      },
    },
    {
      id: "counterwave",
      name: "Counterwave",
      type: "Passive",
      icon: "/skills/korabi/p1.webp",
      description: `At the start of each round, {chance}% chance to gain [Counterwave] for 1 round.

      - [Counterwave]: Grants immunity to action-forcing effects [Taunt], [Fear], [Sleap], [Madness], [Stun] and the action-restricting effect [Focus Disruption], while Heat DEF increases by {heatDef}`,
      values: {
        chance: [30, 33, 36, 39, 42, 45, 48, 51, 54, 57],
        heatDef: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      },
    },
    {
      id: "blood-pact",
      name: "Blood Pact",
      type: "Active",
      ap: 30,
      cooldown: 2,
      icon: "/skills/korabi/s1.webp",
      description: `Strengthens the pulse of blood, breathing in new vitality.
      Grants the targeted ally [Burning Desire] for 2R.

      [Burning Desire]:
      Aggro Adjustment decreases by 12, SPD increases by 40%, Max HP increases by 12% and Crit DMG increases by {critDmg}% of the caster's Base Crit DMG.
      Crit DMG gained from this effect cannot exceed {scale}%.
      When attacking 2 or more enemies, Crit Rate temporarily increases by 72%.

      [SIGNATURE WEAPON EFFECT]:
      The [Burning Desire] effect granted by the skill [Blood Pact] increases the target ally's Slash Boost and Crush Boost by 50% of your Base Slash Boost, and increases their Melee ATK and Ranged ATK by 15% of your Base Magic ATK.
      Slash Boost and Crush Boost gained this way cannot exceed 30%.`,
      values: {
        critDmg: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        scale: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
      },
    },
    {
      id: "crimson-curse",
      name: "Crimson Curse",
      type: "Passive",
      icon: "/skills/korabi/p2.webp",
      description: `Breathes a crimson curse that spreads with every wound.
      Healing Output increases by {healing}%.
      Enemies hit by your attacks are afflicted with [Blood Plague], making them more vulnerable to damage. Vulnerability further increases if your Vitality is above 13.

      - [Blood Plague]: Damage taken increases by {damageTaken}%,
      For every 1 Vitality above 13, Damage taken further increases by 0.5%.`,
      values: {
        healing: [33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
        damageTaken: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
      },
    },
    {
      id: "wave-of-blood",
      name: "Wave of Blood",
      type: "Active",
      ap: 75,
      cooldown: 2,
      icon: "/skills/korabi/s2.webp",
      description: `When using the skill [Blood Pact], this skill becomes active for 2 rounds.
      Unleashes a surging wave of blood that overturns the flow.
      Deals Slash DMG equal to {damage}% of Magic ATK to enemies within a 4m radius around the targeted location.
      Enemies hit are afflicted with [Blood Frenzy] for 2 rounds.
      This skill cannot trigger a Weak Point attack, but temporarily increases Accuracy by 300%.

      - [Blood Frenzy]: When applied, gain 40 AP.
      While holding this effect, AP Recovery increases by 44%, but Melee and Ranged ATK decreases by {debuff}%, and Magic ATK decreases by {debuff2}%.`,
      damage: {
        stat: "magicAtk",
        percent: [120, 132, 144, 156, 168, 180, 192, 204, 216, 228],
        damageType: "Slash",
      },
      values: {
        debuff: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        debuff2: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      },
    },
    {
      id: "whirlwind-of-bloodlust",
      name: "Whirlwind of Bloodlust",
      type: "Active",
      ap: 60,
      cooldown: 1,
      icon: "/skills/korabi/s3.webp",
      description: `When an ally is hit or attacks an enemy, gain 1 stack of [Bloodlust].
      This skill can be used while holding 5 or more stacks.

      Unleashes a Whirlwind of Bloodlust to strike enemies.
      Deals Slash DMG equal to {damage}% of Magic ATK to enemies within a 3m radius around the targeted location and slightly pulls them toward the center.
      This skill cannot trigger a Weak Point attack, but temporarily increases Accuracy by 300%.

      - [Bloodlust]: Base effect of using the skill [Whirlwind of Bloodlust], stacks up to 5 times.

      [SIGNATURE WEAPON EFFECT]:
      When using the skill [Whirlwind of Bloodlust], removes Weak Points from all allies for 2 rounds.`,
      damage: {
        stat: "magicAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Slash",
      },
    },
  ],

  demiGod: {
    effect: {
      name: "Warlord",
      icon: "/skills/ines/warlord.webp",
      description: `When [Blood Frenzy] inflicted by [Wave of Blood] is applied to an enemy, the target additionally gains 200 AP.
      This bonus AP is removed at the end of the turn in which the target acts.

      While under the effect of [Burning Desire] inflicted by [Blood Pact], attacking a target affected by [Blood Frenzy] deals Additional Slash DMG equal to {additionalSlashDmg}% of Korabi's Magic ATK at the end of the turn.

      The AP cost of [Wave of Blood] and [Whirlwind of Bloodlust] is reduced by 20. Whenever a skill (other than standby) is used, the cooldown of [Wave of Blood] and [Whirlwind of Bloodlust] is reduced by 1R.

      Support Counterattacks triggered by [Timid, Yet Explosive!] are guaranteed to activate.`,
      values: {
        additionalSlashDmg: [300, 330, 360, 390, 420, 450, 480],
      },
    },
  },

  weaponType: "Staff",

  basic: { str: 7, tec: 8, int: 13, vit: 10, agi: 10 },

  gradeGains: {
    B: { tec: -1 },
    A: { int: -1 },
    S: { agi: -1 },
    SS: { vit: -1 },
    EX1: { int: 2 },
    EX2: { vit: 1 },
    EX3: { int: 1 },
    EX4: { agi: 1 },
    EX5: { vit: 1 },
    EX6: { int: 2 },
  },

  traits: [
    "timid-yet-explosive",
    "decidedly-above-average",
    "kesak",
    "interested-magic",
    "overworked",
    "useful",
    "hidden",
  ],

  manual: {
    spd: 89,
    startApSeen: { value: 126, grade: "EX" },
  },

  profile: {
    age: "29",
    race: "Kesak",
    homeland: "Bel-Lamori",
    height: "179cm",
    birthday: "December 29th",
    bwh: "93(H)-55-105",
    story: `From childhood, Korabi was timid, an unforgivable flaw among the brutish Kesak. Because of this, she was ostracized by her kin, spending most of her time on the fringes of ruined sites.

    One day, a fatal fall nearly killed her. She was saved by an ancient relic mask of her ancestors, which granted her the ability to manipulate blood. This power drastically boosted her intelligence, but also widened the rift between her and the rest of the Kesak.

    Eventually, she left Bel-Lamori alone, catching the eye of the Rift Nations. She became a Vanguard under the Human God, carrying a faint hope that perhaps she might one day change her foolish kin.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/svkLH8dC-D4",
        title: "Official PV",
      },
      {
        source: "youtube",
        url: "https://youtu.be/ZspglgsmaUA",
        title: "Affection PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/1965330662506070028",
        title: "X PV",
      },
    ],
  },

  gifts: [
    { gift: "a-single-rose", value: 30 },
    { gift: "antique-music-box", value: 40 },
    { gift: "snow-globe", value: 30 },
  ],
};
