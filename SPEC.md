# AI 热门搜索内容站 — 完整方案 SPEC

> 版本 v1.0 ｜ 生成日期 2026-06-19
> 决策基线：**英文为主 · 联盟营销为核心引擎 · AI 批量生成 + 多轮质检**

---

## 0. 核心认知（先读这段，决定全局成败）

**原始设想里有一个致命矛盾**，已在方案中纠正：

- ❌ "专供 AI 搜索引擎收录的网站" → 广告收入 ≈ 0。AI 爬虫不看广告；AI 搜索（Perplexity/ChatGPT）会把你的内容合成答案直接喂给用户，造成"零点击"。做得越成功，人类访客越少，越赚不到钱。
- ✅ **正确定位**：做一个**面向真人的英文 SEO 内容站**，主题是"AI 领域的热门搜索"，**同时**针对 Google 排名（SEO）和 AI 引用（GEO）双优化。真人通过 Google / Perplexity / ChatGPT 引用链接进来 → 看内容 → **点联盟推荐的 AI 工具下单 / 点广告**，这才有钱。

**"被 AI 收录引用" = 免费引流手段，不是变现对象。**

**钱从哪来（优先级）**：
1. **联盟营销（主引擎，0 门槛，冷启动即可赚）**：推荐 AI 工具（Jasper、Notion AI、Perplexity Pro、ElevenLabs 等），单转化 $20-100+，订阅产品按月分成 30-50%。
2. **展示广告（流量起来后叠加）**：AdSense → 满 1 万/月切 Ezoic → 满 5 万 session 切 Mediavine，RPM 阶梯式从 $3 升到 $25-50。
3. **信息差产品（中期）**：卖 Prompt 合集 / 工具对比表 / 模板，Gumroad 挂售，毛利 95%。
4. **赞助软文（DA 起来后被动接单）**：$200-2000/篇。

---

## 1. 网站定位与命名

**定位一句话**：The decision hub for AI tools & how-to — 帮用户在海量 AI 工具/用法中快速做决策的英文权威索引站。

**域名候选**（选 1 个，优先 .com，其次 .ai）：
- `AIToolsRadar.com` —— 工具雷达，evergreen，品牌感强（推荐）
- `BestAIStack.com` —— 决策型，affiliate 友好
- `AICompareGuide.com` —— "对比即变现"
- `TheAIIndex.com` —— 权威索引感，利于被 AI 引用
- `PromptHub.ai` —— Prompt 方向，.ai 强相关

> 域名是唯一硬性成本：约 $10-12/年（.com）或 $30-60/年（.ai）。用 Cloudflare Registrar 拿成本价。

---

## 2. 技术架构（最小成本 · SEO/GEO 最优）

| 层 | 选型 | 成本 | 理由 |
|---|---|---|---|
| 框架 | **Next.js 15 (App Router)** | 0 | SSG/ISR 静态生成，首屏快、利于 SEO |
| 内容 | **MDX + Contentlayer**（或 frontmatter + gray-matter） | 0 | 文章即文件，git 管理，无数据库成本 |
| 渲染 | **SSG 为主 + ISR 增量更新** | 0 | 每周新增文章无需全量重建 |
| 部署 | **Vercel Hobby** | 0 | 免费额度足够冷启动期 |
| 域名/CDN | **Cloudflare**（DNS + CDN + Registrar） | 域名成本价 | 全球加速、免费 SSL |
| SEO | next-seo / next-sitemap | 0 | 自动 JSON-LD、sitemap、robots |
| 分析 | GA4 + Google Search Console + Vercel Analytics | 0 | 流量与收录监控 |
| 邮件蓄水 | ConvertKit / Beehiiv 免费版 | 0 | 反复变现的"水池" |

**关键技术要求（直接影响排名和被引用）**：
- 每篇文章自动注入 `Article` + `FAQPage` Schema（JSON-LD）
- 自动生成 `sitemap.xml` / `robots.txt`（允许 GPTBot/ClaudeBot/PerplexityBot/Google-Extended 抓取）
- `next/image` + WebP，Lighthouse 性能 ≥ 95
- 自动 RSS feed（freshness 信号 + 被聚合）
- 面包屑 + 内链系统（topic cluster 互链，传递权重）

---

## 3. 内容策略

### 3.1 选题结构（100 篇种子，5 大内容簇）

| 内容簇 | 篇数 | 搜索意图 | 变现 | 示例标题 |
|---|---|---|---|---|
| **工具对比/测评** | 40 | 商业型 | 高（affiliate 主力） | Claude vs ChatGPT vs Gemini 2026、Cursor vs GitHub Copilot、Best AI Writing Tools |
| **How-to 教程** | 25 | 信息型 | 中（引流） | How to Use ChatGPT for SEO、Build an AI Agent No-Code |
| **Prompt 资源** | 15 | 信息型 | 中（信息差产品） | 50 ChatGPT Prompts for Marketing、Best Midjourney Prompts |
| **行业/趋势** | 10 | 信息型 | 中（权威/被引用） | AI Search Statistics 2026、What Is GEO |
| **答案/定义型** | 10 | 信息型 | 中（专攻 AI 引用） | What Is RAG?、How Does AI Search Work? |

### 3.2 时效性配比

- **Evergreen 长青 65 篇**：定义型、原理科普、通用 how-to、prompt 模板、报错排查 → 写一次长期有效，打地基。
- **时效内容 35 篇**：版本对比、定价、"Best of 2026" 榜单、模型评测 → 每季度刷新标题年份 + 更新内容。

### 3.3 更新节奏

- 种子期：100 篇（分批上线，**不要一次性 100 篇全量上传**，见风险章节）
- 稳定期：每周 10 篇 = 每月 ~40 篇，持续喂 freshness 信号。
- 季度维护：刷新所有时效类文章，更新过时数据/年份。

---

## 4. 内容生产 + 多轮质检流水线（项目存亡的关键）

> ⚠️ 用户决策：纯 AI 生成，但**必须多轮质检**。这道流程是避免被 Google "scaled content abuse" 判罚去索引的唯一护城河。Google 不反对 AI 内容，反对的是"低质、无人审、规模化垃圾"。

### 生产流水线（每篇文章必走）

```
① 选题立项  → 用真实关键词工具（Google Trends / Ahrefs 免费版 / People Also Ask）
              确认有真实搜索量，避免编造无人搜的题
   ↓
② AI 生成初稿 → 用结构化 prompt 模板生成，强制 answer-first 结构 + 对比表格 + FAQ
   ↓
③ 第一轮质检：事实核查 → 逐条核对数据/价格/功能/版本是否真实，标注来源链接
              （AI 幻觉在 AI 类目尤其高发，错一条数据就掉信任）
   ↓
④ 第二轮质检：原创性/查重 → 过 AI 检测 + 查重，向量层面去同质化
              注入独家观点、实测截图、个人化结论（E-E-A-T 关键）
   ↓
⑤ 第三轮质检：SEO/GEO 合规 → 检查 Schema、内链、关键词密度、首段直接答案
              标题/meta/H2 优化，FAQ schema 注入
   ↓
⑥ 人工终审（你）→ 抽查可读性、商业意图、affiliate 植入是否自然
   ↓
⑦ 发布 + 提交收录 → Search Console 提交 URL，Bing/IndexNow 推送
```

**质检可半自动化**：第①⑤步可写脚本辅助；第③④步用 AI 交叉核查（让另一个模型当"反方"挑错）；第⑥步人工把关。

**每篇质量底线（硬指标）**：
- 首段 40-60 字直接回答标题问题（GEO 引用钩子）
- 至少 1 个对比表格或结构化列表
- 3-5 条 FAQ（带 schema）
- 所有数据/价格标注真实来源
- ≥ 1 个独家观点或实测结论（区别于纯 AI 复述）
- 2-4 个相关内链
- 字数 1200-2500（够深度，非凑数）

---

## 5. SEO + GEO 双优化清单

**SEO（拿 Google 排名）**：
- 关键词研究先行，做长尾 + 中竞争词（新站别碰 "ChatGPT" 这种红海大词）
- topic cluster 架构：1 个 pillar 页 + N 个 cluster 页互链
- Article Schema、技术 SEO（速度/移动端/sitemap）
- 内链权重传递 + 逐步建外链（Reddit/Quora/HN 软植）

**GEO（被 AI 引用）**：AI 引擎偏好"可直接抽取的事实块"——
- **answer-first**：H2 用疑问句，紧跟简短直接答案
- **对比表格**：Perplexity / AI Overview 摘录率最高
- **清晰定义**：首段 "A is B" 句式
- **FAQ schema + HowTo schema**
- **短段落**（2-3 句/段）+ 明确数字/日期/来源
- robots.txt 明确**允许** AI 爬虫抓取

---

## 6. 变现落地（联盟为主）

### 6.1 联盟计划接入（冷启动即接）

| 类型 | 平台/计划 | 佣金量级 |
|---|---|---|
| AI 写作 | Jasper, Writesonic, Copy.ai | 单转化 $20-50 / 30% 分成 |
| AI 效率 | Notion AI, ClickUp AI | 月费分成 |
| AI 搜索 | Perplexity Pro affiliate | 订阅分成 |
| AI 语音/视频 | ElevenLabs, Synthesia, HeyGen | $20-100+ |
| AI 编程 | 部分有联盟 | 中 |
| 聚合 | Impact, PartnerStack, ShareASale | 一站接多个 SaaS |

**植入原则**：只在"工具对比/Best of/教程"类文章自然植入；用对比表格的 "Try it" 按钮 + 文中 contextual 链接；披露 affiliate 关系（合规要求）。

### 6.2 展示广告（流量阶梯）

| 阶段 | 月 PV | 广告网络 | 预估 RPM |
|---|---|---|---|
| 冷启动 | 0-1万 | 先不上 / AdSense | $3-8 |
| 成长 | 1万-5万 | Ezoic | $8-20 |
| 成熟 | 5万+ | Mediavine | $25-50 |

### 6.3 广告位布局（AdSense 合规 + 不伤 SEO）

- 首屏**文字必须先于广告渲染**（否则触发"价值偏低内容"惩罚）
- 首段后 1 个 in-article（最高可视）
- 正文每 3-4 段插 1 个，密度上限 ~内容的 30%
- 桌面侧栏 1 个 sticky
- 文末 1 个 + Multiplex 推荐位
- 移动端底部 Anchor
- 单页 3-5 个广告位，不堆叠

---

## 7. 增长与收录（0 成本冷启动）

1. **收录提交**：上线即提交 Google Search Console + Bing Webmaster + sitemap；用 IndexNow 加速。
2. **被 AI 抓取**：robots.txt 放行 AI 爬虫 + 结构化数据做钩子。
3. **冷启动外链**：在 Reddit（r/ChatGPT、r/artificial 等）、Quora、Hacker News、相关 Discord 自然分享高价值文章（**提供价值，不硬广**，否则被封）。
4. **邮件蓄水**：文章内嵌订阅入口，攒列表，新文章推送拉回访。
5. **内链飞轮**：高排名页 → 内链导流到 affiliate 文章。
6. **freshness**：每周 10 篇 + 季度更新维持新鲜度信号。

---

## 8. 执行步骤与时间线

### Phase 0 — 立项与基建（第 1 周）
- [ ] 敲定域名，Cloudflare 注册 + DNS
- [ ] 初始化 Next.js 15 + Contentlayer + Tailwind 项目
- [ ] 接入 next-sitemap、next-seo、JSON-LD schema
- [ ] 配置 robots.txt（放行 AI 爬虫）、RSS
- [ ] Vercel 部署打通，绑定域名 + SSL
- [ ] 建立文章 MDX 模板（含 answer-first / 表格 / FAQ 结构）

### Phase 1 — 内容流水线 + 种子内容（第 2-6 周）
- [ ] 关键词研究，确定 100 篇真实有搜索量的选题清单
- [ ] 搭建"生成 + 多轮质检"流水线（含反方挑错的交叉核查脚本）
- [ ] **分批上线**：第 2 周 15 篇 → 之后每周 +15-20 篇，6 周内铺满 100 篇（避免一次性全量触发垃圾信号）
- [ ] 每篇过质量底线硬指标
- [ ] 同步接入 3-5 个联盟计划，文章植入推荐

### Phase 2 — 收录与冷启动（第 4-12 周，与 Phase 1 重叠）
- [ ] Search Console / Bing 提交收录，监控索引状态
- [ ] Reddit/Quora/HN 价值分享，攒首批外链与流量
- [ ] 邮件订阅入口上线，开始攒列表
- [ ] 监控哪些文章被收录/被 AI 引用，复制成功模式

### Phase 3 — 变现升级与规模化（第 3-6 个月）
- [ ] 流量稳定后申请 AdSense（此时已有量+真实内容，通过率高）
- [ ] 满 1 万/月 → 切 Ezoic；满 5 万 → 切 Mediavine
- [ ] 上线信息差产品（Prompt 合集/对比表，Gumroad）
- [ ] 维持每周 10 篇 + 季度刷新时效内容
- [ ] 数据驱动：双倍下注高转化/高流量内容簇

---

## 9. 成本核算

| 项目 | 成本 |
|---|---|
| 域名（.com，Cloudflare 成本价） | ~$10-12/年 |
| Next.js / Vercel Hobby | $0 |
| Cloudflare CDN/DNS/SSL | $0 |
| GA4 / Search Console / Vercel Analytics | $0 |
| 邮件（ConvertKit/Beehiiv 免费版） | $0 |
| 内容生成（AI） | 已有 AI 工具，边际成本极低 |
| **现金总成本** | **≈ $10-12/年（仅域名）** |
| 真实成本 | 时间 + 多轮质检的精力（这是项目真正的投入） |

---

## 10. 收益预期（现实，非乐观）

> 反方提醒：新站冷启动到有意义流量通常 6-12 个月，前期可能近 0 收入。这是正常的，必须接受。

| 阶段 | 时间 | 月流量（PV） | 预估月收入 |
|---|---|---|---|
| 冷启动 | 0-3 个月 | 0-2千 | $0-30（主要靠 affiliate 零星转化） |
| 起步 | 3-6 个月 | 2千-1万 | $50-300 |
| 成长 | 6-12 个月 | 1万-5万 | $300-2000（affiliate + Ezoic） |
| 成熟 | 12-24 个月 | 5万-20万+ | $2000-10000+（Mediavine + affiliate + 产品） |

**收益最大化的杠杆**：联盟（高客单）> 展示广告（走量）。一个高排名的"Best AI X" 对比页，单页年 affiliate 收入可能远超整站广告。

---

## 11. 风险与规避（反方挖出的坑 + 对策）

| 风险 | 严重度 | 规避策略 |
|---|---|---|
| Google scaled-content-abuse 去索引 | 高 | 多轮质检 + 真实数据 + 独家观点 + 分批上线 + 控制每周量 |
| AdSense 拒批/封号 | 高 | 先靠 affiliate；等有流量+真实内容再申请；不堆广告、不薄内容 |
| AI 幻觉传播错误信息 | 中 | 第三步事实核查强制标注来源，价格/数据逐条核对 |
| 零点击（AI 白嫖内容） | 中 | 内容留"钩子"（完整对比表/实测/工具试用入口需点进），affiliate 转化不依赖广告曝光 |
| 热门词时效快、过时 | 中 | evergreen 65% 兜底 + 季度刷新机制 + 标题带年份 |
| 红海大词排不上 | 中 | 只做长尾 + 中竞争词，topic cluster 积累权重 |
| 百度/中文线不通 | —— | 已决策放弃中文主攻，规避 Vercel 无备案问题 |

---

## 12. 立即可做的第一步

1. **你拍板域名**（从第 1 章 5 个候选选 1 个，或提你的偏好）。
2. 我即可初始化 Next.js + Contentlayer 项目骨架（含文章模板、Schema、sitemap、robots、Vercel 部署配置）。
3. 同步产出 100 篇种子选题清单（带关键词、搜索意图、affiliate 机会标注）。
4. 搭建"生成 + 多轮质检"流水线与文章 prompt 模板。

> 告诉我选哪个域名（或你自己的想法），我就开工搭骨架。
