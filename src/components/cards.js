import React from 'react';

const Cards = () => {
    let objetos = [
        {
            card_title: "Card Title 1",
            card_description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            card_button: "Find Out More!",
            card_img: "http://placehold.it/500x325/",
        },
        {
            card_title: "Card Title 2",
            card_description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            card_button: "Find Out More!",
            card_img: "http://placehold.it/500x325/",
        },
        {
            card_title: "Card Title 3",
            card_description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            card_button: "Find Out More!",
            card_img: "http://placehold.it/500x325/",
        },
        {
            card_title: "Card Title 4",
            card_description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            card_button: "Find Out More!",
            card_img: "http://placehold.it/500x325/",
        },
    ];
    return (
        <>
        {
            objetos.map((objeto, indice)=>{
                return(
                    <div className="col-md-3" key = {indice}>
                    <div className="card">
                <img src={objeto.card_img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{objeto.card_title}</h5>
                    <p className="card-text">{objeto.card_description}</p>
                    <a href="#" className="btn btn-primary">{objeto.card_button}</a>
                </div>
            </div>
            </div>
                )
            })
        }
            
        </>
    )
}

export default Cards