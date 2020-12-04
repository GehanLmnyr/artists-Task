




const Albums=({albums})=>{ 
    return ()=>{
        if(albums && albums.length>0){
            return albums.map(({album})=>{
                (
                    <div className="card text-center m-3" style={{
                            backgroundImage: `url('/images/albums/${album.cover}.jpg')`,
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            height:'100px',
                            backgroundRepeat: 'no-repeat'
                    }}>                       
                    </div>
                )
            })
        }
    }
}
export default Albums;