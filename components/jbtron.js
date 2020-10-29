import React from 'react';

export const Jumbotron = (props) => {
    return(
        <div className="jumbotron">
            <h1 className="display-4">{props.tittle}</h1>
            <p className="lead">{props.description}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{props.button}</a>
        </div>
    )
};

