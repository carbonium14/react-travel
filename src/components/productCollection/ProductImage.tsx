import { Image, Typography } from 'antd'
import { Link } from 'react-router-dom'
interface PropsType {
    id:string|number;
    size:'large'|'small';
    imageSrc:string;
    price:string|number;
    title:string;
}
export const ProductImage:React.FC<PropsType>=({id,size,imageSrc,price,title})=>{
    return <>
        {size==='large'?<Image src={imageSrc} height={285} width={485}></Image>:<Image src={imageSrc} height={120} width={240}></Image>}
        <Link to={`/detail/${id}`}>
            <Typography.Text type='secondary'>{title.slice(0,25)}</Typography.Text>
            <Typography.Text type='danger' strong>￥{price}起</Typography.Text>
        </Link>
    </>
}