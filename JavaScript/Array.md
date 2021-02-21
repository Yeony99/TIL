# Array
## 자바스크립트에서의 Array
* 배열은 자료형과 관계없이 정의할 수 있다.
* String, boolean, float 등을 함께 담을 수 있다.
* console.log()을 이용해 해당하는 값을 알 수 있다. 

1. 배열을 선언하는 방법
```
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 3, 99, true];
console.log(days);
console.log(1); //'Tue'
```

2. 배열 내 객체    
객체 안에서는 **:** 을 사용한다. 
```
const yeonyInfo = {
  name : "Nayeon",
  age : 23,
  gender : "Female",
}

console.log(yeonyInfo);
console.log(yeonyInfo.name); //그냥 name은 오류.

/*
실행 결과
{ name: 'Nayeon', age: 23, gender: 'Female' }
Nayeon
*/
```

3. 배열 내 객체(2)   
Object도 Array 를 포함할 수 있고, Array도 Object를 포함할 수 있다.
```
const yeonyInfo = {
  name : "Nayeon",
  age : 23,
  gender : "Female",
  favFruits : ["Strawberry", "watermelon", "orange", "mango"],
  favSingers : ["AhnYeeun", "IU", "Bol4"],
  favFood : [
    {
      name : "chicken",
      cal : true
    },
    {
      name : "pizza",
      cal : true
    }
  ]
}

console.log(yeonyInfo);
//console.log(yeonyInfo.favFood); // [ { name: 'chicken', cal: true }, { name: 'pizza', cal: true } ]


/*
실행결과

{
  name: 'Nayeon',
  age: 23,
  gender: 'Female',
  favFruits: [ 'Strawberry', 'watermelon', 'orange', 'mango' ],
  favSingers: [ 'AhnYeeun', 'IU', 'Bol4' ],
  favFood: [ { name: 'chicken', cal: true }, { name: 'pizza', cal: true } ]
}

*/
```
