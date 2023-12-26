const languageExtensions: Record<string, string> = {
  javascript: ".js",
  html: ".html",
  css: ".css",
  python: ".py",
  java: ".java",
  typescript: ".ts",
};

export function getExtension(language: string): string {
  const lowerCaseLanguage = language.toLowerCase();
  return languageExtensions[lowerCaseLanguage] || ".js";
}