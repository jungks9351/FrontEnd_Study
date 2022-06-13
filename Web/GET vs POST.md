GET 과 POST 는 HTTP 메서드로서 GET은 멱등성을 가지고, POST는 멱등성을 가지지 않습니다.

GET은 요청만을 위한 메서드로 여러번 요청을 하여도 서버의 리소스의 데이터가 변경되지 않고 응답을 받습니다. 필요한 데이터는 Body에 담지 않고 쿼리스트링을 통해 요청하여 응답 받습니다.

POST는 생성 및 수정을 위한 메서드로 요청에 필요한 데이터를 Body에 담아 전송하여 서버의 리소스를 새로 생성하거나 변경할 수 있습니다.

> 멱등성 : 여러번 연산을 하여도 결과가 달라지지 않는 성질