let arr = [2,3,5,7,9,46,52,48,96,125];
const fn = (el) => el*2;
const map = (fn, arr) => {
  return arr.map((el) => fn(el))
}
console.log(map(fn, arr))