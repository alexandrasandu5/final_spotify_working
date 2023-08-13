import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

import { Grid, Slider } from '@mui/material';
import React from 'react';

import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer_left">
                <div className="footer_albumLogo">
                    <AlbumLogo trackData={props.trackData} />
                </div>

                <div className="footer_songInfo">
                    {/* <SongInfo trackData={props.trackData} /> */}
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleIcon className="footer_icon" fontSize="large" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </div>
        </div>
    );
}

function AlbumLogo({ trackData }) {
    return (
        <div className="footer_albumLogo">
            {trackData && trackData.trackImg && (
                <img src={trackData.trackImg} alt="" />
            )}
        </div>
    );
}

function SongInfo({ trackData }) {
    return (
        <div className="footer_songInfo">
            <p>{trackData.trackName}</p>
            <p>
                <small>{trackData.trackArtist}</small>
            </p>
        </div>
    );
}

export default Footer;
