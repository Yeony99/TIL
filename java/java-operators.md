# Java Operators 연산자   

## 연산자    

* 연산자(operator)와 피연산자(operand)   
: 연산자는 식에서 수행할 연산을 나타내는 기호(+, -, *, / 등)   
: 피연산자는 연산자의 연산 대상(변수, 리터널, 수식 등)   
   
   
## 1. 이항 연산자 (binary operator)
###### 산술 연산은 피연산자의 자료형이 서로 다를 경우, 그 중 큰 타입으로 변환되어 연산된다.   
> int + float = float + float = float형   
> float + double = double + double = double형   

###### 단, int형보다 작은 타입의 연산은 int로 변환되어 연산된다. (byte, char, short)
> byte + byte = int + int => 결과 : int형   
> short + short = int + int => 결과 : int형   
> byte + short = int + int => 결과 : int형  

   
###### 예시   
```
public class Operator01 {
  public static void main(String[] args) {
    short a = 10, b = 20, c;
    
//   c = a + b; //컴파일 오류. 연산 결과가 int형이므로 short형인 c에 대입 불가.
 
    c= (short)(a+b); //int형을 short형으로 강제 변환 후 대입.
    }
}
 ```
   
## 2. 관계 연산자(relational operators)   
피연산자가 두 개인 이항연산자.    
값이 참인 경우엔 true, 거짓인 경우에는 false를 반환    

```
a > b  --> a가 b보다 크면 true, 아니면 false   
a >= b --> a가 b보다 크거나 같으면 true, 아니면 false 
```
  
  
## 3. 동등 연산자(Equality operators)   
피연산자가 두 개인 이항 연산자.   

```
a == b // a와 b가 같은지
a != b // a와 b가 다른지
```   
   
## 4. 논리 연산자(conditional operators)   
이항연산자.   
논리곱(AND, &&)과 논리합(OR, ||)

```
a && b // a와 b가 모두 참이면 true, 아니면 false
a || b // a또는 b가 참이면 true, 아니면 false
```

   
## 5. 논리 부정 연산자(logical complement operator)   
단항 연산자.   

```
!a // a가 거짓이면 true, 참이면 false
```   
   
   
## 6. 증감 연산자(increment/decrement operators)   
단항 연산자(unary operators)   
피연산자를 하나만 취함.
 
 ```
 public class Operator02 {
  public static void main(String[] args) {
    int a=1;
    a++; // a+1과 같은 결과
    System.out.println(a); //결과 2
  
    int b=10;
    ++b;
    System.out.println(b); //결과 11
    
    int c=0;
    c--;
    System.out.println(c); //결과 -1
```
###### 단, 전위형(prefix)의 경우, 변수의 값을 먼저 대입한 후에 값을 +1(혹은 감소)
###### 후위형(postfix)의 경우는 변수의 값을 먼저 1 증가(혹은 감소)한 후에 값을 대입   



  
  
