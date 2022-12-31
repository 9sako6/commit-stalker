import { mdToHtml } from "@/src/lib/md-to-html";

test('mdToHtml', async () => {
  const html = await mdToHtml(`
# Header 1

text

- list
  - sublist
  `)

  expect(html).toEqual(`<h1>Header 1</h1>
<p>text</p>
<ul>
<li>list
<ul>
<li>sublist</li>
</ul>
</li>
</ul>`)
})
