import React, { useState } from 'react'
import { Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components'
import { useNavigate } from 'react-router-dom';
import { navItem } from './Menubar';

function MenuMobile() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
        setOpen(data.open);
        console.log(data);
    };

    return (
        <div className='_menuMobile'>
            <Menu open={open} onOpenChange={onOpenChange} >
                <MenuTrigger disableButtonEnhancement>
                    <span id='clicked' for="check">
                        <div id={open ? 'check' : ''} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>

                        <MenuItem onClick={() => navigate('/')}>Home </MenuItem>
                        <MenuItem onClick={() => navigate('/skills')}>Skills</MenuItem>
                        <MenuItem onClick={() => navigate('/exp')}>Experience</MenuItem>

                        <MenuItem onClick={() => navigate('/')}>Project</MenuItem>
                        <MenuItem onClick={() => navigate('/contact')}>Contact</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    )
}

export default MenuMobile