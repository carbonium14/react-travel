import React from "react";
import styles from './SearchPage.module.css'
import { Header, Footer, FilterArea, ProductList } from "../../components";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Spin } from 'antd'
import { searchProduct } from "../../redux/productSearch/slice";
import { useSelector, useAppDispatch } from "../../redux/hooks";
type MatchParams = {
    keywords: string;
}
export const SearchPage: React.FC = () => {
    const { keywords } = useParams<MatchParams>()
    const loading = useSelector(state => state.productSearch.loading)
    const error = useSelector(state => state.productSearch.error)
    const pagination = useSelector(state => state.productSearch.pagination)
    const productList = useSelector(state => state.productSearch.data)
    const dispatch = useAppDispatch()
    const location = useLocation()
    useEffect(() => {
        dispatch(searchProduct({nextPage: 1, pageSize: 10, keywords: keywords || ''}))
    }, [dispatch, keywords, location])
    const onPageChange = (nextPage, pageSize) => {
        dispatch(searchProduct({nextPage, pageSize, keywords: keywords || ''}))
    }
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
        <Header></Header>
        <div className={styles["page-content"]}>
            <div className={styles["product-list-container"]}>
                <FilterArea></FilterArea>
            </div>
            <div className={styles["product-list-container"]}>
                <ProductList data={productList} paging={pagination} onPageChange={onPageChange}></ProductList>
            </div>
        </div>
        <Footer></Footer>
    </>
}