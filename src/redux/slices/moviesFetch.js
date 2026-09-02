import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3001/movies";

// GET 
export const getMovies = createAsyncThunk(
    "movies/getAllMovies",
    async () => {
        const res = await axios.get(API);
        return res.data;
    }
);

// ADD 
export const addMovie = createAsyncThunk(
    "movies/addMovie",
    async (movie) => {
        const res = await axios.post(API, movie);
        return res.data;
    }
);

// EDIT 
export const editMovie = createAsyncThunk(
    "movies/editMovie",
    async ({ id, movie }) => {
        const res = await axios.put(`${API}/${id}`, movie);
        return res.data;
    }
);

// DELETE
export const deleteMovie = createAsyncThunk(
    "movies/deleteMovie",
    async (id) => {
        await axios.delete(`${API}/${id}`);
        return id;
    }
);
// Favorites 
const loadFavorites = () => {
    try {
        //localStorage to save data
        return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
        return [];
    }
};
const saveFavorites = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        filteredMovies: [],
        isSearching: false,
        favorites: loadFavorites(),
        isLoading: false,
        error: false,
    },

    reducers: {
        // SEARCH
        searchMovie: (state, action) => {
            const query = action.payload.toLowerCase();
            state.isSearching = !!query;
            if (!query) {
                state.filteredMovies = state.movies;
            } else {
                state.filteredMovies = state.movies.filter((movie) =>
                    movie.title.toLowerCase().includes(query)
                );
            }
        },

        toggleFavorite: (state, action) => {
            const movie = action.payload;

            const exists = state.favorites.find((m) => m.id === movie.id);

            if (exists) {
                state.favorites = state.favorites.filter((m) => m.id !== movie.id);
            } else {
                state.favorites.push(movie);
            }
            saveFavorites(state.favorites);
        },
    },

    extraReducers: (builder) => {
        builder

            // GET 
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.filteredMovies = action.payload;
                state.isLoading = false;
            })
            .addCase(getMovies.rejected, (state) => {
                state.error = true;
                state.isLoading = false;
            })

            // ADD
            .addCase(addMovie.fulfilled, (state, action) => {
                state.movies.push(action.payload);
                state.filteredMovies.push(action.payload);
            })

            // EDIT 
            .addCase(editMovie.fulfilled, (state, action) => {
                const updatedMovie = action.payload;

                state.movies = state.movies.map((m) =>
                    m.id === updatedMovie.id ? updatedMovie : m
                );

                state.filteredMovies = state.movies;
            })

            // DELETE 
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.movies = state.movies.filter(
                    (m) => m.id !== action.payload
                );

                state.filteredMovies = state.filteredMovies.filter(
                    (m) => m.id !== action.payload
                );
            });
    },
});

export const { searchMovie, toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;