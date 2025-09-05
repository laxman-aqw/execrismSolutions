export function decodedValue(color:string[]) {
  const limitArr = color.slice(0,2);
  let val="";
  limitArr.forEach((c)=>{
     val+=(COLORS.indexOf(c)).toString();
  })
  return Number(val);
}

export const COLORS:string[] =[
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"
];