<template>
    <h1>Hello World!</h1>
    <button @click="addNewArtist">Click me!</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Song } from '@/types/Song';
import { getAllSongs } from '../services/songService';
import { getAllGenres } from '../services/genreService';
import {
    addArtist,
    getAllArtists,
    getArtistById,
} from '../services/artistService';
import { Artist } from '@/types/Artist';
export default defineComponent({
    data() {
        const artistToAdd = {
            Name: 'Afrique',
        };
        return {
            songs: new Array<Song>(),
            artists: new Array<Artist>(),
            artistToAdd,
        };
    },
    async created() {
        const apiSongs = await getAllSongs();
        this.songs = apiSongs;
        console.log(this.songs);

        const apiArtists = await getAllArtists();
        this.artists = apiArtists;
        console.log(this.artists);

        const apiArtist = await getArtistById(9);
        console.log(apiArtist);

        const apiGenres = await getAllGenres();
        console.log(apiGenres);
    },
    methods: {
        async addNewArtist() {
            const addedArtist = await addArtist({
                Name: this.artistToAdd.Name,
            });
            console.log(addedArtist);
        },
    },
});
</script>
