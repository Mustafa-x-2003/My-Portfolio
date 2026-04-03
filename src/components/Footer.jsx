import React from 'react'
function Item({link}){
  return(
    <li className='text-(--color-bg) hover:text-(--color-white) transition-all duration-400'>{link}</li>
  )
}
const links=['Home','About','Experience','Services', 'Portfolio','Testimonials','Contact']
function Footer() {
  return (
    <footer className='bg-(--color-primary)'>
      <div className="container">
        <div>
          <h2 className='py-10 text-[24px] text-center'>Mustafa Sami</h2>
          <ul className='flex gap-8 justify-center items-center'>
            {links.map((l)=>{
              return(
                <Item link={l}/>
              )
            })}
          </ul>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
