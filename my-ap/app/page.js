"use client";
import Link from "next/link";

const projects = [
  {
    href: "https://example-mongodb-apps.vercel.app",
    title: "Register & Login System",
    desc: "با mongodb و کد ها در این ریپازیتوری هست: Mohsen-malekifard/example-mongodb-apps",
    tags: ["Mongodb", "React", "Next"]
  },
  {
    href: "/TodoApp",
    title: "Todo App",
    desc: "مدیریت کارها با Context و استایل تمیز، انیمیشن‌های هاور و تایپوگرافی خوانا.",
    tags: ["React", "Context", "Tailwind"],
  },
  {
    href: "/Shop",
    title: "فروشگاه Next.js",
    desc: "جستجو، جزئیات محصول، سبد خرید و قیمت کل—همه با ساختار app و استایل حرفه‌ای.",
    tags: ["Next.js", "App Router", "Tailwind"],
  },
  {
    href: "/Shop-2",
    title: "فروشگاه Next.js 2",
    desc: "جستجو، جزئیات محصول، سبد خرید و قیمت کل—همه با ساختار app و استایل حرفه‌ای.",
    tags: ["Next.js", "App Router", "Tailwind"],
  },
  {
    href: "/Blog",
    title: "سایت مقاله Next.js",
    desc: "سایت مقاله با صفحه جزییات هر مقاله، صفحه مقاله ها و صفحه درباره ما",
    tags: ["Next.js", "App Router", "Tailwind"],
  }
];

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* پس‌زمینه‌های نرم فقط با فونت/رنگ (بدون تصویر) */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-200 to-blue-200 blur-3xl opacity-50 dark:from-indigo-500/20 dark:to-blue-500/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-200 to-pink-200 blur-3xl opacity-50 dark:from-fuchsia-500/20 dark:to-pink-500/20" />

      <section className="mx-auto max-w-5xl px-6 py-14">
        {/* هدر */}
        <div className="mb-10">
          <span className="inline-block rounded-full border border-slate-200 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 backdrop-blur-sm dark:border-slate-700 dark:text-slate-300">
            مجموعه پروژه‌ها
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            کارهای من—مینیمال، سریع، خوش‌خوان
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            همه‌چیز با تمرکز روی تجربه‌ی کاربری، ساختار تمیز و تایپوگرافی؛ فقط Tailwind و کامپوننت‌های سبک.
          </p>
        </div>

        {/* لیست پروژه‌ها */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:ring-slate-700"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-slate-950 dark:text-white">
                    {p.title}
                  </h3>
                  <span className="mt-0.5 inline-block rounded-full border border-slate-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    View
                  </span>
                </div>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition group-hover:border-slate-300 dark:border-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-75 dark:via-slate-700" />
                <div className="mt-3 text-sm font-medium text-slate-800 underline-offset-4 group-hover:underline dark:text-slate-200">
                  رفتن به پروژه →
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* فوتر کوچک */}
        <footer className="mt-12 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="tracking-wide">
            ساخته‌شده با <span className="font-semibold">Next.js</span> و{" "}
            <span className="font-semibold">TailwindCSS</span>
          </div>
          <Link
            href="/"
            className="rounded-lg border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/60"
          >
            صفحه اصلی
          </Link>
        </footer>
      </section>
    </main>
  );
}
