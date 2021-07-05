---
title: '타입스크립트 Utility Types'
date: '2021-03-17T16:46:45.162265'
description: '알아두면 언젠가 꼭 써먹을 것들. 이미 자주 쓰는 것들도 있습니다.'
thumbnail: 'https://dynamisign.com/api/sign?d=%EC%95%8C%EC%95%84%EB%91%90%EB%A9%B4%20%EC%96%B8%EC%A0%A0%EA%B0%80%20%EA%BC%AD%20%EC%8D%A8%EB%A8%B9%EC%9D%84%20%EA%B2%83%EB%93%A4.&t=%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20Utility%20Types'
---

타입스크립트 타이핑 시 유용하게 쓰이는 기능들을 모아봤습니다. 익혀두면 실제로 써먹을 데가 많습니다. 이 글은 공식 문서를 번역한 글이기도 합니다.

링크 : [https://www.typescriptlang.org/docs/handbook/utility-types.html?](https://www.typescriptlang.org/docs/handbook/utility-types.html?)

> 다음 타입들은 `node_modules/typescript/lib/lib.es5.d.ts` 에서도 확인할 수 있습니다.
 
## Partial

```typescript
Partial<T>
// 타입 T의 모든 속성을 optional한 값으로 변환합니다.
interface User {	
    id: number	email: string
}

// Partial<User>
{	
    id?: number	
    email?: string
}
```

## Readonly

```typescript
Readonly<T>
// 타입 T의 모든 속성을 수정이 불가능한 읽기 전용으로 변환합니다.
interface Todo {	
    title: string
}
const todo: Readonly<Todo> = {	
    title: 'Delete inactive users'
}
todo.title = 'Hello' // Error: cannot reassign a readonly property
```

## Record

```typescript
Record<K, T>
// 타입 K의 속성들을 속성으로 가지는 타입 T를 반환합니다.
interface PageInfo {	
    title: string
}
type Page = 'home' | 'about' | 'contact'
const x: Record<Page, PageInfo> = {	
    about: { 
        title: 'about' 
    },	
    contact: { 
        title: 'contact' 
    },	
    home: { 
        title: 'home' 
    }
}
```

## Pick

```typescript
Pick<T, K>
// 타입 T의 일부 속성을 포함하는 타입 K에 해당하는 속성들만 선언이 가능해집니다.
interface Todo {	
    title: string	
    description: string	
    completed: boolean
}
type TodoPreview = Pick<Todo, 'title', 'completed'>
const todo: TodoPreview = {	
    title: 'Clean room',	
    completed: false,	
    description: "" // error
}
```

## Omit
```typescript
Omit<T, K>
// Pick과 반대로 타입 K에 해당하지 않는 속성들만 선언이 가능해집니다.
interface Todo {	
    title: string    
    description: string    
    completed: boolean
}
type TodoPreview = Omit<Todo, 'description'>
const todo: TodoPreview = {	
    title: 'Clean room',	
    completed: false
}
```

## Exclude
```typescript
Exclude<T, U>
// 타입 T에서 타입 U의 속성들을 제외한 나머지 속성을 가지는 타입을 반환합니다.
type T0 = Exclude<"a" | "b" | "c", "a"> // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b"> // "c"
type T2 = Exclude<string | number | () => void, Function> // string | number
```

## Extract

```typescript
Extract<T, U>
// 타입 T와 일치하는 타입 U을 반환합니다.
type T0 = Extract<"a" | "b" | "c", "a" | "f"> // "a"
type T1 = Extract<string | number | () => void, Function> // () => void
```

## NonNullable
```typescript
NonNullable<T>
// null과 undefined를 제외한 타입을 반환합니다.
type T0 = NonNullable<string | number | undefined> // string | number
type T1 = NonNullable<string[] | null | undefined> // string[]
```

## Parameters
```typescript
Parameters<T>
// 특정 함수의 인자에 대한 타입을 tuple 타입으로 반환합니다.
declare function f1(arg: { a: number, b: string }): void
type T0 = Parameters<() => string>  // []
type T1 = Parameters<(s: string) => void>  // [string]
type T2 = Parameters<(<T>(arg: T) => T)>  // [unknown]
type T4 = Parameters<typeof f1>  // [{ a: number, b: string }]
type T5 = Parameters<any>  // unknown[]
type T6 = Parameters<never>  // never
type T7 = Parameters<string>  // Error
type T8 = Parameters<Function>  // Error
```

## ConstructorParameters
```typescript
ConstructorParameters<T>
// 생성자 함수의 파라미터에 대한 타입을 tuple 타입으로 반환합니다. T가 함수가 아니라면 never를 반환합니다.
type T0 = ConstructorParameters<ErrorConstructor>  // [(string | undefined)?]
type T1 = ConstructorParameters<FunctionConstructor>  // string[]
type T2 = ConstructorParameters<RegExpConstructor>  // [string, (string | undefined)?]
```

## ReturnType

```typescript
ReturnType<T>// 함수의 리턴 타입을 반환합니다.
declare function f1(): { a: number, b: string }
type T0 = ReturnType<() => string>  // string
type T1 = ReturnType<(s: string) => void>  // void
type T2 = ReturnType<(<T>() => T)>  // {}
type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>  // number[]
type T4 = ReturnType<typeof f1>  // { a: number, b: string }
type T5 = ReturnType<any>  // any
type T6 = ReturnType<never>  // any
type T7 = ReturnType<string>  // Error
type T8 = ReturnType<Function>  // Error
```

## InstanceType

```typescript
InstanceType<T>
// 생성자 함수의 리턴 타입을 반환합니다.
class C {    
    x = 0    
    y = 0
}
type T0 = InstanceType<typeof C>  // C
type T1 = InstanceType<any>  // any
type T2 = InstanceType<never>  // any
type T3 = InstanceType<string>  // Error
type T4 = InstanceType<Function>  // Error
```

## Required

```typescript
Required<T>
// T의 모든 속성을 필수 속성으로 변환합니다.
interface Props {    
    a?: number    
    b?: string
}
const obj: Props = { a: 5 } // OK
const obj2: Required<Props> = { a: 5 } // Error: property 'b' missing
```

## ThisParameterType

```typescript
ThisParameterType<T>
// 함수 타입의 'this'의 타입을 반환합니다. 'this'가 없다면 unknown을 반환합니다.
function toHex(this: Number) {    
    return this.toString(16)
}
function numberToString(n: ThisParameterType<typeof toHex>) {    
    return toHex.apply(n)
}
```

여기서 `ThisParameterType<typeof toHex>`는 `Number`와 같습니다.

## OmitThisParameter

```typescript
OmitThisParameter<T>// 함수 타입에서 'this' 파라미터를 제거한 타입을 반환합니다.
function toHex(this: Number) {  
    return this.toString(16);
}
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
console.log(fiveToHex()); // '5'
```

기존의 함수에서 명시적 `this` 타입을 제거하고 싶을 때 사용하면 됩니다.

## ThisType

```typescript
ThisType<T>

type ObjectDescriptor<D, M> = { 
     data?: D;  
     methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};
function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {  
    let data: object = desc.data || {};  
    let methods: object = desc.methods || {};  
    return { ...data, ...methods } as D & M;
}
let obj = makeObject({  
    data: { 
        x: 0, 
        y: 0 
    },  
    methods: {    
        moveBy(dx: number, dy: number) {      
            this.x += dx; // Strongly typed this      
            this.y += dy; // Strongly typed this    
        },  
    },
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

타입의 `this` 컨텍스트를 명시합니다. 별도의 타입을 반환하지 않습니다.

---

번외로 [내장 문자열 조작 타입](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#intrinsic-string-manipulation-types)이라는 것도 있는데요, 딱히 자주 쓸 타입은 아니니 이런 것도 있구나 식으로 받아들이면 될 것 같습니다.

### Uppercase

```typescript
Uppercase<StringType>
// 모두 대문자인 문자열 타입을 반환합니다.
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting> // "HELLO, WROLD"
```

### Lowercase
```typescript
Lowercase<StringType>
// 모두 소문자인 문자열 타입을 반환합니다.
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting> // "hello, world"
```

### Capitalize

```typescript
Capitalize<StringType>
// 문자열의 첫 번째가 대문자인 문자열 타입을 반환합니다.
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>; // "Hello, world"
```

### Uncapitalize

```typescript
Uncapitalize<StringType>
// 문자열의 첫 번째가 소문자인 문자열 타입을 반환합니다.
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>; // "hELLO WORLD"
```