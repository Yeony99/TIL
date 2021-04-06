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

## Array Method
1) push & pop
- push()는 **배열의 끝**에 요소를 추가하고 **늘어난 배열의 길이 반환**한다.
- pop()은 **배열의 마지막 요소를 제거**하고 **해당 요소를 반환**한다. 
```
const colors = ['red', 'yellow', 'green'];

const more = colors.push('blue');
console.log(more); // 4
console.log(colors); // ['red', 'yellow', 'green', 'blue']

console.log(colors.pop()); // 'blue'
console.log(colors); //['red', 'yellow', 'green']
```

2) shift & unshift
- shift()는 **배열의 첫 번째 요소 제거**하고, **해당 요소를 반환**한다.
- unshift()는 **배열의 가장 처음**에 요소를 추가하고 **늘어난 배열의 길이 반환**한다.
```
const fruits = ['apple', 'orange', 'melon'];
console.log(fruits.unshift('watermelon', 'grapes')); //5
console.log(fruits); //["watermelon", "grapes", "apple", "orange", "melon"]

console.log(fruits.shift()); //watermelon
console.log(fruits); //["grapes", "apple", "orange", "melon"]
```

3) concat 
- 여러 배열을 합병한다.
```
const arr1 = ['가','나','다'];
const arr2 = ['라','마','바'];

arr1.concat(arr2); // ["가", "나", "다", "라", "마", "바"]

```

4) includes
- 요소를 포함하고 있는지 확인하여 boolean 형으로 반환한다.
```
const kor =  arr1.concat(arr2) //["가", "나", "다", "라", "마", "바"]
kor.includes('아'); //false
kor.includes('가'); //true
```

5) indexOf
- 요소를 포함하고 있는지 확인하여 배열의 index로 반환한다.
- 요소가 없으면 -1 반환한다.
```
"red".indexOf('r'); // 0
"red".indexOf('R'); // -1
```

6) reverse
- 배열의 순서를 뒤집는다.
```
kor.reverse();
// ["바", "마", "라", "다", "나", "가"]
```

7) slice
- 배열의 n번째요소부터 m-1번째 요소를 새로운 배열로 반환한다.
- 원본 배열에는 아무런 영향을 주지 않는다.
```
const animal = ['cat', 'dog', 'chicken', 'monkey'];
const favoriteAnimals = animal.slice(3);
console.log(favoriteAnimals) // monkey
animal.slice(1,3); //["dog", "chicken"]
```

8) splice
- 배열의 기존 요소를 삭제/교체/추가하여 배열의 내용을 변경한다.
- 교체는 엄밀히 말해 삭제 후 해당 자리에 요소를 추가하는 것이다.
```
const colors = ['red', 'orange','yellow', 'green', 'blue', 'indigo','violet'];

//삭제
colors.splice(5,1); // indigo
console.log(colors); //["red", "orange", "yellow", "green", "blue", "violet"]

//추가
colors.splice(2,0,'lemon');
console.log(colors); // ["red", "orange", "lemon", "yellow", "green", "blue", "violet"]

//여러 요소 한번에 추가
colors.splice(3,0,'bright-green','light-green');
console.log(colors); // ["red", "orange", "lemon", "bright-green", "light-green", "yellow", "green", "blue", "violet"]

// 교체
colors.splice(4,2,'deleted'); // ["light-green", "yellow"] 두개 요소를
console.log(colors); //["red", "orange", "lemon", "bright-green", "deleted", "green", "blue", "violet"] deleted로 교체
```
