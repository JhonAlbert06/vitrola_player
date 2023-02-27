import React from 'react';
import axios from 'axios';
import './Player.jsx.scss';

let currentSong = null;

function getCurrentSong() {
    return currentSong;
}

async function setCurrentSong(songs, playList) {

    if (playList?.length === 0) {

        let randomIndex = Math.floor(Math.random() * songs?.length + 1) + 0;
        currentSong = songs[randomIndex];
        console.log(randomIndex);
        console.log(currentSong);

    } else {
        currentSong = playList[0];

        try {
            await axios.delete("http://127.0.0.1:8000/Songs/List", {
                name: currentSong.name,
                genre: currentSong.genre,
                length: currentSong.length,
                artist: currentSong.artist,
                image: "String",
                music: "String"
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
          const response = await axios.get('http://127.0.0.1:8000/Songs/List'); // Poner en variable de entorno
          this.setState({ playList: response.data, loading: false });
        } catch (error) {
          this.setState({ error: error.message, loading: false });
        }
    
        try {
          const response = await axios.get('http://127.0.0.1:8000/Songs');
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
          let randomIndex = Math.floor(Math.random() * songs.length + 1) + 0;
          currentSong = songs[randomIndex];
          console.log(randomIndex);
          console.log(currentSong);
        } else {
          currentSong = playList[0];
    
          try {
            await axios.delete('http://127.0.0.1:8000/Songs/List', {
              data: {
                name: currentSong.name,
                genre: currentSong.genre,
                length: currentSong.length,
                artist: currentSong.artist,
                image: 'String',
                music: 'String',
              },
            }); // Poner en variable de entorno
          } catch (error) {}
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

        if(!loading){
            setCurrentSong(songs, playList);
        }
        

        let song = getCurrentSong();
        let siguientes = []

        let rutaImg = `/images/${song?.name}.jpeg`

        return (
            <div className='row'>
                <div className="wrapper col">
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
                                
                                
                                <audio 
                                    className="range" 
                                    // eslint-disable-next-line no-restricted-globals
                                    onEnded={()=>{location.reload()}} 
                                    autoPlay 
                                    src={`/music/${song?.name}.mp3`} 
                                    controls 
                                />
                                
                            </div>
                        </div>

                        <div className="player__footer">

                        </div>
                    </div>
                </div>

                <div className=" card player__container col" style={{ "marginTop": "3%", "marginLeft": "6%", "marginRight": "6%" }}>
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
            </div>


        );
    }
}

export default Player;