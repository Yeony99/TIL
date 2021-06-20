# EmailJS 사용법
웹 포트폴리오를 만들며 내 포트폴리오 사이트에서 직접 메일을 보낼 수 있는 기능을 추가하기 위해 emailJS를 사용해보기로 결정.

## EmailJS란
자바스크립트를 사용해 메일을 보내주는 API이다. jsp 등 서버가 돌아가지 않더라도 보낼 수 있다.   

## 사용
### 가입과 연동
사용하려면 회원가입을 해야 한다.   
회원가입 후에 로그인하면 Email Services 에서 Add New Service를 클릭한다.
![start](https://user-images.githubusercontent.com/76241233/122646611-f6a1e900-d15a-11eb-8743-87555aff9dc8.png)

나는 Personal Service로 Gmail을 선택했다.   
메일 선택후 Connect Account를 클릭하면 이런 창이 뜬다.   

![connect](https://user-images.githubusercontent.com/76241233/122646776-f3f3c380-d15b-11eb-8291-182633ca7ea8.png)

연동한 계정에 EmailJS에서 메일을 확인메일을 보냈다.   
![confirm](https://user-images.githubusercontent.com/76241233/122646845-43d28a80-d15c-11eb-9713-235a521a3bab.png)

Create Service를 눌러주면 성공적으로 서비스가 만들어졌다고 알림이 뜬다.    

### 설치
나는 npm으로 의존성을 주입하고 import 하는 방식을 선택했다. 
API를 사용할 page에 작성하였다.
![integration](https://user-images.githubusercontent.com/76241233/122646992-ff93ba00-d15c-11eb-899b-5c28652aa01b.png)

메일받을 템플릿도 지정할 수 있다.

![template](https://user-images.githubusercontent.com/76241233/122666697-e71db100-d1e9-11eb-9b9e-da93f53f74b1.png)



그리고 EmailJS 공식 사이트에서 설명한 대로 아래 코드를 내가 사용할 페이지에 작성했다   
개인이 적당히 변형하면 될 듯 하다.
```
import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
```

테스트 메일을 전송해보았다.

![test](https://user-images.githubusercontent.com/76241233/122666736-1e8c5d80-d1ea-11eb-8e0f-54f1d46c8869.png)

## 참고
[EmailJS in React](https://www.emailjs.com/docs/examples/reactjs/)