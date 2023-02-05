import React, { useState } from 'react'
import { Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components'

function MenuMobile() {
    const [open, setOpen] = React.useState(false);

    const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
        setOpen(data.open);
        console.log(data.open);
    };

    return (
        <div className='_menuMobile'>
            <Menu open={open} onOpenChange={onOpenChange}>
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
                        <MenuItem>Home </MenuItem>
                        <MenuItem>Skills</MenuItem>
                        <MenuItem>Project</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    )
}

export default MenuMobile