import { useNavigate, NavigateFunction } from 'react-router-dom'
export interface RouteComponentProps {
    navigate: NavigateFunction;
}
export const withRouter = (Component) => {
    const wrapper = (props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate()
        return <Component navigate={navigate} {...props}></Component>
    }
    return wrapper
}