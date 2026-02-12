async function fetchReadme({
  owner,
  repo,
  branch = "main"
}) {
  const branches = [branch];
  if (branch === "main") branches.push("master");
  const uniqueBranches = Array.from(new Set(branches));
  const filenames = ["README.md", "README", "readme.md", "README.rst", "README.txt"];
  for (const b of uniqueBranches) {
    for (const filename of filenames) {
      const url = `https://raw.githubusercontent.com/${owner}/${repo}/${b}/${filename}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          return await response.text();
        }
      } catch (e) {
        console.warn(`Failed to fetch ${url}`, e);
      }
    }
  }
  throw new Error(`Failed to fetch README for ${owner}/${repo}: Not Found in branches [${uniqueBranches.join(", ")}] with common filenames.`);
}
function processReadme(content, {
  owner,
  repo,
  branch = "main"
}) {
  let processed = content;
  processed = processed.replace(/^\[!\[.*?\]\(.*?\)\]\(.*?\)\s*$/gm, "");
  processed = processed.replace(/^!\[.*?\]\(.*?\)\s*$/gm, (match) => {
    if (match.includes("shields.io") || match.includes("github.com") && match.includes("/badge/") || match.includes("travis-ci")) {
      return "";
    }
    return match;
  });
  return processed;
}

export { fetchReadme as f, processReadme as p };
