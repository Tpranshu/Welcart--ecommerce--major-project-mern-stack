import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import FeaturesPage from './pages/FeaturesPage'
import Faq from './components/Faq'
import TestimonialPage from './pages/TestimonialPage'
import ContactUsPage from './pages/ContactUsPage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from '../src/pages/AboutPage'
import AdminHomePage from './pages/Admin/AdminHomePage'

import AdminMaincategoryPage from './pages/Maincategory/AdminMaincategoryPage'
import AdminMaincategoryCreatePage from './pages/Maincategory/AdminMaincategoryCreatePage'
import AdminMaincategoryUpdatePage from './pages/Maincategory/AdminMaincategoryUpdatePage'


import AdminSubcategoryPage from './pages/Subcategory/AdminSubcategoryPage'
import AdminSubcategoryCreatePage from './pages/Subcategory/AdminSubcategoryCreatePage'
import AdminSubcategoryUpdatePage from './pages/Subcategory/AdminSubcategoryUpdatePage'

import AdminBrandPage from './pages/Brand/AdminBrandPage'
import AdminBrandCreatePage from './pages/Brand/AdminBrandCreatePage'
import AdminBrandUpdatePage from './pages/Brand/AdminBrandUpdatePage'

import AdminFeaturePage from './pages/Feature/AdminFeaturePage'
import AdminFeatureCreatePage from './pages/Feature/AdminFeatureCreatePage'
import AdminFeatureUpdatePage from './pages/Feature/AdminFeatureUpdatePage'


import AdminFaqPage from './pages/Faq/AdminFaqPage'
import AdminFaqCreatePage from './pages/Faq/AdminFaqCreatePage'
import AdminFaqUpdatePage from './pages/Faq/AdminFaqUpdatePage'

import AdminSettingPage from './pages/Setting/AdminSettingPage'

import AdminProductPage from './pages/Product/AdminProductPage'
import AdminProductCreatePage from './pages/Product/AdminProductCreatePage'
import AdminProductUpdatePage from './pages/Product/AdminProductUpdatePage'

import SignupPage from './pages/user/SignupPage'
import LoginPage from './pages/user/loginPage'

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/feature' element={<FeaturesPage />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />


        {/* admin routes */}
        <Route path='/admin' element={<AdminHomePage />} />

        <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
        <Route path='/admin/maincategory/create' element={<AdminMaincategoryCreatePage />} />
        <Route path='/admin/maincategory/update/:id' element={<AdminMaincategoryUpdatePage />} />

        <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
        <Route path='/admin/subcategory/create' element={<AdminSubcategoryCreatePage />} />
        <Route path='/admin/subcategory/update/:id' element={<AdminSubcategoryUpdatePage />} />


        <Route path='/admin/brand' element={<AdminBrandPage />} />
        <Route path='/admin/brand/create' element={<AdminBrandCreatePage />} />
        <Route path='/admin/brand/update/:id' element={<AdminBrandUpdatePage />} />

        <Route path='/admin/feature' element={<AdminFeaturePage />} />
        <Route path='/admin/feature/create' element={<AdminFeatureCreatePage />} />
        <Route path='/admin/feature/update/:id' element={<AdminFeatureUpdatePage />} />

        <Route path='/admin/faq' element={<AdminFaqPage />} />
        <Route path='/admin/faq/create' element={<AdminFaqCreatePage />} />
        <Route path='/admin/faq/update/:id' element={<AdminFaqUpdatePage />} />

        <Route path='/admin/setting' element={<AdminSettingPage />} />

        <Route path='/admin/product' element={<AdminProductPage />} />
        <Route path='/admin/product/create' element={<AdminProductCreatePage />} />
        <Route path='/admin/product/update/:id' element={<AdminProductUpdatePage />} />
        

        <Route path='/*' element={<ErrorPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App


/*
notes --
1. ab react-router-dom ko implement krege
2. theme ke liye platform --> themewagon



*/