import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Slide31 from "./pages/Slide31";
import Slide6 from "./pages/Slide6";
import Slide7 from "./pages/Slide7";
import Slide8 from "./pages/Slide8";
import Slide9 from "./pages/Slide9";
import Slide10 from "./pages/Slide10";
import Slide11 from "./pages/Slide11";
import Slide12 from "./pages/Slide12";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/slide-6":
        title = "";
        metaDescription = "";
        break;
      case "/slide-7":
        title = "";
        metaDescription = "";
        break;
      case "/slide-8":
        title = "";
        metaDescription = "";
        break;
      case "/slide-9":
        title = "";
        metaDescription = "";
        break;
      case "/slide-10":
        title = "";
        metaDescription = "";
        break;
      case "/slide-11":
        title = "";
        metaDescription = "";
        break;
      case "/slide-12":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Slide31 />} />

      <Route path="/slide-6" element={<Slide6 />} />

      <Route path="/slide-7" element={<Slide7 />} />

      <Route path="/slide-8" element={<Slide8 />} />

      <Route path="/slide-9" element={<Slide9 />} />

      <Route path="/slide-10" element={<Slide10 />} />

      <Route path="/slide-11" element={<Slide11 />} />

      <Route path="/slide-12" element={<Slide12 />} />
    </Routes>
  );
}
export default App;
