# Map
java.util.Map<K, V> 인터페이스.   

key를 value에 매핑하는 객체.   
동일한 키를 두 개 이상 등록하지 못하는 중복 비허용.   
ex. 학번, 주민등록번호는 같을 수 없다. => 키 // 이름은 같을 수 있다.   

## HashMap
중복 허용되지 않으며, 순서가 없다.   
```
import java.util.HashSet;
import java.util.Set;

public class HashMapEx {
	public static void main(String[] args) {
		Set<String> set=new HashSet<String>();
		
		set.add("자바");
		set.add("오라클");
		set.add("서블릿");
		set.add("스프링");
		set.add("HTML");
		
		System.out.println(set);
		
		set.add("자바"); //중복적인 데이터는 추가 안됨
		System.out.println(set);
		
		for(String s:set) {
			System.out.print(s+" ");
		}
		System.out.println();
	}
}

//실행결과 
/*
[오라클, 스프링, HTML, 서블릿, 자바]
[오라클, 스프링, HTML, 서블릿, 자바]
오라클 스프링 HTML 서블릿 자바 
*/
```

## LinkedHashMap
중복허용되지 않으며, 입력 순서 그대로 유지된다.   
Hashtable과 LinkedList를 구현한 Map.
```
import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashMapEx {
	public static void main(String[] args) {

		Set<String> set = new LinkedHashSet<>();
		
		set.add("자바");
		set.add("오라클");
		set.add("서블릿");
		set.add("스프링");
		set.add("빅데이터");
		
		System.out.println(set);
	}
}

//실행결과
/*
[자바, 오라클, 서블릿, 스프링, 빅데이터]
*/
```
## TreeMap  
중복 허용되지 않으며, 순서대로 정렬된다. (단, Comparable 구현 클래스만 가능)
```
import java.util.Set;
import java.util.TreeSet;

public class TreeMapEx {
	public static void main(String[] args) {
		//중복 허용 X
		//TreeSet : 순서대로 정렬(단, Comparable 구현 클래스만 가능.)
		Set<String> set = new TreeSet<String>();
		
		set.add("자바");
		set.add("오라클");
		set.add("서블릿");
		set.add("스프링");
		set.add("빅데이터");
		
		System.out.println(set);
	}
}

//실행결과
/*
[빅데이터, 서블릿, 스프링, 오라클, 자바]
*/
```

##Hashtable
HashMap과 달리, 멀티 스레드 환경에서 동기화를 지원한다.   
중복 허용되지 않으며, 순서가 없다.   
```
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map;

public class HashtableEx {
	public static void main(String[] args) {
		//HashMap : 동기화 지원 안함
		//Hashtable : 동기화 지원
		Map<String, Integer> map = new Hashtable<>();
		map.put("서울", 1000);
		map.put("부산", 350);
		map.put("인천", 300);
		
		Iterator<String> it = map.keySet().iterator();
		while(it.hasNext()) {
			String key=it.next();
			Integer value = map.get(key);
			System.out.println(key+" : "+value);			
		}
  }
}

//실행결과
/*
인천 : 300
서울 : 1000
부산 : 350
*/
```

## Properties
Hashtable을 상속 받은 클래스   
key와 value 모두 String으로 제한되는 Map이다.   
**파일 저장 및 불러오기가 간단해 환경설정에서 많이 사용**   
```
import java.util.Iterator;
import java.util.Properties;

public class PropertiesEx {
	public static void main(String[] args) {
  
		Properties p = new Properties();
		
		//저장
		p.setProperty("자바", "100"); //상위 클래스가 Hashtable이지만 put이나 get 쓰지 않음. 
		p.setProperty("오라클", "95");
		p.setProperty("서블릿", "70");
		p.setProperty("빅데이터", "90");
		p.setProperty("스프링", "85");
		
		Iterator<Object> it = p.keySet().iterator();
		while(it.hasNext()) {
			String key = (String)it.next();
			String value = p.getProperty(key); //키의 값 가져오기
			System.out.println(key+":"+value);
			
		}
		System.out.println();
		p.list(System.out); //출력장치에 모두 출력(키=값)형식
	}
}

//실행 결과
/*
스프링:85
자바:100
서블릿:70
빅데이터:90
오라클:95

-- listing properties --
자바=100
스프링=85
서블릿=70
오라클=95
빅데이터=90
*/
```
