import React from 'react'

const GlobalFilter = ({gfilter, setGFilter}) => {
  return (
     <span>
        Search:{' '}
        <input   
        value={gfilter || ''}
        onChange={e=>{setGFilter(e.target.value)}}
        />
     </span>
  )
}

export default GlobalFilter