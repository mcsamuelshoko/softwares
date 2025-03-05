// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema: z.object(
        {

            // id: z.string(),
            platform: z.string(),
            type: z.string(),
            name: z.string(),
            title: z.string(),
            technologies: z.array(z.string()),
            description: z.string(),
            caseStudy: z.string(),
            bannerUrl: z.string(),
            logoUrl: z.string(),
            openUrl: z.string(),
            moreUrl: z.string(),
            altText: z.string(),
            imageUrls: z.array(z.string()),
            repositoryUrl: z.string(),
        }
    ),
});

const skills = defineCollection({
    loader: file("src/data/skills.json"),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
    }),
});

const technologies = defineCollection({
    loader: file("src/data/technologies.json"),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        logoUrl: z.string(),
        websiteUrl: z.string(),
    })
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, skills, technologies };