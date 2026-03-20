import { reactive } from 'vue';

export const projects = reactive({
    webProjects:  [
        {
            projectName: "Clear Skies Indy",
            projectImages: ["/assets/projectImages/clear-skies-indy.png"],
            technologies: "ReactJS, Spring Boot",
            shortDescription: "A website that displays the realtime Air Quality Index data of a selected location on an interactive map. This project was completed within 36 hours for NASA's 2025 Space Apps Challenge.",
            longDescription: "",
            githubUrl: "https://github.com/JaxT05/NASA-Cleaner-Skies-Project",
            livesiteUrl: "https://www.clearskiesindy.earth"
        },
        {
            projectName: "The College of Fine Arts Senior Portfolio Showcase",
            projectImages: ["", "", ""],
            technologies: "WordPress, PHP",
            shortDescription: "",
            longDescription: "",
        },
        {
            projectName: "The College of Fine Arts Annual Art Show Showcase",
            projectImages: ["/assets/projectImages/art-show1.png", "/assets/projectImages/art-show2.png", "/assets/projectImages/art-show3.png"],
            technologies: "WordPress, PHP",
            shortDescription: "A website that hosts the annual College of Fine Arts Art Show, allowing for students to submit their work through a form and for a juror to review all artworks through a dashboard.",
            longDescription: "",
        }, 
        {
            projectName: "",
            projectImages: ["", "", ""],
            technologies: "",
            shortDescription: "",
            longDescription: "",
        }
    ],
    miscProjects: [
        {
            projectName: "Music is Math: Understanding Digital Signals",
            projectImages: ["", "", ""],
            technologies: "",
            shortDescription: "",
            longDescription: "",
        },
       {
            projectName: "Tangible Play: Human Collaboration and Alternative Controllers",
            projectImages: ["", "", ""],
            technologies: "",
            shortDescription: "",
            longDescription: "",
        },
        {
            projectName: "",
            projectImages: ["", "", ""],
            technologies: "",
            shortDescription: "",
            longDescription: "",
        }
    ]
})