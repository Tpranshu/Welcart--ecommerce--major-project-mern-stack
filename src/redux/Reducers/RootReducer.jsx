import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import ProductReducer from "./ProductReducer";
import FeatureReducer from "./FeatureReducer";
import FaqReducer from "./FaqReducer";
import BrandReducer from "./BrandReducer";
import SettingReducer from "./SettingReducer";

import CartReducer from "./CartReducer";
import WhislistReducer from "./WhislistReducer";
import CheckoutReducer from "./CheckoutReducer";
import NewsletterReducer from "./NewsletterReducer";
import ContactUsReducer from "./ContactUsReducer";
import UserReducer from "./UserReducer";
import TestimonialReducer from "./TestimonialReducer";



export default combineReducers({  // ye combineReducers() hai jo sabhi reducer ko combine krke provide krta hai aur iske parameter me {} object dete hai
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    ProductStateData: ProductReducer,
    FeatureStateData: FeatureReducer,
    FaqStateData: FaqReducer,
    BrandStateData: BrandReducer,
    SettingStateData: SettingReducer,
    CartStateData: CartReducer,
    WhislistStateData: WhislistReducer,
    CheckoutStateData: CheckoutReducer,
    NewsletterStateData: NewsletterReducer,
    ContactUsStateData: ContactUsReducer,
    UserStateData: UserReducer,
    TestimonialStateData: TestimonialReducer,

})

// apne sabhi reducer ko yaha per combineReducers() me likh dege