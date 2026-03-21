import { reactive } from 'vue';

export const projects = reactive({
    webProjects:  [
        {
            projectName: "Clear Skies Indy",
            projectId: "clear-skies-indy",
            projectImages: ["/assets/projectImages/clear-skies-indy.png"],
            technologies: "ReactJS, Spring Boot",
            shortDescription: "A website that displays the realtime Air Quality Index data of a selected location on an interactive map. This project was completed within 36 hours for NASA's 2025 Space Apps Challenge.",
            longDescription: "",
            githubUrl: "https://github.com/JaxT05/NASA-Cleaner-Skies-Project",
            livesiteUrl: "https://www.clearskiesindy.earth",
        },
        {
            projectName: "The College of Fine Arts Senior Portfolio Showcase",
            projectId: "cfa-senior-portfolio-showcase",
            projectImages: ["/assets/projectImages/cfa-senior-portfolio1.png", "/assets/projectImages/cfa-senior-portfolio2.png"],
            technologies: "WordPress, PHP",
            shortDescription: "A website for showcasing the portfolios of seniors and alumni of the College of Fine Arts. This allows graduating students to submit their work and portfolio links to create a portfolio sample for incoming students and potential recruiters to view.",
            longDescription: "",
        },
        {
            projectName: "The College of Fine Arts Annual Art Show Showcase",
            projectId: "cfa-art-show",
            projectImages: ["/assets/projectImages/art-show1.png", "/assets/projectImages/art-show2.png", "/assets/projectImages/art-show3.png"],
            technologies: "WordPress, PHP",
            shortDescription: "A website that hosts the annual College of Fine Arts Art Show, allowing for students to submit their work through a form and for a juror to review all artworks through a dashboard.",
            longDescription: "",
            livesiteUrl: "https://studentartshow.bsu.edu/",
        }, 
        {
            projectName: "A Wardrobe Tracking Prototype: Understanding and Designing for a Human-Computer Problem Space",
            projectId: "wardrobe-tracking-prototype",
            projectImages: ["/assets/projectImages/clothing-app1.png", "/assets/projectImages/clothing-app2.png", "/assets/projectImages/clothing-app3.png", "/assets/projectImages/clothing-app4.png"],
            technologies: "VueJS, Figma for Prototyping",
            shortDescription: "A web application built on the design process of identifying the needs of a user and cycling through prototypes exploring this problem space",
            longDescription: "",
            githubUrl: "https://github.com/JaxT05/CS445-Project-1",
            designUrl: "https://www.figma.com/design/OPLQkTQjt26yksdyqMdgp3/Clothing-Tracker-Prototype?node-id=0-1&p=f&t=x79s7qxNPKNs2JuG-0",
        }
    ],
    miscProjects: [
        {
            projectName: "Music is Math: Understanding Digital Signals",
            projectId: "msp-patches",
            projectImages: ["/assets/projectImages/msp-patch1.png", "/assets/projectImages/msp-patch2.png", "/assets/projectImages/puredata-patch1.png", "/assets/projectImages/puredata-patch2.png"],
            technologies: "Max 9, PureData",
            shortDescription: "",
            longDescription: "These images showcase a series of digital patches that I have created over the past few months. A major component of understanding electronic music is understanding how signals are created and interpreted digitally. The images below showcase patches created in Max 9 and PureData; both tools are used to program digital sound with interactive visual/audio systems at a lower level. I hope to integrate some of the patches I have made into this website soon.",
        },
       {
            projectName: "Tangible Play: Human Collaboration and Alternative Controllers",
            projectId: "tangible-play",
            technologies: "Arduino Controllers, Unity Game Engine (C#)",
            shortDescription: "",
            longDescription: "This past semester, I was invited onto a research project to explore the variety of alternative controllers. Currently in progress.",
        }
    ]
})