---
title: 블로그를 이전했습니다
date: '2021-03-13T12:32:52.573645'
description: '새로운 기술로 다시 찾아왔습니다.'
thumbnail: 'https://dynamisign.com/api/sign?d=%EC%83%88%EB%A1%9C%EC%9A%B4%20%EA%B8%B0%EC%88%A0%EB%A1%9C%20%EB%8B%A4%EC%8B%9C%20%EC%B0%BE%EC%95%84%EC%99%94%EC%8A%B5%EB%8B%88%EB%8B%A4.&i=https://qgcjsixggwsztftamrtt.supabase.co/storage/v1/object/public/uploads/1627328428653&i=https://qgcjsixggwsztftamrtt.supabase.co/storage/v1/object/public/uploads/1627328613997&t=%EB%B8%94%EB%A1%9C%EA%B7%B8%EB%A5%BC%20%EC%9D%B4%EC%A0%84%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4'
---

이번이 3번째 블로그를 배포하는 거네요. 아마 블로그를 다시 만들 일은 없을 것 같습니다. 앞으로는 이번에 만든 블로그로 계속 갈 예정입니다.

## 현 블로그의 새로운 점, 장점 😎

### Gatsby 💡

![Gatsby](./gatsby-header.jpg)

이번에 만든 블로그는 Next도 Nuxt도 아닌 [**Gatsby**](https://gatsbyjs.org)를 이용해 만들었습니다. Gatsby를 선택한 것은 지금까지 만든 3개의 블로그의 경험을 돌아봐도 최고의 선택이었다고 생각합니다. Gatsby 문서를 접하고 3일 만에 바로 배포가 완료되었을 정도니까요. React 개발자라면 블로그는 반드시 Gatsby로 만드는 것을 추천합니다. 그 이유는

- 클라이언트 렌더링임에도 **SEO**에 친화적
- 블로그에 관한 많은 레퍼런스와 스타터팩
- 3버전에 출시된 [Gatsby cloud](https://www.gatsbyjs.com/products/cloud/)가 **무료 호스팅**까지
- 정적 호스팅으로 우수한 성능과 퍼포먼스
- 블로그 게시글 작성이 매우 편리하다

게다가 별다른 세팅이 필요없기 때문에 순수 React나 Next.js로 만드는 것보다 훨씬 많은 시간을 단축할 수 있습니다. 이전에는 `codemirror`를 이용해 에디터까지 만들어서 작업을 했는데, gatsby로는 그냥 마크다운 파일만 작업하면 끝이니까 관리도 훨씬 용이합니다.

### Tailwindcss 🍃

저는 예전부터 디자인을 할 때 항상 scss를 써왔습니다. CSS-in-JS는 템플릿 문자열로 css를 짜는게 자동완성이 되지 않아서 답답했고, 그렇다고 scss는 세팅 과정에서 `node-sass`가 허구헌날 노드 버전과 충돌해서 에러를 내고...

그러던 중 발견한 지원군이 바로 [**Tailwind**](https://tailwindcss.com/)였습니다.

![Tailwindcss](./tailwind.png)

Tailwind는 클래스 네이밍으로 디자인을 하는 라이브러리로서, CSS-in-JS와 비슷하지만 라이브러리를 꺼내올 필요가 없고 스타일링이 매우 빠르다는 생산성의 이점이 있습니다.

다만 Tailwind가 스케일이 커지면서 css 용량이 늘어났기 때문에, 개발 단계에서는 속도가 많이 느리다는 단점도 있긴 합니다.

---

아무튼 앞으로 블로그에 쓸 글들을 생각하니 벌써부터 설레네요. 😍
