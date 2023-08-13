import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import Login from './Login';
import Player from './Player';
import { getTokenFromURL } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromURL();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            });

            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                console.log('user:', user);

                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                });
            });

            spotify.getPlaylist('3nCaHlz6dZbNGI4Maxz40u').then((response) =>
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discover_weekly: response,
                })
            );
        }
    }, []);

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
}

export default App;
