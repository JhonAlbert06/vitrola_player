import React from "react";
import './Player.jsx.scss';
import { getPlayList, setSongs } from "../playMusic.js";
import axios from "axios";


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/Songs");
            this.setState({ data: response.data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <div>Cargando...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }
        
        setSongs(data);
        let siguientes = getPlayList();

        return (
            <div className=" card player__container" style={{ "marginTop": "3%", "marginLeft": "6%", "marginRight": "6%" }}>
                <div className="card-body">
                    <h4 className="card-title">Siguientes Canciones</h4>
                    <hr />
                    {
                        siguientes.map((aux) => {
                            return (
                                <>
                                    <h5>{aux?.name}</h5>
                                    <p key={aux?.id}>{`${aux?.artist} - ${aux?.genre}`}</p>
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Card;