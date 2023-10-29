import { BrowserRouter } from "react-router-dom";
import NoAuthRouter from "./NoAuthRouter";
import AdminRouter from "./AdminRouter";
import SuperAdminRouter from "./SuperAdminRouter";
import UserRouter from "./UserRouter";



const MainRouter = () => {

    let role = null;
     
      return(
          <BrowserRouter>
          {!role && <NoAuthRouter />}
          {role == "user" && <UserRouter />}
          {role == "admin" && <AdminRouter />}
          {role == "superadmin" && <SuperAdminRouter/>}
        
          </BrowserRouter>
      )
  }
  
  export default MainRouter;