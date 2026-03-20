<script setup lang="ts">
import { projects } from "../projectData";
import Project from "../components/Project.vue";
import MiscProject from "../components/MiscProject.vue";
import Carousel from "primevue/carousel";
</script>

<template>
    <main>
        <h1>Hello, I'm Jax!</h1>
    <p>I'm a software developer specializing in Web Development, Cybersecurity, and Information Technology.
        Most of my projects are web-centric, although <a href="#other-projects"><em>I love branching out and learning other things related to development</em></a>
    </p>
    
    <h2>Where to Find Me</h2>
    <div class="button-container">
        <a href=""><button class="btn">GitHub</button></a>
        <a href=""><button class="btn">Email</button></a>
        <a href=""><button class="btn">LinkedIn</button></a>
    </div>
    <h2 class="smaller-homepage-header">Recent Web and App Projects</h2>
    <Carousel :value="projects.webProjects" :numVisible="1" :numScroll="1" circular :autoplay-interval="10000">
    <template #item="slotProps">
                <div>
                    <div>
                    <img class="thumbnail-image" :src="slotProps.data.projectImages[0]"/>
                </div>
                <div class="project-information">
                    <h3>{{ slotProps.data.projectName }}</h3>
                    <div class="button-container">
                        <a v-if="slotProps.data.livesiteUrl" :href=slotProps.data.livesiteUrl target="_blank">
                            <button class="btn">More Info</button>
                        </a>
                        <a v-if="slotProps.data.livesiteUrl" :href=slotProps.data.livesiteUrl target="_blank">
                            <button class="btn">View Live Site</button>
                        </a>
                        <a v-if="slotProps.data.githubUrl" :href=slotProps.data.githubUrl target="_blank">
                            <button class="btn">View GitHub</button>
                        </a>
                    </div>
                </div>
                </div>
    </template>
</Carousel>
<h1>. . .</h1>
    <h2 id="other-projects" class="smaller-homepage-header">Other Projects</h2>
    <div class="misc-portfolio">
        <div v-for="miscProject in projects.miscProjects" :key="miscProject.projectName">
        <MiscProject :project="miscProject"/>
    </div> 
    </div>
    </main>
</template>

<style scoped>
main {
    scroll-behavior: smooth;
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        max-width: 36rem;
    }
}
.portfolio-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}
.thumbnail-image {
     width: 60%;
    height: 18rem;
    object-fit: cover;
    object-position: 10% 0%;
    border-radius: 10px;
}
.project-information {
    /* width: 50%; */
    text-align: center;
    h3 {
        font-size: 1.5rem;
    }
    p {
        text-align: center;
    }
}
.misc-portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    row-gap: 3rem;
}
.smaller-homepage-header {
    font-size: 2rem;
}
a{
    color: white;
}
</style>