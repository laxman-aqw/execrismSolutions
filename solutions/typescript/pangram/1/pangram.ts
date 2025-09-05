export function isPangram(word:string) {
  const str = word.toLowerCase();
  const letters = new Set<string>;
  for(let s of str){
    if(s>= "a" && s<="z"){
      letters.add(s);
    }
  }
return letters.size == 26
}