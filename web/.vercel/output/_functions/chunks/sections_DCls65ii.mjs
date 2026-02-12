import * as emoji from 'node-emoji';

function cleanTitle(text) {
  return text.replace(/!\[.*?\]\(.*?\)/g, "").replace(/\[(.*?)\]\(.*?\)/g, "$1").replace(/`|#|\*|_/g, "").trim();
}
function slugify(text) {
  return cleanTitle(text).toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function parseReadmeIntoSections(markdown) {
  const emojifiedMarkdown = emoji.emojify(markdown);
  const sections = [];
  const lines = emojifiedMarkdown.split("\n");
  let currentSection = null;
  let contentLines = [];
  let order = 0;
  const firstH2Index = lines.findIndex((line) => line.trim().startsWith("## "));
  if (firstH2Index !== 0) {
    const endIdx = firstH2Index === -1 ? lines.length : firstH2Index;
    const overviewContent = lines.slice(0, endIdx).join("\n").trim();
    if (overviewContent) {
      sections.push({
        slug: "overview",
        title: "Overview",
        content: overviewContent,
        level: 2,
        order: order++
      });
    }
  }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith("## ")) {
      if (currentSection && currentSection.title) {
        sections.push({
          slug: currentSection.slug,
          title: currentSection.title,
          content: contentLines.join("\n").trim(),
          level: 2,
          order: currentSection.order
        });
        contentLines = [];
      }
      const rawTitle = line.replace(/^##\s+/, "").trim();
      const title = cleanTitle(rawTitle);
      currentSection = {
        slug: slugify(rawTitle),
        title,
        level: 2,
        order: order++
      };
    } else if (currentSection) {
      contentLines.push(line);
    }
  }
  if (currentSection && currentSection.title) {
    sections.push({
      slug: currentSection.slug,
      title: currentSection.title,
      content: contentLines.join("\n").trim(),
      level: 2,
      order: currentSection.order
    });
  }
  if (sections.length === 0) {
    sections.push({
      slug: "overview",
      title: "Overview",
      content: markdown,
      level: 2,
      order: 0
    });
  }
  return sections;
}
function findSectionBySlug(sections, slug) {
  return sections.find((s) => s.slug === slug);
}
function getAdjacentSections(sections, currentSlug) {
  const currentIndex = sections.findIndex((s) => s.slug === currentSlug);
  return {
    previous: currentIndex > 0 ? sections[currentIndex - 1] : null,
    next: currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null
  };
}

export { findSectionBySlug as f, getAdjacentSections as g, parseReadmeIntoSections as p };
