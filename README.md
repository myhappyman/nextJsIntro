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


## NestJs에서 style처리하기
1. 직접 style props를 설정하기
제일 직관적이지만... 구리다.

2. modules 사용하기
2-1. 적용방법
파일명.module.css패턴으로 작성한다.
>  xxxx.module.css

작성한 파일을 적용할 파일에서 import해주고 적용할 컴포넌트 props에 `className={styles.클래스명}` 형태로 적용해준다.

2-2. 2개 이상의 속성을 동시에 적용하기
하나의 컴포넌트에 2개이상의 속성을 넣어줄때는 `
className={`${styles.클래스명} ${stlyes.클래스명2}`}`
위 형태로 넣어준다.

또는 아래와같이 배열형태로 만들고 join("") 메소드를 활용하여 강제로 만드는 방법도 있다.
`className=[styled.link, styled.active].join(" ") //공백 한칸을 꼭 띄우자!`

2-3. styled jsx
styled jsx는 NestJs의 고유의 방법이다.

stlye태그를 열고 jsx라는 props를 준다.
내부에는 {``} 백틱을 열고 백틱 내부에 css를 정의한다.
```JSX
<style jsx>
{`
    nav{
        background-color: tomato;
    }
    Link, a{
        text-decoration: none;
    }
`}
</style>
```

style jsx문법은 해당 컴포넌트 내부에만 영향을 주고 외부의 컴포넌트에는 영향을 주지 않는다.

2-4. global style처리하기
styled에 jsx와 global키워드를 추가하면 된다.
하지만 해당 방식도 다른 컴포넌트 영역으로 넘어가게되면 해당 전역 스타일링이 풀리게 되는 반쪽짜리 기능이 된다.
이럴 때 페이지별로 복붙하고 단순노동을 막아줄 방법이 있는데, _app.js이다.


## _app.js
pages디렉토리에 "_app.js"를 생성할 수 있다.
무조건 해당 이름이어야 한다.
다른 페이지를 렌더링하기전에 먼저 App을 보기 위함이다.
그러고 나서 다음 렌더링할 페이지를 읽는다.

별도로 설정없이도 Next.js는 저런 명명규칙으로 설정해주면 알아서 _app.js를 읽고 시작하게 된다.

메인 메소드의 props들 중 Component, pageProps가 존재한다.
이것들은 Nextjs에서 정해진 규칙이다.

### typescript사용시
_app.tsx로 생성하고 아래와 규칙으로 사용한다.
```tsx
import type { AppProps } from 'next/app'

export default function CustomApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <span>공통으로 들어간다!</span>
      <Component {...pageProps} />
    </>
  );
}
```


## Layout Pattern
NestJS를 사용하는 많은 사용자들이 사용하는 기법이다.
```JSX
//Layout.tsx라는 파일을 components에 작성한다.
//NavBar는 공통으로 사용할 메뉴이다.
import NavBar from "./NavBar";

export default function Layout({children}:React.PropsWithChildren){
    return (
    <>
        <NavBar />
        <div>{children}</div>
        <style jsx global>{`
            a{
                text-decoration: none;
                color: #fff;
            }
        `}</style>
    </>
    );
}
```

```JSX
//_app.tsx에서 Layout을 연결하고 모든 컴포넌트를 children으로 넘긴다.
import Layout from "../components/Layout";
import type { AppProps } from 'next/app';

export default function CustomApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}
```
실질적으로 추가하고 싶은 컴포넌트들은 레이아웃 컴포넌트를 통해 추가한다. _app.tsx를 늘리고싶지 않기 때문이다.


## Head Component
`import Head from "next/head";`

Head 컴포넌트는 헤더와 관련된 속성을 설정 할 수 있게 도와준다. react의 react-helmet과 비슷한 느낌이다.


## public directory
public 디렉토리의 이미지 파일과 같은 리소스를 접근할때는"/" 부터 접근해서 사용하면 된다.
`ex) <img src="/vercel.svg" /> `


## NextJS에서 API key와 같은 민감데이터 숨기기
우린 rest api와 같은 형태로 데이터를 넘기게 되면 url요청 정보 형태에 따라서 주소값 자체에 api키와 같은 민감데이터를 넣게 되는 경우가 있다.

이런 경우 하루 사용량 제한이 있거나 유료 서비스라면 문제가 발생하게된다. 타인에 의해 원하지 않게 서비스가 사용되어서 사용량이 초과되는 경우가 있을 수 있기 떄문이다.

이럴때 요청 정보를 숨기는 방법이 있는데 next.config.js를 설정하면 된다.

### <font color="orange">-next.config.js</font>
JSON형태의 설정파일이 아닌 Node.js모듈이다.
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig
```

추가적으로 object안에 설정을 하면 되는데, 아래와 같은 옵션들이 추가가 가능하다.


1. redirects<br/>
source, destination, permanents 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수이다.
<ul>
  <li>
    <b>source : @string</b><br/>
    해당 서버로 요청하는 url 경로 패턴 <i>(request path)</i>
  </li>
  <li>
    <b>destination: @string</b><br/>
    라우팅하려는 경로 <i>(redirect path)</i>
  </li>
  <li>
    <b>permanent: @boolean</b><br/>

    true: 클라이언트와 search엔진에 redirect를 영구적으로 cache하도록 308 status code를 사용
    false: 일시적으로 cache되지 않는 307 status code를 가진다.
  </li>
</ul>


<hr/>
<b>사용예시</b>

```javascript
async redirects(){
  return[
    {
      source: "/old-blog/:path*",
      destination: "/new-sexy-blog/:path*"
    }
  ]
}
```

<font color="red">설정이 끝나면 꼭 서버 재시작을 해준다.</font>

브라우저 url입력 : localhost:3000/<font color="blue">old-blog</font>/1234/comments/ttt <br/>
-> redirects처리  <br/>
브라우저 변경 url: localhost:3000/<font color="red">new-sexy-blog</font>/1234/comments/ttt

위의 모습으로 자동으로 redirect 처리 된다.
<hr/>

2. rewrites <br/>
redirects와 비슷하지만 url이 변경되지 않는다.
요청 경로를 파악하고 destination에 설정된 매핑 주소로 요청해준다.
사용자에게 destination의 정보를 마스크처리하여 정보를 은닉시킬수 있다.
<ul>
  <li>
    <b>source : @string</b><br/>
    해당 서버로 요청하는 url 경로 패턴 <i>(request path)</i>
  </li>
  <li>
    <b>destination: @string</b><br/>
    매핑 경로이다. (사용자는 볼 수 없다) <i>(real request path)</i>
  </li>
</ul>

<hr/>
<b>사용예시</b>

.env
```.env
API_KEY="실제로 동작할 API키"
```

next.config.js
```javascript
//API_KEY도 숨기기 위해 env에 설정한다.
//gitignore에 꼭 추가해서 올라가지 않도록 한다.
const API_KEY = process.env.API_KEY;

async rewrites(){
  return [
    {
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }
  ]
}
```

index.js
```typescript
const [movies, setMovies] = useState<[]>();

useEffect(() => {        
    (async() => {
        const response = await fetch("/api/movies");
        const {results} = await response.json();
        setMovies(results);
    })();
}, []);
```

브라우저 url입력 : localhost:3000<font color="blue">/api/moives</font> <br/>
-> mapping처리  <br/>
실제로 요청하는 url: <font color="red">https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}/<font>

위의 모습으로 자동으로 redirect 처리 된다.
<hr/>

## getServerSideProps
NextJS에서 SSR방식으로 동작할 수 있게 해주는 function이다.
이름을 마음대로 변경할 수 없다.
사용하고자 하는 컴포넌트에서 해당 함수를 작성해준다.
_app.tsx의 pageProps에 props형태로 데이터를 넘겨주어 실 사용하는 컴포넌트에서 props를 받아와서 서버에서 처리된 값을 가져올 수 있다.
SEO가 필요한 사이트나 페이지의 경우 해당 방식을 채택하면 된다. -> 서버에서 처리된 데이터를 받아서 UI를 이미 그려놓은 HTML을 받을 수 있기떄문이다.

ex)
```typescript
export async function getServerSideProps(){
    const {API_KEY} = process.env;
    const {results} = await (await fetch(`http://localhost:3000/api/movies/${API_KEY}`)).json();
    return {
        props: {
            results
        }
    }
}
```