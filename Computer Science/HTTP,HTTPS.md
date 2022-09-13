## HTTP(Hyper Text Tranfer Protocol)

**서버 / 클라이언트 모델을 따라 데이터를 주고 받기 위한 프로토콜입니다.**

HTTP는 인터넷에서 하이퍼 텍스트를 교환하기 위한 통신 규약으로, 80번 포트를 사용하고 있습니다. 따라서 HTTP 서버가 80번 포트에서 요청을 기다리고 있으며, 클라이언트는 80번 포트로 요청을 보내게 됩니다.

> **프로토콜**은 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계입니다.
>
> 기기 간 통신은 교환되는 데이터의 형식에 대해 상호 합의를 요구합니다. 이런 형식을 정의하는 규칙의 집합을 프로토콜이라고 합니다.

HTTP는 애플리케이션 레벨의 프로토콜로 TCP/IP 위에서 작동합니다. HTTP는 상태를 가지고 있지 않는 무상태(Stateless) 프로토콜이며 Method, Path, Version, Headers, Body 등으로 구성됩니다.

### HTTP 1.0 과 HTTP1.1 차이

1. 커넥션 유지
2. 호스트헤더
3. 강력한 인증 절차

## HTTPS(**H**ypertext **T**ransfer **P**rotocol over **S**ecure socket layer)

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

### Reference

https://developer.mozilla.org/ko/docs/Web/HTTP/Overview

https://developer.mozilla.org/ko/docs/Glossary/https

https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko
