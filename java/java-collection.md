# 컬렉션 Collection   
## 컬렉션

각각의 클래스에서 사용할 수 있는 인터페이스가 있다.   
특히 중요하게 여겨지는 것은 ArrayList, Hashmap 이다.   
* List <E>    
  - 순서가 있는 데이터의 집합.   
  - 삽입 위치를 제어할 수 있다.    
  - 중복을 허용한다.   
  - 주요 구현 클래스는 ArrayList, LinkedList, Vector, Stack   
  
* Set <E>   
  - 순서 없는 데이터의 집합   
  - 중복 허용 안한다.   
  - 주요 구현 클래스는 HashSet, LinkedHashSet, TreeSet   
  
* Map <K, V>   
  - 데이터의 값 뿐 아니라 key까지 저장한다.   
  - 저장 순서는 유지되지 않고, key의 중복은 허용하지 않는다.   
  - ex. 이름은 중복 가능하지만 학번(key)는 중복되지 못함.   
  - 주요 구현 클래스는 HashMap, Hashtable, Properties, LinkedHashMap, TreeMap   
  
## java.util.Collection<E> 인터페이스   
컬렉션 계층 구조의 최상위 인터페이스이다. 요소(Element)를 추가하거나 삭제하는 등의 데이터 관리 기능을 사용할 수 있다.   

## java.util.ArrayList<E> 클래스   
- List 인터페이스를 구현한 클래스.   
- array의 크기를 조작하는 메소드 제공. -> 자동으로 용량이 늘어난다.   
- 멀티 쓰레드 환경에서 동기화되지 않음.   

## ArrayList 클래스 생성자   
- ArrayList() : 초기 용량 10, 빈 상태의 리스트   
- ArrayList(Collection <? extends E> c) : 지정된 컬렉션의 요소를 포함하는 리스트   
- ArrayList(int initialCapacity) : 지정된 초기용량을 가지는 빈 상태의 리스트    

## ArrayList 클래스 주요 메소드   
- boolean add(E e) : 리스트 마지막에 지정된 요소 추가   
- void add(int index, E element) : 지정된 위치에 지정된 요소 삽입   
- boolean allAll(int index, Collection<? extends E> c) : 지정된 컬렉션의 모든 요소를 리스트에 지정된 위치에 삽입   
- List<E> subList(int fromIndex, int toIndex) : 리스트의 fromIndex ~ toIndex-1 사이의 요소를 List 객체로 반환   
- int size() : 리스트 내 요소 수 리턴   
- Object [] toArray() : 리스트 내 모든 요소 배열로 리턴 = <T> T[] toArray(T[] a)   
- Iterator<E> iterator() : 리스트 요소에 대한 반복자 리턴   
- E remove(int index) : 지정된 위치 요소 삭제   
- boolean remove(Object o) : 지정된 요소 삭제   
- void clear() : 모든 요소 삭제   
- void trimToSize() : ArrayList의 크기를 현재 사이즈로 축소   


## java.util.Vector<E> 클래스   
- List 인터페이스를 구현한 클래스.   
- Vector를 만든 후 항목 추가/제거 가능   
- 멀티 쓰레드 환경에서 동기화된다 (=동기화 필요없을 때에는 ArrayList 사용 권장)   

## Vector 클래스 주요 메소드   
- E remove(int index) // void removeElementAt(int index) : 지정된 위치의 요소를 삭제   
- boolean remove(Object o) // boolean removeElement(Object obj) : 지정된 요소 삭제   
- void clear() // void removeAllElements() : 모든 요소 삭제   
- void setSize(int newSize) : 벡터의 크기 조절. newSize가 현재보다 작으면 나머지는 버리고, 크면 null 객체로 채워짐   
- void trimToSize() : 벡터의 용량을 저장된 객체 개수에 맞도록 최소화   

## java.utill.LinkedList<E> 클래스   
- List 인터페이스, Deque 인터페이스를 구현한 클래스   
- 내부적으로 Linked List 자료 구조를 사용해 데이터를 저장하는 각 노드가 이전 노드와 다음 노드의 상태를 저장하는 방식으로 구현   
- ArrayList 처럼 불필요한 복사 없어 속도 빠르다.   
- 검색은 ArrayList보다 느리다.   
- 멀티 쓰레드 환경에서 동기화되지 않는다.   
