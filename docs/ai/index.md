---
title: AI
description: "The AI section: its CS2023 knowledge area, Artificial Intelligence (AI), and its official sources, grouped under the CS2023 names."
ms.date: 2026-10-25
---

# AI

## Classification

![AI sorted into eleven groups: the curriculum CS2023 AI with its 12 knowledge units, then the products under the CS2023 names, AI Platforms and Model Evaluation: Machine Learning (scikit-learn), Deep Learning (PyTorch), Reinforcement Learning (Gymnasium, Stable-Baselines3), Computer Vision (OpenCV, Ultralytics YOLO), Natural Language Processing (NLTK, spaCy), Agents and Cognitive Systems (LlamaIndex, Model Context Protocol), AI Platforms (Claude, Hugging Face, Microsoft Foundry, Ollama, OpenAI), Model Evaluation (LLM Evaluation), Robotics (MuJoCo, ROS 2), Applications and Societal Impact (NIST AI Risk Management Framework).](media/ai.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **AI**<br>人工智能 | "A **machine-based system** that can, for a given set of **human-defined objectives**, make **predictions, recommendations, or decisions** influencing real or virtual environments." | 一种**基于机器的系统**，能够针对一组**人类定义的目标**，做出影响真实或虚拟环境的**预测、建议或决策**。 | [National Institute of Standards and Technology, n.d.-b, "artificial intelligence" entry, definition 2](https://csrc.nist.gov/glossary/term/artificial_intelligence#:~:text=A%20machine%2Dbased%20system%20that%20can) |
| **[CS2023 AI](cs2023/index.md)**<br>CS2023 AI | "Artificial intelligence (AI) studies **problems** that are **difficult or impractical to solve** with **traditional algorithmic approaches**." | 人工智能（AI）研究一类**问题**，这些问题**难以或不便解决**，若只用**传统算法方法**。 | [Joint Task Force on Computing Curricula, 2024, AI "Preamble" section, para. 1](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=3) |
| **[Machine Learning](cs2023/machine-learning/index.md)**<br>机器学习 | (context) "Explain how **machine learning works as an optimization/search process**." | （语境）解释**机器学习如何作为一个优化/搜索过程来运作**。 | [Joint Task Force on Computing Curricula, 2024, AI-ML "Illustrative Learning Outcomes", 6](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=12) |
| **[Deep Learning](cs2023/machine-learning/deep-learning.md)**<br>深度学习 | (context) "In particular, there has been a shift from **engineered representations** to **representations learned automatically** through optimization over large datasets." | （语境）特别是，已经出现了一种转变：从**人工设计的表示**转向通过在大型数据集上进行优化而**自动学习到的表示**。 | [Joint Task Force on Computing Curricula, 2024, AI "Preamble" section, para. 2](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=3) |
| **[Reinforcement Learning](cs2023/machine-learning/reinforcement-learning.md)**<br>强化学习 | (context) "Describe the differences among the **three main styles of learning (supervised, reinforcement, and unsupervised)** and determine which is appropriate to a particular problem domain." | （语境）描述**三种主要学习方式**（监督学习、强化学习和无监督学习）之间的区别，并判断哪一种适合特定的问题领域。 | [Joint Task Force on Computing Curricula, 2024, AI-ML "Illustrative Learning Outcomes", 1](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=12) |
| **[Computer Vision](cs2023/perception-and-computer-vision/index.md)**<br>计算机视觉 | (context) "Summarize the **importance of image and object recognition in AI** and indicate several significant applications of this technology." | （语境）概述**图像和物体识别在 AI 中的重要性**，并指出这项技术的几个重要应用。 | [Joint Task Force on Computing Curricula, 2024, AI-Vision "Illustrative Learning Outcomes", 1](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=20) |
| **[Natural Language Processing](cs2023/natural-language-processing/index.md)**<br>自然语言处理 | (context) "Define and contrast **deterministic and stochastic grammars**, providing examples to show the adequacy of each." | （语境）定义并对比**确定性文法和随机文法**，并举例说明各自的适用性。 | [Joint Task Force on Computing Curricula, 2024, AI-NLP "Illustrative Learning Outcomes", 1](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=18) |
| **[Agents and Cognitive Systems](cs2023/agents-and-cognitive-systems/index.md)**<br>智能体与认知系统 | (context) "Characterize and contrast the **standard agent architectures**." | （语境）刻画并对比**标准的智能体架构**。 | [Joint Task Force on Computing Curricula, 2024, AI-Agents "Illustrative Learning Outcomes", 1](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=17) |
| **AI Platforms**<br>AI 平台 | (context) "The platform provides **streamlined management** through **unified role-based access control (RBAC), networking, and policies** under one Azure resource provider namespace." | （语境）该平台提供**简化的管理**，通过**统一的基于角色的访问控制（RBAC）、网络和策略**，位于一个 Azure 资源提供程序命名空间之下。 | [Microsoft, n.d., "What is Microsoft Foundry?", para. 1](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) |
| **[Model Evaluation](llm-evaluation/index.md)**<br>模型评测 | (context) "We present **Holistic Evaluation of Language Models (HELM)** to improve **the transparency of language models**." | （语境）我们提出**语言模型整体评估**（HELM），以提高**语言模型的透明度**。 | [Liang et al., 2023, Abstract](https://arxiv.org/html/2211.09110) |
| **[Robotics](cs2023/robotics/index.md)**<br>机器人 | (context) "List **capabilities and limitations of today's state-of-the-art robot systems**, including their sensors and the crucial sensor processing that informs those systems." | （语境）列出**当今最先进机器人系统的能力和局限**，包括它们的传感器以及为这些系统提供信息的关键传感器处理。 | [Joint Task Force on Computing Curricula, 2024, AI-Robotics "Illustrative Learning Outcomes", 1](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=19) |
| **[Applications and Societal Impact](cs2023/applications-and-societal-impact/index.md)**<br>应用与社会影响 | (context) "Given a real-world application domain and problem, **formulate an AI solution** to it, identifying proper data/input, preprocessing, representations, AI techniques, and evaluation metrics/methodology." | （语境）给定一个现实应用领域和问题，为它**构建 AI 解决方案**，确定合适的数据/输入、预处理、表示、AI 技术以及评估指标/方法。 | [Joint Task Force on Computing Curricula, 2024, AI-SEP "Illustrative Learning Outcomes", 1](https://csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf#page=14) |

## Coverage

| Certification | Skill area |
|---|---|
| AI-901 Microsoft Azure AI Fundamentals | [Identify AI concepts and capabilities (40–45%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901#identify-ai-concepts-and-capabilities-4045) |
| AI-901 Microsoft Azure AI Fundamentals | [Implement AI solutions by using Microsoft Foundry (55–60%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901#implement-ai-solutions-by-using-microsoft-foundry-5560) |
| AI-103 Developing AI Apps and Agents on Azure | [Plan and manage an Azure AI solution (25–30%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103#plan-and-manage-an-azure-ai-solution-2530) |
| AI-103 Developing AI Apps and Agents on Azure | [Implement generative AI and agentic solutions (30–35%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103#implement-generative-ai-and-agentic-solutions-3035) |
| AI-103 Developing AI Apps and Agents on Azure | [Implement computer vision solutions (10–15%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103#implement-computer-vision-solutions-1015) |
| AI-103 Developing AI Apps and Agents on Azure | [Implement text analysis solutions (10–15%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103#implement-text-analysis-solutions-1015) |
| AI-103 Developing AI Apps and Agents on Azure | [Implement information extraction solutions (10–15%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103#implement-information-extraction-solutions-1015) |

## References

Anthropic. (n.d.). *Claude Platform Docs*. Retrieved October 24, 2026, from <https://platform.claude.com/docs/en/home>

Farama Foundation. (n.d.). *Gymnasium Documentation* (Version 1.4.0). Retrieved October 25, 2026, from <https://gymnasium.farama.org/>

Google DeepMind. (n.d.). *MuJoCo documentation*. Retrieved October 25, 2026, from <https://mujoco.readthedocs.io/en/stable/>

Hugging Face. (n.d.). *Transformers documentation* (Version 5.20.2). Retrieved October 25, 2026, from <https://huggingface.co/docs/transformers/v5.20.2/en/index>

Joint Task Force on Computing Curricula. (2024). *Computer science curricula 2023*. Association for Computing Machinery. <https://doi.org/10.1145/3664191>

Liang, P., Bommasani, R., Lee, T., Tsipras, D., Soylu, D., Yasunaga, M., Zhang, Y., Narayanan, D., Wu, Y., Kumar, A., Newman, B., Yuan, B., Yan, B., Zhang, C., Cosgrove, C., Manning, C. D., Ré, C., Acosta-Navas, D., Hudson, D. A., . . . Koreeda, Y. (2023). *Holistic evaluation of language models* (arXiv:2211.09110v2). arXiv. <https://doi.org/10.48550/arXiv.2211.09110>

LlamaIndex. (n.d.). *LlamaIndex Framework documentation*. Retrieved October 25, 2026, from <https://developers.llamaindex.ai/python/framework/>

Microsoft. (n.d.). *Microsoft Foundry documentation*. Retrieved October 24, 2026, from <https://learn.microsoft.com/en-us/azure/foundry/>

Microsoft. (2026a). *Study guide for Exam AI-103: Developing AI apps and agents on Azure*. Microsoft Learn. <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103>

Microsoft. (2026b). *Study guide for Exam AI-901: Microsoft Azure AI fundamentals*. Microsoft Learn. <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901>

Model Context Protocol. (n.d.). *Model Context Protocol documentation*. Retrieved October 25, 2026, from <https://modelcontextprotocol.io/>

National Institute of Standards and Technology. (n.d.-a). *AI Risk Management Framework*. Retrieved October 24, 2026, from <https://www.nist.gov/itl/ai-risk-management-framework>

National Institute of Standards and Technology. (n.d.-b). Artificial intelligence. In *CSRC glossary*. Retrieved October 25, 2026, from <https://csrc.nist.gov/glossary/term/artificial_intelligence>

Ollama. (n.d.). *Ollama documentation*. Retrieved October 25, 2026, from <https://docs.ollama.com/>

Open Source Robotics Foundation. (n.d.). *ROS 2 documentation*. Retrieved October 25, 2026, from <https://docs.ros.org/>

OpenAI. (n.d.). *OpenAI Platform documentation*. Retrieved October 24, 2026, from <https://platform.openai.com/docs/overview>

OpenCV team. (n.d.). *OpenCV-Python Tutorials* (Version 4.13.0). Retrieved October 25, 2026, from <https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html>

PyTorch Foundation. (n.d.-a). *PyTorch documentation* (Version 2.14). Retrieved October 25, 2026, from <https://docs.pytorch.org/docs/stable/index.html>

PyTorch Foundation. (n.d.-b). *PyTorch Tutorials* (Version 2.14.0+cu130). Retrieved October 25, 2026, from <https://docs.pytorch.org/tutorials/>

Raffin, A., Hill, A., Gleave, A., Kanervisto, A., Ernestus, M., & Dormann, N. (n.d.). *Stable-Baselines3 docs*. Retrieved October 25, 2026, from <https://stable-baselines3.readthedocs.io/en/master/>

scikit-learn developers. (n.d.). *scikit-learn User Guide* (Version 1.9.1). Retrieved October 25, 2026, from <https://scikit-learn.org/stable/user_guide.html>

Ultralytics. (n.d.). *Ultralytics YOLO docs*. Retrieved October 25, 2026, from <https://docs.ultralytics.com/>
