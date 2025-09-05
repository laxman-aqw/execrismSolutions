export function decodedResistorValue(color:string[]) {
  const first = COLORS.indexOf(color[0]);
  const second = COLORS.indexOf(color[1]);
  let num = Number(`${first}${second}`);

  const multiplier = 10 ** COLORS.indexOf(color[2]);
  num*=multiplier;

  let unit = "ohms";
  if(num>1000000000){
    num/=1000000000;
    unit = "gigaohms";
  }else if(num>=1000000){
    num/=1000000;
    unit="megaohms";
  }else if(num>=1000){
    num/=1000;
    unit = "kiloohms"
  }
return `${num} ${unit}`;
  
}

const COLORS = [
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"];
