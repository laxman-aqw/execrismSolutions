export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  constructor() {
  const abilities = DnDCharacter.generateAbilityScore();
  this.strength = DnDCharacter.generateAbilityScore();
  this.dexterity = DnDCharacter.generateAbilityScore();
  this.constitution = DnDCharacter.generateAbilityScore();
  this.intelligence = DnDCharacter.generateAbilityScore();
  this.wisdom = DnDCharacter.generateAbilityScore();
  this.charisma = DnDCharacter.generateAbilityScore();
  this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

public static generateAbilityScore(): number {
  const rolls: number[] = [];
  for (let i = 0; i < 4; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  const minIndex = rolls.indexOf(Math.min(...rolls));
  rolls.splice(minIndex, 1);
  return rolls.reduce((acc, val) => acc + val, 0);
}

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
