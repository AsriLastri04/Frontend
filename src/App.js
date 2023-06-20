import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateMovie from "./pages/Create";
import PopularMovie from "./pages/Popular";
import NowPlayingMovie from "./pages/NowPlaying";
import TopRatedMovie from "./pages/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/Detail";
function App() { 
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie/>}></Route>
          <Route path="/movie/popular" element={<PopularMovie />}></Route>
          <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
          <Route path="/movie/top" element={<TopRatedMovie />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
