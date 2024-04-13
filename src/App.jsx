/* eslint-disable no-unused-vars */
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./components/Routes/Routes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
