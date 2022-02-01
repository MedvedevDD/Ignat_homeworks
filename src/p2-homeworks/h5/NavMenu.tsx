import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from "react-router-dom";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button style={{margin:"10px", color: "gold", fontSize:"20px", fontWeight: "bold", border:"2px solid black"}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                NAVIGATION
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div onClick={handleClose} style={{margin:"10px", color: "gold", fontSize:"20px", fontWeight: "bold", border:"2px solid black", borderRadius:"5px"}}>
                    <NavLink to="/pre-junior">Пре-Джун </NavLink>
                </div>
                <div onClick={handleClose} style={{margin:"10px", color: "gold", fontSize:"20px", fontWeight: "bold", border:"2px solid black", borderRadius:"5px"}}>
                    <NavLink to="/junior">Джун </NavLink>
                </div>
                <div onClick={handleClose} style={{margin:"10px", color: "gold", fontSize:"20px", fontWeight: "bold", border:"2px solid black", borderRadius:"5px"}}>
                    <NavLink to="/junior+">Джун+ </NavLink>
                </div>
                {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                {/*<MenuItem onClick={handleClose}>My account</MenuItem>*/}
                {/*<MenuItem onClick={handleClose}>Logout</MenuItem>*/}
            </Menu>
        </div>
    );
}