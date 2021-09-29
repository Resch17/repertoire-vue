<template>
    <main v-if="songsLoaded">
        <section class="song-controls">
            <div class="search">
                <input
                    type="text"
                    autocomplete="off"
                    v-model="searchTerms"
                    @input="handleSearchChange"
                />
            </div>
            <div class="random">
                <base-button class="accenttext" @click="songRefresh"
                    >Random Song!</base-button
                >
            </div>
        </section>
        <song-List
            :songs="filteredSongs"
            v-if="filteredSongs.length > 0"
        ></song-List>
        <h3 class="empty-set-message" @click="songRefresh" v-else>No songs found!</h3>
    </main>
    <scale-loader
        class="loader"
        color="#f73859"
        height="100px"
        width="10px"
        margin="7px"
        v-else
    ></scale-loader>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Song } from '@/types/Song';
import { getAllSongs } from '@/services/songService';
import SongList from '../components/songs/SongList.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
export default defineComponent({
    components: { SongList, BaseButton },
    data() {
        return {
            allSongs: new Array<Song>(),
            filteredSongs: new Array<Song>(),
            songsLoaded: false,
            searchTerms: '',
        };
    },
    async created() {
        await this.songRefresh();
    },
    methods: {
        async songRefresh() {
            this.songsLoaded = false;
            const apiSongs = await getAllSongs();
            this.allSongs = apiSongs;
            this.filteredSongs = apiSongs;
            this.searchTerms = '';
            this.songsLoaded = true;
        },
        handleSearchChange() {
            if (this.searchTerms.length > 0) {
                this.filteredSongs = this.filteredSongs.filter(
                    (s) =>
                        s.title
                            .toLowerCase()
                            .includes(this.searchTerms.toLowerCase()) ||
                        s.artist.name
                            .toLowerCase()
                            .includes(this.searchTerms.toLowerCase())
                );
            } else {
                this.filteredSongs = this.allSongs;
            }
        },
    },
});
</script>

<style scoped>
main {
    width: 100%;
    padding: 0 4rem;
}
section {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1em 0;
}
.loader {
    position: absolute;
    top: 30%;
    left: 40%;
    transform: rotate(90deg);
}
.empty-set-message {
    margin-top: 5em;
    text-align: center;
    font-size: 3em;
    color: var(--accent-text-color);
    cursor: pointer;
}
</style>
