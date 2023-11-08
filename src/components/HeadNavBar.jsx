import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
const items = [
    {
        label: (<NavLink to='/'>A Class</NavLink>),
        key: 'a',
        icon: <MailOutlined />,
    },
    {
        label: 'B Class',
        key: 'b',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: (<Link to='/b/b1'>B 1 页面</Link>),
                        key: 'setting:1',
                    },
                    {
                        label: (<NavLink to='/b2'>B 2 页面</NavLink>),
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                        disabled: true,
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                        disabled: true,
                    },
                ],
            },
        ],
    },
    {
        label: (<NavLink to='/c'>C Class</NavLink>),
        key: 'c',
        icon: <AppstoreOutlined />,
    },
];

const HeadNavBar = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ justifyContent: 'center' }} />;

};

export default HeadNavBar;