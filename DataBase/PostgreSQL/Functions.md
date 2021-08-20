# PostgreSQL 함수 작성법
> 함수를 작성할 일이 많아 정리해보는 함수 작성법

## CREATE OR REPLACE
함수를 작성할 때는 기본적으로 `CREATE FUNCTION [함수명](인자)`을 사용할 수 있다.   
다만, 함수를 작성하고 수정할 일이 꽤나 있기 때문에, `CREATE OR REPLACE FUNCTION [함수명](인자)`를 사용하는 것이 더 적합하다고 생각한다.

### IN 인자
```
CREATE OR REPLACE FUNCTION add(x INTEGER, y INTEGER)
    RETURNS INTEGER 
AS
$$ 
BEGIN
    RETURN x+y;
END; 
$$
LANGUAGE PLPGSQL; -- RETURNS 다음에 위치하는 등, 위치 바껴도 상관 x
```

* 명시하지 않으면 기본적으로 인자는 IN 인자
* IN 인자는 함수에 값을 전달해주는 목적의 인자.

## OUT 인자
```
CREATE OR REPLACE FUNCTION get_max(
    x INTEGER, 
    y INTEGER,
    OUT max INTEGER)
    RETURNS INTEGER 
AS
$$ 
BEGIN
    max := GREATEST(x, y);
END; 
$$
LANGUAGE PLPGSQL;
```
* 실행 : `SELECT * FROM get_max(1, 100);` -> `max : 100` 반환
* RETURNS 구문을 사용하지 않고, `OUT`으로 지정된 인자에 값을 저장해 반환한다.

## INOUT 인자
```
CREATE OR REPLACE FUNCTION get_max_min(
    INOUT x NUMERIC, 
    INOUT y NUMERIC)
AS 
$$ 
DECLARE
    z NUMERIC := x;
BEGIN
    x := GREATEST(y, z);
    y := LEAST(y, z);
END; 
$$
LANGUAGE PLPGSQL;
```
* x, y에 각각 값을 받고 -> 함수 내에서 입력한 인자의 최대, 최소를 x, y에 재할당해 반환
* 실행 : `SELECT * FROM get_max_min(5, 500);` -> `x : 500, y : 5` 반환