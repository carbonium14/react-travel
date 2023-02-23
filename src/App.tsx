import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, SigninPage, RegisterPage, DetailPage, SearchPage } from './pages';
function App() {
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
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
