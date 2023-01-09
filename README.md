# commit-stalker

![Deploy to Pages](https://github.com/9sako6/commit-stalker/workflows/Deploy%20to%20Pages/badge.svg)
![CI](https://github.com/9sako6/commit-stalker/workflows/CI/badge.svg)

A GitHub commits viewer that allows you to easily search older commits by
pagination. Commit messages are rendered as Markdown.

In addition, **100 commits** are showed in a page. (35 commits in the official
site.)

URL: https://9sako6.github.io/commit-stalker/

https://user-images.githubusercontent.com/31821663/210141602-b640a7a4-7377-4e40-83f2-96f8427d02f4.mov

These are sample screenshots on mobile.

<p>
  <img src="./figs/mobile.png" width=200px/>
  <img src="./figs/mobile_rails.png" width=200px/>
  <img src="./figs/mobile_rails2.png" width=200px/>
  <img src="./figs/mobile_rust.png" width=200px/>
</p>

## More Details

[I built the Web app to search commits on GitHub - dev.to](https://dev.to/9sako6/i-built-the-web-app-to-search-commits-on-github-3l82)

## Change log

**2023/01/07**

You can now sign in with your GitHub account to send authenticated requests.

**2022/12/31**

Replace with Next.js.

**2020/04/29**

Responsive support.

**2019/05/06**

To count all commit, commit-stalker uses original Web API:
[9sako6/github-api-for-commit-count](https://github.com/9sako6/github-api-for-commit-count).

- This API is no longer used. (2021/08/19)

## License

- [WTFPL](https://github.com/9sako6/commit-stalker/blob/master/LICENSE.md)
