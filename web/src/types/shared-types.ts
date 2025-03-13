import * as z from "zod";

export const ProjectSchema = z.object({
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
});
export type Project = z.infer<typeof ProjectSchema>;


export const SkillSchema = z.object({
    // id: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
})

export type Skill = z.infer<typeof SkillSchema>;


export const TechnologySchema = z.object({
    // id: z.string(),
    name: z.string(),
    logoUrl: z.string(),
    websiteUrl: z.string(),
})

export type Technology = z.infer<typeof TechnologySchema>;