
import PricingPage from "../Pages/PricingPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../Pages/SignInPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function AppRoutes(props) {

    return (
        <Router>
    <Routes>
        
   <Route path="/pricepage" element={<ProtectedRoute><PricingPage/></ProtectedRoute>} />
    <Route path="/" element={<LoginForm />} />

    </Routes>
    </Router>
    )
    }
    
    export default AppRoutes;