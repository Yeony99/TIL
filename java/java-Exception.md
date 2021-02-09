# Exception 예외처리   
## Error   
자바를 실행하다보면, 두 가지 에러를 볼 수 있다.   
#### 컴파일 에러 (compile time error)   
컴파일 할 때 발생되는 에러.   
잘못된 문법(syntex) 혹은 변수가 정의되지 않은 상태에서 사용하는 등 문법적 에러.   

#### 런타임 에러 (runtime error)   
프로그램을 실행할 때 발생하는 에러(혹은 예외)   
에러의 경우는 시스템에 이상이 있어서 시스템 상에 변화를 주어야 하는 경우이다. 프로그램 중 런타임 오류가 발생하면 프로그램이 멈추고 종료된다.   
예외의 경우는 프로그램 실행 중 발생되는 비정상적인 상황을 의미한다.   

## 예외 Exception   
컴파일러에 잡히지 않지만, 실행 시에 드러나는 오류이다. 예를 들어, 0으로는 나눌 수 없지만 int a=3; int b=0; 을 주고 a/b를 출력하면 예외가 발생한다.   
이러한 예외 상황은 프로그램을 종료시키기 때문에, 프로그램이 비정상적으로 종료되지 않고 지속적으로 실행되도록 우리는 **예외처리 Exception Handling**을 할 수 있다.   

## 예외의 종류   
* checked exception   
  - 컴파일할 때 컴파일러에 의해 체크되는 예외.   
  - 이것을 명시적으로 하지 않으면 컴파일 오류가 발생한다.   
  
* unchecked exception   
  - 컴파일할 때 체크되지 않으며, 런타임 시 발생되는 예외   
  - Exception 클래스 아래 RuntimeException 클래스를 상속받은 클래스.   
  
## try ~ catch   
try 문 안에서 예외 상황이 발생하면, catch에서 해당 예외를 넘겨 오류에 관한 상황을 처리한다.   
```
try {
  //예외를 야기할 수 있는 코드
} catch (예외클래스1 변수) {
  //예외클래스1의 예외가 발생할 때 실행할 코드
} catch (예외클래스2 변수) {
  //예외클래스2의 예외가 발생할 때 실행할 코드
} fianlly { 
  //예외 발생 여부와 관계없이 무조건 실행할 코드
  //catch 없이 try ~ finally 구조도 가능하다.
}
```
## 예외 처리   
catch에서 모든 예외를 잡고 싶을 때에는 최상위 클래스로 catch (Exception e) 이와 같이 작성하면 Exception 클래스 하나로 모든 예외를 처리할 수 있다.   

```
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ExceptionEx03 {
	public static void main(String[] args) {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int a,b,c;
		
		try {
			System.out.print("첫번째 수?");
			a=Integer.parseInt(br.readLine());
			System.out.print("두번째 수?");
			b=Integer.parseInt(br.readLine());
			
			c=a/b;
			
			System.out.println("결과:"+c);
		} catch (IOException e) { //IOException => checked 예외. 예외처리 안하면 반드시 에러.
			e.printStackTrace();
      
		} catch (NumberFormatException e) { //NumberFormatException : unchecked 예외. 런타임시 발생
		// 문자열을 숫자로 변환 불가능할 때 발생
		// 반드시 catch할 필요 없지만 예외처리하지 않은 경우 예외가 발생하면 프로그램은 강제 종료
			System.out.println("숫자만 입력 가능합니다.");
      
		} catch (ArithmeticException e) {
		//ArithmeticException :unchecked 예외. 런타임시 발생
		//연산이 불가능할 때 발생
			System.out.println("0으로 나눌 수 없습니다.");
      
		} catch (Exception e) {
			//Exception은 가장 최상위 클래스. 모든 예외를 catch 할 수 있다.
			//여러개의 예외를 catch할 때는 가장 마지막에 위치해야 한다.
			e.printStackTrace(); //가장 자세한 오류 메시지 출력.
		}
		System.out.println("프로그램 종료");
	}
}
```

## 자동 리소스 닫기 (.close())   
자바 7 이전에는 리소스.close()로 사용한 후 닫아주는 것을 명시적으로 해야 했지만,   
자바 7 이후부터는 try ~ catch 구분 안에서 close()메소드를 자동으로 호출해 안전하게 리소스를 닫아준다.   
난 자바 버전 8을 쓰고 있기 때문에, 어떤 방법으로 하든 상관이 없다.   

```
import java.io.FileOutputStream;
import java.io.IOException;

public class Exception {

	public static void main(String[] args) {
		int ch;
		
		FileOutputStream fos = null; //사용완료 표시 필수
		
		try {
			fos = new FileOutputStream("test.txt");
			System.out.println("문자열 입력[종료:ctrl+z]"); //엔터를 치고 ctrl z 
			while((ch=System.in.read())!=-1) { //ctrl + z 코드값이 -1 
				fos.write(ch);
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if(fos!=null) {
				try {
					fos.close(); //리소스는 오류 발생과 무관하게 꼭 close()해야한다. 
				} catch (Exception e2) {
					
				}
			}
		}
	}
}
```
자바 7 이후    
```
import java.io.FileOutputStream;

public class ExceptionVer7 {

	public static void main(String[] args) {
		int ch;
		
		//try () 안에서 객체를 선언하기 때문에 그 안에서 자동으로 close됨. 
		
		try(FileOutputStream fos = new FileOutputStream("test.txt")) {
			System.out.println("문자열 입력[ctrl + z: 종료]");
			
			while((ch=System.in.read())!=-1) {
				fos.write(ch);
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}
```

