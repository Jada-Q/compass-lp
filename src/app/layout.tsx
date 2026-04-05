import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMPASS | 技能実習・特定技能 コンプライアンス管理ツール",
  description:
    "外国人技能実習生・特定技能外国人の在留期限・賃金・労働時間を自動チェック。Excelでの手作業管理から解放し、行政処分リスクを未然に防止するクラウドシステム。",
  keywords: [
    "技能実習",
    "特定技能",
    "コンプライアンス",
    "外国人雇用管理",
    "在留期限管理",
    "監理団体",
    "登録支援機関",
  ],
  openGraph: {
    title: "COMPASS | 技能実習・特定技能 コンプライアンス管理ツール",
    description:
      "在留期限・賃金・労働時間を自動チェック。行政処分リスクを未然に防止。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
