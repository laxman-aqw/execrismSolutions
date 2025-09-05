export function score(x: number, y: number) {
  const d =  Math.sqrt((x*x)+(y*y));
if (d <= 1) return 10;       
if (d <= 5) return 5;        
if (d <= 10) return 1;   
return 0;
}

