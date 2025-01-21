import { reactive } from "vue";

const session = reactive({
    user: null,
    token: null,
    loading: 0
});