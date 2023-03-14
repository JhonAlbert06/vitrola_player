import React from 'react';
import axios from 'axios';
import './Player.jsx.scss';

let currentSong = null;

function getCurrentSong() {
    return currentSong;
}

async function setCurrentSong(songs, playList) {

    if (playList?.length === 0) {

        let randomIndex = Math.floor(Math.random() * songs?.length) + 0;
        currentSong = songs[randomIndex];
        console.log(randomIndex);
        console.log(currentSong);

    } else {
        currentSong = playList[0];

        try {
            await axios.delete("http://192.168.1.20:8000/Songs/List", {
                _id: currentSong._id,
                name: currentSong.name,
                genre: currentSong.genre,
                length: currentSong.length,
                artist: currentSong.artist,
            }); // Poner en variable de entorno

        } catch (error) {

        }
    }
};

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playList: [],
            songs: [],
            loading: true,
            error: null,
        };
    };

    async componentDidMount() {
        try {
            const response = await axios.get('http://192.168.1.20:8000/Songs/List'); // Poner en variable de entorno
            this.setState({ playList: response.data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }

        try {
            const response = await axios.get('http://192.168.1.20:8000/Songs');
            this.setState({ songs: response.data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        const { playList, songs } = this.state;
        if (playList !== prevState.playList || songs !== prevState.songs) {
            await this.setCurrentSong(songs, playList);
        }
    }

    async setCurrentSong(songs, playList) {
        let currentSong = null;
        if (playList.length === 0) {
            let randomIndex = Math.floor(Math.random() * songs.length) + 0;
            currentSong = songs[randomIndex];
            console.log(randomIndex);
            console.log(currentSong);
        } else {
            currentSong = playList[0];

            try {
                await axios.delete('http://192.168.1.20:8000/Songs/List', {
                    data: {
                        _id: currentSong._id,
                        name: currentSong.name,
                        genre: currentSong.genre,
                        length: currentSong.length,
                        artist: currentSong.artist,
                    },
                }); // Poner en variable de entorno
            } catch (error) { }
        }

        this.setState({ currentSong });
    }

    render() {

        const { playList, songs, loading, error, } = this.state;

        if (loading) {
            return <div>Cargando...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!loading) {
            setCurrentSong(songs, playList);
        }


        let song = getCurrentSong();
        let siguientes = playList

        let rutaImg = `http://192.168.1.20:8000/public/images/${song?.name}.jpeg`;

        return (
            <div className='row'>
                <div className="wrapper col">
                    <div className="player__container">
                        <div className="player__body row-12">
                            <div className="body__cover col-12">
                                <img src={rutaImg} alt="Album cover" width={1500} height={400} />
                            </div>

                            <div className="body__info col-12">
                                <div className="info__album">{song?.genre}</div>

                                <div className="info__song">{song?.name}</div>

                                <div className="info__artist">{song?.artist}</div>
                            </div>

                            <div class="range"></div>

                            <div class="body__buttons">
                                <audio
                                    // eslint-disable-next-line no-restricted-globals
                                    onEnded={() => { location.reload() }}
                                    autoPlay
                                    src={`http://192.168.1.20:8000/public/music/${song?.name}.mp3`}
                                    controls
                                    style={{ "height": "0px" }}
                                />
                                <ul class="list list--buttons">

                                    <li>
                                        <a href="/" class="list__link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" class="list__link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" class="list__link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div class="player__footer">
                            <ul class="list list--footer">
                                <li>
                                    <a href="/" class="list__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" class="list__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#/" class="list__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" class="list__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="wrapper col">
                    <div className="player__container1" style={{ "marginLeft": "4%", }}>
                        <div className="card-body">
                            <h4 className="card-title">Siguientes Canciones</h4>
                            <hr />
                            {
                                siguientes.map((aux) => {
                                    return (
                                        <>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <img src={`/images/${aux?.name}.jpeg`} alt="Album cover" width={100} height={100} />
                                                </div>
                                                <div className='col-6'>
                                                    <h5>{aux?.name}</h5>
                                                    <p key={aux?.id}>{`${aux?.artist} - ${aux?.genre}`}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Player;