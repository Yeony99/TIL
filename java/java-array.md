# 자바 배열 (Array)   
## 배열이란?   
크기, 성격이 같은 원소들이 모여 집합구조를 이루는 것.   
동질적(homogeneous)인 성격을 가진 자료들을 개별적으로 자료형을 부여하지 않고(int = a; int b; ...), 하나의 이름으로 처리할 수 있게끔 하는 것.   
   
```
//정수형 변수 10개 선언 시.
int n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;

//10개의 정수 저장할 수 있는 배열 선언 시.
int []n = new int[10];
```
   
## 배열의 특징   
배열은 **동일한 타입**의 여러 변수들을 하나의 묶음으로 다루는 것.   
* 배열의 각 요소는 메모리에 연속적으로 저장   
* **처음 설정한 크기를 변경할 수 없다!**    
   -> 변경하기 위해서 메모리 재할당 하는 경우에는 GC가 메모리 회수하게 됨.   
   
## 배열 선언   
```
자료형 [] 배열명; //int [] arr;
자료형 배열명 []; //int arr[];
```
###### 자료형은 기본자료형, 레퍼런스 자료형 모두 선언 가능   
###### 배열 선언은 값을 저장할 공간 생성 x 배열 요소 참조하는 레퍼런스 변수 생성 O   

## 배열 메모리 할당   
배열 선언 후, 값을 저장할 메모리 공간 **new**연산자를 이용해 할당.   
```
int []arr;         //배열 선언
arr = new int[5]; //메모리 할당

int []arr = new int[5]; //배열선언과 동시에 메모리 할당
```
   
new 연산자를 통해 메모리 할당했을 때, 숫자형(int, byte etc.)은 0, 객체는 null로 자동 초기화.   

## 배열 초기화    
```
int []arr; 
arr = new int[] {1, 2, 3, 4, 5}; //선언 후 초기화

int []arr = new int[] {1, 2, 3, 4, 5}; // 배열 선언, 메모리 할당과 동시에 초기화

//단, 이 경우는 안됨
//int []arr;
//arr = {1, 2, 3, 4, 5};
```
## 배열의 크기   
length 필드를 통해 확인 가능.   
```
int []arr = new int[5];
int a = arr.length; // 결과 5
```
## 배열 이용하기   
자바는 숫자가 0부터 시작   
배열 또한 가장 먼저 오는 것이 0번째이다.   
```
int []arr = new int[5] {1, 2, 3, 4, 5};

//이때 배열의 자릿수로 요소를 호출 가능
// arr[0] --> 1
// arr[1] --> 2
// ... 위와 같은 결과가 출력된다.

//만약 arr[10]과 같이 배열의 범위를 벗어나서 index를 입력하면, 실행 시 오류 발생. (ArrayIndexOutOfBoundsException)
```
   
   
## 향상된 for문(Enhanced for Loop/for each loop)   
버그 가능성을 낮추고, 읽기 쉽게 작성할 수 있는 for문.   
for((타입)(변수명) : (배열))   
```
int []arr = new int[5] {1, 2, 3};

for(int i : arr) {
   System.out.println(i);
}
/*결과
1
2
3
*/
```
###### 배열이 가지고 있는 데이터 수 만큼 반복 실행하며 배열의 각 항목을 하나씩 for문의 변수에 대입해서 실행.   

## 배열의 배열 (2차원 배열)   
~~(행렬과 비슷한 듯 하다?)~~   
```
int [][]arr = new int [2][3];

/*
arr[0][0] arr[0][1] arr[0][2]
arr[1][0] arr[1][1] arr[1][2]

위와 같은 방식으로 기억된다.
*/
```

## 가변 배열   
배열의 배열([a][b])에서 b의 크기를 다르게 할 수 있다.   
```
int [][]arr = new int [3][];
a[0] = new int[4];
a[1] = new int[2];
a[2] = new int[3];

/*
arr[0][0] arr[0][1] arr[0][2] arr[0][3]
arr[1][0] arr[1][1] 
arr[2][0] arr[2][1] arr[2][2]
*/

## System.arraycopy 메소드   
배열의 배열을 복사하고자 하는 배열이 지정된 위치에 복사.   
```
int []a = new int[] {1, 2, 3};
int []b;
원본 배열, 복사될 요소의 시작 위치, 복사해갈 배열, 붙여넣을 위치, 복사할 개수
System.arraycopy(a, 0, b, 0, a.length); 
```
