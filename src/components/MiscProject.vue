<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<template class="misc-portfolio">
    <div class="project-container project-container-styles">
        <div>
            <img class="thumbnail-image" :src="project.projectImages[0]"/>
        </div>
        <div class="project-information">
            <h3>{{ project.projectName }}</h3>
            <p> {{ project.shortDescription }}</p>
            <p v-if="project.technologies"> <strong>Built with:</strong> {{ project.technologies }}</p>
            <div class="button-container">
                <a v-if="project.livesiteUrl" :href=project.livesiteUrl target="_blank">
                    <button class="btn">Live Site</button>
                </a>
                <a v-if="project.githubUrl" :href=project.githubUrl target="_blank">
                    <button class="btn">GitHub</button>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1rem;
    width: 25rem;
    height: 30rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.549);
    box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.093);
    gap: 1rem;
}
.thumbnail-image {
     width: 100%;
    height: 15rem;
    object-fit: cover;
    object-position: 10% 0%;
    border-radius: 10px;
}
.project-information {
    width: 50%;
    h3 {
        font-size: 1.5rem;
    }
}
@media (max-width: 860px) {
    .project-container {
        }
    }

</style>