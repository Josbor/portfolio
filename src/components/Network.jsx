import React from 'react'

const Network = ({ network }) => {

  const style = {

  }
  return (
    <>
      <div className='network-img'>
        {network.name!=='correo'&&<a href={network.url} target="_blank">
         <img src={network.image}   alt={network.name} />
        </a>}
        {network.name=='correo'&&

          <a href="mailto:josbor.dev@gmail.com"  >
          <img src={network.image}   alt={network.name} />
          </a>
        }
      </div>
    </>
  )
}

export default Network
