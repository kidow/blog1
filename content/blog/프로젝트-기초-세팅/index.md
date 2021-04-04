---
title: '프로젝트 기초 세팅'
date: '2021-04-04T16:46:45.162265'
description: '프로젝트를 시작할 때 항상 고정으로 해주는 세팅들'
thumbnail: 'https://firebasestorage.googleapis.com/v0/b/kidow-v3.appspot.com/o/thumbnail%2Fsetting.png?alt=media&token=c18dcd49-1b27-456e-b139-f80f755d1405'
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