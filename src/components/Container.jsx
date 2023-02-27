import React from "react";
import Player from "./Player";

function Container() {
    return (
        <div className="container text-center">
            <div className="Card" style={{ "marginTop": "2%", "backgroundColor": "#e3f2fd" }}>
                <Player />

            </div>
        </div>
    );
}

export default Container;