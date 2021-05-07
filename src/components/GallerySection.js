import React, { useState, useEffect } from 'react';
import './GallerySection.css'

function GallerySection (props){
    let url = "https://api.jsonbin.io/b/608bb72fd64cd16802a4fb77";

    const [dogs, setDogs] = useState([]);


    useEffect(() => {
        async function fetchData() {
            let response = await fetch(url);
            let data = await response.json();

            setDogs(data);
            console.log(data);

        }
        fetchData()

    }, [url]);

    return (

        <div className="gallery-container">
            <h1 className="dog-header">Wall of fame</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <div className="gallery-dogs">
                                <img className="gallery-img"
                                    src={dog.img}
                                    alt={dog.breed}
                                />
                        </div>

                    </li>
                ))}
            </ul>
        </div>

                      
    )


}


export default GallerySection;


