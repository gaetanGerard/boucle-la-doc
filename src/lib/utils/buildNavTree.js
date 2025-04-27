export const buildNavTree = (docData) => {
  function traverse(node, currentLevel = 1, parentSlug = '') {
    if (!node.navItem || !node.navItem.slug) {
      return null;
    }

    const slug = node.navItem.slug;
    const fullSlug = parentSlug ? `${parentSlug}/${slug}` : slug;

    const currentNode = {
      label: node.navItem.label || node.title,
      href: `/documentation/${fullSlug}`,
      level: currentLevel,
      children: [],
    };

    if (node.children && Array.isArray(node.children)) {
      currentNode.children = node.children
        .map((childNode) => traverse(childNode, currentLevel + 1, fullSlug))
        .filter(Boolean);
    }

    return currentNode;
  }

  const result = Object.keys(docData)
    .map((key) => traverse(docData[key]))
    .filter(Boolean);

  return result;
};
