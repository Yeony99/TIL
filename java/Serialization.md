# 직렬화 Serialization
자바 시스템 내부에서 사용되는 객체 또는 데이터를 자바 외부에서도 사용할 수 있도록 byte 단위로 변환하는 것.   

## 직렬화가 가능한 자료형 및 객체
  * 기본형 타입(boolean, char, byte, short, int, float, double)
  * Serializable 인터페이스를 구현한 클래스의 객체   
  
  
  
## 직렬화가 불가능
  * transient가 사용된 멤버변수(null 전송), static 멤버변수, 메소드
  
  
## 역직렬화 Descrialization 
  * 직렬화된 byte 단위의 데이터를 다시 원래 데이터로 복원하는 것. 
  
## 직렬화 
* 객체 직렬화는 Serializable 인터페이스를 구현해야 한다.
```
public class 클래스명 implements Serializable {
}
```
* transient 
  - 직렬화 대상에서 제외하고 싶은 멤버변수는 transient 키워드를 붙여 정의해 제외시킨다.
  - transient 변수가 복원되면, 숫자변수 -> 0, 객체 -> null로 설정된다. 
  
* serialVersionUID 필드
  - 직렬화에 사용되는 고유 아이디. (JVM이 디폴트로 자동생성하지만, 명시하는 것을 권장)
  - 역직렬화해서 읽을 때, 캐스팅한 클래스의 것과 역직렬화한 것이 맞는지 확인하기 위해 사용된다.
