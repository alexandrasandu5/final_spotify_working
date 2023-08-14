import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { React } from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';

import Header from './Header';
import SongRow from './SongRow';

function Body({ spotify, token }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />

                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleIcon className="body_playIcon" />
                    <FavoriteIcon font_size="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item, i) => (
                    <SongRow key={i} track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;
