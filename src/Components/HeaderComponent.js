import React from 'react';
import '../asserts/css/header.css'
const HeaderComponents = ({menuItems}) => {
    return (
        <ul className='menu'>
            {
                menuItems.map((item) => {
                    return (
                        <li href={item["path"]}>{item["name"]}</li>
                    );
                })
            }
        </ul>
    );
}

export default HeaderComponents;