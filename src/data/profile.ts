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
	{ num: '2,600+', label: 'commits on offer2pr since Jun 2026, 1,500+ written with Claude' },
	{ num: '1B+', label: 'smart-TV device records processed a day' },
	{ num: '−35%', label: 'infrastructure cost after the cloud migration' },
	{ num: '24,000+', label: 'live postings on offer2pr.com' },
];

/**
 * 我怎么用 AI agent 做开发(Frank 10-16:「还有我自己的 AI agent 开发风格」)。
 * 每条都有仓库里的证据(pnp-job-tracker 的 CLAUDE.md、.claude/skills、.githooks、eslint.config.mjs)。
 */
export const AGENT_WAYS = [
	{
		title: 'A constitution before code',
		body: 'Every project starts with a CLAUDE.md the agent must follow: principles, naming, the decision ladder. offer2pr\'s runs to 259 lines and became my starter template.',
	},
	{
		title: 'Guardrails, not trust',
		body: '47 custom ESLint rules, a pre-commit type check and a pre-push gate (ruff, pyrefly, structure check, file whitelist) catch what an agent gets wrong. Skipping hooks is banned, and the lint baseline can only shrink.',
	},
	{
		title: 'Names come from a catalogue',
		body: 'Folder and domain names must be registered in each layer\'s README table; a lint rule reads the table and fails on anything unregistered, so agents can\'t invent structure.',
	},
	{
		title: 'Skills for repeated work',
		body: 'Five project skills on offer2pr, including a production audit loop that screenshots the live site on desktop and mobile, checks it, fixes and re-checks, plus a first-time-user walkthrough. A batch subagent handles bulk mechanical edits.',
	},
	{
		title: 'Ground every number',
		body: 'In product and in docs, numbers must come from a tool result, a database or an official source. My advisor agent was told it never computes or ranks; tools are the only source of facts.',
	},
	{
		title: 'Simplify first',
		body: 'The shortest form that carries the point. When a nine-tool advisor agent was more than the job needed, I replaced it with a two-step guide.',
	},
];

/** 技能分组。 */
export const SKILLS = [
	{ group: 'AI agents', items: ['Claude Code', 'Agent skills & subagents', 'Tool calling', 'Grounding & guardrails', 'LLM-as-judge evaluation', 'RAG (LlamaIndex)', 'Anthropic API', 'Ollama'] },
	{ group: 'Cloud & infrastructure', items: ['Alibaba Cloud EMR', 'VPC / VPN', 'Security groups', 'Auto-scaling', 'Azure OpenAI', 'Azure AI Search', 'Cloudflare', 'Docker'] },
	{ group: 'Data', items: ['Hadoop (CDH)', 'Spark', 'ClickHouse', 'PostgreSQL', 'Supabase', 'ChromaDB'] },
	{ group: 'Operations', items: ['Monitoring & alerting', 'NGINX', 'Tomcat', 'Database monitoring'] },
	{ group: 'Backend', items: ['Java', 'Spring MVC', 'MyBatis', 'Python', 'FastAPI', 'SQLAlchemy'] },
	{ group: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Payload CMS', 'Tailwind'] },
	{ group: 'Machine learning', items: ['PyTorch', 'scikit-learn', 'Keras'] },
];

/** 工作经历(新的在前)。 */
export const JOBS = [
	{
		when: 'Jun 2026 – Present',
		title: 'Founder: AI Agent Development & Operations',
		where: 'offer2pr.com, Ottawa, ON',
		points: [
			'Built and run a daily-updated Canadian job board with 24,000+ live postings.',
			'Build with coding agents: 2,600+ commits since Jun 2026, 1,500+ co-authored with Claude, behind 47 custom lint rules and pre-push gates.',
			'Shipped a tool-calling advisor agent (9 tools; every number must come from a tool result; output gate; 24-case gold evaluation), later replaced by a simpler two-step guide on Claude Haiku with daily quotas.',
			'Python ETL in Docker (about 60 containers, hourly refresh) with self-hosted health checks and daily backups; Next.js + Payload CMS + PostgreSQL on Render, DNS on Cloudflare.',
		],
	},
	{
		when: 'Apr 2015 – Sep 2022',
		title: 'Senior Big Data Architect: Architecture, Development & Operations',
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
