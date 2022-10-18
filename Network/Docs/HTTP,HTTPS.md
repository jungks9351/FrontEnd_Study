## HTTP(Hyper Text Tranfer Protocol)

**클라이언트와 서버 사이에서 데이터를 주고 받기 위한 요청/응답 프로토콜입니다.**

> **프로토콜**은 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계입니다.
>
> 기기 간 통신은 교환되는 데이터의 형식에 대해 상호 합의를 요구합니다. 이런 형식을 정의하는 규칙의 집합을 프로토콜이라고 합니다.

HTTP는 인터넷에서 하이퍼 텍스트를 교환하기 위한 통신 규약으로, 80번 포트를 사용하고 있습니다. 따라서 HTTP 서버가 80번 포트에서 요청을 기다리고 있으며, 클라이언트는 80번 포트로 요청을 보내게 됩니다.

클라이언트인 웹 브라우저가 HTTP를 통하여 서버로부터 웹페이지(HTML)나 데이터를 요청하면, 서버는 이 요청에 응답하여 필요한 정보를 해당 사용자에게 전달합니다.

### HTTP 특징

- **클라이언트 서버 구조**

  - 클라이언트의 요청이 있을 때 서버가 응답하는 단방향 통신입니다.
  - HTTP 메시지는 HTTP 클라이언트와 HTTP 서버에 의해 해석이 됩니다.

- **TCP/IP를 이용하는 응용 프로토콜**

  - 컴퓨터와 컴퓨터간에 데이터를 전송 할 수 있도록 하는 장치로 인터넷이라는 거대한 통신망을 통해 원하는 데이터를 주고 받는 기능을 이용하는 응용 프로토콜입니다.

- **무상태(stateless) 프로토콜**

  - 서버는 클라이언트의 상태를 저장하지 않습니다.
  - 애플리케이션 레벨의 프로토콜로 TCP/IP 위에서 작동하며 HTTP는 상태를 보존하지 않는 무상태(Stateless) 프로토콜입니다.
  - 무상태 프로토콜이기 때문에 로그인한 상태를 서버에 유지할 수 없습니다. 이를 해결 하기 위해서는 웹 쿠키나 서버 세션 또는 웹스토리지를 사용하여 로그인 상태를 유지할 수 있습니다.

- **비 연결성(Connectionlsee)**
  - HTTP는 실제로 요청과 응답을 주고 받을 때만 연결을 유지하고 응답을 받게되면 TCP/IP 연결을 끊어 연결을 유지하지 않는 비 연결성인 특징을 가지고 있어 요청/ 응답 방식으로 동작합니다.
  - 이를 통해 최소한의 자원으로 서버 유지를 가능하게 합니다.
  - 서버와의 네트워크의 연결이 끊기므로 새로운 자원에 대한 요청과 응답을 요청할 때는 TCP/IP 연결을 새로 맺어야 하므로 3-way handshacke에 따른 시간이 추가됩니다.
  - http1.1 이상에서는 지속 연결을 가능하게 해줍니다. 연결이 이루어지고 난 뒤 각각의 자원들을 요청하고 모든 자원에 대한 응답이 돌아온 후에 연결을 종료합니다.

### HTTP 동작 방식

HTTP는 애플리케이션 레벨의 프로토콜로 TCP/IP 위에서 동작합니다. HTTP는 상태를 가지고 있지 않는 무상태(Stateless) 프로토콜이며 Method, Path, Version, Headers, Body 등으로 구성됩니다.

#### HTTP Request Message

![HTTP Request Message](https://hackyboiz.github.io/2022/01/19/ogu123/http-message-format/image1.png)

1. Request Line
2. Request Header
3. Request Message Body

- **Request Line**

  - 사용자가 서버에 요청 시 수행하고자 하는 동작인 Method(GET), 요청하는 앱 리소스의 경로인 Path(/doc/test.html), 사용하는 HTTP의 버전을 나타내는 Version(HTTP/1.1)으로 구성됩니다.

- **Request Headers**

  - 서버에 추가 정보를 전달하는 데이터 부분입니다.
  - Host, Cookie, User-Agent, Referer 등 Header는 상황에 따라 더 많은 데이터를 전송할 수 있습니다.
  - 각 헤더 항목 줄에는 ‘이름: 값’ 형식의 구성을 합니다. 그리고 하나의 항목에 복수의 값을 가질 수 있습니다.
  - **A blank line**는 Header 부분의 끝을 표시하기 위한 공백입니다.

- **Request Message Body**
  - 클라이언트가 입력한 데이터를 서버에 전달 시킬 데이터를 담는 부분입니다.
  - GET Method는 항상 비어있는 채로 전달됩니다.
  - GET Method를 사용한다면 헤더나 URI에 담아 보냅니다.

#### HTTP Response Message

![HTTP Response Message](https://hackyboiz.github.io/2022/01/19/ogu123/http-message-format/image2.png)

1. Status Line
2. Response Headers
3. Response Message Body

- **Status Line**
  - HTTP Version(HTTP/1.1), 사용자의 요청에 대한 서버의 응답 코드인 상태코드(200 OK)로 구성됩니다.
- **Response Headers**

  - Server, Set-Cookie, Content-Type, Content-Length 등 사용자와 상호작용하기 위한 데이터를 담는 부분으로 사용됩니다.
  - A blank line은 Header 부분의 끝을 표시하기 위한 공백입니다.

- **Response Message Body**
  - 서버의 응답 부분으로 클라이언트가 요청한 리소스 또는 요청한 작업상태에 대한 일부 정보를 포함합니다.

### HTTP 1.0 과 HTTP1.1 차이

1. 커넥션 유지
2. 호스트헤더
3. 강력한 인증 절차

## HTTPS(Hypertext Transfer Protocol over Secure socket layer)

HTTPS는 HTTP 프로토콜의 암호화된 버전입니다. 클라이언트와 서버 간의 모든 커뮤니케이션을 암호화하기 위하여 SSL이나 TLS를 사용합니다. 이 커넥션은 클라이언트가 민감한 정보를 서버와 안전하게 주고 받도록 해줍니다. Ex) 금융 활동, 쇼핑

HTTPS는 HTTP와 다르게 443번 포트를 사용하며, 네트워크 상에서 중간에 제3자가 정보를 볼수 없도록 암호화를 지원하고 있습니다.

> Secure Sockets Layer(SSL)
>
> Secure Sockets Layer(SSL)는 클라이언트와 서버 간의 안전한 링크를 통해 송수신되는 모든 데이터를 안전하게 보장하는 과거의 보안 표준 기술

> 전송 계층 보안 (TLS)
>
> SSL은 TLS의 과거 명칭이다.
>
> 이전에 SSL로 알려진 **Transport Layer Security (TLS)**는 어플리케이션들이 네트워크 상에서 안전하게 통신하기 위해 사용된 프로토콜이며, 이메일, 웹 브라우징, 메세징, 그리고 다른 프로토코들의 감청을 통한 정보의 변형을 방지한다. SSL과 TLS 모두 네트워크 상에서 보안을 제공하는 cryptographic 프로토콜을 사용한 클라이언트 / 서버 프로토콜이다. 서버와 클라이언트가 TLS로 통신을 할때, 어떠한 제 3자도 메세지를 변형시키거나 감청할 수 없도록 한다.

## HTTP 와 HTTPS 의 차이점

가장 큰 차이점 은 보안, 검색 우선순위입니다.

HTTPS는 SSL를 사용하여 사용자가 사이트에 제공하는 정보를 암호화 합니다.

동일한 키워드의 페이지 중에서 SEO에 있어 https 기반 사이트가 우선 순위로 노출됩니다.

> SEO 검색엔진에서 찾기 쉽도록 사이트를 개선하는 프로세스

### 참고

- https://ko.wikipedia.org/wiki/HTTP

- https://developer.mozilla.org/ko/docs/Web/HTTP/Overview

- https://developer.mozilla.org/ko/docs/Glossary/https

- https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko

- https://hackyboiz.github.io/2022/01/19/ogu123/http-message-format/
