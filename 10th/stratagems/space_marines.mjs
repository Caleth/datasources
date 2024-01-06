import { PHASE, TURN, TYPE } from './CONSTANTS.mjs';

const detachment = '';

const DETACHMENT = {
  '1st Company Task Force': '1st Company Task Force',
  'Anvil Siege Force': 'Anvil Siege Force',
  'Firestorm Assault Force': 'Firestorm Assault Force',
  'Gladius Task Force': 'Gladius Task Force',
  'Ironstorm Spearhead': 'Ironstorm Spearhead',
  'Vanguard Spearhead': 'Vanguard Spearhead',
  'Stormlance Task Force': 'Stormlance Task Force',
};

const template = [
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Gladius Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `The belligerency of the Adeptus Astartes, combined with their transhuman physiology, makes them unyielding foes to face.`,
    when: `Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
    restrictions: ``,
  },
  {
    name: 'ONLY IN DEATH DOES DUTY END',
    cost: 2,
    type: TYPE['Epic Deed'],
    detachment: DETACHMENT['Gladius Task Force'],
    turn: TURN.either,
    phase: [PHASE.fight],
    fluff: `Imminent death does not prevent a Space Marine from enacting his final justice upon the enemies of the Imperium.`,
    when: `Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.`,
    restrictions: ``,
  },
  {
    name: 'HONOUR THE CHAPTER',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Gladius Task Force'],
    turn: TURN.either,
    phase: [PHASE.fight],
    fluff: `Every Chapter has forged its own tales of heroism, and none of its battle-brothers would see that noble record besmirched.`,
    when: `Fight phase.`,
    target: `One Adeptus Astartes unit from your army.`,
    effect: `Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.`,
    restrictions: ``,
  },
  {
    name: 'ADAPTIVE STRATEGY',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Gladius Task Force'],
    turn: TURN.your,
    phase: [PHASE.command],
    fluff: `The tenets of the Codex Astartes allow for unorthodox use of combat tactics and the employment of divergent strategic doctrines if doing so will lead to victory.`,
    when: `Your Command phase.`,
    target: `One Adeptus Astartes unit from your army.`,
    effect: `Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for that unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that doctrine this battle.`,
    restrictions: ``,
  },
  {
    name: 'STORM OF FIRE',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Gladius Task Force'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `There is no escaping the wrath of the Space Marines, and they use their weapons to bring swift death to their foes wherever they may hide.`,
    when: `Your Shooting phase.`,
    target: `One Adeptus Astartes unit from your army.`,
    effect: `Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.`,
    restrictions: ``,
  },
  {
    name: 'SQUAD TACTICS',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Gladius Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.movement],
    fluff: `Space Marines know precisely when to give ground in order to leave their enemies floundering, before surging back into the fight and driving them from the field in disarray.`,
    when: `Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.`,
    target: `One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is within 9" of the enemy unit that just ended that move.`,
    effect: `Your unit can make a Normal move of up to D6", or a Normal move of up to 6" instead if it is under the effects of the Tactical Doctrine.`,
    restrictions: `ou cannot select a unit that is within Engagement Range of one or more enemy units.`,
  },
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Anvil Siege Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `The belligerency of the Adeptus Astartes, combined with their transhuman physiology, makes them unyielding foes to face.`,
    when: `Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
    restrictions: ``,
  },
  {
    name: 'RIGID DISCIPLINE',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Anvil Siege Force'],
    turn: TURN.either,
    phase: [PHASE.fight],
    fluff: `Cleaving to duty, the Adeptus Astartes refuse to be drawn out of position. Instead they secure ground to establish new fire lines to the enemy.`,
    when: `End of the Fight phase.`,
    target: `One Adeptus Astartes unit from your army that is within Engagement Range of one or more enemy units.`,
    effect: `Your unit can immediately make a Fall Back move of up to 6".`,
    restrictions: `When making that move, your unit must end that move either wholly within your deployment zone or within range of an objective marker.`,
  },
  {
    name: 'NOT ONE BACKWARDS STEP',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Anvil Siege Force'],
    turn: TURN.your,
    phase: [PHASE.command],
    fluff: `Siege warfare is incomparably brutal. Space Marines battle with the fiercest determination to achieve victory, and will fight unto death to hold every defensive line or to secure gains they have wrested from the enemy.`,
    when: `Your Command phase.`,
    target: `One Adeptus Astartes Infantry unit from your army within range of an objective marker.`,
    effect: `Until the end of the turn, double the Objective Control characteristic of models in your unit, but it must Remain Stationary this turn.`,
    restrictions: ``,
  },
  {
    name: 'NO THREAT TOO GREAT',
    cost: 2,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Anvil Siege Force'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `To combat an entrenched force of Space Marines, foes resort to armoured vehicles or packs of murderous monstrosities. Even the greatest of behemoths has a chink in its armour and the Adeptus Astartes are well versed in exploiting such weaknesses.`,
    when: `Your Shooting phase.`,
    target: `One Adeptus Astartes unit from your army that has not been selected to shoot this phase.`,
    effect: `Until the end of the phase, each time a model in your unit makes a ranged attack that targets a MONSTER or Vehicle unit, you can re-roll the Wound roll.`,
    restrictions: ``,
  },
  {
    name: 'BATTLE DRILL RECALL',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Anvil Siege Force'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `Space Marines train for countless hours to master their weapons and in the heat of battle can trigger mnemonic patterning to recall their ritual drills and ensure the foe’s destruction.`,
    when: `Your Shooting phase.`,
    target: `One Adeptus Astartes unit from your army that has not been selected to shoot this phase.`,
    effect: `Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. If your unit Remained Stationary this turn, then until the end of the phase, each time a model in your unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.`,
    restrictions: ``,
  },
  {
    name: 'HAIL OF VENGEANCE',
    cost: 2,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Anvil Siege Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting],
    fluff: `Space Marines' incredible battlefield awareness enables them to instinctively identify the origin of any enemy fire and punish their attackers.`,
    when: `Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks.`,
    target: `One Adeptus Astartes unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks.`,
    effect: `Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.`,
    restrictions: ``,
  },
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Ironstorm Spearhead'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `The belligerency of the Adeptus Astartes, combined with their transhuman physiology, makes them unyielding foes to face.`,
    when: `Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
    restrictions: ``,
  },
  {
    name: 'UNBOWED CONVICTION',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Ironstorm Spearhead'],
    turn: TURN.either,
    phase: [PHASE.command],
    fluff: `Space Marines exemplify obdurate tenacity. Even injured, they will never abandon their oaths.`,
    when: `Command phase.`,
    target: `One Adeptus Astartes unit from your army that is below its Starting Strength.`,
    effect: `Until the end of the turn, your unit can ignore any or all modifiers to its characteristics and/or to any roll or test made for it (excluding modifiers to saving throws).`,
    restrictions: ``,
  },
  {
    name: 'MERCY IS WEAKNESS',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Ironstorm Spearhead'],
    turn: TURN.your,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `Once a foe is marked for destruction, the Angels of Death must not relent until the target is annihilated.`,
    when: `Your Shooting phase or the Fight phase.`,
    target: `One Adeptus Astartes unit from your army that has not been selected to shoot or fight this phase.`,
    effect: `Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, that attack has the [SUSTAINED HITS 1] ability, and when making such an attack, if the attacking model is a Vehicle, a successful unmodified Hit roll of 5+ scores a Critical Hit.`,
    restrictions: ``,
  },
  {
    name: 'VENGEFUL ANIMUS',
    cost: 1,
    type: TYPE['Epic Deed'],
    detachment: DETACHMENT['Ironstorm Spearhead'],
    turn: TURN.either,
    phase: [PHASE.any],
    fluff: `Carefully cogitated binharic prayers can focus a machine spirit’s ire into near-obsessive hatred of its slayers, ensuring that vengeance is meted out even in death.`,
    when: `Any phase, just after an Adeptus Astartes Vehicle model from your army with the Deadly Demise ability is destroyed.`,
    target: `That Adeptus Astartes Vehicle model. You can use this Stratagem on that model even though it was just destroyed.`,
    effect: `Do not roll one D6 to determine whether mortal wounds are inflicted by your model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted.`,
    restrictions: ``,
  },
  {
    name: 'ANCIENT FURY',
    cost: 1,
    type: TYPE['Epic Deed'],
    detachment: DETACHMENT['Ironstorm Spearhead'],
    turn: TURN.your,
    phase: [PHASE.command],
    fluff: `The heroes entombed within Dreadnoughts have fought across countless war zones throughout their extended existences, perfecting their martial prowess beyond mortal limits.`,
    when: `Your Command phase.`,
    target: `One Adeptus Astartes Walker model from your army.`,
    effect: `Until the start of your next Command phase, improve your model’s Move, Toughness, Leadership and Objective Control characteristics by 1 and each time your model makes an attack, add 1 to the Hit roll.`,
    restrictions: ``,
  },
  {
    name: 'ANCIENT FURY',
    cost: 1,
    type: TYPE['Epic Deed'],
    detachment: DETACHMENT['Ironstorm Spearhead'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `There are many tales of machine spirits wreaking havoc on the foe, even after the crew of their vehicle are slain and critical systems are failing.`,
    when: `Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks.`,
    target: `One Adeptus Astartes Vehicle unit from your army that was reduced to Below Half-strength as a result of the attacking unit’s attacks.`,
    effect: `Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.`,
    restrictions: ``,
  },
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Firestorm Assault Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `The belligerency of the Adeptus Astartes, combined with their transhuman physiology, makes them unyielding foes to face.`,
    when: `Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
    restrictions: ``,
  },
  {
    name: 'CRUCIBLE OF BATTLE',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Firestorm Assault Force'],
    turn: TURN.your,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `Only where the enemy can be faced eye to eye can a Space Marine be truly tested.`,
    when: `Your Shooting phase or the Fight phase.`,
    target: `One Adeptus Astartes Infantry unit from your army that has not been selected to shoot or fight this phase.`,
    effect: `Until the end of the phase, each time a model in your unit makes an attack that targets the closest eligible target within 6", add 1 to the Wound roll.`,
    restrictions: ``,
  },
  {
    name: 'RAPID EMBARKATION',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Firestorm Assault Force'],
    turn: TURN.either,
    phase: [PHASE.fight],
    fluff: `No time can be wasted in punishing the Emperor's foes. Many are those that deserve death and once one enemy is vanquished, soon must another follow.`,
    when: `End of the Fight phase.`,
    target: `One Adeptus Astartes Transport unit from your army that has no models embarked within it, and one Adeptus Astartes Infantry unit from your army wholly within 6" of that Transport.`,
    effect: `Your Infantry unit can embark within that Transport.`,
    restrictions: `You cannot target an Infantry unit that is within Engagement Range of one or more enemy units, that cannot normally embark within that Transport, or that disembarked from a Transport this turn.`,
  },
  {
    name: 'IMMOLATION PROTOCOLS',
    cost: 2,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Firestorm Assault Force'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `Salvo after salvo of burning promethium unleashed in synchronised waves will leave almost any foe as smouldering ash.`,
    when: `Your Shooting phase.`,
    target: `One Adeptus Astartes unit from your army that has not been selected to shoot this phase.`,
    effect: `Until the end of the phase, Torrent weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.`,
    restrictions: ``,
  },
  {
    name: 'ONSLAUGHT OF FIRE',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Firestorm Assault Force'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `Armed with targeting data supplied by their transport's augury gheists, warriors erupt from the assault ramps with weapons blazing in ruthless eradication patterns.`,
    when: `Your Shooting phase.`,
    target: `One Adeptus Astartes unit from your army that disembarked from a Transport this turn and has not been selected to shoot this phase.`,
    effect: `Until the end of the phase, each time a model in your unit makes a ranged attack that targets the closest eligible target within 12", add 1 to the Hit roll. If one or more enemy models are destroyed as the result of any of those attacks, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test.`,
    restrictions: ``,
  },
  {
    name: 'BURNING VENGEANCE',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Firestorm Assault Force'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `To open fire on warriors of a Firestorm Assault Force is merely to invite one’s own swift destruction.`,
    when: `Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks.`,
    target: `One Adeptus Astartes Transport unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `One unit embarked within that Transport can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.`,
    restrictions: ``,
  },
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Stormlance Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `The belligerency of the Adeptus Astartes, combined with their transhuman physiology, makes them unyielding foes to face.`,
    when: `Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
    restrictions: ``,
  },
  {
    name: 'BLITZING FUSILLADE',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Stormlance Task Force'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `Warriors of Stormlance Task Forces can suddenly pour heavy and accurate fire into the enemy even as they race to finish off any survivors.`,
    when: `Your Shooting phase.`,
    target: `One Adeptus Astartes unit from your army that has not been selected to shoot this phase.`,
    effect: `Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] ability. If such a weapon already has this ability, until the end of the phase, that weapon has the [SUSTAINED HITS 1] ability as well.`,
    restrictions: ``,
  },
  {
    name: 'FULL THROTTLE',
    cost: 2,
    type: TYPE.Wargear,
    detachment: DETACHMENT['Stormlance Task Force'],
    turn: TURN.your,
    phase: [PHASE.movement],
    fluff: `On the eve of riding down the most elusive prey, the task force's expert Techmarines will entreat the engine spirits of their vehicles, honing the iron steeds' performance to elicit even more speed from them.`,
    when: `Your Movement phase.`,
    target: `One Adeptus Astartes Mounted or Adeptus Astartes Vehicle unit (excluding Walkers) from your army.`,
    effect: `Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit, or 9" instead if your unit is Mounted.`,
    restrictions: ``,
  },
  {
    name: 'SHOCK ASSAULT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Stormlance Task Force'],
    turn: TURN.your,
    phase: [PHASE.charge],
    fluff: `The Adeptus Astartes are elite troops who strike with all the speed and fury of a searing thunderbolt.`,
    when: `Your Charge phase.`,
    target: `One Adeptus Astartes Mounted unit from your army that has not declared a charge this phase.`,
    effect: `Until the end of the turn, you can re-roll Charge rolls made for your unit and melee weapons equipped by models in that unit have the [LANCE] ability.`,
    restrictions: ``,
  },
  {
    name: 'RIDE HARD, RIDE FAST',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Stormlance Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting],
    fluff: `Like zephyrs dancing across wide horizons, Space Marine riders and pilots can weave lithely around incoming fire with incredible skill.`,
    when: `Your opponent’s Shooting phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll and subtract 1 from the Wound roll.`,
    restrictions: ``,
  },
  {
    name: 'WIND-SWIFT EVASION',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Stormlance Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.movement],
    fluff: `Space Marines are loathe to be brought into combat on any others’ terms, especially the warriors of Stormlance Task Forces, whose battlefield tactics revolve around speed and precise, ferocious assaults.`,
    when: `Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.`,
    target: `One Adeptus Astartes unit from your army that is within 9" of that enemy unit.`,
    effect: `Your unit can make a Normal move of up to 6".`,
    restrictions: `You cannot select a unit that is within Engagement Range of one or more enemy units.`,
  },
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Vanguard Spearhead'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `The belligerency of the Adeptus Astartes, combined with their transhuman physiology, makes them unyielding foes to face.`,
    when: `Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
    restrictions: ``,
  },
  {
    name: 'A DEADLY PRIZE',
    cost: 1,
    type: TYPE.Wargear,
    detachment: DETACHMENT['Vanguard Spearhead'],
    turn: TURN.your,
    phase: [PHASE.command],
    fluff: `Warriors of a Vanguard Spearhead will rig critical objectives with explosives to deny them to the enemy.`,
    when: `Start of the Command phase.`,
    target: `One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army within range of an objective marker you control.`,
    effect: `That objective marker is said to be Sabotaged, and remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn. While an objective marker is Sabotaged and under your control, each time an enemy unit ends a Normal, Advance, Fall Back or Charge move within range of that objective marker, roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds.`,
    restrictions: ``,
  },
  {
    name: 'SURGICAL STRIKES',
    cost: 2,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Vanguard Spearhead'],
    turn: TURN.either,
    phase: [PHASE.fight],
    fluff: `Every tyrant must fear the assassin's blade, and the vanguard spring ambushes with precision coordination.`,
    when: `Fight phase.`,
    target: `One Adeptus Astartes Infantry unit from your army that has not been selected to fight this phase.`,
    effect: `Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.`,
    restrictions: ``,
  },
  {
    name: 'STRIKE FROM THE SHADOWS',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['Vanguard Spearhead'],
    turn: TURN.your,
    phase: [PHASE.shooting],
    fluff: `To evade one’s enemies and sow confusion can be a deadly weapon in itself.`,
    when: `Your Shooting phase.`,
    target: `One Adeptus Astartes Infantry unit from your army that has not been selected to shoot this phase.`,
    effect: `Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit that is more than 12" away, improve the Ballistic Skill and Armour Penetration characteristics of that attack by 1. If one or more enemy models are destroyed as a result of those attacks, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test.`,
    restrictions: ``,
  },
  {
    name: 'CALCULATED FEINT',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Vanguard Spearhead'],
    turn: TURN.opponents,
    phase: [PHASE.charge],
    fluff: `A feigned retreat can be used to overextend eager foes or draw them into deadly arcs of fire.`,
    when: `Your opponent’s Charge phase, just after an enemy unit declares a charge.`,
    target: `One Adeptus Astartes Infantry unit from your army that was selected as a target of that charge.`,
    effect: `Your unit can make a Normal move of up to D6", or up to 6" instead if it is a PHOBOS or Scout Squad unit.`,
    restrictions: `You cannot select a unit that is within Engagement Range of one or more enemy units.`,
  },
  {
    name: 'GUERRILLA TACTICS',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['Vanguard Spearhead'],
    turn: TURN.opponents,
    phase: [PHASE.fight],
    fluff: `At the opportune moment, Space Marine infiltration units slip away from battle, only to relocate ready to strike the foe again.`,
    when: `End of your opponent’s Fight phase.`,
    target: `Up to two PHOBOS and/or Scout Squad units from your army, or one other Adeptus Astartes Infantry unit from your army.`,
    effect: `Remove those units from the battlefield and place them into Strategic Reserves.`,
    restrictions: `Each unit selected for this Stratagem must be more than 3" away from all enemy models.`,
  },
  {
    name: 'ARMOUR OF CONTEMPT',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['1st Company Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `The belligerency of the Adeptus Astartes, combined with their transhuman physiology, makes them unyielding foes to face.`,
    when: `Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.`,
    target: `One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit’s attacks.`,
    effect: `Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
    restrictions: ``,
  },
  {
    name: 'HEROES OF THE CHAPTER',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['1st Company Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.shooting, PHASE.fight],
    fluff: `When the fighting is at its fiercest, the veteran warriors of the Chapter truly show their quality.`,
    when: `Your Shooting phase or the Fight phase.`,
    target: `One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to shoot or fight this phase.`,
    effect: `Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is Below Half-strength, add 1 to the Wound roll as well.`,
    restrictions: ``,
  },
  {
    name: 'TERRIFYING PROFICIENCY',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['1st Company Task Force'],
    turn: TURN.your,
    phase: [PHASE.fight],
    fluff: `The 1st Company's veterans unleash their skills with an efficiency that is harrowing to witness.`,
    when: `Your Fight phase.`,
    target: `One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that made a Charge move this turn and destroyed one or more enemy units this phase.`,
    effect: `In your opponent’s next Command phase, each enemy unit within 6" of your unit must take a Battle-shock test. If the unit taking that test is Below Half-strength, subtract 1 from that test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.`,
    restrictions: ``,
  },
  {
    name: 'DUTY AND HONOUR',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['1st Company Task Force'],
    turn: TURN.your,
    phase: [PHASE.movement],
    fluff: `Adeptus Astartes veterans claim critical objectives in daring strikes, annihilating resistance in their Chapter’s name before sweeping onto their next target.`,
    when: `Your Movement phase.`,
    target: `One Adeptus Astartes Terminator, bladeguard veteran squad, sternguard veteran squad or vanguard veteran squad unit from your army within range of an objective marker you control.`,
    effect: `That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.`,
    restrictions: ``,
  },
  {
    name: 'ORBITAL TELEPORTARIUM',
    cost: 1,
    type: TYPE['Strategic Ploy'],
    detachment: DETACHMENT['1st Company Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.fight],
    fluff: `Teleportarium chambers within orbiting strike cruisers are able to perform site-to-strike teleportations for Terminator-armoured battle-brothers in extremis.`,
    when: `End of your opponent’s Fight phase.`,
    target: `One Adeptus Astartes Terminator unit from your army.`,
    effect: `Remove your unit from the battlefield and place it into Strategic Reserves. It will arrive back on the battlefield in the Reinforcements step of your next Movement phase using the Deep Strike ability.`,
    restrictions: `You cannot select a unit that is within Engagement Range of one or more enemy units.`,
  },
  {
    name: 'LEGENDARY FORTITUDE',
    cost: 1,
    type: TYPE['Battle Tactic'],
    detachment: DETACHMENT['1st Company Task Force'],
    turn: TURN.opponents,
    phase: [PHASE.charge],
    fluff: `Many are the legendary tales of the 1st Company holding their ground against the odds, weathering assaults that would have swept away lesser warriors.`,
    when: `Your opponent’s Charge phase, just after an enemy unit ends a Charge move.`,
    target: `One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army within Engagement Range of that enemy unit.`,
    effect: `Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.`,
    restrictions: ``,
  },
];

export default template;
