/**
 * 首页上的个人事实(经历、学历、技能、数字、链接)。只放 Frank 核实过的内容,不编数字。
 */

/** 对外链接。 */
export const LINKS = {
	linkedin: 'https://www.linkedin.com/in/peng-wang-2156b438a/',
	github: 'https://github.com/zhizhunbao',
	offer2pr: 'https://offer2pr.com',
	email: 'mailto:wang1059@algonquinlive.com',
};

/** 首屏下方的数字。 */
export const STATS = [
	{ num: '1B+', label: 'smart-TV device records processed a day' },
	{ num: '<1s', label: 'query time on ClickHouse + Spark' },
	{ num: '−35%', label: 'infrastructure cost after the cloud migration' },
	{ num: '24,000+', label: 'live postings on offer2pr.com' },
];

/** 技能分组。 */
export const SKILLS = [
	{ group: 'Cloud & infrastructure', items: ['Alibaba Cloud EMR', 'VPC / VPN', 'Security groups', 'Auto-scaling', 'Azure OpenAI', 'Azure AI Search', 'Cloudflare', 'Docker'] },
	{ group: 'Data', items: ['Hadoop (CDH)', 'Spark', 'ClickHouse', 'PostgreSQL', 'Supabase', 'ChromaDB'] },
	{ group: 'Operations', items: ['Monitoring & alerting', 'NGINX', 'Tomcat', 'Database monitoring'] },
	{ group: 'Backend', items: ['Java', 'Spring MVC', 'MyBatis', 'Python', 'FastAPI', 'SQLAlchemy'] },
	{ group: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Payload CMS', 'Tailwind'] },
	{ group: 'AI / ML', items: ['LlamaIndex', 'Ollama', 'PyTorch'] },
];

/** 工作经历(新的在前)。 */
export const JOBS = [
	{
		when: 'Jun 2026 – Present',
		title: 'Founder & Full Stack Developer',
		where: 'offer2pr.com, Ottawa, ON',
		points: [
			'Built and run a daily-updated Canadian job board with 24,000+ live postings.',
			'Python ETL in Docker (about 60 containers, hourly refresh) with self-hosted health checks and daily backups; Next.js + Payload CMS + PostgreSQL on Render, DNS on Cloudflare.',
		],
	},
	{
		when: 'Apr 2015 – Sep 2022',
		title: 'Senior Big Data Architect',
		where: 'Guangzhou Huan Technology (HuanTV), Guangzhou',
		points: [
			'Ran a platform processing 1+ billion smart-TV device records a day with sub-second queries (ClickHouse, Spark).',
			'Led the on-prem Hadoop CDH → Alibaba Cloud EMR migration (VPC/VPN, security groups, auto-scaling); infrastructure cost −35%.',
			'Built monitoring and alerting for Hadoop, NGINX, Tomcat and databases.',
		],
	},
	{
		when: 'Oct 2012 – Mar 2015',
		title: 'Java Developer',
		where: 'Beijing Haitian Wanglian, Beijing',
		points: [
			'Spring MVC / MyBatis applications for clients including Mercedes-Benz and BMW.',
			'Built an OA system used by 200+ staff.',
		],
	},
];

/** 学历(新的在前)。 */
export const EDUCATION = [
	{ when: 'Sep 2026 – Present', title: 'Cloud Development and Operations (Co-op)', where: 'Algonquin College, Ottawa' },
	{ when: '2025 – 2026', title: 'AI Software Development, Graduate Certificate', where: 'Algonquin College, Ottawa' },
	{ when: '2008 – 2012', title: 'BEng, Telecommunications Engineering', where: 'Hubei University of Technology' },
];
