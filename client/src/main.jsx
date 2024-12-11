import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './SecondaryComponents/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './SecondaryComponents/Footer'
import Home from './HomeComponents/Home'
import About from './AboutComponents/About'
import Contact from './ContactComponents/Contact'
import Loan from './LoanprogramComponents/Loan'
import Pages from './PageComponents/Pages'
import Accept from './AcceptanceComponents/Accept'
import Personal from './PageComponents/PersonalComponent/Personal'
import Team from './PageComponents/OurTeamComponent/Team'
import Customer from './PageComponents/CustomerReviewComponent/Customer'
import Career from './PageComponents/CareerComponent/Career'
import Faq from './PageComponents/FaqComponent/Faq'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/loan' element={<Loan/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/accept' element={<Accept/>}/>
        <Route path='/personal' element={<Personal/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='customer' element={<Customer/>}/>
        <Route path='career' element={<Career/>}/>
        <Route path='faq' element={<Faq/>}/> 
       </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
