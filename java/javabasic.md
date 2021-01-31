# Java Basic (1)

> Java 개요

## Java란?

* 고급 언어(high - level language)
    -  사람이 이해하기 쉽게 작성된 프로그래밍 언어이다.
    - 운영체제와 독립적으로 프로그램을 작성할 수 있다.
    - 컴파일러(compiler)나 인터프리터(interpreter)에 의해 기계어로 번역되어 실행된다.
* 객체지향언어 (object - oriented programming language)
    - 상속
    - 캡슐화
    - 다형성
* 동적 로딩을 지원
* 자동으로 메모리 관리(garbage collection)

## Java의 실행

1. 자바 프로그램으로  자바 소스코드 (.java) 파일을 생성한다
2. 자바 소스를 컴파일해 클래스 파일(.class)에 저장한다
3. 자바 가상머신(JVM)을 구동하고 클래스 파일(.class)를 로딩해 자바 바이트 코드를 실행한다. 

## JVM, Java Virtual Machine 

* 자바 바이트코드를 실행할 수 있는 주체
* Garbage Collection
* 기본 타입 정의를 명확히 하여 독립성을 보장

## JDK와 JRE

* JDK (Java Development Kit)
    - 자바 어플리케이션을 개발하고 배포하기 위한 개발 키트
    - JVM과 JRE에 의해 실행되고 구동될 수 있는 자바 프로그램 생성할 수 있게끔 하는 도구
    
* JRE (Java Runtime Environment) 
    - 자바 실행 (런타임)
    - 자바를 실행할 수 있는 환경만 필요한 경우에는 JRE만 설치할 수 있다.
    
## JDK의 주요 개발 도구 (bin directory)
* javac : 자바소스를 바이트 코드로 변환하는 컴파일러
* jar : 패키지된 자바 클래스 세트
* jab : 자바 디버깅 툴
* javadoc : 소스 코드 주석으로부터 자동으로 문서를 생성하는 툴 (도움말 만들기)
    
## Java API (Application Programming Interface)
* Java SE(JDK) 설치하면 자바 시스템 제어를 돕는 API를 제공한다.
* 주요 기능들을 미리 구현해놓은 클래스 라이브러리
* 자바 사용자의 부담을 최소화한다.
[Java API] (https://docs.oracle.com/javase/8/docs/api/)
