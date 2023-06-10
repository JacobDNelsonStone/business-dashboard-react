import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Wrapper, Container1 } from "./components"
import { EmployeeProvider } from "./ctx/EmployeeContext";
import { HomePage, LoginPage, SignupPage, MeetingPage, MessageBoardPage, DepartmentStatsPage } from "./pages";


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'


function App() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <Wrapper>
          <Header />
          <div className="pt-3 px-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/messageBoard" element={<MessageBoardPage />} />            
              <Route path="/department" element={<DepartmentStatsPage />} />
              <Route path="/meetingPage" element={<MeetingPage />} />
            </Routes>
          </div>
        </Wrapper>
      </EmployeeProvider>
    </BrowserRouter>
  );
}

export default App;
