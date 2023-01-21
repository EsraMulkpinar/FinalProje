import './App.css'
import 'swiper/css/bundle'
import Main from './pages/Main'
import { BrowserRouter, Route,  Switch } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import TVSeries from './pages/TVSeries'
import Movies from './pages/Movies'
import MovieInfo from './pages/MovieInfo'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Footer from './components/Layout/Footer/Footer'
import TVSeriesInfo from './pages/TVSeriesInfo'

function App() {
  return (
    <div className="relative">
     
      <BrowserRouter >
      <Navbar />
        
        <Switch>
          <Route exact path="/">
          <Main />
          </Route>
          <Route exact  path="/MovieInfo/:id" >
          <MovieInfo />
          </Route>
          <Route path="/Movies">
          <Movies />
          </Route>
          <Route path="/TVSeries" >
          <TVSeries />
          </Route>
          <Route exact path="/TVSeriesInfo/:id" >
          <TVSeriesInfo />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
