export const findDataBySlug = (slug, docData) => {
  const slugParts = slug.length > 1 ? slug[slug.length - 1] : null;

  function recursiveSearch(obj) {
    if (obj && obj.navItem && obj.navItem.slug === slugParts) {
      return obj;
    }
    if (obj && Array.isArray(obj.children)) {
      for (const child of obj.children) {
        const found = recursiveSearch(child);
        if (found) return found;
      }
    }
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const found = recursiveSearch(obj[key]);
          if (found) return found;
        }
      }
    }
    return null;
  }

  return recursiveSearch(docData);
};
