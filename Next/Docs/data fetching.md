# Next.js data fetching

## getStaticProps

Next.js는 빌드 시 에서 반환된 props를 사용하여 이 페이지를 미리 렌더링합니다

static file로 빌드되기 때문에 이후 수정이 불가능 합니다.

호출 시 마다 매번 data fetch를 하지 않으니 getServerSideProps보다 성능면에서 좋습니다.

SSG 개념입니다.

- 페이지를 렌더링하는 데 필요한 데이터는 사용자의 요청에 앞서 빌드 시 사용할 수 있습니다.

- 데이터는 헤드리스 CMS에서 가져옵니다.

- 페이지는 사전 렌더링되어야 하며(SEO의 경우) 매우 빨라야 합니다.

- getStaticProps생성 HTML및 JSON파일, 둘 다 성능을 위해 CDN에 의해 ​​캐시될 수 있습니다.

- 데이터는 공개적으로 캐시될 수 있습니다(사용자별이 아님). 이 조건은 미들웨어를 사용하여 경로를 다시 작성하여 특정 상황에서 우회할 수 있습니다

## getServerSideProps

Next.js는 에서 반환된 데이터를 사용하여 각 요청에서 이 페이지를 미리 렌더링합니다

매 요청마다 호출되므로 성능은 getStaticProps보다 떨어지지만 내용을 언제든 동적으로 수정이 가능합니다.

SSR 개념입니다.

- 먼저 데이터가 없는 페이지를 즉시 표시합니다. 페이지의 일부는 정적 생성을 사용하여 미리 렌더링할 수 있습니다. 누락된 데이터에 대한 로드 상태를 표시할 수 있습니다.

- 그런 다음 클라이언트 측에서 데이터를 가져와 준비가 되면 표시합니다.

### SSG vs SSR

Next.js 는 브라우저에 렌더링 할 때 기본적으로 pre-redering(사전 렌더링)을 한다고 소개합니다.

- pre-rendering이란 각 페이지들을 사전에 미리 HTML 문서로 생성하여 가지고 있는 것입니다.

- Next.js에서의 pre-rendering이 default 값으로 SSG가 적용되고 있을 뿐입니다.

- SSR또한 엄밀히 말하면 SSG에 속한다고 말할 수 있습니다.

#### SSG

HTML을 빌드 타임에 각 페이지별로 생성하고 해당 페이지로 요청이 올 경우 이미 생성된 HTML 문서를 반환합니다ㅏ.

#### SSR

요청이 올 때 마다 해당하는 HTML 문서를 그때 그때 생성하여 반환합니다.

## 참고

- https://nextjs.org/docs/basic-features/data-fetching/overview
