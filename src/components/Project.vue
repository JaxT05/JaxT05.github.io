<script lang="ts">
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="project-container project-container-styles">
        <div>
            <img v-if="project.projectImages" class="thumbnail-image" :src="project.projectImages[0]"/>
            <div v-else class="placeholder-image">
                <p>No image available.</p>
            </div>
        </div>
        <div class="project-information">
            <h3 :id=project.projectId>{{ project.projectName }}</h3>
            <p> {{ project.shortDescription }}</p>
            <p v-if="project.technologies"> <strong>Built with:</strong> {{ project.technologies }}</p>
            <div class="button-container">
                <a v-if="project.livesiteUrl" :href=project.livesiteUrl target="_blank">
                    <button class="btn">Live Site</button>
                </a>
                <a v-if="project.githubUrl" :href=project.githubUrl target="_blank">
                    <button class="btn">GitHub</button>
                </a>
                <a v-if="project.designUrl" :href=project.designUrl target="_blank">
                    <button class="btn">Design File</button>
                </a>
                <RouterLink :to="{ path:`/project/${project.projectId}`,}">
                            <button class="btn">More Info</button>
                        </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-container {
    display: flex;
    flex-direction: row;
}
.project-container-flipped {
    display: flex;
    flex-direction: row-reverse;
}
.project-container-styles {
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    max-width: 60rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.549);
    box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.093);
    gap: 3rem;
}
.thumbnail-image {
    width: 30em;
    height: 18rem;
    object-fit: cover;
    object-position: 10% 0%;
    border-radius: 10px;
}
.placeholder-image {
    width: 30em;
    height: 18rem;
    position: relative;
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.project-information {
    width: 50%;
    h3 {
        font-size: 1.5rem;
    }
}
@media (max-width: 860px) {
    .project-container {
        flex-direction: column;
        gap: 0.25rem;
        .project-information {
        width: 90%;
        }
    }
}
</style>