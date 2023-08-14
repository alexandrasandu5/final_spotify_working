import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './components/DataLayer';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromURL } from './components/spotify';

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

            // search tracks whose name, album or artist contains 'Love'
            spotify
                .searchTracks('Love')
                .then((data) =>
                    dispatch({ type: 'SEARCH_TRACKS', searchedTracks: data })
                );

            // search artists whose name contains 'Love'
            spotify
                .searchArtists('input')
                .then((data) =>
                    dispatch({ type: 'SEARCH_ARTISTS', searchedArtists: data })
                );
        }
    }, []);

    return (
        <div className="app">
            {token ? <Player spotify={spotify} token={token} /> : <Login />}
        </div>
    );
}

export default App;
