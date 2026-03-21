<script setup lang="ts">
import { projects } from "../projectData"
import Project from "../components/Project.vue";
</script>

<template>
    <main>
        <h2 id="webprojects">Website Projects:</h2>
         <div class="portfolio-container">
    <div v-for="(webProject, index) in projects.webProjects" :key="webProject.projectName">
        <Project :class="index % 2 === 0 ? 'project-container' : 'project-container-flipped'" :project="webProject"/>
    </div>
    <h2 id="miscellaneousprojects">Miscellaneous Projects:</h2>
    <div v-for="(miscProject, index) in projects.miscProjects" :key="miscProject.projectName">
        <Project :class="index % 2 === 0 ? 'project-container' : 'project-container-flipped'" :project="miscProject"/>
    </div>
    </div>
    </main>
</template>

<style scoped>
main {
    margin: 3rem 0;
}
.portfolio-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

</style>