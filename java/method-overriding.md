# 메소드 오버라이딩 Method Overriding   
## 오버라이딩   
* 메소드 이름, 리턴 타입, 파라미터 수나 타입이 **완전히 일치**해야 한다. = 상위 클래스의 메소드와 동일한 signature   
* 메소드 시그니처에는 메소드의 타입 파라미터, 형식 매개변수의 타입, 반환값 타입, 예외의 타입이 포함.   
* Overriding은 **반드시 상속관계**가 있어야 한다.   
* 재정의된 sub class의 메소드 접근제한자는 super class의 것보다 크거나 같아야 한다.   
  - ex. super class가 protected 였다면, sub class는 protected 혹은 public이여야 한다.   
* static final, private 메소드는 Overriding 할 수 없다.   
- **상위 클래스의 메소드가 가지고 있는 기존 예외사항은 제거 가능**   
- 그러나 **새로운 예외사항 Exception은 추가 불가능**   

```
public class A {
  public void print() {
    //super class 메소드 구현
  }
}

public class B extends A {
  public void print() {
    //하위 클래스에서 메소드 재정의
  }
}
```
## @Override annotation   
* annotation 
  - 소스 코드에 **메타 데이터**를 표현한 것.   
  - 코드를 어떻게 처리할 것인지를 안내해주는 정보   
  - 문법 체크하도록 정보 제공   
  - 실행 시 특정 기능을 실행하도록 정보 제공   

* @Override   
  - 메소드가 오버라이드 되었는지 검증   
  - super class(혹은 인터페이스)에서 해당 메소드 찾지 못하면 컴파일 오류 발생   
  
```
public class A {
  public void print() {
    //super class 메소드 구현
  }
}

@Override //컴파일 오류 : 메소드 파라미터의 개수가 다름.
public class B extends A {
  public void print(int a) {
  }
}
```
  ##### @Override 어노테이션을 사용하지 않은 경우에는 **중복 정의(overloading)가 될 수 있다.
  ##### 그러나 @Override가 사용된 경우엔, 오버라이딩 메소드라고 알려주었기 때문에 컴파일 오류 발생
  
  
