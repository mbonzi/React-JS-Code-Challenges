const { HashRouter, Switch, Route, Link } = ReactRouterDOM


const ALBUMSDATA = [
  { 
    id: 1, 
    title: "Mezzanine", 
    artist: "Massive Attack", 
    year: 1998,
    image: "https://media.istockphoto.com/photos/badger-dog-picture-id147694372?k=20&m=147694372&s=612x612&w=0&h=qdJ6KOBXxzgTZDPF4r_1d2hq5k7k6bEg5zYZIhn5vaY=",
    link: "https://www.youtube.com/watch?v=3rd1L6vMcsM"
  },
  
  { 
    id: 2, 
    title: "The Ruminant Band", 
    artist: "Fruit Bats", 
    year: 2009,
    image: "https://images.theconversation.com/files/72534/original/image-20150219-28209-ovexg7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    link: "https://www.youtube.com/watch?v=b5EcRbTWm2A"
  },
  
  { 
    id: 3, 
    title: "Blowin Smoke", 
    artist: "Teddy Swims", 
    year: 2021,
    image: "https://cdn.shopify.com/s/files/1/0111/3030/6626/products/image_cb72d6fa-be70-49c1-920c-b66a7895e140_1600x.jpg?v=1608316103",
    link: "https://www.youtube.com/watch?v=k7J62RoAwuA"
  },
  
];

function Home() {
  return (
    <h1>Home</h1>
  );
}

function Albums(props) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {props.albumsData.map(album => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`} >           
                Album {album.id}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}


function MyNav() {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/albums'>Albums</Link></li>
    </ul>
  );
}


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsData: ALBUMSDATA
    };
  };
  
  render() {
    
    const AlbumInfo = ({match}) => {
      const album = this.state.albumsData.filter(album => album.id === +match.params.albumId)[0];
      return (
        <div>
          <h2>
            {album.title} - {album.artist} - {album.year}
          </h2>
          <h3>
            <a href={album.link} target="_blank">
              {album.title}
            </a>
          </h3>
          <img src={album.image} height="200px" width="200px"/>
        </div>
      );
    };

    return (
      <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/albums/:albumId' component={AlbumInfo}/>        
       <Route exact path='/albums' render={() => <Albums albumsData={this.state.albumsData} />} />        
      </Switch>
    );
  };
}


function App() {
  return (
    <div>
      <MyNav />
      <br />
      <Main />
    </div>
  );
}


ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
