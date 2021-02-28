# Lambda

## 람다식
* 메소드를 하나의 표현으로 나타낸 것.
* 함수지향에 가깝다.
* 메소드의 이름 및 반환 값이 없어진다. (=익명함수)
* 자바 8부터 제공
* /람다에서 this는 사실상 필요가 없다. (메소드 하나밖에 되지 않기 때문에)


## 형식
```
(a, b) -> {return a+b}
(a, b) -> a+b; // 리턴만 존재하는 경우 가능
```

## 예시
```
public class LambdaEx {
	public static void main(String[] args) {
		Test tt = new Test();
		tt.using();
	}
}

interface Aa {
	public void sub();
}

class Test {
	int x=10; 
	
	class Demo {
		int y =20;
		
		public void write() { //메소드
			int z = 30;
      
			Aa a = ()-> {
				System.out.println(this); //람다에서의 this는 익명이 아님(Demo 경로 출력)
				//System.out.println(this==Demo.this); //true
        
				System.out.println(x);
				System.out.println(Test2.this.x); //위와동일
				
				System.out.println(y);
				System.out.println(this.y);
				System.out.println(Demo.this.y);
				
				System.out.println(z); //메소드에 있는 변수
				
				System.out.println();
			};
//			z=10; //Local variable z defined in an enclosing scope must be final or effectively final
				      //람다에서 사용한 변수는 final 속성.
			a.sub();
		}
	}
  
	public void using() { //메소드
		Demo ob = new Demo(); //class Demo의 객체 생성 
		ob.write(); //Demo에 있는 메소드 호출.
	}
}
