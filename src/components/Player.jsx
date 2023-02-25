import React from "react";
import './Player.jsx.scss'

function Player() {
    return (
        <div class="wrapper">
            <div class="player__container">
                <div class="player__body">
                    <div class="body__cover">
                        <img src="http://ecx.images-amazon.com/images/I/51XSHShbPiL.jpg" alt="Album cover" />

                        <div class="range"></div>
                    </div>

                    <div class="body__info">
                        <div class="info__album">The Hunting Party</div>

                        <div class="info__song">Final Masquerade</div>

                        <div class="info__artist">Linkin Park</div>
                    </div>

                    <div class="body__buttons">
                        <ul class="list list--buttons">
                            <li>
                                <a href="/" class="list__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="list__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="list__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="player__footer">
                    <ul class="list list--footer">
                        {/*  <li><a href="#" class="list__link"><i class="fa fa-heart-o"></i></a></li>

                        <li><a href="#" class="list__link"><i class="fa fa-random"></i></a></li>

                        <li><a href="#" class="list__link"><i class="fa fa-undo"></i></a></li>

                        <li><a href="#" class="list__link"><i class="fa fa-ellipsis-h"></i></a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Player;