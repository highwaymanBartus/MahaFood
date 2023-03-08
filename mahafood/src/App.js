import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/organism/Header";
import { HomeView } from "./views/HomeView";
import { MenuView } from "./views/MenuView";
import { GalleryView } from "./views/GalleryView";
import { ContactView } from "./views/ContactView";

const pageViews = [
  {
    id: 1,
    to: "/menu",
    text: "MENU",
    title: "MENU",
    back: { toHome: "/", textHome: "Home" },
  },
  {
    id: 2,
    to: "/gallery",
    text: "GALLERY",
    title: "GALLERY",
    back: { toHome: "/", textHome: "Home" },
  },
  {
    id: 3,
    to: "/contact",
    text: "CONTACT",
    title: "CONTACT",
    back: { toHome: "/", textHome: "Home" },
  },
];

const PageName = ({ text }) => {
  return <div style={{ display: "flex" }}>{text}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Header>
        <ul>
          <Link to="/">HomePage</Link>
          {pageViews.map((item) => {
            return (
              <Link to={item.to}>
                <PageName text={item.title} />
              </Link>
            );
          })}
        </ul>
      </Header>

      <Routes>
        <Route index element={<HomeView pageViews={pageViews} />} />
        <Route
          path="menu"
          element={
            <MenuView
              back={{ toHome: "/", textHome: "Home" }}
              title={"That is the menu view."}
            />
          }
        />
        <Route
          path="gallery"
          element={
            <GalleryView
              back={{ toHome: "/", textHome: "Home" }}
              title={"That is the gallery view."}
            />
          }
        />
        <Route
          path="contact"
          element={
            <ContactView
              back={{ toHome: "/", textHome: "Home" }}
              title={"That is the contact view."}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
