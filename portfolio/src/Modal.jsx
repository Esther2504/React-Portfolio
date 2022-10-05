import React from 'react'
import webshop from './images/WebShop.png'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default function Modal( {data, closeModal, theme} ) {


  return (
    <div className='modal-background'>
    
      <button className={`close ${theme}`} onClick={() => closeModal(false)}>X</button>
              <div className={`modal project ${theme}`}>
              <img src={images[data.img]}></img>
              {console.log(data.name)}
              <p>{data.name}</p>
              <p className='description'>{data.description}</p>
              <div className="buttons">
              <button><a target="_blank" href={`${data.codelink}`}>Code</a></button> 
              <button><a target="_blank" href={`${data.demolink}`}>Demo</a></button>     
              </div>
            </div>
    </div>
  )
}
