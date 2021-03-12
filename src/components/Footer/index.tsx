import React, { FunctionComponent } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { ReLogoIcon } from 'components'

interface Props {}

const ReFooter: FunctionComponent<Props> = () => {
  return (
    <footer className="bg-black">
      <div className="md:px-0 px-6">
        <div className="py-6 text-xs md:text-sm md:py-10">
          <div className="mb-10 text-gray-700">
            <ReLogoIcon className="w-28 h-10" />
            <p className="mt-1 text-gray-500">개발 블로그</p>
            <p className="mt-8">김동욱</p>
            <p>wcgo2ling@gmail.com</p>
          </div>
          <div className="h-px w-full my-4 bg-gray-800" />
          <div className="flex justify-between text-gray-700 items-center">
            <div>© 2021 kidow. All right reserved.</div>
            <button onClick={() => window.open('https://github.com/kidow')}>
              <AiOutlineGithub className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ReFooter
