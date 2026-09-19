import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 在这里修改网页的标题、描述等 Meta 信息
export const metadata: Metadata = {
  title: "叠态科技有限公司 - 构筑多维数字空间与智能产业未来",
  description: "叠态科技专注于前端工程架构创新、多端智能体（AI Agent）研发及工业级数字孪生可视化。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}