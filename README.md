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