import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useParams } from 'react-router-dom';

export default function Productpage({ addtoCart, list}) {
    const cld = new Cloudinary({
        cloud: {
            cloudname: 'dj0py7n1d'
        }
    });
    const { title } = useParams()

    return(
        <div>
            { list.filter((item) => item.title === title).map((item) => {
                const myImage = cld.image(`products/${ item.title }`)
                return(
                    <div className = 'product-page'>
                        <AdvancedImage cldImg = { myImage } className = 'big-image' />
                        <div>
                            <h5>{ item.title }</h5>
                            <p>${ item.price } </p>
                            <button className='firstbtn' onClick = {() => { addtoCart(item.id)}}>ADD TO CART</button>
                            </div> 
                          </div>
                    )})}
                
                </div>
    )
}