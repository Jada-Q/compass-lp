export default function LandingPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-blue-900">COMPASS</span>
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            無料で相談する
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium text-blue-600">
            技能実習・特定技能 コンプライアンス管理
          </p>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            在留期限の更新漏れ、
            <br />
            まだExcelで管理していませんか？
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            COMPASSは、外国人技能実習生・特定技能外国人の在留期限・賃金・労働時間を
            <strong>自動でチェック</strong>し、
            リスクを<strong>早期に警告</strong>するクラウドシステムです。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-8 py-3.5 text-base font-medium text-white transition hover:bg-blue-700"
            >
              無料トライアルに申し込む
            </a>
            <a
              href="#features"
              className="rounded-lg border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 transition hover:bg-gray-50"
            >
              機能を見る
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Excel管理に潜むリスク
          </h2>
          <p className="mb-10 text-center text-gray-600">
            手作業での管理は、気づかないうちに法令違反を招きます
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                risk: "在留期限の更新漏れ",
                penalty: "不法就労助長罪",
                detail: "3年以下の懲役または300万円以下の罰金",
                color: "red",
              },
              {
                risk: "最低賃金の改定見落とし",
                penalty: "労基法違反・受入停止",
                detail: "改善命令・技能実習計画の認定取消",
                color: "orange",
              },
              {
                risk: "残業時間の管理不備",
                penalty: "36協定違反",
                detail: "6ヶ月以下の懲役または30万円以下の罰金",
                color: "yellow",
              },
            ].map((item) => (
              <div
                key={item.risk}
                className="rounded-xl border border-red-100 bg-red-50/50 p-6"
              >
                <div className="mb-2 text-lg font-bold text-red-800">
                  {item.risk}
                </div>
                <div className="mb-1 text-sm font-medium text-red-700">
                  {item.penalty}
                </div>
                <div className="text-sm text-red-600">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold">
            COMPASSの主な機能
          </h2>
          <p className="mb-10 text-center text-gray-600">
            コンプライアンスリスクを自動で検知し、対応すべきことを明確にします
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "&#128197;",
                title: "在留期限アラート",
                desc: "期限90日前・30日前に自動通知。更新漏れを確実に防止します。",
              },
              {
                icon: "&#128176;",
                title: "賃金チェック",
                desc: "最低賃金との自動比較。地域別の改定にも即座に対応します。",
              },
              {
                icon: "&#9200;",
                title: "労働時間監視",
                desc: "月間残業80時間超過を自動検知。36協定違反を未然に防ぎます。",
              },
              {
                icon: "&#128202;",
                title: "リスクスコア",
                desc: "5カテゴリーの総合評価。どの企業・労働者を優先対応すべきか一目瞭然。",
              },
              {
                icon: "&#128187;",
                title: "ダッシュボード",
                desc: "全社・全労働者の状況を1画面で把握。経営層への報告にも活用可能。",
              },
              {
                icon: "&#128276;",
                title: "リアルタイム通知",
                desc: "新しいリスクが検出された時点で即座にお知らせします。",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div
                  className="mb-3 text-2xl"
                  dangerouslySetInnerHTML={{ __html: f.icon }}
                />
                <h3 className="mb-2 font-bold">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-bold">
            Excel管理 vs COMPASS
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 pr-4"></th>
                  <th className="pb-3 pr-4 text-gray-500">Excel管理</th>
                  <th className="pb-3 font-bold text-blue-600">COMPASS</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["在留期限チェック", "毎月手動で確認", "自動通知（90日前〜）"],
                  [
                    "最低賃金改定対応",
                    "担当者が気づいたら対応",
                    "改定時に即座にアラート",
                  ],
                  ["残業時間の把握", "月末にまとめて集計", "リアルタイムで監視"],
                  [
                    "監査・実地検査対応",
                    "資料作成に数日かかる",
                    "ワンクリックでレポート出力",
                  ],
                  [
                    "複数拠点の管理",
                    "ファイル共有が煩雑",
                    "クラウドで一元管理",
                  ],
                  ["担当者の引継ぎ", "属人的な管理", "システムに情報が蓄積"],
                ].map(([item, excel, compass]) => (
                  <tr key={item}>
                    <td className="py-3 pr-4 font-medium">{item}</td>
                    <td className="py-3 pr-4 text-gray-500">{excel}</td>
                    <td className="py-3 font-medium text-blue-700">
                      {compass}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-bold">
            導入はかんたん3ステップ
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "お申し込み",
                desc: "フォームからお申し込み。最短当日にアカウントを発行します。",
              },
              {
                step: "2",
                title: "データ移行",
                desc: "既存のExcel台帳をアップロード。自動でデータを取り込みます。",
              },
              {
                step: "3",
                title: "運用開始",
                desc: "リスクチェックが自動で開始。アラートに対応するだけのかんたん運用。",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mb-2 font-bold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-bold">
            よくあるご質問
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "導入にはどのくらい時間がかかりますか？",
                a: "お申し込みから最短1営業日でご利用いただけます。既存のExcelデータの移行サポートも無料で行います。",
              },
              {
                q: "小規模な受入企業でも使えますか？",
                a: "はい。受入人数1名から対応しています。中小企業のコンプライアンス管理を想定して設計しています。",
              },
              {
                q: "監理団体として傘下企業をまとめて管理できますか？",
                a: "はい。複数の受入企業を一元管理し、企業ごとのリスクスコアをダッシュボードで比較できます。",
              },
              {
                q: "費用はどのくらいですか？",
                a: "現在、先着限定で3ヶ月間の無料トライアルを実施中です。まずはお気軽にお問い合わせください。",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b pb-6">
                <h3 className="mb-2 font-bold">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="contact" className="bg-blue-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">
            まずは無料でお試しください
          </h2>
          <p className="mb-8 text-blue-200">
            3ヶ月間の無料トライアル実施中。導入サポート・データ移行も無料です。
          </p>
          <a
            href="mailto:ptp.qiuyu@gmail.com?subject=COMPASS%20無料トライアルのお問い合わせ&body=【企業名・団体名】%0A%0A【ご担当者名】%0A%0A【受入人数（概算）】%0A%0A【ご質問・ご要望】%0A"
            className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-medium text-blue-900 transition hover:bg-blue-50"
          >
            メールでお問い合わせ
          </a>
          <p className="mt-4 text-sm text-blue-300">
            ※ お問い合わせ後、1営業日以内にご返信いたします
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-sm text-gray-500">
        <p>&copy; 2026 COMPASS. All rights reserved.</p>
      </footer>
    </>
  );
}
