import fs from "fs";

export default function Blog2() {
  const filePath = "./App.html";
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
