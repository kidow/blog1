---
title: '프로젝트 기초 세팅'
date: '2021-04-01T16:46:45.162265'
description: '프로젝트를 시작할 때 항상 고정으로 해주는 세팅들'
thumbnail: 'https://dynamisign.com/api/sign?d=%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%A0%20%EB%95%8C%20%ED%95%AD%EC%83%81%20%EA%B3%A0%EC%A0%95%EC%9C%BC%EB%A1%9C%20%ED%95%B4%EC%A3%BC%EB%8A%94%20%EC%84%B8%ED%8C%85%EB%93%A4&t=%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B8%B0%EC%B4%88%20%EC%84%B8%ED%8C%85'
---

## .prettierrc

```json
{
  "arrowParens": "avoid",
  "singleQuote": true,
  "semi": false,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 80
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": "./src" // next.js는 "."
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx", "**/*.js"]
}
```

## tailwind.config.js

```javascript
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
```

## process.env typescript

```typescript
declare namespace NodeJS {
  interface Process {
    env: ProcessEnv
  }
  interface ProcessEnv {
    NODE_ENV: string
  }
}
```

## nextjs typescript _app.tsx

```typescript
import 'styles/globals.css'
import App from 'next/app'
import { ErrorInfo } from 'react'

interface Props {}
interface State {
  hasError: boolean
}

class MyApp extends App<Props, {}, State> {
  state = {
    hasError: false
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error) this.setState({ hasError: true })
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    const {} = this.state
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
```