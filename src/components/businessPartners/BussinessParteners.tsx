import styles from './BussinessParteners.module.css'
import { Row, Divider, Col, Typography } from 'antd'
import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';
const companies = [
    { src: image1, title: "Microsoft"},
    { src: image2, title: "Youtube"},
    { src: image3, title: "Ins"},
    { src: image4, title: "Facebook"}
]
export const BussinessParteners:React.FC=()=>{
    return (
        <div className={styles.content}>
            <Divider orientation='left'>
                <Typography.Title level={3}>合作企业</Typography.Title>
            </Divider>
            <Row>
                {companies.map((c,index)=>(
                    <Col span={6} key={"bussiness-partner-" + index}>
                        <img src={c.src} alt="图片" style={{width:'80%',display:'block',marginLeft:'auto',marginRight:'auto'}}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}