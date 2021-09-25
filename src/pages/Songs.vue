<template>
    <main>
        <section class="song-controls">
			<div class="search"></div>
			<div class="random">
				<base-button class="accenttext">Random Song!</base-button>
			</div>
		</section>
        <song-List :songs="filteredSongs"></song-List>
    </main>
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
            filteredSongs: new Array<Song>(),
        };
    },
    async created() {
        this.filteredSongs = await getAllSongs();
    },
});
</script>

<style scoped>
main {
	width: 100%;
	padding: 0 4rem;
}
</style>