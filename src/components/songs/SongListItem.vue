<template>
    <tr class="song-list-row">
        <td class="song-cell text-center">{{ song.artist.name }}</td>
        <td class="song-cell text-center">{{ song.title }}</td>
        <td class="song-cell text-center">{{ song.genre.name }}</td>
        <td class="song-cell text-center">{{ song.instrument.name }}</td>
        <td class="song-cell text-center">{{ song.tuning.name }}</td>
        <td class="song-cell text-center">
            <i class="far fa-2x fa-plus-square"></i>
        </td>
        <td class="song-cell text-center">
            <a :href="song.url"><i class="fas fa-2x fa-guitar"></i></a>
        </td>
        <td class="song-cell text-center">
            <a :href="song.youtube"><i class="fab fa-2x fa-youtube"></i></a>
        </td>
        <td class="song-cell text-center">
            {{song.user.username}}
        </td>
    </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['song'],
});
</script>

<style scoped>
tr {
    display: table;
    width: 100%;
    height: 65px;
    font-size: 18px;
    cursor: pointer;
}
tr:hover {
    border-top: 3px solid var(--accent-text-color);
    border-bottom: 3px solid var(--accent-text-color);
}
tr:nth-child(odd) {
    background-color: var(--secondary-background-color);
}
td {
    width: 11.11%;
}
i:hover {
    text-shadow: var(--accent-drop-shadow);
}
</style>
