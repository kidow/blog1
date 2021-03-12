import React from 'react'
import { ReSEO } from 'components'
import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (
    <>
      <ReSEO title="404" />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col text-center font-bold">
          <div className="text-7xl mb-10">잘못 찾아오셨어요.</div>
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="bg-primary-main text-black h-10 text-lg flex items-center rounded px-4"
            >
              홈으로
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
