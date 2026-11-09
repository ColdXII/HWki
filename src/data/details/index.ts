import type { CharacterDetails } from "../types";
import { ahram } from "./ahram";
import { araha } from "./araha";
import { bella } from "./bella";
import { berga } from "./berga";
import { canisk } from "./canisk";
import { cora } from "./cora";
import { delia } from "./delia";
import { echidna } from "./echidna";
import { efreeti } from "./efreeti";
import { emilia } from "./emilia";
import { erneste } from "./erneste";
import { eugenia } from "./eugenia";
import { everette } from "./everette";
import { fammene } from "./fammene";
import { garud } from "./garud";
import { goliath } from "./goliath";
import { griselda } from "./griselda";
import { grrik } from "./grrik";
import { gulam } from "./gulam";
import { gulsni } from "./gulsni";
import { headless_knight } from "./headless-knight";
import { imperial_shieldbearer } from "./imperial-shieldbearer";
import { ines } from "./ines";
import { juha } from "./juha";
import { juza } from "./juza";
import { kalina } from "./kalina";
import { kalma } from "./kalma";
import { kaul } from "./kaul";
import { kilon } from "./kilon";
import { kim_ga_young } from "./kim-ga-young";
import { kobold } from "./kobold";
import { korabi } from "./korabi";
import { kotoha } from "./kotoha";
import { leah } from "./leah";
import { lisandria } from "./lisandria";
import { luise } from "./luise";
import { mahari } from "./mahari";
import { marhim } from "./marhim";
import { marika } from "./marika";
import { matrotho } from "./matrotho";
import { maximilia } from "./maximilia";
import { min_eun_sol } from "./mineunsol";
import { mira } from "./mira";
import { mirana } from "./mirana";
import { mu_yingying } from "./mu-yingying";
import { nari } from "./nari";
import { nika } from "./nika";
import { nonoha } from "./nonoha";
import { nymset } from "./nymset";
import { olivia } from "./olivia";
import { osla } from "./osla";
import { palekar } from "./palekar";
import { pantheri } from "./pantheri";
import { platina } from "./platina";
import { puppy_shooter } from "./puppy-shooter";
import { puppy_stepper } from "./puppy-stepper";
import { re_de_da } from "./re-de-da";
import { rhasadina } from "./rhasadina";
import { samarika } from "./samarika";
import { so_joo_hee } from "./so-joo-hee";
import { split_twigs_priest } from "./split-twigs-priest";
import { swamp_elf } from "./swamp-elf";
import { torta_warrior } from "./torta-warrior";
import { tx_manticore } from "./tx-manticore";
import { valeta } from "./valeta";
import { vlissing } from "./vlissing";
import { war_marcenary } from "./war-marcenary";
import { wizard_legionnaire } from "./wizard-legionnaire";
import { yeon_chae_young } from "./yeon-chae-young";
import { yeonwoo } from "./yeonwoo";
import { yui } from "./yui";
import { yvonna } from "./yvonna";

const details: Record<string, CharacterDetails> = {
  "headless-knight": headless_knight,
  "imperial-shieldbearer": imperial_shieldbearer,
  "kim-ga-young": kim_ga_young,
  "mu-yingying": mu_yingying,
  "puppy-shooter": puppy_shooter,
  "puppy-stepper": puppy_stepper,
  "re-de-da": re_de_da,
  "so-joo-hee": so_joo_hee,
  "split-twigs-priest": split_twigs_priest,
  "swamp-elf": swamp_elf,
  "torta-warrior": torta_warrior,
  "tx-manticore": tx_manticore,
  "war-marcenary": war_marcenary,
  "wizard-legionnaire": wizard_legionnaire,
  "yeon-chae-young": yeon_chae_young,
  ahram: ahram,
  araha: araha,
  bella: bella,
  berga: berga,
  canisk: canisk,
  cora: cora,
  delia: delia,
  echidna: echidna,
  efreeti: efreeti,
  emilia: emilia,
  erneste: erneste,
  eugenia: eugenia,
  everette: everette,
  fammene: fammene,
  garud: garud,
  goliath: goliath,
  griselda: griselda,
  grrik: grrik,
  gulam: gulam,
  gulsni: gulsni,
  ines: ines,
  juha: juha,
  juza: juza,
  kalina: kalina,
  kalma: kalma,
  kaul: kaul,
  kilon: kilon,
  kobold: kobold,
  korabi: korabi,
  kotoha: kotoha,
  leah: leah,
  lisandria: lisandria,
  luise: luise,
  mahari: mahari,
  marhim: marhim,
  marika: marika,
  matrotho: matrotho,
  maximilia: maximilia,
  min_eun_sol: min_eun_sol,
  mira: mira,
  mirana: mirana,
  nari: nari,
  nika: nika,
  nonoha: nonoha,
  nymset: nymset,
  olivia: olivia,
  osla: osla,
  palekar: palekar,
  pantheri: pantheri,
  platina: platina,
  rhasadina: rhasadina,
  samarika: samarika,
  valeta: valeta,
  vlissing: vlissing,
  yeonwoo: yeonwoo,
  yui: yui,
  yvonna: yvonna,
};

export const getDetails = (id: string): CharacterDetails => details[id] ?? {};
