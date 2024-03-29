## TCP/IP(Transmission Control Protocol/Internet Protocol)

TCP/IP는 인터넷의 기본 통신 언어입니다.

TCP/IP는 데이터가 의도된 목적지에 닿을 수 있도록 보장해주는 통신 규약입니다.

TCP/IP는 이름에서 알 수 있듯 패킷 통신의 전송 트로토콜 TCP 와 인터넷 프로토콜(IP)로 이루어져 있습니다. 인터넷으로 디바이스를 연결하는 네트워크 프로토콜의 집합이며 개별적인 네트워크 프로토콜로 사용될 수 있습니다.

IP는 패킷 전달 여부를 보증하지 않고, 패킷을 보낸 순서와 받는 순서가 다를 수 있습니다.<br/>
TCP는 IP 위에서 동작하는 프로토콜로 데이터의 전달을 보증하고 보낸 순서대로 받게 해줍니다.<br/>
HTTP, FTP, SMTP 등 TCP를 기반으로 한 많은 수의 애플리케이션 프로토콜들이 IP위에서 동작하기 때문에 TCP/IP로 부르기로 했습니다.

TCP/IP를 사용하면 한 컴퓨터가 데이터 패킷을 컴파일하고 올바른 위치로 전송하여 인터넷을 통해 다른 컴퓨터와 통신할 수 있습니다.

> 패킷
>
> 데이터를 일정한 크기로 자른 단위로 인터넷에서 정보를 전달하는 단위

## TCP(Transmission Control Protocol)

최상위 계층인 TCP는 많은 양의 데이터를 가져 와서 패킷으로 컴파일 한 다음 동료 TCP 계층에서 수신하도록 전송하여 패킷을 유용한 정보/데이터로 바꾸는 역할을 합니다.

TCP는 IP 위에서 동작하는 프로토콜로 데이터의 전달을 보증하고 보낸 순서대로 받게 해줍니다.

TCP는 전달 받은 패킷을 재조립하고 패킷에 손상이 있거나 손실된 패킷을 꼼꼼히 확인하고 재전송을 요청하는 패킷을 전송하여 재전송 받습니다.

## IP(Internet Protocol)

IP는 인터넷에서 컴퓨터의 위치를 찾아서 데이터를 전송하기 위해 지켜야 할 규약입니다.

전 세계 컴퓨터가 인터넷을 하기 위해서는 서로의 정체를 알 수 있도록 특별한 주소를 부여 받았는데 이 주소를 IP주소라고 합니다.

IP는 4개의 숫자로 구성되며 숫자의 크기에 따라 IPv4(32비트, 각 숫자 1바이트), IPv6(128비트, 각 숫자 4바이트)로 나뉩니다. 일반적으로 IPv4는 10진수로 표현하며 각 가리는 "."으로 구분하고, IPv6는 각 자리를 4자리 16진수로 표현하며 각자리는 ":"로 구분합니다.

맨 아래 계층인 IP는 올바른 목적지를 찾는 패킷 GPS 역할을 합니다.

IP는 패킷을 최대한 빨리 목적지로 보내는 역할을 합니다. 패킷의 순서가 뒤바뀌거나 일부가 누락되더라도 크게 상관하지 않고 보내는데에 집중을 합니다.

지도의 관점에서 IP를 생각하면 IP 계층은 고속도로에서 운전하는 자동차와 마찬가지로 각 자동차(패킷)는 도로 표지판(게이트웨이 컴퓨터)을 통과하여 패킷을 올 바른 목적지(IP 주소)로 전달하는 역할을 합니다.

## TCP/IP 의 4계층

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd64HML%2FbtqNiWKw4nX%2FJW5zNwWZ4KP53MAhwWuOIK%2Fimg.png)

TCP/IP가 많이 사용되면서 흔히 사용되던 OSI 7계층을 더욱 추상화 한 TCP/IP 4계층이 등장했습니다.

**1. 네트워크 엑세스 계층(Network Access Layer)**

물리계층, 데이터 링크 계층

**2. 인터넷 계층(Internet Layer)**

네트워크 계층

**3. 전송 계층(Transport Layer)**

전송 계층

**4. 응용 계층(Application Layer)**

세션 계층, 표현 계층, 응용 계층

### 1. 네트워크 액세스 계층(Network Access Layer)

- OSI 7계층의 물리계층과 데이터 링크 계층에 해당

- TCP/IP 패킷을 네트워크 매체로 전달하는 것과 네트워크 매체에서 TCP/IP 패킷을 받아들이는 과정을 담당

- 에러 검출 기능(Detecting errors), 패킷의 프레임화(Fraimg packets)

- 네트워크 접근 방법, 프레임 포맷, 매체에 대해 독립적으로 동작하도록 설계.
  물리적인 주소로 MAC을 사용

- LAN, 패킷망, 등에 사용됨

### 2. 인터넷 계층(Internet Layer)

- OSI 7계층의 네트워크 계층에 해당

- 어드레싱(addressing), 패키징(packaging), 라우팅(routing) 기능을 제공

- 네트워크상 최종 목적지까지 정확하게 연결되도록 연결성을 제공

- 프로토콜 종류 – IP, ARP, RARP

### 3. 3계층 전송 계층(Transport Layer)

- OSI 7계층의 전송 계층에 해당

- 애플리케이션 계층의 세션과 데이터그램(datagram) 통신서비스 제공

- 통신 노드 간의 연결을 제어하고, 신뢰성 있는 데이터 전송을 담당

- 프로토콜 종류 – TCP, UDP

### 4. 응용 계층(Application Layer)

- OSI 7계층의 세션 계층, 표현 계층, 응용 계층에 해당

- 프로그램(브라우저)이 직접 상호 작용하는 레이어. 데이터를 처음으로 받는곳

- 다른 계층의 서비스에 접근할 수 있게 하는 애플리케이션을 제공

- 애플리케이션들이 데이터를 교환하기 위해 사용하는 프로토콜을 정의

- TCP/UDP 기반의 응용 프로그램을 구현할 때 사용

- 프로토콜 종류 – FTP, HTTP, SSH

## 참고

- https://coding-factory.tistory.com/613
- https://brunch.co.kr/@wangho/6
