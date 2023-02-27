import React from "react";
import './Player.jsx.scss';
import { getPlayList, getSongs } from "../playMusic";

let aux = getSongs();

console.log(aux);

function Card() {
    return (
        <div className="card player__container" style={{ "marginTop": "3%", "marginLeft": "6%", "marginRight": "6%" }}>
            <div className="card-body">
                <h4 className="card-title">Siguientes Canciones</h4>
                <hr />
                {
                    aux.map((a) => {
                        return (
                            <>
                                <h5>{a.name}</h5>
                                <p>{`${a.artist} - ${a.genre}`}</p>
                                <hr />
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Card;