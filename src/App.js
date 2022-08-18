
import './App.css';
import request from './api/Request';

/*Component */
import Row from "./component/Row";
import Banner from './component/Banner';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row title="NETFLIX ORGINLAS" 
           fetchUrl={request.fetchNetflixOriginals}
           isLargeRow={true}
           />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchAcitonMoives}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMoives}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMoives}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      <Footer/>
    </div>
  );
}

export default App;
