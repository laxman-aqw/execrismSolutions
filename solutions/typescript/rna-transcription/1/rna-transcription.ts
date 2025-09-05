export function toRna(dnaStr:string) {
  const dna = ["G","C","T","A"];
  const rna = ["C","G","A","U"];
  const dnaArr = dnaStr.split("");
  let index= 0;
  for(let s of dnaArr){
      if(dna.includes(s)){
        dnaArr[index] = rna[dna.indexOf(s)];
      }else{
        throw new Error( "Invalid input DNA.")
      }
      index++;
  }
  return dnaArr.join("");
}