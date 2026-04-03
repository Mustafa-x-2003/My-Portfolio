import React from 'react'

function Card({children , width}) {
  return (
    <div className={` bg-(--color-bg-variant) rounded-xl p-4 transition-all duration-400 hover:bg-transparent border border-transparent hover:border-(--color-bg-variant) ${width}` }>
      {children}
    </div>
  )
}

export default Card
