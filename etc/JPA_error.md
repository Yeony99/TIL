# JPA ERROR

## Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
* Run Configurations 에 debug가 없어서 생기는 문제
* 해결 : application.properties에 debug 설정 추가
```
logging.level.org.springframework=debug
logging.level.org.springframework.web=debug
```
