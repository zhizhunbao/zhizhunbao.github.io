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
	/** 在线演示(GitHub Pages 等,只有 AI 课程可填)。 */
	demo?: string;
	/** 卡片截图(public 下的路径,可选)。 */
	shot?: string;
}

/** 一门课。 */
export interface Course {
	/** 课号,如 CST8915。 */
	code: string;
	/** 课名(不确定时留空,只显示课号)。 */
	name: string;
	/** 学期,如 Fall 2025(可选)。 */
	term?: string;
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
				{ kind: 'Lab 1', title: 'Microservices on an Azure VM', what: 'Ran a pet-store microservices app (Vue front end, Node.js order service, Rust product service, RabbitMQ) on an Ubuntu VM.', tech: ['Azure VM', 'Vue.js', 'Node.js', 'Rust', 'RabbitMQ'], shot: '/coursework/cst8915-lab1.webp' },
				{ kind: 'Lab 2', title: 'Twelve-Factor refactor', what: 'Refactored the pet store to follow the Twelve-Factor App and split it across two VMs.', tech: ['12-Factor', 'Environment config', 'Azure VMs', 'RabbitMQ'], shot: '/coursework/cst8915-lab2.webp' },
				{ kind: 'Lab 3', title: 'Move to Azure PaaS', what: 'Deployed the pet store to two Web Apps and a Static Web App with GitHub Actions, rewriting the product service in Python.', tech: ['App Service', 'Static Web Apps', 'GitHub Actions', 'Python'], shot: '/coursework/cst8915-lab3.webp' },
				{ kind: 'Lab 4', title: 'Docker and Compose', what: 'Built and ran containers on an Azure VM, then ran a web app with Redis using Docker Compose.', tech: ['Docker', 'Docker Compose', 'Redis'] },
			],
		},
		{
			code: 'CST8916',
			name: 'Remote Data and Real-time Applications',
			items: [
				{ kind: 'Assignment 1', title: 'REST API extension with CI/CD', what: 'Added a tasks resource and per-user task endpoints to a Flask REST API, tested 9 cases and deployed it through CI/CD.', tech: ['Flask', 'REST', 'GitHub Actions', 'App Service'], shot: '/coursework/cst8916-a1.webp' },
			],
		},
		{
			code: 'CST8912',
			name: 'Cloud Solution Architecture',
			items: [
				{ kind: 'Lab 1', title: 'Linux VM with monitoring', what: 'Set up an Ubuntu VM with SSH-key login and turned on VM Insights monitoring.', tech: ['Azure VM', 'Log Analytics', 'Azure Monitor'], shot: '/coursework/cst8912-lab1.webp' },
				{ kind: 'Lab 2', title: 'VNet peering across regions', what: 'Connected three VNets in two regions with local and global peering and tested RDP over private IPs.', tech: ['VNet peering', 'NSG', 'Windows Server'], shot: '/coursework/cst8912-lab2.webp' },
				{ kind: 'Lab 3', title: 'Storage tiers, SAS and lifecycle', what: 'Changed redundancy and access tiers, tested private and SAS access and added a lifecycle rule.', tech: ['Azure Storage', 'SAS', 'Lifecycle Management'], shot: '/coursework/cst8912-lab3.webp' },
				{ kind: 'Lab 4', title: 'SQL to Blob with Data Factory', what: 'Created an Azure SQL Database and copied its data to Blob Storage as CSV with a Data Factory pipeline.', tech: ['Azure SQL', 'Data Factory', 'Blob Storage'], shot: '/coursework/cst8912-lab4.webp' },
			],
		},
		{
			code: 'CST8913',
			name: 'Cloud Migration',
			items: [
				{ kind: 'Lab 3', title: 'IaaS vs PaaS target designs', what: 'Designed two Azure targets for a Flask + React + PostgreSQL app: all-VM IaaS and managed PaaS.', tech: ['HAProxy', 'Nginx', 'App Service', 'Azure Database for PostgreSQL', 'Key Vault'], shot: '/coursework/cst8913-lab3.webp' },
				{ kind: 'Lab 4', title: 'Discovery and assessment', what: 'Wrote the discovery and assessment for moving a VMware environment to Azure VMs.', tech: ['Azure Migrate', 'Dependency analysis', 'Sizing and cost'] },
				{ kind: 'Lab 5', title: 'Rehost case analysis', what: 'Analysed a state agency rehost to Azure VMware Solution with an architecture diagram and a migration and validation plan.', tech: ['Azure VMware Solution', 'Azure Migrate', 'Azure Backup'], shot: '/coursework/cst8913-lab5.webp' },
				{ kind: 'Lab 2', title: 'Migration plan from a case study', what: 'Built a high-level migration plan with a RACI matrix and schedule from the Levi Strauss Azure case study.', tech: ['Migration planning', 'RACI'] },
				{ kind: 'Lab 6', title: 'AWS, Azure and Google Cloud mapping', what: 'Matched 30 common cloud resources to their AWS, Azure and Google Cloud services.', tech: ['AWS', 'Azure', 'Google Cloud'] },
			],
		},
		{
			code: 'CST8911',
			name: 'Introduction to Cloud Computing',
			items: [
				{ kind: 'Assignment 2', title: 'Azure architecture for an online bookstore', what: 'Designed and diagrammed an Azure architecture to move a small online bookstore off its own servers.', tech: ['Front Door', 'App Service', 'Azure SQL', 'Entra ID', 'draw.io'], shot: '/coursework/cst8911-a2.webp' },
				{ kind: 'Lab 2', title: 'Blob-triggered Azure Function', what: 'Built a function that runs when a file is uploaded to Blob Storage and checked it in the logs.', tech: ['Azure Functions', 'Blob Storage'], shot: '/coursework/cst8911-lab2.webp' },
				{ kind: 'Lab 1', title: 'Blob and file storage', what: 'Created a storage account with a blob container and file share and moved files with the portal, AzCopy and SAS.', tech: ['Azure Storage', 'AzCopy', 'SAS'], shot: '/coursework/cst8911-lab1.webp' },
				{ kind: 'Assignment 1', title: 'Cloud in online recruitment', what: 'Research report on how the online recruitment industry uses cloud services, with benefits and challenges.', tech: ['IaaS / PaaS / SaaS', 'Research'] },
			],
		},
		{
			code: 'CST8914',
			name: 'Accessible by Design',
			items: [
				{ kind: 'Lab 2', title: 'Fixing inaccessible pages', what: 'Fixed alt text, titles, contrast, buttons and focus in four web pages and published them.', tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'] },
				{ kind: 'Assignment 1', title: 'Screen reader comparison', what: 'Compared accessible and inaccessible pages with a screen reader and documented 12 issues.', tech: ['NVDA', 'DevTools'], shot: '/coursework/cst8914-a1.webp' },
				{ kind: 'Lab 5', title: 'Hybrid accessibility test', what: 'Tested a sample site with automated tools plus keyboard and visual checks, then wrote fixes.', tech: ['WAVE', 'axe DevTools', 'Accessibility Insights'], shot: '/coursework/cst8914-lab5.webp' },
				{ kind: 'Lab 4', title: 'WCAG defect mapping', what: 'Matched 9 defects to WCAG success criteria with techniques and user impact.', tech: ['WCAG 2.1 AA'] },
			],
		},
	],
};

const AI: Program = {
	id: 'ai',
	name: 'AI Software Development (Graduate Certificate)',
	when: 'Algonquin College, Sep 2025 – Apr 2026, completed',
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
				{ kind: 'Lab 4', title: 'TF-IDF vs DistilBERT', what: 'Compared a TF-IDF + logistic regression baseline with fine-tuned DistilBERT on review polarity.', tech: ['scikit-learn', 'Hugging Face Transformers'], shot: '/coursework/nlp-lab4.webp' },
				{ kind: 'Assignment 1', title: 'Review rating classification', what: 'Classified Amazon review ratings with bag-of-words, TF-IDF and Word2Vec features, with error analysis.', tech: ['scikit-learn', 'gensim'], shot: '/coursework/nlp-a1.webp' },
				{ kind: 'Lab 2', title: 'Rule-based chatbot and sentiment', what: 'Built an ELIZA-style regex chatbot and a rule-based IMDb sentiment classifier.', tech: ['Regex', 'NLTK'] },
				{ kind: 'Lab 1', title: "Zipf's law on real corpora", what: "Checked Zipf's law on the Brown corpus and others.", tech: ['NLTK'], shot: '/coursework/nlp-lab1.webp' },
				{ kind: 'Lab 3', title: 'Word embeddings', what: 'Evaluated Word2Vec and GloVe on SimLex-999 and tested FastText on analogies and misspellings.', tech: ['gensim', 'FastText'] },
			],
		},
		{
			code: 'CST8508',
			name: 'Machine Vision',
			items: [
				{ kind: 'Project (group)', title: 'Person tracking with virtual pan-tilt', what: 'Detects, tracks and centres a person on a webcam feed with a virtual pan-tilt view.', tech: ['RTMDet', 'ByteTrack', 'OpenCV'] },
				{ kind: 'Assignment 2', title: 'Object detection on Oxford-IIIT Pet', what: 'Trained and compared two YOLO model sizes with ROC/AUC analysis.', tech: ['Ultralytics YOLO', 'PyTorch'], shot: '/coursework/mv-a2.webp' },
				{ kind: 'Assignment 1', title: 'Flower classification', what: 'Compared ResNet-18 and MobileNetV2 on Oxford Flowers 17.', tech: ['OpenMMLab mmpretrain', 'PyTorch'], shot: '/coursework/mv-a1.webp' },
				{ kind: 'Lab 5', title: 'Cats vs dogs CNN', what: 'Trained an end-to-end CNN to classify cats and dogs.', tech: ['PyTorch'] },
				{ kind: 'Lab 4', title: 'Live webcam overlay', what: 'Captured a live webcam feed and drew a timestamp overlay on each frame.', tech: ['OpenCV'] },
				{ kind: 'Lab 3', title: 'ORB feature matching', what: 'Tested ORB features with brute-force and FLANN matching under lighting, noise and blur.', tech: ['OpenCV'], shot: '/coursework/mv-lab3.webp' },
				{ kind: 'Lab 2', title: 'Histograms and thresholding', what: 'Compared histograms with global and adaptive thresholding.', tech: ['OpenCV'], shot: '/coursework/mv-lab2.webp' },
				{ kind: 'Lab 1', title: 'Image processing basics', what: 'Loaded, converted and filtered images.', tech: ['OpenCV'] },
			],
		},
		{
			code: 'CST8509',
			name: 'Reinforcement Learning',
			items: [
				{ kind: 'Assignment 2', title: 'Robot red-ball chasing', what: 'Built a Gymnasium environment that talks to a ROS 2 robot in Gazebo and compared rule-based, Q-learning, DQN and PPO agents.', tech: ['Gymnasium', 'Stable-Baselines3', 'ROS 2', 'Gazebo'], shot: '/coursework/rl-a2.webp' },
				{ kind: 'Assignment 1', title: 'Blocks World as an RL environment', what: 'Turned a Prolog Blocks World into a Gymnasium environment and trained Q-learning, DQN and PPO agents.', tech: ['SWI-Prolog', 'Gymnasium', 'Stable-Baselines3'] },
				{ kind: 'Lab 2', title: 'Custom Cliff Walking environment', what: 'Rebuilt Cliff Walking as a Gymnasium environment and trained Q-learning, DQN and PPO.', tech: ['Gymnasium', 'Stable-Baselines3'], shot: '/coursework/rl-lab2.webp' },
				{ kind: 'Lab 5', title: 'Containerised simulation stack', what: 'Packaged the robot simulation and RL stack in Docker.', tech: ['Docker', 'Docker Compose'] },
				{ kind: 'Lab 4', title: 'Moving target in Gazebo', what: 'Added a walking red-ball actor to the simulated world and detected it from the robot camera.', tech: ['Gazebo', 'OpenCV'] },
				{ kind: 'Lab 3', title: 'Robot simulation setup', what: 'Set up a Create 3 robot simulation on WSL2.', tech: ['ROS 2 Humble', 'Gazebo', 'WSL2'] },
				{ kind: 'Lab 1', title: 'Q-learning on Cliff Walking', what: 'Implemented tabular Q-learning for Cliff Walking.', tech: ['NumPy'] },
			],
		},
		{
			code: 'CST8506',
			name: 'Machine Learning',
			items: [
				{ kind: 'Project (group)', title: 'Leaf species analysis', what: 'Classification, clustering and outlier detection on the UCI Leaf dataset with CRISP-DM; I did the clustering.', tech: ['scikit-learn', 'CRISP-DM'], shot: '/coursework/ml-project.webp' },
				{ kind: 'Assignment 2', title: 'CIFAR-10: MLP vs CNN', what: 'Compared an MLP with Keras dense and convolutional networks on CIFAR-10, with hyperparameter sweeps.', tech: ['Keras', 'scikit-learn'], shot: '/coursework/ml-a2.webp' },
				{ kind: 'Assignment 1', title: 'Wine classification with CRISP-DM', what: 'Compared kNN, random forest, SVM, logistic regression and MLP on the Wine data, raw and reduced with PCA and LDA.', tech: ['scikit-learn'], shot: '/coursework/ml-a1.webp' },
				{ kind: 'Lab 5', title: 'Outliers, resampling and stacking', what: 'Found outliers with one-class SVM and DBSCAN, then used resampling and a stacking classifier.', tech: ['scikit-learn'], shot: '/coursework/ml-lab5.webp' },
				{ kind: 'Lab 4', title: 'Time-series forecasting', what: 'Forecast daily minimum temperatures with a recurrent neural network.', tech: ['Keras', 'statsmodels'], shot: '/coursework/ml-lab4.webp' },
				{ kind: 'Lab 3', title: 'Digit recognition with a CNN', what: 'Classified MNIST digits with a convolutional network.', tech: ['Keras'], shot: '/coursework/ml-lab3.webp' },
				{ kind: 'Lab 2', title: 'SVM kernels compared', what: 'Compared linear, polynomial and RBF SVMs on standardised, PCA and LDA versions of the Wine data.', tech: ['scikit-learn'], shot: '/coursework/ml-lab2.webp' },
				{ kind: 'Lab 1', title: 'PCA before classification', what: 'Applied PCA to the Pima diabetes data and compared a random forest before and after.', tech: ['scikit-learn'], shot: '/coursework/ml-lab1.webp' },
			],
		},
		{
			code: 'CST8502',
			name: 'Machine Learning',
			term: 'Fall 2025',
			items: [
				{ kind: 'Final project', title: 'Traffic violation analysis', what: 'Followed CRISP-DM on a traffic violations dataset: decision tree classification, k-means clustering and LOF outlier detection.', tech: ['Python', 'scikit-learn', 'CRISP-DM'] },
				{ kind: 'Study tool', title: 'Midterm practice app', what: 'Bilingual practice and timed-exam app with progress tracking, built to study for the midterm.', tech: ['React', 'Vite'], repo: 'https://github.com/zhizhunbao/cst8502-ml-midterm-practice-project', demo: 'https://zhizhunbao.github.io/cst8502-ml-midterm-practice-project/', shot: '/coursework/cst8502-practice.webp' },
			],
		},
		{
			code: 'CST8504',
			name: 'Applying AI',
			term: 'Fall 2025',
			items: [
				{ kind: 'Study tool', title: 'Python learning and exam system', what: 'Practice app that runs Python in the browser, with multiple question types, charts and progress tracking.', tech: ['React', 'Pyodide', 'Tailwind', 'Recharts'], repo: 'https://github.com/zhizhunbao/cst8504-aat-midterm-practice-project' },
			],
		},
		{
			code: 'PHI4005',
			name: 'Ethics in Artificial Intelligence',
			term: 'Fall 2025',
			items: [
				{ kind: 'Presentation (group)', title: 'Ethical AI tool analysis', what: 'Bilingual website comparing three ethical AI tools: Aequitas for fairness, LIME for transparency and Opacus for privacy; I covered the privacy tool.', tech: ['Aequitas', 'LIME', 'Opacus', 'Static site'], repo: 'https://github.com/zhizhunbao/ethical-ai-tool-analysis', demo: 'https://zhizhunbao.github.io/ethical-ai-tool-analysis/', shot: '/coursework/phi4005-ethical-ai.webp' },
			],
		},
		{
			code: 'Self-directed',
			name: 'Learning tools I built',
			items: [
				{ kind: 'Tool', title: 'AIML Studio', what: 'Interactive platform to learn, run and visualise machine learning algorithms in real time.', tech: ['React', 'Zustand', 'MDX', 'REST API'], repo: 'https://github.com/zhizhunbao/aiml-studio', demo: 'https://zhizhunbao.github.io/aiml-studio/', shot: '/coursework/aiml-studio.webp' },
				{ kind: 'Tool', title: 'Python Data Basics', what: 'Learning platform that walks through Python data processing with business scenarios and an in-browser editor.', tech: ['React', 'Zustand', 'Monaco Editor', 'Tailwind'], repo: 'https://github.com/zhizhunbao/python-data-basics', demo: 'https://zhizhunbao.github.io/python-data-basics/', shot: '/coursework/python-data-basics.webp' },
			],
		},
	],
};

/** 页面上的项目顺序:在读的 Cloud 在前。 */
export const PROGRAMS: Program[] = [CLOUD, AI];
