import React, { useState, useEffect } from 'react';
import './GetDogs.css';




function GetDogs() {
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

        <div className="dogs-container">
            <h1 className="dog-header">Here are all the Doggies that joined us!</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <div className="dog-column">
                            <h1 className="dog-name">
                                {dog.name}
                                <p>
                            Breed: {dog.breed}
                            </p>
                            <p>
                            Sex: {dog.sex} 
                            </p>
                            <p>
                            Age: {dog.age}
                            </p>
                            </h1>

                           
                            <div className="doggies">
                                <img className="dog-img"
                                    src={dog.img}
                                    alt={dog.breed}
                                />
                            </div>
                            <div className="dog-owner">
                                <p> Owner: {dog.owner.name} {dog.owner.lastName}
                                    <p>Chip Number: {dog.chipNumber}</p>
                                    <p> Phone Number: {dog.owner.phoneNumber}</p>
                                </p>
                            
                        </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>

                      
    )


}

export default GetDogs;

