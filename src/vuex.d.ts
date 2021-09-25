// vuex.d.ts
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { User } from './types/User';

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        currentUser: User | null;
        token: string;
        globalLoading: boolean;
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
