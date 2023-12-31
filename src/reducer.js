export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // trackData: {
    //     trackKey: [0, 0],
    //     track: `${PLAYLIST[0].playlistData[0].link}`,
    //     trackName: `${PLAYLIST[0].playlistData[0].songName}`,
    //     trackImg: `${PLAYLIST[0].playlistData[0].songimg}`,
    //     trackArtist: `${PLAYLIST[0].playlistData[0].songArtist}`,
    // },
    isPlaying: false,
    //remove token value after finished developing
    token: null, //'BQD3_XrGtc-dmvOI1iRXkThPFkVgPeI4c-yqRkCE_GMr7XUcniJO9c1Np3o5cCu9zyEzZyg0Y52Zg7I08OuxXm4ZWKqATRA12K1wzfDCMEjPMDHOIFTZLrJlYXzGwi8YXjjMmBH6nJkSAwXAn1lKuAS0FsHOLFerk_HD4kJ6BGW8PA6nl2-fIeAMGW3eTnPESEaeAaYxH_JuJ6gC',
};

const reducer = (state = initialState, action) => {
    console.log(action);

    //Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case 'SET_PLAY_SONG':
            return {
                ...state,
                playing: action.playing,
            };
        case 'SEARCH_TRACKS':
            return {
                ...state,
                tracks: action.tracks,
            };
        case 'SEARCH_ARTISTS':
            return {
                ...state,
                artists: action.artists,
            };

        default:
            return state;
    }
};

export default reducer;
