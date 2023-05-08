# NextJS를 학습해보는 프로젝트입니다.

## 설치 및 구동

#### nextjs 프로젝트 생성
`npx create-next-app@lastest`

#### nextjs 타입스크립트 버전으로 프로젝트 생성
`npx create-next-app@lastest --typescript`

#### 프로젝트 구동
`npm run dev`
// 구동 후 동작중인 페이지 정보가 나온다 http://localhost:3000

## framwork와 library의 차이
- 라이브러리: 내가 사용하고 싶은 것들을 가져다가 개발하는 코드에 직접 적용하는 것들을 말한다. (stlyed-components, framer 등)
- 프레임워크: 작성하는 구조가 정해져 있다. 그 구조안에 개발자의 코드를 불러온다. 규칙에 맞춰 작성하면 페이지가 동작하는 형태들을 말한다.(next, gatsby)

`Inversion of Control`(통제의 역전)이라고 불리며 누가 제어하는냐에 차이가 있다.

## NextJS에서의 페이지 동작 원리
처음 프로젝트 생성시 제공되는 구조에서 pages부분에 원하는 페이지들을 생성하면 알아서 라우팅이 되는 걸 볼 수 있다.

말그대로 pages폴더 페이지로 사용될 파일명을 읽고 그 파일명을 기준으로 url을 만든다. index로 만들면 기본 페이지가 생성되고 about을 만들면 about이라는 url이 생기면서 해당부분에 페이지를 작성하면 된다.

react에서는 이런부분을 작성하기 위해 React Router Dom을 설치하고 구조를 만들고 App에 넣어주고 ~~ 등등 처리를 해줘야하지만 프레임워크인 nextjs에서는 생성만으로 위의 행동이 완료된다.

최종 정리: 
1. pages디렉토리에 생성한 파일명으로 url이 생성된다.
2. 생성한 파일의 컴포넌트 중 export default처리가 필요하며 컴포넌트명은 전혀 영향을 받지 않는다.
3. react를 작성한다고 import from "react"를 하지 않아도 된다. 단, useState, useEffect와 같은 react 제공 메소드들을 사용할때는 import를 해줘야한다.

## NextJS의 장점
nextjs의 장점 중 하나는 작성한 앱의 페이지들이 미리 렌더링이 된다는 점이다.
react app의 경우 client-side-render를 한다.
인터넷 속도가 극한으로 느린경우 흰색화면을 보고 있고 구조도 보지 못해 페이지가 있긴한건지 의문이 들 수도 있다.

*client-side-render: 브라우저가 유저가 보고있는 페이지의 UI를 javascript를 통해 만드는 모든것들을 말한다. 인터넷속도가 좋지 않거나 자바스크립트 사용 중지 모드라면 페이지가 보이지 않게 된다.

반면 nextjs의 경우에는 자바스크립트를 사용안하거나 느린속도의 네트워크이더라도 최소한 html의 구조정도는 볼 수 있다. 어딘가에서 api형태로 데이터를 불러와야하고 그것을 통해 그려야하는 작업이 존재한다면 똑같이 느린부분은 있을수 있겠지만, 최소한 뼈대의 구조정도는 보고 있을 수 있다는 말이다.
이런 것을 pre-rendering을 한다고 말하는데, useState와 같은 react메소드를 사용하더라도 초기값은 존재하기때문에 해당 초기값을 기준으로 html형태를 만들어준다.

이후 로드가 다되어서 useState를 변경하는 행위를 하면 그때서야 react에게 데이터 변화처리를 전송해주고 react앱이 된다.
next는 react를 백엔드에서 동작시켜서 미리 페이지를 만들어주는데, 컴포넌트들을 미리 render시킨다.
렌더링이 끝나면 HTML들이 만들어지고 그것들을 페이지에 넣어주면서 자바스크립트가 없거나 react가 로드되지 않더라도 기본적인 컨텐츠를 볼 수 있게 도와준다.

2. seo에 좋아서 구글같은 검색엔진에 노출시키기 좋다.
*SEO: 검색엔진 최적화를 뜻한다. 내 사이트가 관련된 키워드를 검색을하면 상위에 노출시킬수 있도록 컨텐츠를 최적화시키는 방식을 말한다.

## Routing
Nextjs에서는 네비게이팅시 Link를 통해 이동한다.
a태그로 작성하게되면 페이지는 새로고침된다. 이렇게 작성되는건 클라이언트 사이드 네비게이션으로 동작되는게 아니다.

* Next js v13버전부터 Link>a방식에서 Link단독 사용으로 변경 됨.
https://nextjs.org/docs/messages/no-html-link-for-pages

13이하 버전이라면 a태그를 Link안에 생성해서 처리해야한다.
```jsx
<Link href="/">
    <a className="hi">Home</a>
</Link>
```

### useRouter Hook
useRouter hook은 next에 포함된 훅이다.
라우팅된 네비게이터의 현재 정보를 알려준다.