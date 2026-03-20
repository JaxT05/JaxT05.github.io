<script setup lang="ts">
import { projects } from "../projectData"
import Project from "../components/Project.vue";
</script>

<template>
    <main>
         <div class="portfolio-container">
    <div v-for="(webProject, index) in projects.webProjects" :key="webProject.projectName">
        <Project :class="index % 2 === 0 ? 'project-container' : 'project-container-flipped'" :project="webProject"/>
    </div>
    </div>
    </main>
</template>

<style scoped>
.portfolio-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

</style>