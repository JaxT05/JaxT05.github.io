<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { projects } from "../projectData";

const route = useRoute();

  const id = route.params.id;
  const projectData = projects.webProjects.find(project => project.projectId === id) || projects.miscProjects.find(project => project.projectId === id);

</script>

<template>
  <div class="project-container" v-if="projectData">
    <h1>{{ projectData.projectName }}</h1>
    <p v-if="projectData.longDescription">{{ projectData.longDescription }}</p>
    <div class="image-section">
        <div v-for="projectImage in projectData.projectImages">
            <img :src=projectImage alt="">
        </div>
    </div>
  </div>
</template>

<style scoped>
.project-container {
    margin: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 1rem;
    h1 {
        font-size: 2.5rem;
        line-height: 1.1;
    }
}
.image-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    img {
        width: 18rem;
        height: 18rem;
        object-fit: cover;
        object-position: 0% 0%;
    }
}
</style>