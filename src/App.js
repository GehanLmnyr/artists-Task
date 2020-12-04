import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ArtistDetailes from './components/artist-detailes';
import Artists from './components/artists';
import './index.css';




function App() {
  return (
    <Router>

      <div className="header" 
      style={{
        backgroundImage: 'url("/images/cover.png")',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        height:'400px',
        backgroundRepeat: 'no-repeat'
        }}
        >
        
        <h1 className="text-center pt-5 display-1"><Link to="/"><strong className='text-custom '>Music-DB</strong></Link></h1>
      </div>


      <Switch>
            <Route exact path="/artists" component={Artists}/>
            <Route path="/artists/:id" component={ArtistDetailes}/>
            <Route exact path="/" component={Artists}/>
            <Route path="*" render={()=>(
                <div className="text-center m-5">
                    <h1 className="text-danger">404</h1>
                    <div>
                        
                        <Link  to="/" className="btn btn-danger text-decoration-none">Back to HomePage</Link>
                    </div>
                </div>
            )}
            />
        </Switch>


    </Router>
  );
}

export default App;
