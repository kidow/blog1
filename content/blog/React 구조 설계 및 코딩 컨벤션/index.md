---
title: 'React 구조 설계 및 코딩 컨벤션'
date: '2021-09-02T16:46:45.162265'
description: 'React 프로젝트를 설계할 때 쓰는 컨벤션 모음'
thumbnail: 'https://dynamisign.com/api/sign?d=%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%A0%20%EB%95%8C%20%ED%95%AD%EC%83%81%20%EA%B3%A0%EC%A0%95%EC%9C%BC%EB%A1%9C%20%ED%95%B4%EC%A3%BC%EB%8A%94%20%EC%84%B8%ED%8C%85%EB%93%A4&t=%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B8%B0%EC%B4%88%20%EC%84%B8%ED%8C%85'
---

협업을 생각한다면 코드는 무엇보다 **직관적이고 명시적**으로 짜는 것이 제일 중요합니다. 저의 경우, 2주 뒤에 다시 봐도 어떤 코드였는지 바로 알 수 있게 코드를 짜는 것이 제 규칙입니다.

협업뿐만 아니라 **생산성**과 **가독성**을 위해서라도 스스로의 코딩 컨벤션을 익혀나가는 것 또한 중요합니다.

## 변수 네이밍

### 1. boolean

모든 boolean 타입 변수는 반드시 접두사로 **is**를 붙입니다. 해당 변수 타입이 boolean임을 암시하는 용도입니다.

```typescript
const [isLoading, setIsLoading] = useState(false)
const [isFetched, setIsFetched] = useState(false)
```

이 경우 camelCase를 사용합니다.

### 2. function

#### CRUD

데이터를 가져오는 함수는 접두사 **get**을 붙입니다.

```typescript
interface Props {}

const HomePage: FunctionComponent<Props> = () => {
    ...

    const getPosts = async () => {}

    useEffect(() => {
        getPosts()
    }, [])
    return <>...</>
}

export default HomePage
```

생성과 관련된 함수는 접두사 **create**를 붙입니다.

```typescript
interface Props {}

const HomePage: FunctionComponent<Props> = () => {
    ...

    const createPost = async () => {}

    return <>...</>
}

export default HomePage
```

수정과 관련된 함수는 접두사 **update**를 붙입니다.

```typescript
interface Props {}

const HomePage: FunctionComponent<Props> = () => {
    ...

    const updatePost = async () => {}

    return <>...</>
}

export default HomePage
```

삭제와 관련된 함수는 접두사 **delete**를 붙입니다.

```typescript
interface Props {}

const HomePage: FunctionComponent<Props> = () => {
    ...

    const deletePost = async () => {}

    return <>...</>
}

export default HomePage
```

## 상수 네이밍

모든 고정된 값은 전부 **대문자**로 짓습니다. 또한 **data** 폴더를 따로 만들어 관리합니다.

```typescript
const THEME: 'dark' | 'light' = 'dark'
const BASE_URL = 'http://localhost:3000'
```

이 경우 snake_case를 사용합니다.

## 컴포넌트 내 배치

- Hooks를 가장 상단에 몰아둡니다.
  - 그 중에서도 state를 선언하는 **useObject**가 가장 상단에 선언됩니다.
- 함수들이 중간에 들어갑니다.
- **useEffect**를 가장 하단에 몰아둡니다.

```typescript
interface Props {}
interface State {}

const HomePage: FunctionComponent<Props> = () => {
    const [{}, setState] = useObject<State>({})
    const {} = useHistory()
    const user = useUser()

    ...

    const getPosts = async () => {}
    const createPost = async () => {}
    const updatePost = async () => {}

    ...

    useEffect(() => {
        getPosts()
    }, [])
    return <>...</>
}

export default HomePage
```

## 컴포넌트 네이밍

components 폴더 안의 모든 컴포넌트는 React의 Re를 따서 접두사로 **Re**를 붙입니다. 이 것은 해당 컴포넌트가 components 폴더 안에 있으며, **직접 커스터마이징한 컴포넌트**라는 의미를 부여하기 위함입니다.

Material-UI같은 외부 UI 라이브러르를 사용하게 될 경우를 예상한다면, 해당 라이브러리의 컴포넌트명과 직접 만든 컴포넌트명을 접두사만 보고도 쉽게 구분할 수 있게 됩니다.

```typescript
import { Button, Checkbox, Switch } from '@material-ui/core'
import { ReButton, ReCheckbox, ReSwitch } from 'components'
```

이 경우 PascalCase를 사용합니다.

## components 폴더가 복잡해지는 경우

이미 유명한 Atomic React의 규약을 따라 5개의 폴더로 세분화합니다.

## 절대 경로 모듈 시스템

모듈을 불러올 때, 어떤 폴더에서 불러왔는지 최상위 폴더명만 기입해서 가독성을 높입니다. 절대 경로만 잘 적용해놓으면 클릭 시 바로 해당 모듈로 이동해서 확인할 수도 있습니다.

또한 이름만 알고 있으면 타이핑만으로 빠르게 해당 모듈을 불러올 수도 있습니다.

## index

모듈의 이름은 항상 **폴더**가 기준이고, 파일명은 반드시 index.[확장자] 식으로 짓습니다. 모듈 시스템에서 index로 이름을 지은 파일들은 기입하지 않아도 자동으로 인식하기 때문에 **가독성**면에서 더 좋은 코드가 될 수 있습니다.

컴포넌트의 경우에는 한 컴포넌트에 tsx, storybook, test 파일을 한 번에 넣어서 관리할 수도 있습니다.

## state는 무조건 객체로 선언

제가 만든 [**useObject**](https://kidow.me/직접-만들어서-쓰는-Hooks들/)라는 커스텀 훅이 있습니다. 해당 훅으로 한 컴포넌트 혹은 페이지의 state는 전부 useObject 하나만 써서 관리합니다.

## services

페이지를 담당하는 pages와 컴포넌트를 담당하는 components를 제외하고 (store도 제외) 기능 단위로 전부 모아서 보관하는 **폴더**입니다.

## 사용자 코드 조각

[해당 글 참조.](https://kidow.me/코드-스니펫을-공유합니다/)

## Prettier & ESLint

prettier는 다음의 규칙을 가집니다.

```json
{
  "singleQuote": true,
  "semi": false,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 80
}
```

짚고 넘어갈 게 있다면

- 큰따옴표(")가 아닌 작은따옴표(')를 사용합니다. - "singleQuote"
- 세미콜론(;)을 찍지 않습니다. - "semi"
- 배열의 맨 마지막 요소 뒤에 반점(,)을 찍지 않습니다. - "trailingComma"

ESLint는 적용하지 않습니다. (문법 에러가 의미없는 경우가 다반사)