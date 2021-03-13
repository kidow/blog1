---
title: '직접 만들어서 쓰는 Hooks들'
date: '2021-03-13T16:36:19.542887'
description: '생산적으로 획기적으로 올라갑니다!'
thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kidow-v3.appspot.com/o/thumbnail%2F1615263205139?alt=media&token=4711f71a-f38a-4220-821d-145000fc2420'
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