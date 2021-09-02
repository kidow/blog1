---
title: '직접 만들어서 쓰는 Hooks들'
date: '2021-03-13T16:36:19.542887'
description: '생산성도 획기적으로 올리는 법'
thumbnail: 'https://dynamisign.com/api/sign?d=%EC%83%9D%EC%82%B0%EC%84%B1%EB%8F%84%20%ED%9A%8D%EA%B8%B0%EC%A0%81%EC%9C%BC%EB%A1%9C%20%EC%98%AC%EB%A6%AC%EB%8A%94%20%EB%B2%95&i=https://qgcjsixggwsztftamrtt.supabase.co/storage/v1/object/public/uploads/1627328484117&i=https://qgcjsixggwsztftamrtt.supabase.co/storage/v1/object/public/uploads/1627212965661&t=%EC%A7%81%EC%A0%91%20%EB%A7%8C%EB%93%A4%EC%96%B4%EC%84%9C%20%EC%93%B0%EB%8A%94%20Hooks%EB%93%A4'
---

## useObject 👍

```typescript
export function useObject<T>(
  initialObject: T
): [
  T,
  (obj: Partial<T>, callback?: (state: T) => void) => void,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] {
  const [state, setState] = useState<T>(initialObject)
  const callbackRef = useRef<(state: T) => void>()
  const isFirstCallbackCall = useRef<boolean>(true)
  const onChange = useCallback(
    (obj: Partial<T>, callback?: (state: T) => void) => {
      callbackRef.current = callback
      setState((prevState) => ({ ...prevState, ...obj }))
    },
    [state]
  )
  const onEventChange = useCallback(
    ({
      target: { name, value }
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
      setState((prevState) => ({ ...prevState, [name]: value })),
    [state]
  )
  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false
      return
    }
    callbackRef.current?.(state)
  }, [state])
  return [state, onChange, onEventChange]
}
```

객체 형식의 state를 다룰 때 **필수**로 사용합니다. 이 훅스 하나로 한 컴포넌트의 모든 상태를 다 관리할 수 있습니다.

### 예제

```typescript
import React from 'react'
import { useObject } from 'services'

interface State {
    email: string
    password: string
    loading: boolean
}

const Component = () => {
    const [{ email, password, loading }, setState, onChange] = useObject<State>({
        email: '',
        password: '',
        loading: false
    })

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      	e.preventDefault()
          setState({ loading: true }, state => console.log(state))
          await login({ email, password })
      	...
    }

    return (
        <form onSubmit={onSubmit} >
            <input value={email} name="email" onChange={onChange} />
            <input value={password} name="password" onChange={onChange} />
            <button type="submit">로그인</button>
        </form>
    )
}
```