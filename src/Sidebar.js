import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useDataLayerValue } from './DataLayer';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar_logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption Icon={HomeIcon} option="Home" />
            <SidebarOption Icon={SearchIcon} option="Search" />
            <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />

            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption option={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;
