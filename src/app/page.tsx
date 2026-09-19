'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Globe, Layers, Sparkles, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-amber-600/40 selection:text-amber-200 relative overflow-hidden">
      
      {/* 背景极光发光点缀装饰 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-800/5 rounded-full blur-3xl pointer-events-none" />

      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0F19]/70 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 flex items-center">
              <img
                src="/logo-light-transparent.png" 
                alt="Dietai Tech Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-amber-200/70">
              叠态科技 <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300/90 border border-amber-500/20">Dietai Tech</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-amber-300 transition-colors">核心技术</a>
            <a href="#agent" className="hover:text-amber-300 transition-colors">智能体体验</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">联系我们</a>
          </nav>
          <div>
            {/* 调暗后的高雅按钮 */}
            <a 
              href="#contact" 
              className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-900/90 text-amber-200/90 border border-amber-500/30 hover:bg-amber-500/10 hover:border-amber-400 transition-all shadow-sm"
            >
              开启合作
            </a>
          </div>
        </div>
      </header>

      {/* 首屏 Hero 区 */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-amber-300/90 text-xs mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400/70 animate-pulse" />
          <span>Next-Gen AI Agents & Multi-Platform Architecture</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-8"
        >
          构筑多维数字空间与 <br />
          {/* 主标题也稍微收敛一点亮度，和整体冷酷风格更搭 */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-600">
            智能产业未来
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
        >
          叠态科技专注于前端工程架构创新、多端智能体（AI Agent）研发及工业级数字孪生可视化，以极致技术赋能企业数智化转型。
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          {/* 调暗后的首要 CTA 按钮 */}
          <a 
            href="#features" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/90 text-amber-200/90 font-medium text-sm border border-amber-500/40 hover:bg-amber-500/10 hover:border-amber-400 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 group shadow-lg shadow-black/50"
          >
            <span>探索技术矩阵</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700/70 text-slate-300 font-medium text-sm hover:bg-slate-800/70 hover:text-white transition-all flex items-center justify-center"
          >
            商务咨询
          </a>
        </motion.div>
      </section>

      {/* 核心技术与能力矩阵 */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-amber-400/70 font-semibold mb-3">Core Capabilities</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight">全栈技术护城河与工程壁垒</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-600/40 transition-all group backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300/90 mb-6 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-200">AI 智能体与多端研发</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              基于 React Native 与大模型生态（Agent Workflow），打造无缝跨平台智能应用，满足多场景交互需求。
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-600/40 transition-all group backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300/90 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-200">现代微前端与高性能架构</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              精通 Vue 3、React、Next.js 与微前端容器化调度，保障复杂企业级系统的高并发与可维护性。
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-600/40 transition-all group backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300/90 mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-200">3D 可视化与工业数字孪生</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              熟练运用 Three.js、ECharts 与 AntV X6，打造极具视觉冲击力的工业园区、大屏监控与拓扑图谱。
            </p>
          </div>

        </div>
      </section>

      {/* 多端智能体下载与体验区块 */}
      <section id="agent" className="py-20 px-6 max-w-7xl mx-auto relative z-10 border-t border-slate-800/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300/90 text-xs mb-4 border border-amber-500/20">
              <span>Cross-Platform Agent</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">随时随地，多端智能相伴</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              基于 React Native 架构打造的叠态智能体客户端，现已支持 iOS、Android 及 Web 多端同步。随时唤醒你的专属 AI 助手。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#download-ios" className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors flex items-center space-x-2">
                <span>🍎 iOS App Store</span>
              </a>
              <a href="#download-android" className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors flex items-center space-x-2">
                <span>🤖 Android 客户端</span>
              </a>
            </div>
          </div>
          
          <div className="w-48 h-48 rounded-2xl bg-gradient-to-tr from-amber-900/10 to-yellow-900/10 border border-amber-600/20 flex flex-col items-center justify-center text-center p-4">
            <Bot className="w-12 h-12 text-amber-400/70 mb-2 animate-bounce" />
            <span className="text-xs text-slate-300 font-medium">扫码下载体验</span>
            <span className="text-[10px] text-slate-500 mt-1">Dietai Agent v1.0</span>
          </div>
        </div>
      </section>

      {/* 底部 Footer 与联系方式 */}
      <footer id="contact" className="border-t border-slate-800/70 py-16 px-6 mt-20 bg-[#070A10]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 flex items-center">
                <img
                  src="/logo-light-transparent.png" 
                  alt="Dietai Tech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg text-white tracking-wider">叠态科技有限公司</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              以极致的前端架构、数字孪生与 AI 智能体技术，为全球企业与合作伙伴提供卓越的数字化解决方案。
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-3 text-sm text-slate-300">
            <div className="flex items-center space-x-2 bg-slate-900/70 px-4 py-2.5 rounded-xl border border-slate-800">
              <Phone className="w-4 h-4 text-amber-400/70" />
              <span>电话 / 微信：<strong className="text-white tracking-wide">18613804226</strong></span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/70 px-4 py-2.5 rounded-xl border border-slate-800">
              <Mail className="w-4 h-4 text-amber-400/70" />
              <span>商务邮箱：<strong className="text-white">553807266@qq.com</strong></span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} 叠态科技有限公司 Dietai Tech. All Rights Reserved.</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-amber-400/70" />
              <span>Enterprise Grade Security</span>
            </span>
            <span className="flex items-center space-x-1">
              <Globe className="w-4 h-4 text-amber-400/70" />
              <span>Global Technology Ecosystem</span>
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}