function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));
