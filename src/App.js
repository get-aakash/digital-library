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
import PrivateRoute from './components/private-route/PrivateRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './pages/signup-signin/userSlice';
import { auth } from './firebase-config/firebaseConfig';
import { autoLogin } from './pages/signup-signin/userAction';

function App() {
  const dispatch = useDispatch()
  onAuthStateChanged(auth, (user)=>{
  // const obj = {
  //   uid: user?.uid,
  //   email:user?.email,
  //   dispalayName:user?.displayName,
  // }
    //dispatch(setUser(obj))
    dispatch(autoLogin(user?.uid))
  })
  return (
    <div className="App">
      <Routes>
        {/* {public routes} */}
        <Route path='/' element = {<Home />} />
        <Route path='signup' element = {<SignUp />} />
        <Route path='signin' element = {<SignIn/>} />
        <Route path='book/:bookId' element = {<BookLanding />} />

        {/* {private routes} */}

        <Route 
        path='dashboard' 
        element = {
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } 
      />
        <Route path='admin/books' element = {
        <PrivateRoute><BookList /></PrivateRoute>} />
        <Route path='admin/new' element = {<PrivateRoute><NewBook />
          </PrivateRoute>} />
        <Route path='borrow-history' element = {<BorrowHistory />} />
      </Routes>
      <ToastContainer />
     
    </div>
  );
}

export default App;
