---
title: '코드 스니펫을 공유합니다'
date: '2021-03-13T15:17:29.679909'
description: 'VSCode에서 주로 사용하는 코드 스니펫들입니다. 저장용으로 작성하는 글입니다.'
thumbnail: 'https://dynamisign.com/api/sign?d=VSCode%EC%97%90%EC%84%9C%20%EC%A3%BC%EB%A1%9C%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EC%BD%94%EB%93%9C%20%EC%8A%A4%EB%8B%88%ED%8E%AB%EB%93%A4%EC%9E%85%EB%8B%88%EB%8B%A4.&i=https://qgcjsixggwsztftamrtt.supabase.co/storage/v1/object/public/uploads/1627328484117&i=https://qgcjsixggwsztftamrtt.supabase.co/storage/v1/object/public/uploads/1627212965661&t=%EC%BD%94%EB%93%9C%20%EC%8A%A4%EB%8B%88%ED%8E%AB%EC%9D%84%20%EA%B3%B5%EC%9C%A0%ED%95%A9%EB%8B%88%EB%8B%A4'
tags: ['react', 'typescript']
---

VSCode에서 제가 사용하는 코드 스니펫을 공유해 볼까 합니다. 이전 블로그에서도 다룬 적이 있습니다.

## 만드는 법
![make](https://dynamisign.com/api/sign?d=VSCode%EC%97%90%EC%84%9C%20%EC%A3%BC%EB%A1%9C%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EC%BD%94%EB%93%9C%20%EC%8A%A4%EB%8B%88%ED%8E%AB%EB%93%A4%EC%9E%85%EB%8B%88%EB%8B%A4.&t=%EC%BD%94%EB%93%9C%20%EC%8A%A4%EB%8B%88%ED%8E%AB%EC%9D%84%20%EA%B3%B5%EC%9C%A0%ED%95%A9%EB%8B%88%EB%8B%A4)

VSCode - Code - 기본 설정 - 사용자 코드 조각

## Prettier

저장 시 자동으로 포맷팅을 해주는 유용한 도구입니다.

```json
{
  "singleQuote": true,
  "semi": false,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 90
}
```

## Typescript JSX

```json
// 콘솔로그
"console.log": {
	"prefix": "clg",
	"body": [
		"console.log('$1', $1)"
	],
	"description": "console.log"
}
```

```json
// 기본 컴포넌트 생성
"react tsx": {
	"prefix": "tsx",
	"body": [
		"import React, { FunctionComponent } from 'react'",
		"",
		"export interface Props {",
		"",
		"}",
		"interface State {}",
		"",
		"const $1: FunctionComponent<Props> = () => {",
		"  return <>$1</>",
		"} ",
		"",
		"export default $1"
	],
	"description": "react tsx"
}
```

```json
// 리액트네이티브 컴포넌트 생성
"typescript native": {
	"prefix": "tsxnative",
	"body": [
		"import * as React from 'react'",
		"import { View, Text } from 'react-native'",
		"import styled from '@emotion/native'",
		"",
		"export interface Props {",
		"  $2",
		"}",
		"",
		"const $1 = ({}: Props) => {",
		"  return (",
		"    <View>",
		"      <Text>$1</Text>",
		"    </View>",
		"  )",
		"}",
		"",
		"export default $1",
		""
	],
	"description": "typescript native"
}
```

## Typescript TypeORM

```json
// Entity 생성
"TypeORM Entity": {
	"prefix": "entity",
	"body": [
		"import { Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'",
		"",
		"@Entity({ name: '$2' })",
		"export default class $1 extends BaseEntity {",
		"  @PrimaryGeneratedColumn()",
		"  id: number",
		"}",
		""
	],
	"description": "TypeORM Entity"
}
```

```json
// Subscriber 생성
"TypeORM subscriber": {
	"prefix": "subscriber",
	"body": [
		"import { EventSubscriber, EntitySubscriberInterface } from 'typeorm'",
		"",
		"@EventSubscriber()",
		"export class $1 implements EntitySubscriberInterface<any> {",
		"    $2",
		"}"
	],
	"description": "TypeORM subscriber"
}
```

```json
// Factory 생성
"TypeORM factory": {
	"prefix": "factory",
	"body": [
		"import { define } from 'typeorm-seeding'",
		"import * as Faker from 'faker/locale/ko'",
		"import $1 from 'entities/$1'",
		"",
		"define($1, (faker: typeof Faker) => {",
		"    $2",
		"})",
		""
	],
	"description": "TypeORM factory"
}
```

```json
// Seeder 생성
"TypeORM seeder": {
	"prefix": "seeder",
	"body": [
		"import { Seeder, Factory } from 'typeorm-seeding'",
		"import { Connection } from 'typeorm'",
		"",
		"export default class $1 implements Seeder {",
		"  async run(factory: Factory, connection: Connection): Promise<any> {",
		"    $2",
		"  }",
		"}",
		""
	],
	"description": "TypeORM seeder"
}
```

```json
// Controller 생성
"TypeORM Controller": {
	"prefix": "controller",
	"body": [
		"import { JsonController, Get } from 'routing-controllers'",
		"",
		"@JsonController($2)",
		"export default class $1 {",
		"",
		"  @Get()",
		"  getAll() {",
		"    return '$2'",
		"  }",
		"}",
		""
	],
	"description": "TypeORM Controller"
}
```