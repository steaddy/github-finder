import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import {GithubProvider} from "./context/github/GithubContex";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <BrowserRouter>
                    <div className="flex flex-col justify-between min-h-screen">
                        <Navbar title='Github Finder'/>
                        <main className='container mx-auto px-3 pb-12'>
                            <Alert />
                            <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/about' element={<About/>}/>
                                <Route path='/user/:login' element={<User/>}/>
                                <Route path='/notfound' element={<NotFound/>}/>
                                <Route path='/*' element={<NotFound/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
