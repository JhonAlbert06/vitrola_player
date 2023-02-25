import React from "react";
import Card from "./Card";
import Player from "./Player";

function Container() {
    return (
        <div className="container text-center">
            <div className="Card" style={{ "marginTop": "2%", "background-color": "#e3f2fd" }}>
                <div className="row">
                    <div className="col">
                        <Player />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;