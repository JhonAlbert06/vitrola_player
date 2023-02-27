import React from "react";
import './Player.jsx.scss';
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
        
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <div>Cargando...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }
        
        

        return (
            <></>
        );
    }
}

export default Card;