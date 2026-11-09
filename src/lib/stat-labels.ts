/** Display names for every stat key used in the app.
 *  Import { STAT_LABEL, label } from "@/lib/stat-labels" instead of
 *  defining a local map — keeps labels consistent across pages.
 */
export const STAT_LABEL: Record<string, string> = {
  // Basic attributes
  str: "Strength",
  tec: "Technic",
  int: "Intelligence",
  vit: "Vitality",
  agi: "Agility",

  // Core combat stats
  meleeAtk: "Melee ATK",
  rangedAtk: "Ranged ATK",
  magicAtk: "Magic ATK",
  allAtk: "All ATK",
  maxHp: "Max HP",
  spd: "SPD",
  startAp: "Starting AP",
  apRecovery: "AP Recovery",
  accuracy: "Accuracy",
  evade: "Evade",
  critRate: "Crit Rate",
  critDmg: "Crit DMG",

  // Formation / control
  formationCost: "Formation Cost",
  aggroAdj: "Aggro Adjustment",
  knockbackRes: "Knockback Resistance",
  // legacy alias still present in some older data/UI
  knockbackResistance: "Knockback Resistance",
  nonAttrDef: "Non-Attribute DEF",
  weakSpot: "Weak Spot",
  weakAng: "Weak Angle",
  blockChance: "Block Chance",

  // Boosts
  slashBoost: "Slash Boost",
  pierceBoost: "Pierce Boost",
  crushBoost: "Crush Boost",
  heatBoost: "Heat Boost",
  coldBoost: "Cold Boost",
  electricBoost: "Electric Boost",
  immaterialBoost: "Immaterial Boost",
  poisonBoost: "Poison Boost",
  elementalBoost: "Elemental Boost",

  // DEF
  slashDef: "Slash DEF",
  pierceDef: "Pierce DEF",
  crushDef: "Crush DEF",
  heatDef: "Heat DEF",
  coldDef: "Cold DEF",
  electricDef: "Electric DEF",
  immaterialDef: "Immaterial DEF",
  poisonDef: "Poison DEF",
  allDef: "All DEF",

  // Damage multipliers
  basicAttackDmg: "Basic Attack DMG",
  combatSkillDmg: "Combat Skill DMG",

  additionalSlashDmg: "Additional Slash DMG",
  additionalPoisonDmg: "Additional Poison DMG",
  additionalImmaterialDmg: "Additional Immaterial DMG",
  additionalDmgBoost: "Additional DMG Boost",

  responseDmg: "Response DMG",
  counterattackDmg: "Counterattack DMG",
  supportAtkDmg: "Support Attack DMG",
  supportAttackDmg: "Support Attack DMG",
  supportCounterattackDmg: "Support Counterattack DMG",
  finalDmg: "Final DMG",
  additionalResponseDmg: "Additional Response DMG",
};

/** Human-readable name for a stat key; falls back to the raw key. */
export const label = (k: string) => STAT_LABEL[k] ?? k;
