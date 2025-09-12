"use client";
import { useEffect, useState } from "react";
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
    href: "/TodoApp-2",
    title: "Todo App 2",
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
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black text-white">
      {/* پرتوهای ثابت */}
      <div className="pointer-events-none absolute -top-72 -left-72 h-[800px] w-[800px] rounded-full bg-green-500/25 blur-[120px] animate-pulse-strong" />
      <div className="pointer-events-none absolute top-40 -right-72 h-[900px] w-[900px] rounded-full bg-purple-500/25 blur-[140px] animate-float-strong" />
      <div className="pointer-events-none absolute bottom-[-300px] left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-blue-500/25 blur-[120px] animate-pulse-strong delay-2000" />
      {/* نور زرد وسط */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-[150px] animate-glow" />
      {/* پرتو متحرک دنبال موس */}
      <div
        className="pointer-events-none absolute rounded-full bg-pink-400/25 blur-[150px] transition-all duration-300"
        style={{
          top: pos.y - 200,
          left: pos.x - 200,
          width: "400px",
          height: "400px",
        }}
      />

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        {/* هدر */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
            مجموعه پروژه‌ها
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,200,0.5)]">
            کارهای من — تکنولوژی نئونی
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-white/70">
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
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group block rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,100,0.4)] hover:border-yellow-400/30"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-yellow-300">
                    {p.title}
                  </h3>
                  <span className="mt-0.5 inline-block rounded-full bg-yellow-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-300">
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
                      className="rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-400/20 px-3 py-1 text-[11px] font-medium text-yellow-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent opacity-60" />
                <div className="mt-3 text-sm font-medium text-yellow-300 underline-offset-4 group-hover:underline">
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
            className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 font-medium text-white/80 backdrop-blur-sm hover:border-yellow-400/30 hover:text-yellow-300"
          >
            صفحه اصلی
          </Link>
        </footer>
      </section>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes float-strong {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-100px) scale(1.2); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes pulse-strong {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        .animate-float-strong {
          animation: float-strong 14s ease-in-out infinite;
        }
        .animate-pulse-strong {
          animation: pulse-strong 10s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
