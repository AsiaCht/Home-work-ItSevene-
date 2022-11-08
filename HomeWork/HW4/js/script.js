class Phone {
  constructor(number, model, weight, name){
    this.number = number;
    this.model = model;
    this.weight = weight;
    this.name = name;
    this.receiveCall = function(){
      console.log(`Телефонує ${name}`);
     } 
    this.getNumber = function(){
      return this.number; 
    }
  }
  } 
const Phone0 = new Phone(77777, 'sumsung', 1600,'Katia');
Phone0.receiveCall();
console.log(Phone0.getNumber());
console.log(Phone0);
const Phone1 = new Phone(6666, 'xiaomi10A', 1200, 'Olia');
Phone1.receiveCall();
console.log(Phone1);
console.log(Phone1.getNumber());
const Phone2 = new Phone (7777, 'iphone7', 1500, 'Dmytro');
Phone2.receiveCall();
console.log(Phone2.getNumber());
console.log(Phone2);
let arr = [14, 2, 58, null, 58, 'parapapapm', 89, 'gogogogogo', 'fotomob'];
let type = 'string';
let newArr = [];
function filterBy (arr, type) {
  for(let i=0; i < arr.length; i++){
    if(typeof arr[i] !== type){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(filterBy(arr, type))