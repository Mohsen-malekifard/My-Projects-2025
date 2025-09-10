import fs from "fs";
import path from "path";

export default function HtmlContent() {
  const filePath = "./App.html";
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
