# 조건문 conditional statement   
## if 문   
if문 조건이 참일 경우, 특정 문장을 수행하고 싶을 때 사용하는 문장   

```
if(조건식) {
  실행문1;
 }
 실행문2;
```
###### 조건식의 결과는 반드시 true 또는 false.
###### if문 만족시 수행되는 실행문1이 한개일 경우에는 { } 생략 가능.   
   
   
## if ~ else 문   
if 다음 조건이 2갈래(참/거짓)으로 나뉘어 각각 다른 문장을 실행시키고자 할 때 사용하는 문장   

```
if(조건식) {
  실행문1;
 } else {
   실행문2;
 }
 실행문3;
 ```
 
   
## else if 문   
if문 처음 조건식이 거짓일 경우에, if문 조건과 다른 범위의 값을 내기 위해 if, else if(if가 아니라면 ~) 으로 구성됨.   

```
if(조건식) {
  실행문1;
 } else if(조건식2) {
  실행문2;
 } else {
  실행문3;
 }
 실행문4;
 ```
    
    
 ## if문 중첩      
 if문 안에 또다른 if문을 두는 구조.   
 
 ```
 if(조건식1) { //true이면 조건2 실행 
  if(조건식2) { //true이면 실행문1 실행
    실행문1;
   } else { // 조건식1과 2가 false이면 실행문2실행 -> out
    실행문2;
   }
 } else { // 조건식1이 false이면 실행문 3실행 -> out
   실행문3;
 } 
 ```
    
    
## switch ~ case 문   
다중 선택문.
switch (수식) 결과와 case 이하의 '리터널' 혹은 '상수'와 일치하는 곳의 문장을 실행한다.   
###### 사용 가능한 자료형 : byte, short, char, int, String, enum   
###### boolean, long, float, double 형 사용 불가.   
###### case 다음의 값으로 변수, 수식 불가능   
###### case 문 뒤에 break;가 없으면 case 다음의 문장 지속해서 수행   
###### default 는 case 뒤에 상수와 일치하는 값이 없을 때 실행.   
   
break문은 반복문 혹은 switch문 내 { } 블록에서 빠져나오기 위해 사용된다.   
label: 을 루프 앞에 작성해 break label; 과 같은 식으로 사용할 수도 있다.   
   
```
switch(수식) {
  case 상수1 : 문장1; break; //수식의 값이 상수 1이면 switch문 빠져나감
  case 상수2 : 문장2; //수식의 값이 상수2여도 다음 문장 실행
  case 상수3 : 문장3; break;
  default : 문장n; break; //수식의 값이 case의 상수와 하나도 일치하지 않을 경우 실행
}
```   

## while 문   
조건식을 먼저 비교 후, 조건식 참이면 블록 안을 반복하는 문장.   
첫 조건식이 false인 경우, while 문 안을 **한 번도** 실행하지 않음.   
###### 조건식의 결과는 반드시 true / false 중 하나.   
###### while(true)는 무한루프(infinite loop)   
###### while문 안에 또 다른 while문 혹은 다른 반복문 사용 가능   

```
while(조건식) {
  실행문;
}
```   
   
   
## do ~ while 문   
while문과 동일하나, do ~ while은 먼저 실행 한 후, 조건식을 비교.   
###### 실행문이 적어도 한 번은 실행된다.   
###### do ~ while문 안에 또다른 do ~ while문, 다른 반복문 사용 가능.
   
   
   
## for문   
정해진 횟수만큼 반복할 때 사용.   
```
for(초기식; 조건식; 증감식) {
  실행문
} 
```   
###### 초기식 : 초기화를 위해 단 한번만 실행. 컴마(,)를 이용해서 여러 변수 초기화 가능   
###### for문 안에서만 사용할 수 있는 변수 선언 가능. 단, 해당 변수는 for문 밖에서는 사용 불가   
###### 조건식의 결과는 반드시 true 또는 false. 조건식이 true이면 루프 반복 수행(for(; ;))   
###### for문 안에 또 다른 for문이나 다른 반복문 사용 가능.   

## 다중 for문   
for문 안의 for문.   
```
//연산 순서, 모두 처음은 true였을 때.
for(초기식(1번); 조건식(2번); 증감식(8번)) {
    for(초기식(3번); 조건식(4번); 증감식(6번)) {
        실행문(5번);
    }
    실행문(7번);
}
실행문(9번)

```
   
## continue 문   
반복문(while, do~while, for)에서 사용.   
contunue를 만나면 루프에서 한 반복을 중단 -> 다음 루프 반복을 진행.   
###### while, do~while은 continue -> 조건식   
###### for는 continue -> 증감식   
###### label: ~ continue label;로  제어 옮길 수 있다.   

## return 문   
**리턴타입이 void가 아닌 메소드의 return**   
###### 반환값이 있어야 하며, return 문 생략 불가. (void는 생략 가능)   
###### 반환값은 리턴 타입과 일치하거나, 작아야 한다. ex. int 타입에 double 리턴 불가능.   



