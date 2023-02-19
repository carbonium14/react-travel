import React from "react";
import { useParams } from 'react-router-dom'
type MatchParams = {
    touristRouteId: string;
}
export const DetailPage: React.FC = () => {
    const params = useParams<MatchParams>()
    return <h1>旅游详情,{params.touristRouteId}</h1>
}