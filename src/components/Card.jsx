import React from "react";

function Card() {
    return (
        <div style={{"marginTop": "3%"}}>
            <div className="card w-100 mb-3">
                <div className="card-body">
                    <h5 className="card-title">Siguientes Canciones</h5>
                    <p style={{"border": "3px black solid", "borderRadius": "5px", "justifyContent": "center"}} className="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    <p style={{"border": "3px black solid", "borderRadius": "5px"}} className="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    <p style={{"border": "3px black solid", "borderRadius": "5px"}} className="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    <p style={{"border": "3px black solid", "borderRadius": "5px"}} className="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Card;