# ParseException 과 Date   
그리고 [SimpleDateFormat](https://github.com/Yeony99/TIL/blob/main/java/SimpeDateFormat.md)


예외 처리를 쓰는 이유 : 코드에 오류가 없을 것이라고 확신할 수 없기 때문에.   
예외처리를 할 때에는 **정상적으로 프로그램을 수행했을 때의 코드**와 **오류발생 시의 코드**가 따로 존재해야 한다.   

밑 코드를 보면 Date를 String으로, 그리고 다시 String을 Date로 변환하는 과정.   


```
import java.text.SimpleDateFormat;
import java.util.Date;

public class Date_Ex {  //자바에서 제공하는 것(Date)을 class 이름으로 사용할 수 없음

	public static void main(String[] args) {
		String s;
		Date date=new Date();
		
		// Date -> String으로 변환 
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일 HH시 mm분 ss초");
		s=sdf.format(date);
		System.out.println(s);
		
		//String -> Date //날짜 자체가 오류가 있을 가능성
		s="2000-10-10"; //이 형식이랑 동일할 것. 
		SimpleDateFormat sdf2=new SimpleDateFormat("yyyy-MM-dd");
		
    Date date2=sdf2.parse(s); 
    System.out.println(date2);	
	}
}
```

1. 자바에서 제공하는 Date 클래스의 생성자로 객체를 생성.   
2. SimpleDateFormat("스트링 형식") 을 정의   
3. 예외 처리를 하지 않았다는 오류 발생: Unhandled exception type ParseException   
4. 3의 이유는 날짜가 오류가 있을 가능성이 있기 때문에.   
5. try~catch로 ** 예외 처리**

```
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Date_Ex02 {

	public static void main(String[] args) {
		String s;
		Date date=new Date();
		
		// Date -> String으로 변환
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일 HH시 mm분 ss초");
		s=sdf.format(date);
		System.out.println(s);
		
		//String -> Date
		s="2000-10-10"; //이 형식이랑 완벽히 동일해야만 오류 안난다
		SimpleDateFormat sdf2=new SimpleDateFormat("yyyy-MM-dd");
		
    //try ~ catch로 예외처리
		try {
			Date date2=sdf2.parse(s); //여기 혹은 try안의 코드에서 문제가 생겼을 때, 무조건 e.printStackTrace 로 넘어가 '오류 내역'출력
			System.out.println(date2);
			
		} catch (ParseException e) {
			e.printStackTrace();
		} 
		
	}
}
```

실행 결과는 아래와 같이 나온다.   
시각은 지금 글을 작성하는 시점.   
#### 2021년 02월 08일 17시 35분 07초   
#### Tue Oct 10 00:00:00 KST 2000   
