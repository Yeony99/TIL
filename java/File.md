# 자바에서 파일 생성, 파일 관리하기

## 현재 작업하는 위치에서 파일이 존재하는지 확인
```
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FileEx1 {
	public static void main(String[] args) {
		String appDir = System.getProperty("user.dir");
		System.out.println("현재 작업 경로:"+appDir);
		
		//File.separator : 폴더와 폴더, 폴더와 파일 구분자.
		String pathname = appDir+File.separator+"test.txt";
		System.out.println(pathname);
		
		//File : 파일이나 폴더의 정보, 폴더 생성 등..
		File f = new File(pathname);
		
		//exists() : 파일이나 폴더가 존재하면 true를 반환
		if(!f.exists()) {
			System.out.println(pathname + " 파일이 존재하지 않습니다.");
			return;
		}
		
		try {
			String s;
			long n;
			
			System.out.println("파일 정보...");
			s=f.getName(); //ex.txt
			System.out.println("파일명:"+s);
			System.out.println("경로:"+f.getPath()); //c:\경로\파일명.확장자
			System.out.println("절대 경로: "+f.getAbsolutePath()); //상동.
			System.out.println("표준 경로: "+f.getCanonicalPath());//상동.
			System.out.println("부모 경로: "+f.getParent()); //c:\경로
			
			n=f.length();
			System.out.println("파일길이(byte): "+n);
			
			System.out.println("파일생성일: "+new Date(f.lastModified()));
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			
			s=sdf.format(new Date(f.lastModified()));
			System.out.println("파일생성일: "+s);
			
			System.out.println("읽기속성: "+f.canRead());
			System.out.println("쓰기속성: "+f.canWrite());
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
```
위 코드를 실행했을 때 해당 파일이 있다면, 파일명부터 파일을 최종 수정한 시간, 경로, 길이 등이 콘솔에 출력된다. 



## 폴더 생성
```
import java.io.File;

public class FileEx2 {
	public static void main(String[] args) {
		String pathname = "C:"+File.separator+"user"+File.separator+"test";
		
		try {
			File f=new File(pathname);
			if(! f.exists()) {
				
				//폴더 생성 
				//f.mkdir(); //상위폴더가 없으면 생성 안됨
				f.mkdirs(); //상위폴더가 없으면 상위폴더도 생성
				System.out.println("폴더를 생성했습니다");
			}
			System.out.println("폴더명: "+pathname);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
```
![파일처리-폴더생성](https://user-images.githubusercontent.com/76241233/108203992-90826680-7166-11eb-8ffd-58408ba98cae.png)
위와 같이 폴더가 생성된다. 


## 폴더(파일) 삭제
```
public class FileEx3 {

	public static void main(String[] args) {
		String pathname = "C:"+File.separator+"user"+File.separator+"test";
		
		File f = new File(pathname);
		if(! f.exists()) {
			System.out.println(pathname+"은 존재하지 않음.");
			return;
		}
		
		//폴더 또는 파일은 한번에 하나씩만 삭제 가능
		//폴더는 비어있어야 삭제 가능
		if(f.delete()) {
			System.out.println(pathname+" 가 삭제됨...");
		}
	}
}
```
![파일삭제](https://user-images.githubusercontent.com/76241233/108204235-e525e180-7166-11eb-8eec-19d20012c0e0.png)
폴더 내 파일이 삭제된다. 

## 모든 파일 출력
```
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FileEx4 {
	public static void dirList(String pathname) {
		File file = new File(pathname);
		File[] ff = file.listFiles(); //경로에 존재하는 모든 파일 또는 폴더에 대한 File 객체
		
		if(ff == null || ff.length==0) {
			return;
		}
		
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			String s;
			for(File f:ff) {
				s=sdf.format(new Date(f.lastModified()));
				if(f.isFile()) {
					System.out.print(f.getName()+"\t");
					System.out.print(s+"\t");
					System.out.println(f.length());
					
				} else if(file.isDirectory()) {
					System.out.println(f.getName()+"...");
				}
			}
		} catch (Exception e) {
			
		}
	}
	public static void main(String[] args) {
		dirList("c:\\windows");
	}
}
```
dirList(""); 에 적은 경로에 있는 모든 파일이 콘솔에 출력된다.

## 파일 카피 copy
```
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStreamReader;

public class FileCopyEx1 {

	public static void main(String[] args) {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String source, dest;
		FileInputStream fis = null;
		FileOutputStream fos = null;
		File f;
		int data;
		
		try {
			System.out.print("원본파일명.확장자 입력");
			source = br.readLine(); 
			
			System.out.print("복사할 파일명.확장자 입력");
			dest=br.readLine(); 
			
			fis=new FileInputStream(source);
			fos=new FileOutputStream(dest);
			
			while((data=fis.read())!=-1) {
				fos.write(data);
			}
			fos.flush();
			System.out.println("파일 복사 완료..");
			
		} catch (FileNotFoundException e) {
			//System.out.println(e.toString());
			System.out.println("원본파일이 존재하지 않습니다.");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(fis!=null) {
				try {
					fis.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
			if(fos!=null) {
				try {
					fos.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
		}		
	}
}
```
한 폴더에 복사되는 것을 볼 수 있다. 단, 이 방법은 한번에 1byte씩 읽기 때문에 엄청나게 느리다.   
용량이 큰 경우라면 밑의 다른 방법을 쓰는 것이 좋다.   


```
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStreamReader;

public class FileCopyEx2 {

	public static void main(String[] args) {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String source, dest;
		FileInputStream fis = null;
		FileOutputStream fos = null;
		int len;
		byte[] b = new byte[2048]; //크기를 늘리면 속도가 빨라지긴 한다.
		
		try {
			System.out.print("원본파일명.확장자 입력");
			source = br.readLine(); 
			
			System.out.print("복사할 파일명.확장자 입력");
			dest=br.readLine(); 
			
			fis=new FileInputStream(source);
			fos=new FileOutputStream(dest);
		
			long s = System.currentTimeMillis();
			while((len=fis.read(b))!=-1) {
				fos.write(b, 0, len);
			}
			fos.flush();
			long e = System.currentTimeMillis();
			System.out.println("복사시간:"+(e-s)+"ms");
			
			
			
		} catch (FileNotFoundException e) {
			//System.out.println(e.toString());
			System.out.println("원본파일이 존재하지 않습니다.");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(fis!=null) {
				try {
					fis.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
			if(fos!=null) {
				try {
					fos.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
		}		
	}
}

```
Ex1 방법보다는 빨라진 속도를 느낄 수 있다.

하지만 밑의 방법이 가장 빠른 방법이었다.

```
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStreamReader;

public class FileCopyEx3 {
	public final static int BUFFER_SIZE = 4096; //final int 선언, 할당
	
	public static void main(String[] args) {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String source, dest;
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
		int len;
		byte[] b = new byte[BUFFER_SIZE];
		
		try {
			System.out.print("원본파일명.확장자?");
			source = br.readLine();
			
			System.out.print("복사할 파일명.확장자?");
			dest=br.readLine(); 
			
			bis=new BufferedInputStream(new FileInputStream(source));
			//bos=new BufferedOutputStream(new FileOutputStream(dest)); //기본 버퍼 크기 = 16384 byte
      
      
			bos=new BufferedOutputStream(new FileOutputStream(dest), BUFFER_SIZE);
			
			
			
			//len=fis.read(b) => 바이트 배열 b의 길이만큼씩 읽어들인다
			//읽은 후 b에 저장, 실제 읽어들이 길이를 반환
			long s = System.currentTimeMillis();
			while((len=bis.read(b))!=-1) {
				bos.write(b, 0, len);
			}
			bos.flush();
			long e = System.currentTimeMillis();
			System.out.println("복사시간:"+(e-s)+"ms");
			
			
			
		} catch (FileNotFoundException e) {
			//System.out.println(e.toString());
			System.out.println("원본파일이 존재하지 않습니다.");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(bis!=null) {
				try {
					bis.close();
				} catch (Exception e2) {
				}
			}
			if(bos!=null) {
				try {
					bos.close();
				} catch (Exception e2) {
				}
        
			}
		}		
	}
}
```
버퍼의 기존 크기보다 작은 값을 줬는데도 가장 빠르게 처리됐다.

