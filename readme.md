# GSoC 2026 — New Organizations Research (Deep Dive)

> Researched: February 24, 2026
> Purpose: Detailed analysis of 10 first-time/new GSoC 2026 organizations
> Context: User (Sameer Pawar) is sticking with M-Lab but exploring other orgs for reference
> User's stack: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, JWT, Socket.IO, MySQL, Cypress

---

## Table of Contents

1. [EROFS Filesystem](#1-erofs-filesystem)
2. [Gemini CLI](#2-gemini-cli)
3. [German Center for Open Source AI (GC.OS)](#3-german-center-for-open-source-ai-gcos)
4. [Learning Unlimited](#4-learning-unlimited)
5. [MLLAM](#5-mllam)
6. [MalariaGEN](#6-malariagen)
7. [MoFA Org](#7-mofa-org)
8. [MoganLab](#8-moganlab)
9. [OpenMS Inc](#9-openms-inc)
10. [The OpenROAD Initiative](#10-the-openroad-initiative)
11. [Summary Comparison Table](#summary-comparison-table)
12. [Final Verdict](#final-verdict)

---

## 1. EROFS Filesystem

### What It Is
EROFS (Enhanced Read-Only File System) is a modern, high-performance block-based immutable Linux filesystem. It's already deployed on **billions of devices**. Almost all Linux mainstream distros support it. It's the recommended filesystem for Android system partitions and is heavily used in the container world (Containerd 2.1, Composefs, gVisor).

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/erofs-filesystem |
| Website | https://erofs.docs.kernel.org |
| Technologies | **C, Android, Linux kernel, Containerd, gVisor** |
| Topics | Operating systems, containers, Android, filesystems, agent sandbox |
| Email | linux-erofs@lists.ozlabs.org |
| Mailing List | https://lists.ozlabs.org/listinfo/linux-erofs |
| Ideas List | https://erofs.docs.kernel.org/en/latest/roadmap.html |
| First-time GSoC? | Yes (new in 2026) |

### Project Ideas (from Roadmap)
Items marked [SOC] are intended for Summer of Code:

1. **[SOC] Multi-threaded decompression** (erofs-utils)
   - GitHub issue: https://github.com/erofs/erofs-utils/issues/33
   - Skills: C, systems programming, multi-threading

2. **[SOC] Porting EROFS to BSD Kernels**
   - GitHub issue: https://github.com/erofs/freebsd-freebsd-src/issues/1
   - Skills: C, BSD kernel, filesystem internals

3. **EROFS Rust in-kernel adaption** (EXPERIMENTAL, for students)
   - Skills: Rust, Linux kernel
   - Mail: https://lore.kernel.org/r/20240916135634.98554-1-toolmanp@tlmp.cc

4. **Containerd EROFS Support & Improvements**
   - GitHub: https://github.com/containerd/containerd/issues/11340
   - Skills: Go, containers

5. **gVisor EROFS Snapshotter Support**
   - Skills: Go, gVisor internals

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript, TypeScript, React | C, Linux kernel, BSD, Go, Rust | ❌ **ZERO MATCH** |

### Verdict: ❌ HARD NO
This is deep systems programming — Linux kernel, C, BSD, containers. Every single project requires C or Go at the kernel/systems level. You have zero relevant skills here. Don't even think about it.

---

## 2. Gemini CLI

### What It Is
Gemini CLI is Google's open-source AI agent that brings Gemini directly into the terminal. It's a massive TypeScript-based project with tools, MCP (Model Context Protocol) support, A2A (Agent-to-Agent) protocol, sandboxing, and more. Launched by Google, it's one of the most popular new repos on GitHub.

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/gemini-cli |
| Website | https://geminicli.com |
| Technologies | **TypeScript, GenAI, MCP, Software Agent, A2A** |
| Topics | Developer tools, GenAI |
| Email | gemini-cli-soc-2026@google.com |
| Twitter | @geminicli |
| Ideas List | https://docs.google.com/document/d/1iaMZliqwUn-ACyZAbgzdXmDiQZ7l5gp8UQIIY2BnPO8 (requires Google login) |
| Contributing | https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md |
| First-time GSoC? | Yes (new in 2026) |

### GitHub Repository
| Metric | Value |
|---|---|
| Repo | https://github.com/google-gemini/gemini-cli |
| ⭐ Stars | **95,500** |
| 🍴 Forks | **11,600** |
| 👥 Contributors | **526** |
| 📦 Releases | **375** |
| Languages | TypeScript 98.3%, JavaScript 1.6% |
| License | Apache 2.0 |
| Issues | ~1,900 open |
| PRs | ~381 open |
| Last commit | Within hours (extremely active) |

### Project Structure (Monorepo)
```
packages/
├── a2a-server/     - A2A server implementation (Experimental)
├── cli/            - Command-line interface (React-based TUI)
├── core/           - Core backend logic
├── test-utils/     - Testing utilities
├── vscode-ide-companion/ - VS Code extension
docs/               - Documentation
scripts/            - Build/test utilities
```

### Key Features
- Free tier: 60 requests/min, 1,000 requests/day
- Gemini 3 models with 1M token context window
- Built-in tools: Google Search, file ops, shell commands, web fetch
- MCP server integration for custom tools
- React-based terminal UI (Ink)
- Sandboxing (macOS Seatbelt, Docker, Podman)
- A2A protocol support (experimental)

### Contributing Process
- Must sign Google CLA
- Fork → branch → work in `packages/` → `npm run preflight` → PR
- Issues tagged `help-wanted` are for community contributors
- `🔒Maintainers only` issues are reserved for Google employees
- Self-assign with `/assign` comment (max 3 issues at a time)
- Strict PR guidelines: must link to existing issue, keep small, use Conventional Commits
- Dev setup: Node.js ~20.19.0, `npm install`, `npm run build`, `npm start`
- Tests: `npm run test` (unit), `npm run test:e2e` (integration)

### What I Couldn't Access
- The specific GSoC project ideas list (Google Docs requires login)
- Based on the org description, projects likely involve work on MCP, A2A, agent capabilities, developer tools

### Competition Analysis
This is a **Google-backed project with 95k stars**. Expect:
- MASSIVE competition from contributors worldwide
- Hundreds of people fighting for GSoC slots
- Very experienced TypeScript developers competing
- Google's own standards for code quality (strict reviews)

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| TypeScript ✅ | TypeScript ✅ | ✅ Direct match |
| JavaScript ✅ | JavaScript ✅ | ✅ Direct match |
| Node.js ✅ | Node.js ✅ | ✅ Direct match |
| React ✅ | React (Ink TUI) ✅ | ✅ Direct match |
| - | GenAI/MCP/A2A | ⚠️ Learnable |
| - | Sandboxing/Systems | ❌ Gap |

### Verdict: ⚠️ GREAT TECH FIT, BRUTAL COMPETITION
TypeScript is your strongest language and this project is 98.3% TypeScript. The tech fit is excellent. But this is a Google project with 95k stars and 526 contributors. Competition will be insane. The bar for getting accepted will be extremely high. If you apply here, you're competing against people who've been contributing for months to a massive, well-known project. Not impossible, but don't count on it as your primary option.

---

## 3. German Center for Open Source AI (GC.OS)

### What It Is
GC.OS builds open source AI software and a sovereign tech stack, democratically run by its users. It's a German organization focused on AI/ML tools. It operates as an **umbrella org** — multiple sub-projects apply under their banner.

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/german-center-for-open-source-ai |
| Website | https://gcos.ai |
| Technologies | **Python, PyTorch, scikit-learn** |
| Topics | Machine learning, time-series, Causal Inference |
| Discord | https://discord.gg/7uKdHfdcJG |
| Ideas List | https://github.com/gc-os-ai/mentoring-projects/blob/main/2026/ideas_list.md |
| Contributor Guidance | https://github.com/gc-os-ai/mentoring-projects/blob/main/README.md#contributor-guides |
| First-time GSoC? | Yes (new in 2026) |

### Sub-Projects (Umbrella Org)
GC.OS doesn't have its own project ideas. It hosts these sub-projects:

1. **pgmpy** — Probabilistic Graphical Models in Python
   - Ideas: https://github.com/pgmpy/pgmpy/wiki/GSoC-2026-Project-Ideas
   - Skills: Python, probabilistic models, statistics

2. **pyGAM** — Generalized Additive Models
   - Ideas: https://github.com/gc-os-ai/mentoring-projects/blob/main/2026/pyGAM.md
   - Skills: Python, statistics, ML

3. **pytorch-forecasting** — Time series forecasting with PyTorch
   - Ideas: https://github.com/sktime/mentoring/blob/main/internships/projects_2026.md#pytorch-forecasting-and-dsipts
   - Skills: Python, PyTorch, time series

4. **skpro** — Probabilistic supervised regression
   - Ideas: https://github.com/sktime/mentoring/blob/main/internships/projects_2026.md#skpro
   - Skills: Python, scikit-learn, statistics

5. **sktime** — Time series analysis framework
   - Ideas: https://github.com/sktime/mentoring/blob/main/internships/projects_2026.md#sktime
   - Skills: Python, scikit-learn, time series

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript, TypeScript, React | Python, PyTorch, scikit-learn, statistics | ❌ **NO MATCH** |

### Verdict: ❌ HARD NO
Every single sub-project is Python ML/statistics heavy. No web development whatsoever. No JavaScript, no frontend work. Pure data science and machine learning libraries. Not your domain at all.

---

## 4. Learning Unlimited

### What It Is
Learning Unlimited links universities with local communities to create educational programs (like Splash events). Their open-source project is a **Django/Python web application** (ESP-Website) used by chapters to manage student/teacher registration, class scheduling, and event logistics.

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/learning-unlimited |
| Website | https://www.learningu.org |
| Technologies | **Python, JavaScript, Django, HTML, CSS** |
| Topics | Education, web, full stack, Outreach |
| Email | gsoc-mentors-2026@learningu.org |
| Discussions | https://github.com/learning-unlimited/ESP-Website/discussions |
| Facebook | https://www.facebook.com/SplashLearningUnlimited |
| Ideas List | https://docs.google.com/document/d/e/2PACX-1vQHE4OyXDdhDPkP2X7OWdSjauW_rQi1Fhr3RwEgTrSjDbrHO3nePDCdJkCheeocMrRTdqbHqnmb9WcG/pub |
| Contributor Guidance | https://docs.google.com/document/d/e/2PACX-1vSQrzex-1PlqTGwOiFmiFnGlm1_3ajsf-Wo2z-9hUzJybZQOBD4EraIH_iW7Qn87TPB2SR5O_JX1T6C/pub |
| First-time GSoC? | No — Learning Unlimited has participated before |

### GitHub Repository
| Metric | Value |
|---|---|
| Repo | https://github.com/learning-unlimited/ESP-Website |
| ⭐ Stars | 113 |
| 🍴 Forks | 187 |
| 👥 Contributors | 85 |
| 📦 Releases | 6 |
| Languages | Python 52.9%, HTML 17.7%, JavaScript 17.4%, CSS 5.9%, Less 3.5% |
| License | MIT |
| Issues | 642 open |
| PRs | 157 open |
| Last commit | Within hours (very active recently) |

### Project Ideas (6 projects, all detailed)

#### 1. Regression Tests Expansion
- **Difficulty:** Easy | **Size:** 175 hours
- **Description:** Systematically find untested code paths and create unit tests
- **Skills:** Python/Django testing, unittest, Selenium, GitHub Actions CI/CD
- **Mentors:** Miles Calabresi, Will Gearty
- **Issues:** #3780, #3773, #599, #794, #1452, #933, #3457, #3460

#### 2. New Module Management UI
- **Difficulty:** Medium | **Size:** 175 hours
- **Description:** Design and implement new admin interface for managing program modules (enable/disable, schedule, opening/closing times)
- **Skills:** UI/UX design, **Frontend (HTML/CSS/JavaScript)**, Django ORM, Django views/forms
- **Mentors:** Will Gearty
- **Issues:** #3854, #2895

#### 3. Theming Improvements ⭐
- **Difficulty:** Hard | **Size:** 350 hours
- **Description:** Upgrade Bootstrap from 2.3.2 to 5.3. Expand Bootstrap usage. Integrate Bootswatch themes. Fix color contrast. Improve mobile responsiveness.
- **Skills:** **Frontend (HTML/CSS/JavaScript)**, Bootstrap 5, LESS/SASS, responsive design, UI/UX, accessibility
- **Mentors:** Katherine Brumberg, Will Gearty
- **Issues:** #3810, #3809, #3808

#### 4. Better Form Customization
- **Difficulty:** Medium | **Size:** 175 hours
- **Description:** Make form customization more intuitive. Add links from forms to config pages. Create admin-friendly interface for custom form fields.
- **Skills:** Django forms, **Frontend (HTML/CSS/JavaScript)**, database schema, Django templates, UI/UX
- **Mentors:** William Gearty, Miles Calabresi
- **Issues:** #3690, #2707

#### 5. Better Onsite Management for Admins ⭐
- **Difficulty:** Medium | **Size:** 175 hours
- **Description:** Create admin onsite webapp — mobile-friendly, live monitoring of enrollments/check-ins, per-class toggle, real-time updates.
- **Skills:** Django REST API, **JavaScript/AJAX for real-time updates**, mobile-responsive UI/UX, WebSocket or polling
- **Mentors:** William Gearty, Katherine Brumberg
- **Issues:** #2672

#### 6. Communications Improvements
- **Difficulty:** Hard | **Size:** 350 hours
- **Description:** Enhance comm panel with email templates, scheduled sending, teacher comm panel. Integrate with SendGrid.
- **Skills:** Django, HTML email, SendGrid API, cron jobs, **Frontend JavaScript**, UX design
- **Mentors:** Miles Calabresi, William Gearty
- **Issues:** #2885, #3833, #3951

### AI Policy
- AI usage permitted for code, docs, tests
- Must disclose which AI tools were used
- Must confirm human review of all AI-generated content
- Conversational AI between contributors/reviewers restricted

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript ✅ | JavaScript ✅ | ✅ Direct match |
| HTML/CSS ✅ | HTML/CSS ✅ | ✅ Direct match |
| React (similar paradigms) | Django templates | ⚠️ Transferable |
| Node.js/Express | Python/Django | ⚠️ Backend concepts transfer |
| - | Python/Django | ❌ Need to learn |
| Responsive design ✅ | Bootstrap 5 ✅ | ✅ Direct match |

### Best-Fit Projects for You
1. **Project 3 (Theming Improvements)** — 90% frontend work. Bootstrap upgrade, responsive design, Bootswatch themes. This is HTML/CSS/JavaScript at its core. You know Tailwind, Bootstrap is similar concepts.
2. **Project 5 (Onsite Management)** — Real-time webapp with AJAX, mobile-responsive UI. Very similar to what you've done with Socket.IO.
3. **Project 2 (Module Management UI)** — Frontend-heavy admin interface work.

### Verdict: ⚠️ MODERATE FIT — WORTH CONSIDERING
The frontend-heavy projects (3, 5, 2) align well with your skills. The catch: the backend is Python/Django, which you'd need to learn. But some projects (especially Theming) are 80-90% frontend HTML/CSS/JS with minimal Django. The org is smaller (113 stars), less competitive. This could be a solid fallback option if M-Lab doesn't work out. The project has real users and real impact in education.

---

## 5. MLLAM

### What It Is
MLLAM (Machine Learning for Limited Area Modeling) is a collaborative community for neural weather prediction using graph-based models. Their main project, neural-lam, uses PyTorch and Graph Neural Networks for weather forecasting at regional scale. Members are from national weather services and research institutions.

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/mllam |
| Website | https://github.com/mllam |
| Technologies | **Python, NumPy, PyTorch, xarray, Zarr** |
| Topics | Machine learning, AI, deep learning, earth science, Weather Forecasting |
| Slack | https://kutt.it/mllam |
| Ideas List | https://github.com/mllam/neural-lam/wiki/GSoC-ideas |
| First-time GSoC? | Yes (new in 2026) |

### GitHub Repository
| Metric | Value |
|---|---|
| Repo | https://github.com/mllam/neural-lam |
| ⭐ Stars | 219 |
| 🍴 Forks | 131 |
| 👥 Contributors | 11 |
| 📦 Releases | 5 |
| Languages | Python 100% |
| License | MIT |
| Issues | 44 open |
| PRs | 47 open |

### Project Ideas (4 projects)

#### 1. Flexible Graph Construction
- **Difficulty:** Medium | **Size:** 350 hours
- **Skills:** Shell, Python, PyTorch
- **Description:** Create well-balanced neural network grids for different data structures (irregular atmospheric data, sparse ship-observations)
- **Mentors:** Hauke Schulz, Leif Denby, Joel Oskarson
- **Issues:** #164, weather-model-graphs issues

#### 2. Automatic Documentation from Source Code
- **Difficulty:** Medium | **Size:** 175 hours
- **Skills:** Shell, Python
- **Description:** Set up documentation system from Python docstrings. Integrate with CI/CD.
- **Mentors:** Hauke Schulz, Leif Denby, Joel Oskarson
- **Issues:** #61, #69

#### 3. Generalizing to Probabilistic Forecasting Models
- **Difficulty:** Large | **Size:** 350 hours
- **Skills:** Python, PyTorch
- **Description:** Generalize codebase for models that sample different possible forecasts
- **Mentors:** Joel Oskarson, Hauke Schulz, Leif Denby
- **Issues:** #49, #62

#### 4. Global Weather Forecasting
- **Difficulty:** Medium | **Size:** 175 hours
- **Skills:** Python, PyTorch, PyTorch Geometric, xarray
- **Description:** Enable global forecasting by constructing global graphs for GNN models
- **Mentors:** Joel Oskarson, Hauke Schulz, Leif Denby
- **Issues:** #63

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript, TypeScript, React | Python, PyTorch, NumPy, xarray | ❌ **NO MATCH** |

### Verdict: ❌ HARD NO
100% Python. Heavy ML, scientific computing, graph neural networks, weather modeling. No web development of any kind. Even the "easiest" project (documentation) requires deep understanding of Python docstrings and the scientific codebase. Not for you.

---

## 6. MalariaGEN

### What It Is
The Malaria Genomic Epidemiology Network — a global network of 70+ partners studying malaria surveillance through genomic data. Their flagship project is the **Vector Observatory**: whole-genome sequence data for 30,000+ mosquitoes across 17 species. This is the largest genetic variation dataset for any multicellular organism (other than humans). They optimize everything to run in free cloud environments (Google Colab).

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/malariagen |
| Website | https://www.malariagen.net |
| Technologies | **Python, GCS (Google Cloud Storage)** |
| Topics | Machine learning, genomics, big data, cloud, analytics |
| Email | support@malariagen.net |
| Discussions | https://github.com/malariagen/malariagen-data-python/discussions |
| Ideas List | https://docs.google.com/document/d/178LEZEsC0xbknHDId83k5XzIDRtnyVw243Ta0fhlvPM (requires Google login) |
| First-time GSoC? | Yes (new in 2026) |

### Key GitHub Repo
- Main: https://github.com/malariagen/malariagen-data-python
- Focus: Python package for accessing and analyzing malaria genomic data in the cloud

### What I Couldn't Access
- The specific GSoC ideas list (Google Doc requires login to view full details)
- Based on org description, projects will involve Python, cloud computing, data analysis, potentially ML

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript, TypeScript, React | Python, GCS, genomics, big data, cloud analytics | ❌ **NO MATCH** |

### Verdict: ❌ HARD NO
Python and cloud-native genomic data analysis. Requires domain knowledge in genomics/biology. No web dev. No JavaScript. The mission is incredible (fighting malaria), but the tech stack is completely wrong for you.

---

## 7. MoFA Org

### What It Is
MoFA (Modular Framework for Agents) is an open-source AI agent framework built in **Rust** using the **Makepad** UI framework. MoFA Studio is a desktop application for creating AI-powered applications. Everything is Rust-native with GPU-accelerated UI.

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/mofa-org |
| Website | https://mofa.ai |
| Technologies | **Python, Rust** |
| Topics | Development framework, AI Agent, Composition AI |
| Email | dev@mofa.ai |
| Discord | https://discord.gg/hKJZzDMMm9 |
| Ideas List | https://github.com/mofa-org/GSoC/blob/main/ideas-list.md |
| Contributor Guidance | https://github.com/mofa-org/GSoC/blob/main/README.md |
| First-time GSoC? | Yes (new in 2026) |

### GitHub Repositories
- Core runtime: https://github.com/mofa-org/mofa
- Studio: https://github.com/mofa-org/mofa-studio
- UI components: makepad-chart, makepad-d3, makepad-flow, makepad-element

### Project Ideas (6 projects — ALL require Rust)

#### 1. AgentForge — Composable Plugin System
- **Difficulty:** Hard | **Size:** 175 hours
- **Skills:** Rust, plugin architecture, type systems, LLM integration
- **Mentors:** BH3GEI (Yao Li), lijingrs (AmosLi)

#### 2. Studio Observability Dashboard
- **Difficulty:** Medium | **Size:** 90 hours
- **Skills:** Rust, HTTP/WebSocket (axum/tokio), Makepad UI, data visualization
- **Mentors:** BH3GEI, yangrudan (CookieYang)

#### 3. Edge Model Orchestrator
- **Difficulty:** Hard | **Size:** 175 hours
- **Skills:** Rust, systems programming, resource management, Apple Silicon / Linux GPU
- **Mentors:** BH3GEI, lijingrs

#### 4. Session Recorder & Visual Debugger
- **Difficulty:** Hard | **Size:** 175 hours
- **Skills:** Rust, data visualization, systems design, debugging tools
- **Mentors:** BH3GEI, lijingrs

#### 5. MoFA Input Migration (macOS voice input)
- **Difficulty:** Medium | **Size:** 90-175 hours
- **Skills:** Rust, C++/Rust interop, macOS development, Apple Silicon
- **Mentors:** BH3GEI, yangrudan

#### 6. Makepad AI Application Toolkit
- **Difficulty:** Medium | **Size:** 90 hours
- **Skills:** Rust, UI/UX design, Makepad framework
- **Mentors:** BH3GEI, yangrudan

### Contributing Process
- Comment on GitHub issue to express interest
- Wait for maintainer assignment before writing code
- 20 open tasks listed as entry points
- "Every feature must meet enterprise-grade delivery standards"
- Very active (last commit to ideas list: 7 hours before research)

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript, TypeScript, React | Rust, Makepad, systems programming, C++ interop | ❌ **ZERO MATCH** |

### Verdict: ❌ HARD NO
Same story as Boa. **Every single project requires Rust.** The Makepad UI framework is Rust-native, not web-based. Even the "UI" projects require Rust and Makepad skills, not HTML/CSS/JavaScript. The mentors know exactly one language stack: Rust. No path from your current skills to contributing here effectively.

---

## 8. MoganLab

### What It Is
MoganLab develops **Mogan STEM**, a professional scientific writing platform for math, physics, statistics, and CS. It's a fork of GNU TeXmacs, optimized for performance and UX. Claims you can create documents "100 times faster than LaTeX."

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/moganlab |
| Website | https://mogan.app/en/ |
| Technologies | **C++, Qt, Scheme** |
| Topics | Editor, LaTeX, AI for math |
| Email | yansong@liii.pro |
| Reddit | https://www.reddit.com/r/TeXmacs/ |
| Ideas List | https://github.com/MoganLab/GSoC-2026-MoganLab/blob/main/ideas/main.md |
| Contributor Guidance | https://github.com/XmacsLabs/mogan/blob/main/devel/Develop_on_Linux.md |
| Main Repo | https://github.com/XmacsLabs/mogan |
| First-time GSoC? | Yes (new in 2026) |

### Project Ideas (2 projects)

#### 1. Web-Based Collaborative Editing Core ⭐
- **Difficulty:** High
- **Description:** Port Mogan's desktop editing engine to the web using WebAssembly. Enable real-time collaborative writing in browser. Create prototype that opens `.tmu` files, renders document structure, handles concurrent editing.
- **Skills:** Strong **C++** (porting core logic), **JavaScript/TypeScript** & modern web frameworks, **WebAssembly** (Emscripten). WebSockets is a plus.
- **Mentor:** Darcy Shen (da@liii.pro)
- **Reference:** https://research.mogan.app/research.html

#### 2. Julia Plugin with Virtual Environment Support
- **Difficulty:** Medium
- **Description:** Build Julia language plugin for Mogan — execute code, manage environments, handle packages.
- **Skills:** Julia, C++, Scheme
- **Mentor:** Jack Li (yansong@liii.pro)
- **Reference:** https://github.com/mgubi/tm-julia

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript/TypeScript ✅ | JS/TS (Project 1) ✅ | ✅ Partial match |
| WebSocket experience ✅ | WebSockets (Project 1) ✅ | ✅ Match |
| - | C++ (core requirement) | ❌ Major gap |
| - | WebAssembly/Emscripten | ❌ Need to learn |
| - | Julia, Scheme | ❌ No match |

### Verdict: ⚠️ PARTIAL FIT — PROJECT 1 ONLY
Project 1 has JS/TS and WebSocket work, which you know. But the core challenge is **porting C++ to WebAssembly**, which requires strong C++ skills you don't have. The JS/TS part is secondary — you'd spend most time wrestling with C++/Emscripten. Project 2 is completely outside your skills (Julia + Scheme). Small org, only 2 projects, very niche domain. Risky.

---

## 9. OpenMS Inc

### What It Is
OpenMS is an open-source C++ library for **mass spectrometry data management and analysis**. It's used in proteomics and metabolomics research. It has Python wrappers (PyOpenMS) and integrations with Galaxy, KNIME, and nextflow scientific workflow systems.

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/openms-inc |
| Website | https://OpenMS.org |
| Technologies | **Python, Cython, C++, PyTorch, Streamlit** |
| Topics | Open science, deep learning, algorithms, mass spectrometry, webdev |
| Discord | https://discord.com/invite/4TAGhqJ7s5 |
| Ideas & Guidance | https://openms.de/news/gsoc2026/ |
| Main Repo | https://github.com/OpenMS/OpenMS |
| First-time GSoC? | No — OpenMS has participated in GSoC before |

### Project Ideas (6 projects across 4 themes)

#### Theme A: Data Formats & Interoperability

**1. imzML Parser in OpenMS**
- **Skills:** C++, XML Parsing, Mass Spectrometry Imaging
- **Size:** 350 hours | **Difficulty:** Medium
- C++ implementation of mass spectrometry imaging data parser

**2. Full Python Bindings Using Nanobind**
- **Skills:** Python, C++, Nanobind, Cython
- **Size:** 350 hours | **Difficulty:** Medium to Advanced
- Replace Cython bindings with modern nanobind-based bindings

**3. Accelerating OpenSwathWorkflow**
- **Skills:** C++, Algorithm Optimization, Profiling
- **Size:** 200 hours | **Difficulty:** Medium
- **Mentor:** Joshua Charkow

#### Theme B: Dependency Management

**4. Unify Development Dependencies Using vcpkg**
- **Skills:** CMake, Git, Command Line, Linux, macOS, Windows
- **Size:** 175 hours | **Difficulty:** Medium

#### Theme C: Visualization & Results

**5. Interactive Proteoform-Centric Visualization**
- **Skills:** Python, mass spectrometry, proteomics, data visualization, **web development**
- **Size:** ~350 hours | **Difficulty:** Advanced
- **Mentors:** Kyowon Jeong, Tom Müller
- Build interactive visualization tool inspired by ProSight Lite

#### Theme D: Machine Learning

**6. Optimizing Casanovo for Real-Time Peptide Sequencing**
- **Skills:** Python, PyTorch, Deep learning, Profiling
- **Size:** 350 hours | **Difficulty:** Advanced
- **Mentors:** William Stafford Noble, Wout Bittremieux

### AI Usage Policy
- AI tools allowed but ALL submissions must be reviewed
- Must clearly disclose AI usage in any PR
- If caught submitting unreviewed AI work → banned from project
- Strict coding conventions enforcement

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript, TypeScript, React | C++, Python, Cython, CMake, PyTorch | ❌ **NO MATCH** |

### Verdict: ❌ HARD NO
The "webdev" topic tag is misleading. Project 5 (Visualization) mentions web development but it's deeply embedded in mass spectrometry domain knowledge with Python as the primary language. Everything else is C++ or Python scientific computing. Even if you could do the web part, you'd need to understand proteomics data structures. Not your world.

---

## 10. The OpenROAD Initiative

### What It Is
ORI is a 501(c)(3) nonprofit for the open-source EDA (Electronic Design Automation) ecosystem. Their mission: "Making chip design open and accessible to all." This is about designing actual silicon chips using open-source tools.

### Organization Details
| Field | Details |
|---|---|
| GSoC Page | https://summerofcode.withgoogle.com/programs/2026/organizations/the-openroad-initiative |
| Website | https://www.openroadinitiative.org |
| Technologies | **Python, Verilog, C++, Tcl, OpenRoad** |
| Topics | ASIC design, OpenROAD chip design, Open EDA, Open-source Design, LLM chip design |
| Discussions | https://github.com/The-OpenROAD-Project/OpenROAD/discussions |
| Twitter | @OpenROAD_EDA |
| Ideas List | https://docs.google.com/document/d/1X6xxUonxgEQ_iD5G5vFp2ZOH1vbkRSspEdYrpSf4khE (requires Google login) |
| Contributor Guidance | https://openroad.readthedocs.io/en/latest/contrib/GettingInvolved.html |
| First-time GSoC? | Yes (new in 2026) |

### What I Couldn't Access
- The specific GSoC ideas list (Google Doc requires login)
- Based on technologies listed, projects involve Verilog, C++, Tcl, Python — all for chip design

### Key Repo
- https://github.com/The-OpenROAD-Project/OpenROAD

### Skill Match Assessment
| Your Skills | Required Skills | Match |
|---|---|---|
| JavaScript, TypeScript, React | Verilog, C++, Tcl, Python, chip design | ❌ **ZERO MATCH** |

### Verdict: ❌ HARD NO
Electronic Design Automation. Verilog hardware description language. Tcl scripting. C++ algorithms for chip place-and-route. This is a completely different engineering discipline (hardware/VLSI). Even if you knew the programming languages, you'd need EDA/ASIC domain knowledge. Absolutely not.

---

## Summary Comparison Table

| # | Organization | Technologies | Stars | Your Skill Match | Competition | Verdict |
|---|---|---|---|---|---|---|
| 1 | EROFS Filesystem | C, Linux kernel, Go | N/A (kernel) | ❌ Zero | Low | ❌ NO |
| 2 | **Gemini CLI** | **TypeScript**, GenAI, MCP | **95,500** | ✅ **Excellent** | 🔴 **EXTREME** | ⚠️ Great fit, brutal competition |
| 3 | GC.OS (AI) | Python, PyTorch, scikit-learn | Various | ❌ Zero | Medium | ❌ NO |
| 4 | **Learning Unlimited** | Python, **JavaScript**, Django, **HTML/CSS** | 113 | ⚠️ **Moderate** | 🟢 **Low** | ⚠️ Decent fallback |
| 5 | MLLAM | Python, PyTorch, NumPy | 219 | ❌ Zero | Low | ❌ NO |
| 6 | MalariaGEN | Python, GCS | N/A | ❌ Zero | Low | ❌ NO |
| 7 | MoFA Org | **Rust**, Makepad | New | ❌ Zero | Low | ❌ NO |
| 8 | MoganLab | C++, Qt, Scheme, JS/TS | N/A | ⚠️ Partial | Low | ⚠️ Risky |
| 9 | OpenMS Inc | C++, Python, Cython | N/A | ❌ Zero | Medium | ❌ NO |
| 10 | OpenROAD | Verilog, C++, Tcl | N/A | ❌ Zero | Low | ❌ NO |

---

## Final Verdict

### The Honest Truth

Out of these 10 organizations, **8 are completely incompatible** with your skill set (C++, Rust, Python/ML, Linux kernel, hardware design). That leaves:

### Tier 1: Gemini CLI ⚠️
- **Tech fit: 10/10** — 98% TypeScript, React-based TUI, Node.js. This is literally your language.
- **Competition: 10/10** — 95k stars, Google-backed, 526 contributors already. Everyone and their dog will apply here.
- **Reality check:** You'd be competing against extremely experienced TypeScript devs who've been contributing to the repo for months. The ideas list requires Google login too, which means they control access tightly. Could work if you can make a uniquely strong contribution, but the odds are not in your favor.

### Tier 2: Learning Unlimited ⚠️
- **Tech fit: 6/10** — Backend is Python/Django (you don't know), but several projects are 80%+ frontend HTML/CSS/JavaScript.
- **Competition: 3/10** — Small org (113 stars), education-focused, fewer applicants.
- **Best projects for you:** Theming Improvements (#3), Onsite Management (#5), Module Management UI (#2) — all frontend-heavy.
- **Reality check:** You'd need to learn Python/Django basics for the backend parts, but the frontend work is squarely in your wheelhouse. This is the most realistic alternative to M-Lab among these 10 orgs.

### Tier 3: MoganLab ⚠️
- **Tech fit: 4/10** — Project 1 has JS/TS work but the core is C++/WebAssembly.
- **Competition: 2/10** — Very small, niche org.
- **Reality check:** Too risky. The JS/TS part is secondary. You'd spend most time on C++ you don't know.

### Bottom Line
**Stick with M-Lab.** None of these 10 orgs offer a better opportunity than M-Lab Project 3B for your specific skill set. Gemini CLI would be a dream project tech-wise, but the competition makes it impractical. Learning Unlimited is the only realistic alternative — keep it in mind as a backup, but don't split your focus.

Your original decision was correct. Go all-in on M-Lab.