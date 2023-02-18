// interface for movie data getting from http://localhost:8200/api/list-movies
export interface MovieData{
    id: number,
    name: string,
    synopsis: string,
    release_date: string,
    released: string,
    poster_url: string,
    trailer_url: string,
    pg_rating: string,
    language: string,
    genre: string,
    duration: number,
    like_count: number,
    dislike_count: number,
    show_times: string
}