import '../css//App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from "./Home"
import MainContent from './MainContent'
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<MainContent />} />
      </Routes>
    </>
  );
}