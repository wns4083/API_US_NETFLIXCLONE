const API_KEY="aa3da11f5b896b9d6b5b97c9ddbb63c1";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko`,
    fetchAcitonMoives: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko`,
    fetchComedyMoives: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko`,
    fetchHorrorMoives: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko`,
    fetchRomanceMoives: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko`,
}

export default request;