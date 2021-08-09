export interface IPost {
  title: string
  description: string
  url: string
  date: string
  thumbnail: string
  tags: string[]
  html: string
}

export type TTag =
  | 'typescript'
  | 'gatsby'
  | 'react'
  | 'tailwind'
  | 'firebase'
  | 'algorithm'
