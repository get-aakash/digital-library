import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SignUp from './pages/signup-signin/SignUp';
import SignIn from './pages/signup-signin/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import BookLanding from './pages/Landing/BookLanding';
import BookList from './pages/books/BookList';
import NewBook from './pages/books/NewBook';
import BorrowHistory from './pages/borrow-history/BorrowHistory';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* {public routes} */}
        <Route path='/' element = {<Home />} />
        <Route path='signup' element = {<SignUp />} />
        <Route path='signin' element = {<SignIn/>} />
        <Route path='book/:bookId' element = {<BookLanding />} />

        {/* {private routes} */}

        <Route path='dashboard' element = {<Dashboard />} />
        <Route path='admin/books' element = {<BookList />} />
        <Route path='admin/new' element = {<NewBook />} />
        <Route path='borrow-history' element = {<BorrowHistory />} />
      </Routes>
      <ToastContainer />
     
    </div>
  );
}

export default App;
