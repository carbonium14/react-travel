import styles from './App.module.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, SigninPage, RegisterPage, DetailPage, SearchPage, ShoppingCart, PlaceOrder } from './pages';
import { useSelector, useAppDispatch } from './redux/hooks';
import { useEffect } from 'react';
import { getShoppingCart } from './redux/shoppingCart/slice';
const PrivateRoute = ({children}) => {
  const jwt = useSelector(state => state.user.token)
  return jwt ? children : <Navigate to='/signin'></Navigate>
}
function App() {
  const jwt = useSelector(state => state.user.token)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt))
    }
  }, [dispatch, jwt])
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/signin' element={<SigninPage></SigninPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/detail/:touristRouteId' element={<DetailPage></DetailPage>}></Route>
          <Route path='/search/' element={<SearchPage></SearchPage>}>
            <Route path=':keywords' element={<SearchPage></SearchPage>}></Route>
          </Route>
          <Route path='/shoppingCart' element={<PrivateRoute><ShoppingCart></ShoppingCart></PrivateRoute>}></Route>
          <Route path='/placeOrder' element={<PrivateRoute><PlaceOrder></PlaceOrder></PrivateRoute>}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
