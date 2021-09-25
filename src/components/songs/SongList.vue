<template>
    <table>
        <thead>
            <tr class="song-list-header">
                <th class="song-list-heading">Artist</th>
                <th class="song-list-heading">Song</th>
                <th class="song-list-heading">Genre</th>
                <th class="song-list-heading">Instrument</th>
                <th class="song-list-heading">Tuning</th>
                <th class="song-list-heading">Add to Setlist</th>
                <th class="song-list-heading">Link</th>
                <th class="song-list-heading">YouTube</th>
            </tr>
        </thead>
        <tbody>
            <song-list-item
                v-for="song in songs"
                :key="song.id"
                :song="song"
            ></song-list-item>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SongListItem from './SongListItem.vue';
export default defineComponent({
    components: { SongListItem },
    props: ['songs'],
});
</script>

<style scoped>
table {
    width: 100%;
    border-top: 3px solid var(--accent-text-color);
    border-bottom: 3px solid var(--accent-text-color);
}

thead {
    font-family: var(--heading-font);
    font-size: 22px;
    color: var(--accent-text-color);
    text-align: center;
    letter-spacing: 0.5px;
    display: table;
    width: 100%;
    padding-right: 17px;
}

th {
    height: 61px;
    width: 11.11%;
}

tbody {
    display: block;
    overflow-y: scroll;
    max-height: 500px;
    width: 100%;
}
</style>
