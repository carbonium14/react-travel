import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Spin, Row, Col, DatePicker, Divider, Typography, Anchor, Menu, Button } from "antd";
import styles from './DetailPage.module.css'
import { ProductIntro, ProductComments } from "../../components";
import locale from 'antd/es/date-picker/locale/zh_CN';
import { commentMockData } from './mockup'
import { getProductDetail } from "../../redux/productDetail/slice";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { MainLayout } from "../../layouts/mainLayout";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addShoppingCartItem } from "../../redux/shoppingCart/slice";
const { RangePicker } = DatePicker;
type MatchParams = {
    touristRouteId: string;
}
export const DetailPage: React.FC = () => {
    const { touristRouteId } = useParams<MatchParams>()
    const loading = useSelector(state => state.productDetail.loading)
    const product = useSelector(state => state.productDetail.data)
    const error = useSelector(state => state.productDetail.error)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (touristRouteId) {
            dispatch(getProductDetail(touristRouteId))
        }
    }, [dispatch, touristRouteId])
    const jwt = useSelector(state => state.user.token) as string
    const shoppingCartLoading = useSelector(state => state.shoppingCart.loading)
    if (loading) {
        return <Spin size="large" style={{
            marginTop: '200px', 
            marginBottom: '200px', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '100%'}}></Spin>
    }
    if (error) {
        return <div>{error}</div>
    }
    return <>
        <MainLayout>
            <div className={styles["product-intro-container"]}>
                <Row>
                    <Col span={13}>
                        <ProductIntro title={product.title} shortDescription={product.description} price={product.originalPrice}
                            coupons={product.coupons} points={product.points} discount={product.price} rating={product.rating}
                            pictures={product.touristRoutePictures.map((p) => p.url)}></ProductIntro>
                    </Col>
                    <Col span={11}>
                        <Button style={{marginTop: '50px', marginBottom: '30px', display: 'block'}} 
                        type='primary' danger loading={shoppingCartLoading} onClick={() => dispatch(addShoppingCartItem({jwt, touristRouteId: product.id}))}>
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                            放入购物车
                        </Button>
                        <RangePicker locale={locale} open style={{marginTop: '20px'}}/>
                    </Col>
                </Row>
            </div>
            <Anchor className={styles["product-detail-anchor"]}>
                <Menu mode="horizontal" style={{marginTop: '1px'}}>
                    <Menu.Item key="1">
                        <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Anchor.Link href="#fees" title="费用"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
                    </Menu.Item>
                </Menu>
            </Anchor>
            <div id="feature" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>产品特色</Typography.Title>
                </Divider>
                <div dangerouslySetInnerHTML={{__html: product.features}} style={{margin: '50px'}}></div>
            </div>
            <div id="fees" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>费用</Typography.Title>
                </Divider>
                <div dangerouslySetInnerHTML={{__html: product.fees}} style={{margin: '50px'}}></div>
            </div>
            <div id="notes" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>预订须知</Typography.Title>
                </Divider>
                <div dangerouslySetInnerHTML={{__html: product.notes}} style={{margin: '50px'}}></div>
            </div>
            <div id="comments" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>用户评价</Typography.Title>
                </Divider>
                <div style={{margin: '40px'}}>
                    <ProductComments data={commentMockData}></ProductComments>
                </div>
            </div>
        </MainLayout>
    </>
}