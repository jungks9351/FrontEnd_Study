# React-Query

React-Query는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용됩니다.

## React-Query 사용 이유

저는 Redux와 Redux-Saga를 활용한 전역상태 관리에 익숙했습니다.

Redux를 사용할 경우 서버의 상태 값을 가져오기 위한 로직을 store 내부에 개발합니다. 미들웨어 Redux-Saga, Redux-Thunk등 을 사용하여 비동기 처리를 하는데 Redux로 관리할 경우 클라이언트의 상태와 서버의 상태과 의존성을 가지는 로직을 짜게 됩니다. 의존성에 의해 많은 버그를 유발할 수 있었습니다.

React Query를 사용하면 클라이언트 상태와 서버 상태를 분리하여 관리할 수 있어서 의존성을 분리하여 상태를 더욱 쉽게 관리할 수 있었습니다.

## React-Query 사용 장점

- 캐싱 (제일 어려운 부분...staleTime, cacheTime)
- 데이터(QueryKey)에 대해 update(Mutation)를 하면 자동으로 useQuery를 다시 수행합니다.
  - 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 GET하는 api를 자동으로 실행합니다. (invalidateQueries)
- 데이터가 오래 되었다고 판단되면 다시 서버에 요청합니다.(invalidateQueries, staleTiem)
- 동일 데이터 여러번 요청하면 한번만 요청합니다.
  - 옵션에 따라 중복 호출 허용 시간 조절 가능합니다.(staleTime, cacheTime)
- 페이지네이션 (Paginated Quries)
- 무한 스크롤 (Infinite Queries)
- 비동기 과정을 선언적으로 분리 관리할 수 있었습니다.
- react hook과 사용하는 구조가 비슷하여 커스텀 훅으로 관리하였습니다.

## 참고

- https://tanstack.com/query/v4/docs/overview
- https://github.com/jungks9351/Cheers-Front
