export const mdToHtml = async (markdown: string) => {
  // NOTE: Use dynamic import because ERR_REQUIRE_ESM error occurs in E2E testing.
  const { unified } = await import('unified')
  const remarkParse = await import('remark-parse')
  const remarkRehype = await import('remark-rehype')
  const rehypeStringify = await import('rehype-stringify')

  return unified()
    .use(remarkParse.default) // Parse markdown content to a syntax tree
    .use(remarkRehype.default) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(rehypeStringify.default) // Serialize HTML syntax tree
    .process(markdown)
    .then((file) => String(file))
    .catch((_error) => {
      return ''
    })
}
