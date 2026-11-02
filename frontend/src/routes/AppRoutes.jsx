import {Navigate,Route,Routes} from "react-router-dom";




export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace/>}/>
        </Routes>
    )
    
}