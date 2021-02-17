# I/O Stream
자바는 스트림을 통해 입출력을 다룬다.

## 입출력 스트림   
스트림은 한 방향으로만 통신이 가능하다. 따라서 입력과 출력을 동시에 처리하는 것은 불가능하다.  

## 표준 입력 스트림
많이 사용한 Scanner의 **System.in**, **System.out**.println도 표준 입력 스트림이다.   
System.err 까지 더해 이들이 모두 표준 입력 스트림이다.   

* InputStream
  - 모든 바이트 **입력** 스트림의 최상위 클래스
  - read() 메소드가 포함되어 있다. (단, checked exception이기에, IOException 필수)
  - System.in 또한 byte 입력 스트림으로, InputStream의 객체이다. 
  
```
import java.io.IOException;

public class InputStreamEx03 {
	public static void main(String[] args) {
		int data;
		
		try {
			System.out.println("ABCDEF 입력 후 엔터");
			data = System.in.read();
			System.out.write(data); // 출력 버퍼로 보낸다. 버퍼가 안 차면 출력 장치로 보내지 않음.
			
      
			System.out.flush(); //버퍼의 내용을 출력장치로 보냄. 첫 번째 A 하나만 출력. 
			
			System.in.skip(2); //2byte를 읽고 버림. BC가 skip된다.
			data = System.in.read(); //A (BC) D 
			System.out.write(data); //D가 출력 버퍼로 보내진다.
			
			System.out.flush(); //EF엔터를 출력하지 않는다
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}

/*
실행 결과
AD
*/
```
* OutputStream
  - 모든 바이트 **출력** 스트림의 최상위 클래스
  - write() 메소드가 포함되어 있다. (단, checked exception이기에, IOException 필수)
  - System.out 또한 byte 출력 스트림으로, OutputStream의 객체이다. 
  
* Reader 클래스
  - 모든 **문자 입력** 스트림의 최상위 클래스.
  - read()메소드가 있다. (단, 길이를 읽는 것이 아닌 **문자**을 읽는다).
  
* Writer 클래스
  - 모든 **문자 출력** 스트림의 최상위 클래스.
  - write() 메소드가 있다. (byte[] 배열 출력이 아닌, 문자 배열의 문자를 버퍼에 출력한다.)
