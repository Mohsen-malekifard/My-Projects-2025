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
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black text-white">
      {/* پرتوهای نور پس‌زمینه */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-500/30 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-500/30 blur-[120px]" />

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        {/* هدر */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
            مجموعه پروژه‌ها
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">
            کارهای من — تکنولوژی مدرن
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-white/70">
            طراحی تاریک و نئونی با تمرکز روی تجربه‌ی کاربری.  
            تمامی کدها در ریپازیتوری{" "}
            <a
              href="https://github.com/Mohsen-malekifard/My-projects-2025"
              className="font-semibold text-green-400 hover:underline"
              target="_blank"
            >
              GitHub.com/Mohsen-malekifard/My-projects-2025
            </a>{" "}
            قرار دارند.
          </p>
        </div>

        {/* لیست پروژه‌ها */}
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] hover:border-cyan-400/40"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-cyan-300">
                    {p.title}
                  </h3>
                  <span className="mt-0.5 inline-block rounded-full bg-cyan-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                    View
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 px-3 py-1 text-[11px] font-medium text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-75" />
                <div className="mt-3 text-sm font-medium text-cyan-300 underline-offset-4 group-hover:underline">
                  رفتن به پروژه →
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* فوتر */}
        <footer className="mt-16 flex items-center justify-between text-xs text-white/60">
          <div className="tracking-wide">
            ساخته‌شده با <span className="font-semibold text-green-400">Next.js</span> و{" "}
            <span className="font-semibold text-purple-400">TailwindCSS</span>
          </div>
          <Link
            href="/"
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-white/80 backdrop-blur-sm hover:border-cyan-400/40 hover:text-cyan-300"
          >
            صفحه اصلی
          </Link>
        </footer>
      </section>
    </main>
  );
}
