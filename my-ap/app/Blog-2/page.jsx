import fs from "fs";
import path from "path";

export default function HtmlViewer() {
  // مسیر فایل HTML داخل پوشه public
  const filePath = path.join(process.cwd(), "public", "Blog-2.html");

  // خوندن محتوای HTML
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">📄 محتوای HTML:</h2>
      <div
        className="border p-4 rounded bg-white"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
