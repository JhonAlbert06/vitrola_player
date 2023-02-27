
import React from 'react';
import axios from 'axios';
import './Player.jsx.scss';
import { getCurrentSong, setCurrentSong, setPlayList } from '../playMusic';


class Player extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null,
        };
    };

    async componentDidMount() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/Songs/List"); // Poner en variable de entorno
            this.setState({ data: response.data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }


    render() {

        const { data, loading, error, } = this.state;

        if (loading) {
            return <div>Cargando...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        setPlayList(data);
        setCurrentSong();

        let song = getCurrentSong();

        let rutaImg = `/images/${song?.name}.jpeg`

        return (

            <div className="wrapper">
                <div className="player__container">
                    <div className="player__body">
                        <div className="body__cover">
                            <img src={rutaImg} alt="Album cover" />
                        </div>

                        <div className="body__info">
                            <div className="info__album">{song?.genre}</div>

                            <div className="info__song">{song?.name}</div>

                            <div className="info__artist">{song?.artist}</div>
                        </div>

                        <div className="body__buttons">
                            <audio className="range" onEnded={
                                // eslint-disable-next-line no-restricted-globals
                                location.reload} autoPlay src={`/music/${song?.name}.mp3`} controls>

                            </audio>
                            {/*  <ul className="list list--buttons">
                                <li>
                                    <a href="/" className="border border-danger-subtle list__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fillRule="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <button onClick={() => { }} className="btn border border-danger-subtle list__link" style={{}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fillRule="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                        </svg>
                                    </button>
                                </li>

                                <li>
                                    <a href="/" className="border border-danger-subtle list__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fillRule="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="player__footer">

                    </div>
                </div>
            </div>
        );
    }
}

export default Player;