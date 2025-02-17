import Header from './components/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
      <h1 className="text-main-color bg-red-400">Hello Tailwind Css</h1>
    </div>
  );
}
