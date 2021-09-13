import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { ReLogoIcon } from 'components'

interface Props {}
interface State {}

const ReHeader: FunctionComponent<Props> = () => {
  return (
    <header className="h-16 container mx-auto md:px-0 px-6 mb-5">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Link to="/">
            <ReLogoIcon className="w-20" />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-3 text-sm">
          <Link to="/resume">Résumé</Link>
          <a href="https://github.com/kidow" target="_blank">
            Github
          </a>
        </div>
      </div>
    </header>
  )
}

export default ReHeader
