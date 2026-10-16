/**
 * Coursework 页的数据:项目 → 课程 → 每个 lab / assignment 一张卡。
 * 规则(docs/plan.md):AI 课程已结业可附公开代码;Cloud 课程本学期在上,只放卡片不放链接;学号一律不上站。
 * 只收已完成的作业;小组作业写 group,不写同学名字。
 */

/** 一张作业卡。 */
export interface CourseItem {
	/** Lab / Assignment / Project 等。 */
	kind: string;
	/** 标题。 */
	title: string;
	/** 一句话:做了什么。 */
	what: string;
	/** 主要技术。 */
	tech: string[];
	/** 公开代码(只有 AI 课程可填)。 */
	repo?: string;
}

/** 一门课。 */
export interface Course {
	/** 课号,如 CST8915。 */
	code: string;
	/** 课名。 */
	name: string;
	/** 作业卡。 */
	items: CourseItem[];
}

/** 一个学习项目。 */
export interface Program {
	/** 页内锚点。 */
	id: string;
	/** 项目名。 */
	name: string;
	/** 时间与学校。 */
	when: string;
	/** 说明(可选)。 */
	note?: string;
	/** 课程。 */
	courses: Course[];
}

const CLOUD: Program = {
	id: 'cloud',
	name: 'Cloud Development and Operations (Co-op)',
	when: 'Algonquin College, Sep 2026 – Present',
	note: 'Courses in progress: cards only; code is kept private until grades are final.',
	courses: [
		{
			code: 'CST8915',
			name: 'Full-stack Cloud-native Development',
			items: [
				{ kind: 'Lab 1', title: 'Microservices on an Azure VM', what: 'Ran a pet-store microservices app (Vue front end, Node.js order service, Rust product service, RabbitMQ) on an Ubuntu VM.', tech: ['Azure VM', 'Vue.js', 'Node.js', 'Rust', 'RabbitMQ'] },
				{ kind: 'Lab 2', title: 'Twelve-Factor refactor', what: 'Refactored the pet store to follow the Twelve-Factor App and split it across two VMs.', tech: ['12-Factor', 'Environment config', 'Azure VMs', 'RabbitMQ'] },
				{ kind: 'Lab 3', title: 'Move to Azure PaaS', what: 'Deployed the pet store to two Web Apps and a Static Web App with GitHub Actions, rewriting the product service in Python.', tech: ['App Service', 'Static Web Apps', 'GitHub Actions', 'Python'] },
				{ kind: 'Lab 4', title: 'Docker and Compose', what: 'Built and ran containers on an Azure VM, then ran a web app with Redis using Docker Compose.', tech: ['Docker', 'Docker Compose', 'Redis'] },
			],
		},
		{
			code: 'CST8916',
			name: 'Remote Data and Real-time Applications',
			items: [
				{ kind: 'Assignment 1', title: 'REST API extension with CI/CD', what: 'Added a tasks resource and per-user task endpoints to a Flask REST API, tested 9 cases and deployed it through CI/CD.', tech: ['Flask', 'REST', 'GitHub Actions', 'App Service'] },
			],
		},
		{
			code: 'CST8912',
			name: 'Cloud Solution Architecture',
			items: [
				{ kind: 'Lab 1', title: 'Linux VM with monitoring', what: 'Set up an Ubuntu VM with SSH-key login and turned on VM Insights monitoring.', tech: ['Azure VM', 'Log Analytics', 'Azure Monitor'] },
				{ kind: 'Lab 2', title: 'VNet peering across regions', what: 'Connected three VNets in two regions with local and global peering and tested RDP over private IPs.', tech: ['VNet peering', 'NSG', 'Windows Server'] },
				{ kind: 'Lab 3', title: 'Storage tiers, SAS and lifecycle', what: 'Changed redundancy and access tiers, tested private and SAS access and added a lifecycle rule.', tech: ['Azure Storage', 'SAS', 'Lifecycle Management'] },
				{ kind: 'Lab 4', title: 'SQL to Blob with Data Factory', what: 'Created an Azure SQL Database and copied its data to Blob Storage as CSV with a Data Factory pipeline.', tech: ['Azure SQL', 'Data Factory', 'Blob Storage'] },
			],
		},
		{
			code: 'CST8913',
			name: 'Cloud Migration',
			items: [
				{ kind: 'Lab 3', title: 'IaaS vs PaaS target designs', what: 'Designed two Azure targets for a Flask + React + PostgreSQL app: all-VM IaaS and managed PaaS.', tech: ['HAProxy', 'Nginx', 'App Service', 'Azure Database for PostgreSQL', 'Key Vault'] },
				{ kind: 'Lab 4', title: 'Discovery and assessment', what: 'Wrote the discovery and assessment for moving a VMware environment to Azure VMs.', tech: ['Azure Migrate', 'Dependency analysis', 'Sizing and cost'] },
				{ kind: 'Lab 5', title: 'Rehost case analysis', what: 'Analysed a state agency rehost to Azure VMware Solution with an architecture diagram and a migration and validation plan.', tech: ['Azure VMware Solution', 'Azure Migrate', 'Azure Backup'] },
				{ kind: 'Lab 2', title: 'Migration plan from a case study', what: 'Built a high-level migration plan with a RACI matrix and schedule from the Levi Strauss Azure case study.', tech: ['Migration planning', 'RACI'] },
				{ kind: 'Lab 6', title: 'AWS, Azure and Google Cloud mapping', what: 'Matched 30 common cloud resources to their AWS, Azure and Google Cloud services.', tech: ['AWS', 'Azure', 'Google Cloud'] },
			],
		},
		{
			code: 'CST8911',
			name: 'Introduction to Cloud Computing',
			items: [
				{ kind: 'Assignment 2', title: 'Azure architecture for an online bookstore', what: 'Designed and diagrammed an Azure architecture to move a small online bookstore off its own servers.', tech: ['Front Door', 'App Service', 'Azure SQL', 'Entra ID', 'draw.io'] },
				{ kind: 'Lab 2', title: 'Blob-triggered Azure Function', what: 'Built a function that runs when a file is uploaded to Blob Storage and checked it in the logs.', tech: ['Azure Functions', 'Blob Storage'] },
				{ kind: 'Lab 1', title: 'Blob and file storage', what: 'Created a storage account with a blob container and file share and moved files with the portal, AzCopy and SAS.', tech: ['Azure Storage', 'AzCopy', 'SAS'] },
				{ kind: 'Assignment 1', title: 'Cloud in online recruitment', what: 'Research report on how the online recruitment industry uses cloud services, with benefits and challenges.', tech: ['IaaS / PaaS / SaaS', 'Research'] },
			],
		},
		{
			code: 'CST8914',
			name: 'Accessible by Design',
			items: [
				{ kind: 'Lab 2', title: 'Fixing inaccessible pages', what: 'Fixed alt text, titles, contrast, buttons and focus in four web pages and published them.', tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'] },
				{ kind: 'Assignment 1', title: 'Screen reader comparison', what: 'Compared accessible and inaccessible pages with a screen reader and documented 12 issues.', tech: ['NVDA', 'DevTools'] },
				{ kind: 'Lab 5', title: 'Hybrid accessibility test', what: 'Tested a sample site with automated tools plus keyboard and visual checks, then wrote fixes.', tech: ['WAVE', 'axe DevTools', 'Accessibility Insights'] },
				{ kind: 'Lab 4', title: 'WCAG defect mapping', what: 'Matched 9 defects to WCAG success criteria with techniques and user impact.', tech: ['WCAG 2.1 AA'] },
			],
		},
	],
};

const AI: Program = {
	id: 'ai',
	name: 'AI Software Development (Graduate Certificate)',
	when: 'Algonquin College, 2025 – 2026, completed',
	courses: [
		{
			code: 'CST8505',
			name: 'AI Software Development Project',
			items: [
				{ kind: 'Project (group)', title: 'Ottawa Economic Development RAG', what: 'Research tool for the City of Ottawa over its quarterly economic reports, with hybrid retrieval, citations and LLM-as-judge evaluation.', tech: ['LlamaIndex', 'BM25 + vector', 'ChromaDB', 'Payload CMS', 'Azure OpenAI', 'Ollama'] },
			],
		},
		{
			code: 'CST8507',
			name: 'Natural Language Processing',
			items: [
				{ kind: 'Project (group)', title: 'AI textbook Q&A with voice', what: 'RAG over 30+ AI/ML textbooks with page-level citations, driven by a ROS 2 voice pipeline.', tech: ['MinerU', 'SQLite FTS5', 'ChromaDB', 'FastAPI', 'faster-whisper', 'ROS 2'] },
				{ kind: 'Lab 4', title: 'TF-IDF vs DistilBERT', what: 'Compared a TF-IDF + logistic regression baseline with fine-tuned DistilBERT on review polarity.', tech: ['scikit-learn', 'Hugging Face Transformers'] },
				{ kind: 'Assignment 1', title: 'Review rating classification', what: 'Classified Amazon review ratings with bag-of-words, TF-IDF and Word2Vec features, with error analysis.', tech: ['scikit-learn', 'gensim'] },
				{ kind: 'Lab 3', title: 'Word embeddings', what: 'Evaluated Word2Vec and GloVe on SimLex-999 and tested FastText on analogies and misspellings.', tech: ['gensim', 'FastText'] },
			],
		},
		{
			code: 'CST8508',
			name: 'Machine Vision',
			items: [
				{ kind: 'Project (group)', title: 'Person tracking with virtual pan-tilt', what: 'Detects, tracks and centres a person on a webcam feed with a virtual pan-tilt view.', tech: ['RTMDet', 'ByteTrack', 'OpenCV'] },
				{ kind: 'Assignment 2', title: 'Object detection on Oxford-IIIT Pet', what: 'Trained and compared two YOLO model sizes with ROC/AUC analysis.', tech: ['Ultralytics YOLO', 'PyTorch'] },
				{ kind: 'Assignment 1', title: 'Flower classification', what: 'Compared ResNet-18 and MobileNetV2 on Oxford Flowers 17.', tech: ['OpenMMLab mmpretrain', 'PyTorch'] },
				{ kind: 'Lab 3', title: 'ORB feature matching', what: 'Tested ORB features with brute-force and FLANN matching under lighting, noise and blur.', tech: ['OpenCV'] },
			],
		},
		{
			code: 'CST8509',
			name: 'Reinforcement Learning',
			items: [
				{ kind: 'Assignment 2', title: 'Robot red-ball chasing', what: 'Built a Gymnasium environment that talks to a ROS 2 robot in Gazebo and compared rule-based, Q-learning, DQN and PPO agents.', tech: ['Gymnasium', 'Stable-Baselines3', 'ROS 2', 'Gazebo'] },
				{ kind: 'Assignment 1', title: 'Blocks World as an RL environment', what: 'Turned a Prolog Blocks World into a Gymnasium environment and trained Q-learning, DQN and PPO agents.', tech: ['SWI-Prolog', 'Gymnasium', 'Stable-Baselines3'] },
				{ kind: 'Lab 2', title: 'Custom Cliff Walking environment', what: 'Rebuilt Cliff Walking as a Gymnasium environment and trained Q-learning, DQN and PPO.', tech: ['Gymnasium', 'Stable-Baselines3'] },
				{ kind: 'Lab 5', title: 'Containerised simulation stack', what: 'Packaged the robot simulation and RL stack in Docker.', tech: ['Docker', 'Docker Compose'] },
			],
		},
		{
			code: 'CST8506',
			name: 'Machine Learning',
			items: [
				{ kind: 'Project (group)', title: 'Leaf species analysis', what: 'Classification, clustering and outlier detection on the UCI Leaf dataset with CRISP-DM; I did the clustering.', tech: ['scikit-learn', 'CRISP-DM'] },
				{ kind: 'Assignment 2', title: 'CIFAR-10: MLP vs CNN', what: 'Compared an MLP with Keras dense and convolutional networks on CIFAR-10, with hyperparameter sweeps.', tech: ['Keras', 'scikit-learn'] },
				{ kind: 'Assignment 1', title: 'Wine quality with CRISP-DM', what: 'Reduced features with PCA and LDA, then compared kNN, random forest, SVM, logistic regression and MLP.', tech: ['scikit-learn'] },
				{ kind: 'Lab 4', title: 'Time-series forecasting', what: 'Forecast daily minimum temperatures with a recurrent neural network.', tech: ['Keras', 'statsmodels'] },
			],
		},
	],
};

/** 页面上的项目顺序:在读的 Cloud 在前。 */
export const PROGRAMS: Program[] = [CLOUD, AI];
