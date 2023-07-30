
import './App.css';

//components
import NavBar from './components/NavBar';
import CrudApplication from './components/CrudApplications';
import ShowUsers from './components/ShowUsers';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
        <Route path="/" element={<CrudApplication />} />
        <Route path="/show" element={<ShowUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
        {/*<Route element={<NotFound />} />*/}
     </Routes>
    </BrowserRouter>
  );
}

export default App;
