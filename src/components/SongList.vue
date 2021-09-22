<template>
    <h1>Hello World!</h1>
    <button @click="addNewUser">Click me!</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Song } from '@/types/Song';
import {
    getAllSongs,
    getSongById,
    getSongsByUser,
    updateSong,
} from '../services/songService';
import { getAllGenres } from '../services/genreService';
import {
    addArtist,
    getAllArtists,
    getArtistById,
} from '../services/artistService';
import { getNotes } from '../services/noteService';
import { getAllThemes } from '../services/themeService';
import { getAllTunings, getTuningById } from '../services/tuningService';
import { getUserById, addUser } from '../services/userService';
import { Artist } from '@/types/Artist';
export default defineComponent({
    data() {
        const artistToAdd = {
            name: 'Afrique',
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

        const apiNotes = await getNotes(1, 1);
        console.log(apiNotes);

        const songsByUser = await getSongsByUser(1);
        console.log('user 1 songs', songsByUser);

        const songById = await getSongById(4);
        console.log('song id 4', songById);

        const apiThemes = await getAllThemes();
        console.log('themes', apiThemes);

        const apiTunings = await getAllTunings();
        console.log('tunings', apiTunings);

        const tuningById = await getTuningById(1);
        console.log('tuning by id', tuningById);

        const userById = await getUserById(1);
        console.log('user by id', userById);
    },
    methods: {
        async addNewArtist() {
            const addedArtist = await addArtist({
                name: this.artistToAdd.name,
            });
            console.log(addedArtist);
        },
        async updateRoscoe() {
            const song = await getSongById(4);
            song.title = 'Roscoe';
            const updated = await updateSong(song);
            console.log(updated);
        },
        async addNewUser() {
            const addedUser = await addUser({
                username: 'TestUser2',
                email: 'test@test.comxx',
                themeId: 3,
            });
            console.log('addedUser', addedUser);
        },
    },
});
</script>
