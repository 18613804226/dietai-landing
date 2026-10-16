'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Cpu,
  Globe,
  Layers,
  Mail,
  Menu,
  Phone,
  QrCode,
  Smartphone,
  Sparkles,
  X
} from 'lucide-react'

const navItems = [
  { label: '核心技术', href: '#features' },
  { label: '智能体体验', href: '#agent' },
  { label: '联系我们', href: '#contact' }
]

// ==================== 智能体入口配置 ====================
// 域名备案通过后，只需修改下面这一处即可全站生效。
const agentConfig = {
  // WEB 端智能体地址（备案通过后替换为正式域名，如 https://agent.dietai.com）
  webUrl: 'https://agent.dietai.com',
  // iOS App Store 下载地址（上架后替换，暂为 '#' 占位）
  iosUrl: '#',
  // Android 客户端下载地址（可指向应用商店或 APK 直链，暂为 '#' 占位）
  androidUrl: '#',
  // App 下载二维码图片：将二维码放入 public/agent-qr.png 后把这里改为 '/agent-qr.png'，
  // 留空字符串时页面自动显示占位二维码图案。
  qrImage: ''
}

// 生成确定性伪二维码点阵（占位用，接入真实二维码图片后可移除）
function isQrCell(r: number, c: number): boolean {
  const inFinder = (br: number, bc: number) =>
    r >= br && r <= br + 4 && c >= bc && c <= bc + 4
  if (inFinder(0, 0) || inFinder(0, 8) || inFinder(8, 0)) {
    const rr = r < 5 ? r : r - 8
    const cc = c < 5 ? c : c - 8
    const ring = Math.min(rr, cc, 4 - rr, 4 - cc)
    return ring === 0 || ring === 2
  }
  return (r * 3 + c * 7) % 5 < 2 || (r + c) % 7 < 2
}

// 二维码占位组件：agentConfig.qrImage 为空或图片加载失败时展示
function AgentQrPlaceholder() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        aria-hidden="true"
        className="grid gap-0.5 rounded-lg bg-white p-2.5"
        style={{ gridTemplateColumns: 'repeat(13, 1fr)', width: 124 }}
      >
        {Array.from({ length: 13 }, (_, r) =>
          Array.from({ length: 13 }, (_, c) => (
            <div
              key={`${r}-${c}`}
              className={`aspect-square rounded-[1px] ${
                isQrCell(r, c) ? 'bg-slate-900' : 'bg-transparent'
              }`}
            />
          ))
        )}
      </div>
      <span className="text-xs font-medium text-slate-300">扫码下载 App</span>
    </div>
  )
}

const featureCards = [
  {
    icon: Bot,
    title: 'AI 智能体与多端研发',
    description:
      '基于 React Native 与大模型生态（Agent Workflow），打造无缝跨平台智能应用，满足多场景交互需求。'
  },
  {
    icon: Layers,
    title: '现代微前端与高性能架构',
    description:
      '精通 Vue 3、React、Next.js 与微前端容器化调度，保障复杂企业级系统的高并发与可维护性。'
  },
  {
    icon: Cpu,
    title: '3D 可视化与工业数字孪生',
    description:
      '熟练运用 Three.js、ECharts 与 AntV X6，打造极具视觉冲击力的工业园区、大屏监控与拓扑图谱。'
  }
] as const

const contactItems = [
  { icon: Phone, label: '电话 / 微信', value: '18613804226' },
  { icon: Mail, label: '商务邮箱', value: '553807266@qq.com' }
] as const

const processSteps = [
  {
    step: '01',
    title: '洞察需求',
    text: '对业务目标、用户旅程与企业数据结构做系统梳理，明确优先级与落地边界。'
  },
  {
    step: '02',
    title: '规划方案',
    text: '基于技术可行性与业务风险，输出端到端架构设计、迭代路径和交付安排。'
  },
  {
    step: '03',
    title: '快速实现',
    text: '以组件化、模块化与工程化方式推进开发，保障多端协同并降低耦合成本。'
  },
  {
    step: '04',
    title: '持续赋能',
    text: '集成运营监控、迭代优化与体验升级，让系统在真实场景中持续迭代演进。'
  }
] as const

export default function Home() {
  const year = new Date().getFullYear()
  const [menuOpen, setMenuOpen] = useState(false)
  const [qrFailed, setQrFailed] = useState(false)
  const showQrImage = agentConfig.qrImage !== '' && !qrFailed

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-amber-600/40 selection:text-amber-200 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-[-4%] h-96 w-96 rounded-full bg-amber-500/25 blur-[140px]" />
        <div className="absolute right-[6%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute bottom-[-6rem] left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_90%)]" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/60 bg-[#0B0F19]/65 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 items-center">
              <img
                src="/logo-light-transparent.png"
                alt="Dietai Tech Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-[0.12em] text-white sm:text-lg">
                叠态科技
              </span>
              <span className="hidden rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300 sm:inline-flex">
                Dietai Tech
              </span>
            </div>
          </div>

          <nav
            className="hidden items-center gap-8 text-sm text-slate-400 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-amber-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl border border-amber-500/30 bg-slate-900/80 px-4 py-2 text-xs font-medium text-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.08)] transition-all hover:border-amber-400 hover:bg-amber-500/10 sm:inline-flex"
            >
              开启合作
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/80 text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800 md:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-800/70 bg-[#0B0F19]/95 md:hidden">
            <nav
              className="mx-auto flex max-w-7xl flex-col px-4 py-3"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-amber-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-center text-sm font-medium text-amber-200"
              >
                开启合作
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-32 text-center md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3.5 py-1.5 text-xs text-amber-300 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
            <span>Next-Gen AI Agents & Multi-Platform Architecture</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 max-w-5xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl"
          >
            构筑多维数字空间与
            <span className="mt-2 block bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.18)]">
              智能产业未来
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
          >
            叠态科技专注于前端工程架构创新、多端智能体（AI
            Agent）研发及工业级数字孪生可视化，以极致技术赋能企业数智化转型。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={agentConfig.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_55%)] bg-slate-900/90 px-8 py-3.5 text-sm font-medium text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.12)] transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-500/10 sm:w-auto"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>在线体验智能体</span>
              <ArrowRight className="h-4 w-4 text-amber-300 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="flex w-full items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 px-8 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/80 hover:text-white sm:w-auto"
            >
              探索技术矩阵
            </a>
            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/60 px-8 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/80 hover:text-white sm:w-auto"
            >
              商务咨询
            </a>
          </motion.div>

        </section>

        <section
          id="features"
          className="relative z-10 mx-auto max-w-7xl px-6 py-20"
        >
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/70">
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              全栈技术护城河与工程壁垒
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featureCards.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-[0_0_24px_rgba(15,23,42,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.12)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-100">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </section> */}

        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400/70">
              Working Process
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              从业务需求到持续落地的协同流程
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map(({ step, title, text }) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-800 bg-slate-900/45 p-5"
              >
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-amber-300">
                  {step}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="agent"
          className="relative z-10 mx-auto max-w-7xl px-6 py-20"
        >
          <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.1),transparent_20%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.75))] p-8 shadow-[0_0_32px_rgba(2,6,23,0.85)] md:p-12">
            <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="max-w-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Cross-Platform Agent</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  随时随地，多端智能相伴
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  基于 React Native 架构打造的叠态智能体客户端，现已支持
                  iOS、Android 及 Web 多端同步。随时唤醒你的专属 AI 助手。
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href={agentConfig.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm font-medium text-amber-200 transition-all hover:border-amber-400 hover:bg-amber-500/20"
                  >
                    <Globe className="h-4 w-4 text-amber-300" />
                    <span>立即体验 WEB 版</span>
                    <ArrowRight className="h-4 w-4 text-amber-300 transition-transform group-hover:translate-x-1" />
                  </a>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={agentConfig.iosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-700"
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                      🍎 iOS App Store
                    </a>
                    <a
                      href={agentConfig.androidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-700"
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                      🤖 Android 客户端
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative w-full max-w-[340px]">
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-cyan-500/20 blur-2xl" />
                <div className="relative rounded-[30px] border border-amber-500/20 bg-slate-950/80 p-5 shadow-[0_0_24px_rgba(251,191,36,0.08)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    </div>
                    <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                      Dietai Agent
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-3 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 p-6">
                    <div className="flex items-center gap-1.5 self-start text-[10px] uppercase tracking-[0.2em] text-amber-400/80">
                      <QrCode className="h-3.5 w-3.5" />
                      <span>App Download</span>
                    </div>
                    {showQrImage ? (
                      <img
                        src={agentConfig.qrImage}
                        alt="叠态智能体 App 下载二维码"
                        className="h-[132px] w-[132px] rounded-lg bg-white p-1.5"
                        onError={() => setQrFailed(true)}
                      />
                    ) : (
                      <AgentQrPlaceholder />
                    )}
                    <span className="text-[10px] text-slate-500">
                      Dietai Agent v1.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[30px] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(17,24,39,0.8))] p-8 shadow-[0_0_30px_rgba(2,6,23,0.8)] md:p-10">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400/70">
                  Enterprise Collaboration
                </div>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  让数字能力真正服务企业增长
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-6 py-3 text-sm font-medium text-amber-200 transition-all hover:border-amber-400 hover:bg-amber-500/15"
              >
                立即预约咨询
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="relative z-10 mt-20 border-t border-slate-800/70 bg-[#070A10]"
      >
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 items-center">
                  <img
                    src="/logo-light-transparent.png"
                    alt="Dietai Tech Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-lg font-bold tracking-[0.12em] text-white">
                  叠态科技有限公司
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                以极致的前端架构、数字孪生与 AI
                智能体技术，为全球企业与合作伙伴提供卓越的数字化解决方案。
              </p>
            </div>

            <div className="shrink-0">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                联系我们
              </div>
              <ul className="space-y-3">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/80" />
                    <span>
                      {label}：
                      <span className="text-slate-300">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-slate-800/60 pt-6 text-xs text-slate-500 sm:flex-row">
            <span>
              © {year} 叠态科技有限公司 Dietai Tech. All Rights Reserved.
            </span>
            <span className="hidden sm:inline">·</span>
            <a
              href="http://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-amber-400"
            >
              闽ICP备2026040096号
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
