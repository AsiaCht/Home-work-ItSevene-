var  x = 6, y = 14, z =4 ;
document.writeln(x += y - x++ * z);
// 1. Інеркмент 6 (але він має постфіксну форму тобто він виконається пізніше)
// 2. 6 * 4 = 24

var  x = 6, y = 14, z =4 ;
document.writeln(z = --x - y * 5 );
// 1.Постфіксна форма декременту 6-1=5
// 2.14*5=70 перше йде множення
// 3.5-70=-65
var  x = 6, y = 14, z =4 ;
document.writeln(y /= x + 5 % z );
// 14/6+5%4
// 1.Дія виконується з права на ліво, тому 5%4 =1;1+6=7;14/7=2

var  x = 6, y = 14, z =4 ;
document.writeln(z - x++ + y * 5 );
//1.Інкремент 6(але він має постфіксну форму тому виконується пізніше) 
// 2.14*5 множиння виконується першим
var  x = 6, y = 14, z =4 ;
document.writeln(x = y - x++ * z);
// 1.Інкремент 6(але він має постфіксну форму тому виконується пізніше)
// 2.Спершу іде множиння 6*4

