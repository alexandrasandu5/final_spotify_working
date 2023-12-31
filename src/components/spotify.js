export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectURI = 'http://localhost:3000';

const clientID = '75d659cdca094dacab8e83968344da34';
/*const secretID = 'c7dc2e977cde4ff694616f6e9ae9acef';*/

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'app-remote-control',
    'user-read-playback-position',
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
];

export const getTokenFromURL = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;
