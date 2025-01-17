import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./components/Upload";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import ErrorPage from "./pages/ErrorPage.js";
import Dashboard from "./pages/Dashboard.js";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import Password from "./pages/Password.js";
import Resetpwd from "./pages/Resetpwd.js";
import Settings from "./pages/Settings.js";
import UsageInfo from "./components/UsageInfo.jsx";
import Terms from "./pages/Terms";
import HelpCenter from "./pages/Help.js";
function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {location.pathname !== "/upload" &&
          location.pathname !== "/dashboard" && (
            <NavWrapper>
              <Navbar />
            </NavWrapper>
          )}
        <MainContent location={location}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/password" element={<Password />} />
            <Route path="/resetpwd" element={<Resetpwd />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/stats" element={<UsageInfo />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>
        </MainContent>
        {location.pathname !== "/upload" &&
          location.pathname !== "/dashboard" && (
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          )}
      </AppContainer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");
  * {
    outline: 1px sol
  }
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const AppContainer = styled.div`
  text-align: center;
  background-color: #05051e;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  margin-top: ${({ location }) =>
    location.pathname === "/dashboard" ? "0" : "90px"};
`;

const NavWrapper = styled.header``;

const FooterWrapper = styled.footer``;

export default App;
