import React, { useState } from 'react'

import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({gfilter, setGFilter}) => {
    const [value,setValue]=useState(gfilter)
    const onChange=useAsyncDebounce(value=>{
        setGFilter(value || undefined)
    },1000)
  return (
     <span>
        Search:{' '}
        <input   
        value={value || ''}
        onChange={e=>{
            setValue(e.target.value)
            onChange(e.target.value)
        }}
        />
     </span>
  )
}

export default GlobalFilter