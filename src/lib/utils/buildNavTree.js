export const buildNavTree = (docData) => {
  function traverse(node, currentLevel = 1, parentSlug = '') {
    const tree = [];

    for (const key in node) {
      const section = node[key];

      const slug = section.link ? section.link.slug : key;
      const fullSlug = parentSlug ? `${parentSlug}/${slug}` : slug;

      const currentNode = {
        label: section.link ? section.link.label : section.title,
        href: `/documentation/${fullSlug}`,
        level: section.link ? section.link.level || currentLevel : currentLevel,
        children: [],
      };

      if (section.sections && Array.isArray(section.sections)) {
        currentNode.children = section.sections.map((subSection) => {
          const childSlug = `${fullSlug}/${subSection.slug}`;

          return {
            label: subSection.title,
            href: `/documentation/${childSlug}`,
            level: currentLevel + 1,
            children: subSection.sections
              ? traverse({ [subSection.slug]: subSection }, currentLevel + 2, childSlug)
              : [],
          };
        });
      }

      tree.push(currentNode);
    }

    return tree;
  }

  return traverse(docData);
};
