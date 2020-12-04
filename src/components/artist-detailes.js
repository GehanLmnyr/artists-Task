import React ,{ Component } from 'react';


export default class ArtistDetailes extends Component{


  constructor(){
    super();
    this.state={
      artist:{}
    }
  }
  
  renderAlbums({artist}){
    if(artist.albums && artist.albums.length > 0){
     return artist.albums.map((album, index)=>(
 
      <div className="card  my-2 mx-auto">
     <img key={index} src={`/images/albums/${album.cover}.jpg`} alt="" style={{height:'300px',width:'auto'}}/>
     </div>
 
     )
     )}
    }
    
  renderArtist({artist}) {
    if (artist) {
        return (
          <div className="bg-light">
            <div className=" w-50 p-2 text-center mx-auto ">
            <div className="card mx-auto m-3" style={{
             backgroundImage: `url('/images/covers/${artist.cover}.jpg')`,
             backgroundPosition: 'center',
             backgroundSize: '100%',
             width:'300px',
             height:'300px',
             margin:'0 auto',
             backgroundRepeat: 'no-repeat'
        }}></div>
                <h2 className="text-center text-danger">{artist.name}</h2>
                <p className="my-2">{artist.bio}</p>
              
            </div></div>
        )
    }

    return "No artist"
}

  render(){
return (
    <div>
      {this.renderArtist(this.state)}
      <h1 className="text-center m-2 d-block">Albums</h1>
      <div className="container">
          <div className="row d-flex">

        {this.renderAlbums(this.state)} 
        </div></div>

    </div>);
  }


  componentDidMount() {
    fetch(`http://localhost:4000/artists/${this.props.match.params.id}`)
        .then((response) => response.json()).then((body) => {
            // console.log(body);
            this.setState({ artist: body })
        }).catch((err) => {
            console.log(err)
        })
}

}