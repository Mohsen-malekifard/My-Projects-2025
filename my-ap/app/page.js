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
  },
  {
    href: "/Blog-2",
    title: "سایت مقاله Next.js 2",
    desc: "قسمت فرم ارتباط با ما، حالت تاریک و روشن و منوی ریسپانسیو",
    tags: ["HTML", "TailwindCss", "JavaScript"],
  }
];

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* پس‌زمینه‌های رنگی */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-300/30 to-blue-300/30 blur-3xl dark:from-indigo-600/20 dark:to-blue-600/20" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-300/30 to-pink-300/30 blur-3xl dark:from-fuchsia-600/20 dark:to-pink-600/20" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* هدر */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-slate-200 px-4 py-1 text-xs font-medium tracking-wide text-slate-700 dark:border-slate-700 dark:text-slate-300">
            مجموعه پروژه‌ها
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            کارهای من — مدرن، سریع، کاربرپسند
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-slate-600 dark:text-slate-300">
            همه‌چیز با تمرکز روی تجربه‌ی کاربری، ساختار تمیز و تایپوگرافی.  
            تمامی کدها در ریپازیتوری{" "}
            <a
              href="https://github.com/Mohsen-malekifard/My-projects-2025"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
            >
              GitHub.com/Mohsen-malekifard/My-projects-2025
            </a>{" "}
            قرار دارند.
          </p>
        </div>

        {/* لیست پروژه‌ها */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group block rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:from-slate-900/70 dark:to-slate-800/40 dark:border-slate-700 dark:hover:border-slate-600"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {p.title}
                  </h3>
                  <span className="mt-0.5 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    View
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-75 dark:via-slate-700" />
                <div className="mt-3 text-sm font-medium text-blue-600 underline-offset-4 group-hover:underline dark:text-blue-400">
                  رفتن به پروژه →
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* فوتر */}
        <footer className="mt-14 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
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
