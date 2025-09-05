let keyValueArray : [string,number][] = [["black", 0],
["brown", 1],
["red", 2],
["orange", 3],
["yellow", 4],
["green", 5],
["blue", 6],
["violet", 7],
["grey", 8],
["white", 9]];

export const colorCode = (color:string ):number => {
  const value = keyValueArray.find(([key])=>key===color.toLowerCase());
  return value?value[1]: -1;
}

export const COLORS = keyValueArray.map(([color])=>color)