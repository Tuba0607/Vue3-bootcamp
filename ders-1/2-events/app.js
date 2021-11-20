
const app = Vue.createApp({
    data() {
        return {
            fullName: "Tuğba",
        };
    },
    methods: {
        updateValue(event) {
            this.fullName = event.target.value;
        },
    },
}).mount("#app");