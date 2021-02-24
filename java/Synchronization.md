# 동기화 Synchronization

## 동기화란?
* 멀티 스레드 환경에서 여러 스레드가 동일 프로세스 내 자원을 공유해 사용해 발생할 수 있는 문제점을 해소할 수 있다.
* 공유되는 자원에 동시에 여러 스레드가 접근하지 못하도록 설정하는 것 = 동기화
* 스레드A -동기화- 객체B 인 경우, 스레드A만이 객체B에 접근할 수 있다.

## 동기화 관련 용어
* 교착 상태 Dead Lock
  - 두 개 이상의 작업이 상대 작업이 끝나는 것을 기다리다 모두 완료되지 못하는 상태.
* 크리티컬 섹션(Critical Section, 임계영역)
  - 공유 데이터, 자원에 대한 접근을 하나의 스레드로 제한. 

## synchronized 키워드
* Hashtable, StringBuffer, Vector 동시성 지원
```
public class SynchEx02 {
	public static void main(String[] args) {
		MyThread2 mt = new MyThread2();
		
		Thread t1 = new Thread(mt);
		Thread t2 = new Thread(mt); //스레드 3개 (메인+독립 스레드 2개)
		
		t1.start();
		t2.start();
		
		/*
		 * 
		 동기화 블럭이 없는 경우, 실행결과는
		 인출성공, 인출금액: 6000, 잔고: -2000
		 인출성공, 인출금액: 6000, 잔고: -2000
		 
		 로 오류결과 출력.
		 */
	}
}

//동기화
class MyThread2 implements Runnable {

	private int money = 10000;
	
	
	@Override
	public void run() {
		int m = 6000;
		int n=0;
		String msg=null;
		
		try {
			
			//문제가 된 지점 수정!
			//다른 것이 들어오지 못하도록 막기 = 동기화
			
			//동기화 블럭
			synchronized (this) { //첫번째 객체가 들어오면 2번째 객체는 들어오지 못하도록 막기
				if(getMoney() >=m) {
					Thread.sleep(200);
					n = drawMoney(m);
					msg="인출성공";
					
				} else {
					n=0;
					msg ="인출실패";
				}
			}
	
			System.out.println(msg+", 인출금액: "+ n+", 잔고: "+getMoney());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public int getMoney() {
		return money; // 외부에서 접근 가능하도록
		
	}
	
	//인출
	private int drawMoney(int m) {
		money -= m;
		return m;
	}
}
```
