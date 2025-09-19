function count(str:string) {
  const arrStr:string[] = str.split(/[:!?\n\t ]/) 
 const count : Record<string, number>={}

  for(const word of arrStr){
    count[word] = (count[word] || 0 )+1;
  }

  console.log(count)

}

count("word")