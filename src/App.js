import LayoutDashboard from "layouts/LayoutDashboard";
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));

function App() {
  const isLogin=useSelector(state=>state.user.current._id)
  const navigate=useNavigate();
  console.log(isLogin)
  useEffect(() => {
    navigate("/campaign")
  }, [isLogin])
  
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          {isLogin && <Route path="/" element={<DashboardPage></DashboardPage>}></Route>}
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        {!isLogin && <Route path="/sign-In" element={<SignInPage></SignInPage>}></Route>}
      </Routes>
      ;
    </Suspense>
  );
}

export default App;
