import React from "react";
import styles from './ShoppingCart.module.css'
import { MainLayout } from "../../layouts/mainLayout";
import { Row, Col, Affix } from "antd";
import { ProductList, PaymentCard } from "../../components";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { clearShoppingCart, checkout } from "../../redux/shoppingCart/slice";
import { useNavigate } from "react-router-dom";
export const ShoppingCart: React.FC = () => {
    const loading = useSelector(state => state.shoppingCart.loading)
    const shoppingCartItems = useSelector(state => state.shoppingCart.items)
    const jwt = useSelector(state => state.user.token) as string
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return <>
        <MainLayout>
            <Row>
                <Col span={16}>
                    <div className={styles["product-list-container"]}>
                        <ProductList data={shoppingCartItems.map(s => s.touristRoute)}></ProductList>
                    </div>
                </Col>
                <Col span={8}>
                    <Affix>
                        <div className={styles["payment-card-container"]}>
                            <PaymentCard 
                                loading={loading} 
                                originalPrice={shoppingCartItems.map(s=> s.originalPrice).reduce((pre, cur) => pre + cur, 0)}
                                price={shoppingCartItems.map(s=> s.originalPrice * (s.discountPresent ? s.discountPresent : 1)).reduce((pre, cur) => pre + cur, 0)}
                                onCheckout={() => {
                                    if (shoppingCartItems.length <= 0) {
                                        return
                                    }
                                    dispatch(checkout(jwt))
                                    navigate('/placeOrder')
                                }}
                                onShoppingCartClear={() => dispatch(clearShoppingCart({
                                    jwt, 
                                    itemIds: shoppingCartItems.map(s => s.id)
                                }))}
                            ></PaymentCard>
                        </div>
                    </Affix>
                </Col>
            </Row>
        </MainLayout>
    </>
}