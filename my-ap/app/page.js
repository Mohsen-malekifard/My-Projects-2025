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
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* پس‌زمینه‌های رنگی */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* هدر */}
        <div className="mb-10 text-center text-white">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-medium tracking-wide backdrop-blur-sm">
            مجموعه پروژه‌ها
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl drop-shadow-lg">
            کارهای من — شفاف، مدرن، مینیمال
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-white/80">
            همه‌چیز با تمرکز روی تجربه‌ی کاربری و طراحی مدرن.  
            تمامی کدها در ریپازیتوری{" "}
            <a
              href="https://github.com/Mohsen-malekifard/My-projects-2025"
              className="font-semibold text-yellow-300 hover:underline"
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
                className="group block rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/30"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-yellow-300">
                    {p.title}
                  </h3>
                  <span className="mt-0.5 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                    View
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/80">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 h-px w-full bg-white/20" />
                <div className="mt-3 text-sm font-medium text-yellow-300 underline-offset-4 group-hover:underline">
                  رفتن به پروژه →
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* فوتر */}
        <footer className="mt-14 flex items-center justify-between text-xs text-white/80">
          <div className="tracking-wide">
            ساخته‌شده با <span className="font-semibold">Next.js</span> و{" "}
            <span className="font-semibold">TailwindCSS</span>
          </div>
          <Link
            href="/"
            className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-white/90 backdrop-blur-md hover:bg-white/20"
          >
            صفحه اصلی
          </Link>
        </footer>
      </section>
    </main>
  );
}
