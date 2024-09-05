
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import CartPage from './Pages/CartPage'
import PrivateRoutes from './Routes/PrivateRoutes'
import BabyPage from './Pages/MultiproductPages/BabyPage'
import BeautyPage from './Pages/MultiproductPages/BeautyPage'
import MensClothingPage from './Pages/MultiproductPages/MensClothingPage'
import MensClothingSinglePage from './Pages/SingleProductPages/MensClothingSinglePage'
import BeautySinglePage from './Pages/SingleProductPages/BeautySinglePage'
import BabySinglePage from './Pages/SingleProductPages/BabySinglePage'
import WomenClothingPage from './Pages/MultiproductPages/WomenClothingPage'
import WomenClothingSinglePage from './Pages/SingleProductPages/WomenClothingSinglePage'
import ComputerPage from './Pages/MultiproductPages/ComputerPage'
import ComputerSinglePage from './Pages/SingleProductPages/ComputerSinglePage'
import PatioCoversPage from './Pages/MultiProductPages/PatioCoversPage'
import PatioCoversSinglePage from './Pages/SingleProductPages/PatioCoversSinglePage'
import FurniturePage from './Pages/MultiproductPages/FurniturePage'
import FurnitureSinglePage from './Pages/SingleProductPages/FurnitureSinglePage'
import RandomPage from './Pages/MultiproductPages/RandomPage'
import RandomSinglePage from './Pages/SingleProductPages/RandomSinglePage'


function App() {


  return (
    <>
    <Routes>

    <Route path='/' element={<Home/>}/>

    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/cart' element={ <PrivateRoutes> <CartPage/> </PrivateRoutes>}/>
    <Route path='/baby' element={<BabyPage/>} />
    <Route path='/baby/:_id' element={<BabySinglePage/>}/>
    <Route path='/beauty' element={<BeautyPage/>}/>
    <Route path='/beauty/:_id' element={<BeautySinglePage/>}/>
    <Route path='/mens-clothing' element={<MensClothingPage/>} />
    <Route path='/mens-clothing/:_id' element={<MensClothingSinglePage/>} />
    <Route path='/women-clothing' element={<WomenClothingPage/>} />
    <Route path='/women-clothing/:_id' element={<WomenClothingSinglePage/>} />
    <Route path='/computer' element={<ComputerPage/>} />
    <Route path='/computer/:_id' element={<ComputerSinglePage/>} />
    <Route path='/patio-covers' element={<PatioCoversPage/>} />
    <Route path='/patio-covers/:_id' element={<PatioCoversSinglePage/>} />
    <Route path='/furniture' element={<FurniturePage/>} /> 
    <Route path='/furniture/:_id' element={<FurnitureSinglePage/>} /> 
    <Route path='/random' element={<RandomPage/>}/> 
    <Route path='/random/:_id' element={<RandomSinglePage/>}/> 
    </Routes>
    </>
  )
}

export default App
