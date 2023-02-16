import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'
export const SideMenu:React.FC=()=>{
    return (
        <Menu mode={'vertical'} className={styles['side-menu']} 
            items={sideMenuList.map((m)=>({
                label:m.title,
                icon:<GifOutlined></GifOutlined>,
                key:m.title,
                children:m.subMenu.map((sm)=>({
                    label:sm.title,
                    icon:<GifOutlined></GifOutlined>,
                    key:sm.title,
                    children:sm.subMenu.map((sms)=>({
                        label:sms,
                        icon:<GifOutlined></GifOutlined>,
                        key:sms
                    }))
                }))
            }))}
        ></Menu>
    )
}