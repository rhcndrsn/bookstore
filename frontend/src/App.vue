<template>
    <NavBar />
    <RouterView />
</template>

<script>

import NavBar from "@/components/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar
    },
    data() {
        return {
            message: "Merhaba",
            count: 0,
            isVisible: true
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');

html, body {
  font-family: "Mulish", sans-serif;
}
</style>