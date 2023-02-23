import React from "react";
import styles from './ProductIntro.module.css'
import { Typography, Carousel, Image, Rate, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
interface PropsType {
    title: string;
    shortDescription: string;
    price: string | number;
    coupons: string;
    points: string;
    discount: string;
    rating: string | number;
    pictures: string[];
}
const columns: ColumnsType<RowType> = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        align: 'left',
        width: 120
    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
        align: 'center'
    }
]
interface RowType {
    title: string;
    description: string | number | JSX.Element;
    key: number;
}
export const ProductIntro: React.FC<PropsType> = ({ title, shortDescription, price, coupons, discount, rating, pictures }) => {
  const tabelDataSource: RowType[] = [
        {
            key: 0,
            title: "路线名称",
            description: title,
        },
        {
            key: 1,
            title: "价格",
            description: (
              <>
                &yen;&nbsp;
                <Typography.Text type="danger" strong>
                  {price}
                </Typography.Text>
              </>
            ),
        },
        {
            key: 2,
            title: "限时抢购折扣",
            description: discount !== price ? (
              <>
                &yen; <Typography.Text delete>{price}</Typography.Text>&nbsp;&nbsp;
                <Typography.Text type="danger" strong>
                    &yen; {discount}
                </Typography.Text>
              </>
            ) : (
              "暂无折扣"
            ),
        },
        {
            key: 3,
            title: "领取优惠",
            description: coupons ? discount : "无优惠券可领",
        },
        {
            key: 4,
            title: "线路评价",
            description: (
              <>
                <Rate allowHalf defaultValue={+rating} />
                <Typography.Text style={{ marginLeft: '10px' }}>
                  {rating === null ? 0 : rating} 星
                </Typography.Text>
              </>
            ),
        },
    ]
    return <div className={styles["intro-container"]}>
        <Typography.Title level={4}>{title}</Typography.Title>
        <Typography.Text>{shortDescription}</Typography.Text>
        <div className={styles["intro-detail-content"]}>
            <Typography.Text style={{marginLeft: '20px'}}>
                &yen;&nbsp;<span className={styles["intro-detail-strong-text"]}>{price}</span> /人起
            </Typography.Text>
            <Typography.Text style={{marginLeft: '50px'}}>
                <span className={styles["intro-detail-strong-text"]}>{rating === null ? 0 : rating}</span> 分
            </Typography.Text>
        </div>
        <Carousel autoplay slidesToShow={3}>
            {pictures.map((p) => <Image key={p} height={150} src={p}></Image>)}
        </Carousel>
        <Table<RowType> columns={columns} dataSource={tabelDataSource} size='small' bordered={false} pagination={false}></Table>
    </div>
}