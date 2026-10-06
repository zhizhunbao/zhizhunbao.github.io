/**
 * 内容集合:项目一篇一文件(src/content/projects/*.md),front matter 是卡片上的事实,正文是详情页。
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 项目集合。
 */
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		/** 项目名。 */
		title: z.string(),
		/** 我在项目里的角色。 */
		role: z.string(),
		/** 客户 / 机构 / 场景。 */
		org: z.string(),
		/** 起止时间(展示用原样字符串,如 "Jun 2026 – Present")。 */
		dates: z.string(),
		/** 排序键:越大越靠前(按开始时间倒序填)。 */
		order: z.number(),
		/** 一句话简介。 */
		summary: z.string(),
		/** 主要技术。 */
		stack: z.array(z.string()),
		/** 线上地址(没有就不填)。 */
		url: z.string().url().optional(),
	}),
});

export const collections = { projects };
