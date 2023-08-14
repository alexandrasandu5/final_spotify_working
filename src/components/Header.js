import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { React, useState } from 'react';
import { useDataLayerValue } from './DataLayer';
import './Header.css';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    const [search, setSearch] = useState([]);

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs or Podcasts"
                    type="text"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
