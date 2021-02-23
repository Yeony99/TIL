# 자바로 채팅 만들기 chatting program in JAVA

## 소스 코드
```
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class ChatForm extends JFrame implements Runnable, ActionListener {
	private static final long serialVersionUID = 1L;

	private JTextField tf = new JTextField();
	private JTextArea ta = new JTextArea();

	
	
	public ChatForm() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		ta.setEditable(false);
		JScrollPane sp = new JScrollPane(ta);
		add(sp, BorderLayout.CENTER);
		
		tf.addActionListener(this);
		add(tf, BorderLayout.SOUTH);
		
		setTitle("Chatting");
		setSize(500, 500);
		setResizable(false);
		setVisible(true);
	}
	public static void main(String[] args) {
		new ChatForm();
	}
	
	@Override
	public void run() {
		
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource()==tf) {
			String s = tf.getText().trim();
			if(s.length()==0) {
				return;
			}
			
			try {
				//전송
				ta.append("sent] "+s+"\n");
				ta.setCaretPosition(ta.getDocument().getLength()); //스크롤바 자동 이동
				
				tf.setText("");
				tf.requestFocus(); //깜박거리는 포커스
				
				
			} catch (Exception e2) {
			}
		}
	}
}

```

## 실행 결과
<img src="https://user-images.githubusercontent.com/76241233/108857831-d5a70c80-762e-11eb-91d0-8d0fce9b371e.png" width="50%" height="50%"/>
