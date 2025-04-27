import { useEffect, useRef, useState } from "react";

const Content = ({ menuState }) => {

    const [movie, setMovie] = useState([])
    const [check, setCheck] = useState(false)

    const query = useRef("")

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = query.current.value.trim();
        if (searchQuery) {
            getMovies(searchQuery);
        }
    }
    

    const getMovies = (searchQuery) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6bb6ecbbe908657ad66ad7be90c01ef9&query=${searchQuery}`)
            .then((data) => data.json())
            .then(res => {
                setMovie(res.results)
                setCheck(res.results.length === 0);
            })
    }

    useEffect(() => {
        if (menuState) {
            console.log(menuState);
            
            query.current.value = menuState;
            getMovies(menuState);
        }
        else {
            query.current.value = "Avengers";
            getMovies("Avengers");
        }

    }, [menuState]);


    const getTrailer = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6bb6ecbbe908657ad66ad7be90c01ef9`)
            .then((data) => data.json())
            .then((res) => {

                const trailer = res.results.find(video => video.type === "Trailer" && video.site === "YouTube");

                if (trailer) {
                    window.open(`https://www.youtube.com/watch?v=${trailer.key}`);
                } else {
                    alert("Trailer not available 😔");
                }
            })
    }
    return (
        <>
            <hr />
            <hr />
            <div className="d-flex  justify-content-between align-items-center" style={{ backgroundColor: "#2b2b2b", color: "white" }} width="100%">
                <h3 style={{ backgroundColor: "transparent" }}>
                    🎬🍿✨ Latest Releases....</h3>

                <form onSubmit={handleSearch}>
                    <input defaultValue="" ref={query} className="ps-2" placeholder="search here...." type="text" style={{ outline: "none", border: "none", height: "40px", width: "300px" }} />

                    <button type="submit" style={{ outline: "none", border: "grey", height: "40px", width: "100px", backgroundColor: "#890000" }}>Search</button>
                </form>
            </div>

            <hr /><hr />

            {check && <h4>No Such Data Found......!! ☹️</h4>}

            <div className="container  d-flex flex-wrap">
                {
                    movie.map((val, index) => {
                        if (!val.poster_path) return null;

                        return (
                            <div key={index} className="card m-3 d-flex flex-column" style={{ width: '14rem', minHeight: '470px', border: "none", backgroundColor: "#2b2b2b" }}>
                                <img className="card-img-top" height={300} src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} alt="Card image cap" />
                                <div className="card-body d-flex flex-column justify-content-between text-white">
                                    <h5 className="card-title">{val.original_title}</h5>
                                    <p className="card-text flex-grow-1" style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical"
                                    }}>{val.overview}</p>
                                    <a href="#" onClick={() => getTrailer(val.id)} style={{ backgroundColor: "#890000" }} className="btn text-white d-block">Trailer</a>
                                </div>
                            </div>

                        )

                    })

                }

            </div>

        </>
    )
}

export default Content;