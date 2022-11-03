import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        contador: 0
    }),
    getters: {
        getContador(state) {
            return state.contador;
        },
        getContadorConIVA(state) {
            return state.contador * 1.21;
        }
    },
    actions: {
        addOne() {
            this.contador += 1;
        }
    },
});