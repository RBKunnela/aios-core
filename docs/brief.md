# Project Brief: Synkra AIOS (aios-core)

> **Version:** 1.0.0
> **Date:** 2026-02-05
> **Author:** Atlas (Analyst Agent)
> **Mode:** YOLO — Complete draft for review

---

## Executive Summary

**Synkra AIOS** is an open-source AI Operating System framework that functions as a **premium software house in a box** — a system printer that outputs complete development processes. It orchestrates 11+ specialized AI agents, 115+ executable tasks, and 52+ templates to transform any domain requirement into production-ready software with full documentation, tests, and CI/CD pipelines.

**Primary problem:** AI-assisted development suffers from two critical failures — inconsistency in planning and context loss between sessions. Individual AI tools generate code but lack the organizational structure, quality gates, and agent collaboration needed for professional-grade software engineering.

**Target market:** Development teams, software consultancies, indie developers, and enterprises seeking to augment their engineering capacity with structured AI agent workflows.

**Key value proposition:** AIOS doesn't replace developers — it gives them a full AI-powered team (architect, PM, QA, DevOps, etc.) that follows consistent processes, maintains context across sessions, and produces documented, tested, deployable output.

---

## Problem Statement

### Current State and Pain Points

1. **AI Tool Fragmentation** — Teams use ChatGPT for code, separate tools for docs, manual processes for planning. No unified system.
2. **Context Evaporation** — Every AI session starts from zero. Previous decisions, architecture, conventions are lost.
3. **Quality Inconsistency** — AI-generated code varies wildly in style, patterns, and quality without enforced standards.
4. **Planning-Execution Gap** — PRDs exist in one place, code in another, with no traceable link between requirements and implementation.
5. **No Process Enforcement** — AI tools generate what you ask, not what you need. No quality gates, no reviews, no standards.
6. **Documentation Deficit** — AI can generate code fast, but documentation, ADRs, test strategies, and deployment guides are afterthoughts.

### Impact

- **40%+ rework** on AI-generated code due to inconsistency
- **Hours lost** per session reconstructing context
- **Zero traceability** between requirements and delivered code
- **Technical debt accumulates** faster with AI than without, when unstructured

### Why Existing Solutions Fall Short

| Solution | Gap |
|----------|-----|
| ChatGPT/Claude (raw) | No process, no persistence, no team structure |
| Cursor/Copilot | Code completion, not project management |
| Devin/similar | Single agent, no multi-agent collaboration |
| TaskMaster patterns | Task execution, not full SDLC orchestration |
| Custom GPTs | Siloed, no inter-agent communication |

### Urgency

The AI-assisted development market is growing exponentially. Teams adopting structured AI workflows NOW will have a compounding advantage. Those using unstructured AI will accumulate technical debt at accelerated rates.

---

## Proposed Solution

### Core Concept

AIOS is a **framework that installs into any project** and provides a complete AI-powered software development lifecycle — from brainstorming to deployment. It operates through specialized agents that collaborate via standardized protocols, enforced by quality gates and tracked through story-driven development.

### Architecture: System Printer

```
INPUT: Requirements (natural language)
         │
         ▼
┌─────────────────────────────────────┐
│           AIOS FRAMEWORK            │
│                                     │
│  Planning Phase:                    │
│    @analyst → @pm → @architect      │
│                                     │
│  Execution Phase:                   │
│    @sm → @dev → @qa → @devops      │
│                                     │
│  Quality Gates:                     │
│    Pre-commit → PR Review → Human   │
└─────────────────────────────────────┘
         │
         ▼
OUTPUT: Documented, tested, deployable software
```

### Key Differentiators

| Feature | AIOS | Alternatives |
|---------|------|--------------|
| Agent Team | 11+ specialized agents with personas | Single agent or no agents |
| Process Enforcement | CLAUDE.md constitution, quality gates | None |
| Context Persistence | Story-driven development, memory protocols | Session-only |
| Extensibility | Squad system for domain expansion | Fixed capabilities |
| CLI First | Framework operates entirely via CLI | GUI-dependent |
| Multi-IDE | Claude Code, Cursor, Windsurf, any MCP-compatible | IDE-locked |
| Open Source | MIT license, community-driven | Proprietary |

### Why This Will Succeed

1. **Process over tools** — AIOS doesn't compete with IDEs; it structures how AI is used within them
2. **Compounding value** — Each project built with AIOS generates templates, patterns, and conventions that improve the next
3. **Squad extensibility** — New domains are expansion packs, not rebuilds
4. **Community moat** — Open source with contributed squads creates network effects

---

## Target Users

### Primary User Segment: Solo/Small Team Developers

- **Profile:** Indie developers, 1-5 person teams, freelancers
- **Current workflow:** Use AI chat for code, manual project management, ad-hoc documentation
- **Pain points:** Inconsistent output, context loss, no quality process, documentation burden
- **Goals:** Ship faster with professional-grade quality, reduce cognitive load of managing AI tools
- **AIOS value:** Instant team of 11 agents, enforced standards, story-driven tracking

### Secondary User Segment: Software Consultancies & Agencies

- **Profile:** 5-50 person shops delivering client projects
- **Current workflow:** Mix of tools, inconsistent processes across projects, high onboarding cost
- **Pain points:** Process variance, knowledge loss between projects, expensive ramp-up
- **Goals:** Standardize delivery quality, reduce time-to-value, scale without proportional headcount
- **AIOS value:** Repeatable process (system printer), squad system for domain specialization, CLAUDE.md as project DNA

### Tertiary User Segment: Enterprise Teams

- **Profile:** Established engineering teams exploring AI augmentation
- **Current workflow:** SDLC with manual processes, some AI experiments
- **Pain points:** AI adoption without governance, security concerns, compliance needs
- **Goals:** Structured AI adoption with guardrails, audit trails, approval workflows
- **AIOS value:** Constitution with non-negotiable rules, quality gates, push authority controls, squad system for enterprise integrations (Jira, Confluence, Teams)

---

## Goals & Success Metrics

### Business Objectives

- Achieve **10,000 npm installs** within 6 months of v4.0 launch
- Build community of **500+ active contributors** to squad ecosystem
- Establish AIOS as the **reference framework** for AI agent orchestration in development
- Generate **sustainable revenue** through premium squads, consulting, and enterprise support

### User Success Metrics

- Time from idea to deployable MVP reduced by **60%+**
- Documentation completeness increases from **~20% to 90%+** (automated by agents)
- Code quality consistency (measured by CodeRabbit scores) above **85%**
- Context preservation between sessions measured by **reduced rework rate**

### Key Performance Indicators (KPIs)

- **npm weekly downloads**: Growth rate and retention
- **GitHub stars**: Community interest trajectory
- **Squad contributions**: Number of community-created squads
- **Active installations**: Projects with regular AIOS agent activity
- **Issue resolution time**: Community health indicator
- **Agent task completion rate**: Framework reliability metric

---

## MVP Scope

### Core Features (Must Have)

- **11 Specialized Agents:** Dev, QA, Architect, PM, PO, SM, Analyst, Data Engineer, DevOps, UX, AIOS Master — each with defined persona, commands, and responsibilities
- **CLI-First Framework:** All operations via `npx aios-core` commands, installable into any Node.js project
- **Story-Driven Development:** Complete workflow from story creation to implementation tracking with checkbox progress
- **CLAUDE.md Constitution:** Project-level governance that enforces standards, conventions, and processes across all sessions
- **Quality Gates (3 Layers):** Pre-commit (Husky/lint-staged), PR automation (CodeRabbit), human review
- **Template System:** 52+ YAML-driven templates for PRDs, architecture docs, stories, checklists
- **Task Execution Engine:** 115+ executable workflows that agents follow step-by-step
- **Multi-IDE Support:** Works with Claude Code, Cursor, Windsurf, and any MCP-compatible IDE
- **Squad System:** Modular expansion packs for domain-specific capabilities

### Out of Scope for MVP

- GUI/Dashboard (observability layer is secondary to CLI)
- Cloud-hosted agent execution (agents run locally in IDE)
- Real-time multi-user collaboration (async via git)
- Mobile app or web interface for non-technical users
- Paid marketplace for squads (community-first)

### MVP Success Criteria

- A developer can install AIOS, activate agents, create a PRD, generate stories, implement features, run quality gates, and deploy — all via CLI in a single project
- A squad creator can build and distribute a new squad using the squad-creator agent
- Context is preserved across sessions via story files and CLAUDE.md

---

## Post-MVP Vision

### Phase 2 Features

- **Observability Dashboard:** Real-time SSE dashboard showing agent activity, story progress, and metrics
- **Memory Layer:** Persistent agent memory (working, episodic, semantic) across sessions
- **Spec Pipeline:** Automated story specification with gather → assess → research → write → critique phases
- **Advanced Execution Engine:** Plan creation with phases, subtasks, and dependency tracking
- **Cross-Project Intelligence:** Patterns and conventions learned from one project applied to others

### Long-term Vision (1-2 Years)

- **AIOS Marketplace:** Community-contributed squads, templates, and workflows with quality ratings
- **Enterprise Edition:** SSO, audit logging, compliance controls, on-premise deployment
- **Multi-Language Support:** Expand beyond Node.js to Python, Go, Rust project scaffolding
- **Agent Composition:** Users define custom agents by combining capabilities from existing ones
- **Autonomous Workflows:** End-to-end development cycles with minimal human intervention for routine tasks

### Expansion Opportunities

- **Education:** AIOS as a teaching tool for software engineering practices (the cohort model already exists)
- **Consulting Framework:** AIOS as the operating system for AI-augmented consultancies
- **Domain Verticals:** Healthcare, fintech, e-commerce squads with pre-built compliance and patterns
- **Integration Ecosystem:** Deep integration with project management tools (Jira, Linear, Notion)

---

## Technical Considerations

### Platform Requirements

- **Target Platforms:** Any OS with Node.js 18+ (Windows, macOS, Linux)
- **IDE Support:** Claude Code (primary), Cursor, Windsurf, any MCP-compatible IDE
- **Browser/OS:** N/A (CLI-first, no browser requirement for core)
- **Performance:** Agent activation < 2s, task execution < 30s for standard operations

### Technology Stack

- **Runtime:** Node.js 18+ (v20 recommended)
- **Package Manager:** npm (published to npmjs.com as `aios-core`)
- **Language:** JavaScript (core), TypeScript (dashboard), YAML (templates/configs)
- **Quality:** ESLint, Prettier, Jest, CodeRabbit CLI
- **CI/CD:** GitHub Actions, Semantic Release
- **Documentation:** Markdown, multi-language (EN/PT/ES)

### Architecture Considerations

- **Repository Structure:** Multi-repo strategy (aios-core, aios-squads, mcp-ecosystem)
- **Module System:** 4 modules (Core, Development, Product, Infrastructure)
- **Service Architecture:** CLI-first monolith with squad expansion packs
- **Integration:** MCP protocol for IDE communication, GitHub CLI for repository operations
- **Security:** CLAUDE.md constitution with non-negotiable rules, push authority restrictions, secrets management via environment variables

---

## Constraints & Assumptions

### Constraints

- **Budget:** Open source, community-funded development; no venture capital (bootstrapped)
- **Timeline:** v4.0 with full spec pipeline and execution engine by Q2 2026
- **Resources:** Core team + community contributors; agent development is self-accelerating (AIOS builds AIOS)
- **Technical:** Dependent on LLM provider APIs (Anthropic, OpenAI); framework is model-agnostic but agents are prompt-engineered for Claude

### Key Assumptions

- LLM capabilities will continue improving, making agent tasks more reliable over time
- The developer community values structured AI workflows over ad-hoc prompting
- Claude Code (and similar tools) will maintain MCP compatibility
- Open source with MIT license will drive adoption faster than proprietary alternatives
- Squad system creates sufficient extensibility to cover diverse domains without core framework changes

---

## Risks & Open Questions

### Key Risks

- **LLM API dependency:** If Anthropic changes pricing or API significantly, framework usability is impacted. *Mitigation:* Model-agnostic architecture, support for multiple providers.
- **Community adoption:** Framework requires mindset shift from "AI as tool" to "AI as team." *Mitigation:* Education through cohorts, documentation, example projects.
- **Quality consistency:** AI agent output quality varies with model updates. *Mitigation:* Quality gates, CodeRabbit integration, test coverage requirements.
- **Complexity barrier:** 11 agents, 115+ tasks, 52+ templates can be overwhelming for new users. *Mitigation:* Guided onboarding wizard, progressive complexity, quick-start guides.
- **Token costs:** Heavy agent usage can be expensive for users. *Mitigation:* Efficient prompting, context management, task caching.

### Open Questions

- How to measure and benchmark "AI team productivity" vs traditional development?
- What's the optimal balance between agent autonomy and human oversight?
- How should the marketplace model work for community squads?
- Should there be a "lite" version for developers who only need 2-3 agents?
- How to handle agent conflicts (e.g., architect and dev disagree on approach)?

### Areas Needing Further Research

- Token cost optimization strategies for high-usage scenarios
- Multi-model agent composition (different LLMs for different agents based on strengths)
- Benchmarking AIOS output quality against traditional development methodologies
- Enterprise compliance requirements (SOC2, ISO 27001) for AI-generated code
- Legal implications of AI-generated code in regulated industries

---

## Appendices

### A. Research Summary

**Market Context:**
- AI coding assistants market projected to reach $15B+ by 2028
- 75%+ of developers use AI tools, but <10% use structured frameworks
- "Agentic development" is the emerging paradigm (2025-2026)

**Competitive Landscape:**
- No direct competitor offers the full SDLC agent team approach
- Closest alternatives are task runners (Devin, SWE-Agent) or IDE copilots (Cursor, Copilot)
- AIOS uniquely combines process enforcement with agent collaboration

**User Research:**
- Developers report 40%+ time savings with structured AI workflows
- Primary frustration with AI tools is inconsistency and context loss
- Teams value process over individual productivity gains

### B. Existing Assets

| Asset | Status | Version |
|-------|--------|---------|
| CLI Framework | Production | v3.11.3 |
| 11 Agents | Production | v2.1 |
| 115+ Tasks | Production | v2.1 |
| 52+ Templates | Production | v2.1 |
| Quality Gates | Production | 3 layers |
| Squad System | Production | v1.0 |
| Dashboard | In Development | v0.x |
| Memory Layer | Planned | — |
| Spec Pipeline | Planned | — |

### C. References

- [AIOS Architecture Documentation](docs/architecture/ARCHITECTURE-INDEX.md)
- [High-Level Architecture](docs/architecture/high-level-architecture.md)
- [Module System](docs/architecture/module-system.md)
- [User Guide](docs/guides/user-guide.md)
- [npm Package](https://www.npmjs.com/package/aios-core)
- [GitHub Repository](https://github.com/SynkraAI/aios-core)
- [AIOS Advanced Cohort](https://aios-advanced-cohort.vercel.app)

---

## Next Steps

### Immediate Actions

1. Review this brief and validate assumptions with core team
2. Prioritize Phase 2 features based on community feedback
3. Define v4.0 roadmap with spec pipeline and execution engine milestones
4. Create detailed squad marketplace PRD based on expansion opportunities
5. Establish benchmarking methodology for measuring AIOS productivity impact

### PM Handoff

This Project Brief provides the full context for **Synkra AIOS (aios-core)**. Please start in 'PRD Generation Mode', review the brief thoroughly to work with the user to create the PRD section by section as the template indicates, asking for any necessary clarification or suggesting improvements.

---

*Generated by Atlas (Analyst Agent) — investigando a verdade 🔎*
