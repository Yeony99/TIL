# selenium 사용법

## python 설치
1. www.python.org 에서 다운로드.
2. (윈도우) **Add Python [version] to Path** 체크
3. `cmd> python` 입력해 설치 여부 확인 

## selenium 설치
vscode에서 실행한다.
1. test.py 파일을 생성
2. 터미널에 `pip install selenium` (conda 환경일 경우에는 conda install selenium)
3. chrome 버전 확인 > chrome://version/
4. 3번의 버전에 맞게 [selenium webdriver (크롬)](https://sites.google.com/a/chromium.org/chromedriver/downloads) 설치

## selenium import
```
import selenium
from selenium import webdriver
from selenium.webdriver import ActionChains

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait

URL = '크롤링할 URL'

driver = webdriver.Chrome(executable_path='chromedriver')
driver.get(url=URL)
```

디버깅을 실행하면 해당 URL 창이 열린다.
