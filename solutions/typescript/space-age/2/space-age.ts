 const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};
export function age(planet: string, seconds: number): number {
const orbitalP = orbitalPeriods[planet as keyof typeof orbitalPeriods];
    const age = Number((seconds / (31557600 * Number(orbitalP))).toFixed(2));
  return age;
}







// 2134835688÷(31557600×0.2408467)