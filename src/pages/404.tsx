import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import SEO from '../components/seo'

const NotFoundPage = () => {
  const { push } = useHistory()
  useEffect(() => {
    push('/')
  }, [])
  return (
    <>
      <div>asd</div>
      <SEO title="404: Not Found" />
    </>
  )
}

export default NotFoundPage
