
import { Link } from 'react-router-dom';

const Home=({artist})=>{ 
    return (
    <div className="col-lg-6 col-sm-8 col-xm-8 m-5 mx-auto">
        <div className="card text-center m-3" style={{
             backgroundImage: `url('/images/covers/${artist.cover}.jpg')`,
             backgroundPosition: 'center',
             backgroundSize: '100%',
             height:'620px',
             backgroundRepeat: 'no-repeat'
        }}>
            
            
            <div className="card-body">
                <Link to={`/artists/${artist.id}`} className="btn btn-danger  mb-auto">{artist.name}</Link>
            </div>
        </div>
        </div>)
}
export default Home;