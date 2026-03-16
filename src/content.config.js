// 1. 从 `astro:content` 导入工具函数
import { defineCollection, z } from 'astro:content';

// 2. 导入加载器
import { glob } from 'astro/loaders';

// 3. 定义你的集合
const post = defineCollection({
	// 使用 glob 加载器从 src/content/post 目录加载所有 .mdx 文件
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		read: z.number().optional(),
		tags: z.array(z.string()).optional(),
		img: z.string().optional(),
		img_alt: z.string().optional(),
		featured: z.boolean().optional(),
	}),
});

const news = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(), // e.g. "2025/08"
		category: z.string(), // e.g. "Award", "Honor", "News"
	}),
});

const members = defineCollection({
	loader: glob({ pattern: 'list.md', base: './src/content/members' }),
	schema: z.object({
		members: z.array(
			z.object({
				name: z.string(),
				role: z.string(), // e.g. "Postdoc", "Ph.D. Students", "Master Students", "Alumni"
				team: z.string().optional(),
				email: z.string().optional(),
				researchFocus: z.array(z.string()).optional(),
				image: z.string().optional(), // Image path, e.g., "/assets/members/liyin-hsiao.jpg"
				order: z.number().optional(), // For sorting
			})
		),
	}),
});

// 4. 导出一个 `collections` 对象来注册你的集合
export const collections = { post, news, members };

