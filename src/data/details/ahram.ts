import type { CharacterDetails, TraitEffect } from "../types";

export const ahram: CharacterDetails = {
  skins: [
    {
      id: "ahram-s1",
      name: "Beach Combat Protocol",
      portrait: "/characters/ahram/ahram-s1p.webp",
      fullBody: "/characters/ahram/ahram-s1.webp",
      fullBodyCensored: "/characters/ahram/ahram-s1c.webp",
      sources: [
        {
          type: "shop",
          price: 500,
          available: true,
        },
      ],
      pv: [
        {
          source: "x",
          url: "https://x.com/_horizonwalker/status/2076910016679035147",
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
      note: "Substats Priority:\n1. Ranged Attack\n2. AP Recovery",
      weapon: { id: "ruthless-judgment", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ex",
          slot: "top",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "left",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ex",
          slot: "right",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: ["functional", "barraging"],
    },
    {
      id: "mid-game",
      name: "Mid Game",
      note: "Substats Priority:\n1. Ranged Attack\n2. AP Recovery",
      weapon: { id: "ruthless-judgment", level: 60, dupe: 5 },
      stigmas: [
        {
          set: "reckoning-of-sin-ss",
          slot: "top",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "left",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "startAp", type: "flat", value: 5 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "bottom",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
        {
          set: "reckoning-of-sin-ss",
          slot: "right",
          level: 25,
          subs: [
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "rangedAtk", type: "percent", value: 5 },
            { stat: "apRecovery", type: "percent", value: 2 },
          ],
        },
      ],
      generalTraits: ["functional", "barraging"],
    },
  ],

  skills: [
    {
      id: "sidearm-draw-fire",
      name: "Sidearm Draw & Fire",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/ahram/ba.webp",
      description:
        "Fires a pistol at the enemy.\nDeals Pierce DMG equal to {damage}% of Ranged ATK.",
      damage: {
        stat: "rangedAtk",
        percent: [60, 66, 72, 78, 84, 90, 96, 102, 108, 114],
        damageType: "Pierce",
      },
      flavor:
        "Marksmanship is the foundation of every soldier who sets foot on the battlefield. Skill honed through relentless training never betrays its wielder.",
    },
    {
      id: "issue-orders",
      name: "Issue Orders",
      type: "Passive",
      icon: "/skills/ahram/p1.webp",
      maxLevel: 1,
      description:
        "When Ahram attacks an enemy, allies perform Support Attacks against that target.",
      flavor:
        "To fight alongside a capable commander and trusted comrades is to know that support will always arrive when it is needed most. As disciplined volleys give way to relentless covering fire, the enemy is left with no chance to recover.",
    },
    {
      id: "wide-area-suppression",
      name: "Wide-Area Suppression",
      type: "Active",
      ap: 30,
      cooldown: 1,
      icon: "/skills/ahram/s1.webp",
      description:
        "Unleashes a barrage of pistol fire to suppress multiple enemies.\nDeals {damage}% of Ranged ATK as Pierce DMG and applies [Suppression] to targets hit for 1R.\n\n[Suppression]: Reduces the target's Pierce DEF and Evasion by {suppression}% of Ahram's Ranged ATK, and prevents them from Blocking or Counterattacking.",
      damage: {
        stat: "rangedAtk",
        percent: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        damageType: "Pierce",
      },
      values: {
        suppression: [165, 180, 195, 210, 225, 240, 255, 270, 285, 300],
      },
      flavor:
        "Years of tireless training culminate in marksmanship so swift and precise that it borders on the miraculous. Every shot finds its mark, exploiting the enemy's weakest points with breathtaking accuracy.",
    },
    {
      id: "rallying-cry",
      name: "Rallying Cry",
      type: "Passive",
      icon: "/skills/ahram/p2.webp",
      description:
        "At the start of battle, allies' Ranged ATK increases by {bonus}%.",
      values: { bonus: [33, 36, 39, 42, 45, 48, 51, 54, 57, 60] },
      flavor:
        "Amid the deafening chaos of war, a command delivered with perfect timing is salvation itself. As every order yields tangible results, the soldiers' morale surges, and the momentum of the offensive becomes impossible to halt.",
    },
    {
      id: "theater-control",
      name: "Theater Control",
      type: "Active",
      ap: 30,
      cooldown: 0,
      icon: "/skills/ahram/s2.webp",
      description: `Using this skill grants 1 [Extra Action], allowing you to choose one of the following skills: [Fight On], [Assault Formation], or [Defense Formation]. Only one command can be active at a time. [Theater Control] is treated as a Standby skill.

      [Fight On]: Allies other than yourself gain 100 AP and 100% SPD. At the end of the turn this effect is activated, they recover {FightOn}% of the AP spent on movement, then [Fight On] is removed. When [Fight On] expires, 100 AP and 100% SPD are lost. The effects of [Fight On] can only be applied once per round.

      [Assault Formation]: For 1R, allies other than yourself gain Ranged ATK equal to {AssaultFormation}% of Ahram's Ranged ATK, and Pierce Boost increases by {AssaultFormation1}%.

      [Defense Formation]: For 1R, allies other than yourself gain All DEF equal to {DefenseFormation}% of Ahram's Ranged ATK and have their Weak Point removed. In addition, at the start of each turn, they recover HP equal to 10% of Ahram's Ranged ATK.`,
      values: {
        FightOn: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        AssaultFormation: [165, 180, 195, 210, 225, 240, 255, 270, 285, 300],
        AssaultFormation1: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        DefenseFormation: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      },
      flavor:
        "The command of one who has reached the pinnacle of military leadership is nothing short of masterful. With a calm and calculating eye, the commander directs every ally to precisely where they are needed most, ensuring every ounce of strength is brought to bear at the decisive moment. Thus, allies achieve victory without ever realizing how inevitable it was, while their enemies meet defeat without understanding how it came to pass. Such is the battlefield envisioned-and orchestrated-by the Supreme Commander.",
    },
    {
      id: "overwhelming-command",
      name: "Overwhelming Command",
      type: "Passive",
      icon: "/skills/ahram/p3.webp",
      description: `At the start of battle, increases the Support Attack DMG of allies other than yourself by {bonus}%.`,
      values: {
        bonus: [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      },
      flavor:
        "The Supreme Commander, whose legacy is written in countless victories, need only set foot upon the battlefield to promise triumph to allies and foreshadow defeat for enemies. In the presence of such a commander, it is only natural for the allied advance to become ever more relentless and unbreakable.",
    },
  ],

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
    "orkean-combat-support",
    "combat-readiness",
    "orke",
    "interested-ranged",
    "rational",
    "competent",
    "paranoid",
  ],

  weaponType: "Dual Pistols",

  manual: {
    spd: 89,
    startApSeen: { value: 124, grade: "EX" },
  },

  profile: {
    age: "27",
    race: "Orke",
    homeland: "Orke Republic, Morrim Island",
    height: "189cm",
    birthday: "July 4th",
    bwh: "94(H)-55-100",
    story: `Born an albino in a society that shunned those of her kind, Ahram grew up alone in an orphanage. To survive, she had only one path before her: enlist in the military and distinguish herself in battle. In the militaristic society of Orke, it was the only future available to a small, defenseless child.

    Fortunately, Ahram possessed extraordinary talent. She displayed an undeniable aptitude for every form of combat the Orke military valued and revered. Recognizing her potential, the military raised her as an elite officer, and Ahram quickly proved herself on the battlefield.

    It was hardly surprising. The gift for war inherited from parents she never knew had found its perfect match in her desperate will to survive. Yet exceptional ability often comes at a price. Whether it was her relentless drive or the envy that greatness inevitably invites, Ahram’s meteoric rise through the ranks—combined with her status as an outcast albino and her complete lack of personal ties—gradually made her an uncomfortable presence within the military.

    In the end, those who rise above the rest inevitably draw unwanted attention. Before long, Ahram found herself dispatched to Earth. The Orke military sent her away, removing her from the battlefields that had defined her life—the very places that had given her a reason to live and the future she believed awaited her.

    Now assigned as one of the Human God’s Vanguards, Ahram finds herself standing at a crossroads. Unsure of what kind of life lies ahead, she quietly hopes that, somewhere at the end of this unfamiliar path, she will discover a new purpose worth devoting herself to.`,
    pv: [
      {
        source: "youtube",
        url: "https://youtu.be/OBkXkl9cj-8?si=z94uYZnSHCYZzC81",
        title: "Official PV",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2076542411896160531",
        title: "X PV 1",
      },
      {
        source: "x",
        url: "https://x.com/_horizonwalker/status/2076909915650855292",
        title: "X PV 2",
      },
    ],
  },

  gifts: [
    { gift: "orca-documentary", value: 30 },
    { gift: "gun-maintenance-kit", value: 20 },
  ],
};
