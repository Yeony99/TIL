자바의 루프와 배열을 사용해 html 코드 쉽게 작성하기   
```
public class LoopArray {
	public static void main(String[] args) {
		//배열과 반복문을 이용해 html주소 쉽게 만들기.
		String [] users = new String[3];
		users[0] = "Nayeon";
		users[1] = "Yeony";
		users[2] = "Kim";
		
		for(int i=0; i<users.length; i++) { //배열 크기에 따라 반복 횟수가 달라진다.
			System.out.println("<li>"+users[i]+"</li>");
		}
		
	}
}
```
