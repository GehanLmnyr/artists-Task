import React ,{ Component } from 'react';
import Home from './Home'


export default class Artists extends Component{
  constructor(){
    super();
    this.state={
      artists:[]
    }
    this.baseURL = "  http://localhost:4000/artists";
  } 
   componentDidMount() {

    fetch(this.baseURL).then((response) => {
            console.log(response)
            return response.json()
        }).then((body) => {
            this.setState({ artists: body })
            console.log(body)
        }).catch((err) => {
            console.log(err)
        })
}
  render(){
   return (<div>{this.renderArtists(this.state)}</div>);
  }
  renderArtists({ artists }) {
    if (artists && artists.length > 0) {
        return artists.map((artist) => (
            <Home artist={artist} key={artist.id}/>
        ))
    }

    return "No artists"
}

}