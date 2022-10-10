import React from 'react'
import { Helmet } from 'react-helmet'

const PageHelmet = ({title}) => {
  return (
    <div>
      <Helmet title={title}/>
    </div>
  )
}

export default PageHelmet
