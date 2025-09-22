export function count(str:string) {
  const words = str
    .toLowerCase()
    .match(/[a-z0-9]+(?:'[a-z0-9]+)*/g) || []
 const count : Record<string, number>=Object.create(null)
  for(const word of words){
    count[word] = (count[word] || 0 )+1;
  }
  return new Map(Object.entries(count))
}
