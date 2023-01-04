import React from 'react'

const Network = ({ network }) => {

  const style = {

  }
  return (
    <>
      <div className='network-img'>
        <a href={network.url}>
          <img src={network.image} alt="" />
        </a>
      </div>
    </>
  )
}

export default Network
