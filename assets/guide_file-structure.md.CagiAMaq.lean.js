import{_ as e,c as n,a2 as s,o as i}from"./chunks/framework.Gf1jShja.js";const h=JSON.parse('{"title":"文件结构","description":"","frontmatter":{},"headers":[],"relativePath":"guide/file-structure.md","filePath":"guide/file-structure.md","lastUpdated":1721813896000}'),l={name:"guide/file-structure.md"};function o(p,a,c,r,t,d){return i(),n("div",null,a[0]||(a[0]=[s(`<h1 id="file-structure" tabindex="-1">文件结构 <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;文件结构 {#file-structure}&quot;">​</a></h1><p>Celestial Being 界面系统的文件结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ .vscode</span></span>
<span class="line"><span>├─ build</span></span>
<span class="line"><span>├─ dist</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>├─ main</span></span>
<span class="line"><span>│  ├─ core</span></span>
<span class="line"><span>│  │  ├─ main.js</span></span>
<span class="line"><span>│  │  ├─ prelaod.js</span></span>
<span class="line"><span>│  │  ├─ store.js</span></span>
<span class="line"><span>│  │  ├─ tray.js</span></span>
<span class="line"><span>│  │  └─ window.js</span></span>
<span class="line"><span>│  ├─ pages</span></span>
<span class="line"><span>│  │  ├─ page-one</span></span>
<span class="line"><span>│  │  │   ├─ main.js</span></span>
<span class="line"><span>│  │  │   └─ prelaod.mjs</span></span>
<span class="line"><span>│  │  └─ page-two</span></span>
<span class="line"><span>│  │      ├─ main.js</span></span>
<span class="line"><span>│  │      └─ prelaod.mjs</span></span>
<span class="line"><span>│  └─ icons</span></span>
<span class="line"><span>│     ├─ icon.ico</span></span>
<span class="line"><span>│     ├─ tray.png</span></span>
<span class="line"><span>│     └─ tray@2x.png</span></span>
<span class="line"><span>├─ public</span></span>
<span class="line"><span>│  ├─ audios</span></span>
<span class="line"><span>│  ├─ compontnts</span></span>
<span class="line"><span>│  ├─ fonts</span></span>
<span class="line"><span>│  ├─ images</span></span>
<span class="line"><span>│  ├─ styles</span></span>
<span class="line"><span>│  └─ utils</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│  ├─ page-one</span></span>
<span class="line"><span>│  │  ├─ pages</span></span>
<span class="line"><span>│  │  │   └─ Page.vue</span></span>
<span class="line"><span>│  │  ├─ App.vue</span></span>
<span class="line"><span>│  │  ├─ index.html</span></span>
<span class="line"><span>│  │  └─ main.js</span></span>
<span class="line"><span>│  └─ page-two</span></span>
<span class="line"><span>│     ├─ pages</span></span>
<span class="line"><span>│     │   └─ Page.vue</span></span>
<span class="line"><span>│     ├─ App.vue</span></span>
<span class="line"><span>│     ├─ index.html</span></span>
<span class="line"><span>│     └─ main.js</span></span>
<span class="line"><span>├─ .gitignore</span></span>
<span class="line"><span>├─ jsconfig.json</span></span>
<span class="line"><span>├─ package.json</span></span>
<span class="line"><span>└─ vite.config.js</span></span></code></pre></div><h2 id="vscode" tabindex="-1">.vscode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;.vscode {#vscode}&quot;">​</a></h2><ul><li>类型：<code>vs code</code></li></ul><p>VS Code 编辑器的配置文件。</p><h2 id="build" tabindex="-1">build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;build {#build}&quot;">​</a></h2><ul><li>类型：<code>electron</code></li></ul><p>使用 <code>electron-builder</code> 构建产生的文件。</p><h2 id="dist" tabindex="-1">dist <a class="header-anchor" href="#dist" aria-label="Permalink to &quot;dist {#dist}&quot;">​</a></h2><ul><li>类型：<code>vite</code></li></ul><p>使用 <code>vite</code> 构建产生的文件，打包时会被复制，并重命名为 <code>render</code> 。</p><h2 id="docs" tabindex="-1">docs <a class="header-anchor" href="#docs" aria-label="Permalink to &quot;docs {#docs}&quot;">​</a></h2><ul><li>类型：<code>vitepress</code></li></ul><p>开发文档，使用 <code>vitepress</code> 构建。</p><h2 id="main" tabindex="-1">main <a class="header-anchor" href="#main" aria-label="Permalink to &quot;main {#main}&quot;">​</a></h2><ul><li>类型：<code>electron</code></li></ul><p>存放主进程文件，所有与主进程有关的文件都应该放在这里。</p><h3 id="main-core" tabindex="-1">core <a class="header-anchor" href="#main-core" aria-label="Permalink to &quot;core {#main-core}&quot;">​</a></h3><ul><li>类型：<code>electron</code></li></ul><p>主进程的核心文件。</p><h4 id="main-core-mainjs" tabindex="-1">main.js <a class="header-anchor" href="#main-core-mainjs" aria-label="Permalink to &quot;main.js {#main-core-mainjs}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>主进程入口。</p><h4 id="main-core-preloadjs" tabindex="-1">preload.js <a class="header-anchor" href="#main-core-preloadjs" aria-label="Permalink to &quot;preload.js {#main-core-preloadjs}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>预加载脚本配置文件。</p><h4 id="main-core-storejs" tabindex="-1">store.js <a class="header-anchor" href="#main-core-storejs" aria-label="Permalink to &quot;store.js {#main-core-storejs}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>数据持久化存储配置文件，</p><h4 id="main-core-trayjs" tabindex="-1">tray.js <a class="header-anchor" href="#main-core-trayjs" aria-label="Permalink to &quot;tray.js {#main-core-trayjs}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>托盘配置文件。</p><h4 id="main-core-windowjs" tabindex="-1">window.js <a class="header-anchor" href="#main-core-windowjs" aria-label="Permalink to &quot;window.js {#main-core-windowjs}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>窗口配置文件。</p><h3 id="main-pages" tabindex="-1">pages <a class="header-anchor" href="#main-pages" aria-label="Permalink to &quot;pages {#main-pages}&quot;">​</a></h3><ul><li>类型：<code>electron</code></li></ul><p>存放所有页面的入口文件和预加载脚本。</p><h4 id="main-pages-pageone" tabindex="-1">page-one <a class="header-anchor" href="#main-pages-pageone" aria-label="Permalink to &quot;page-one {#main-pages-pageone}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>存放页面的入口文件和预加载脚本。</p><h5 id="main-pages-pageone-mainjs" tabindex="-1">main.js <a class="header-anchor" href="#main-pages-pageone-mainjs" aria-label="Permalink to &quot;main.js {#main-pages-pageone-mainjs}&quot;">​</a></h5><ul><li>类型：<code>electron</code></li></ul><p>页面入口文件。</p><h5 id="main-pages-pageone-preloadjs" tabindex="-1">preload.js <a class="header-anchor" href="#main-pages-pageone-preloadjs" aria-label="Permalink to &quot;preload.js {#main-pages-pageone-preloadjs}&quot;">​</a></h5><ul><li>类型：<code>electron</code></li></ul><p>页面预加载脚本。</p><h3 id="main-icons" tabindex="-1">icons <a class="header-anchor" href="#main-icons" aria-label="Permalink to &quot;icons {#main-icons}&quot;">​</a></h3><ul><li>类型：<code>electron</code></li></ul><p>存放应用图标和托盘图标。</p><h4 id="main-icons-iconico" tabindex="-1">icon.ico <a class="header-anchor" href="#main-icons-iconico" aria-label="Permalink to &quot;icon.ico {#main-icons-iconico}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>应用图标，尺寸要求 <code>256 x 256</code> 。</p><h4 id="main-icons-traypng" tabindex="-1">tray.png <a class="header-anchor" href="#main-icons-traypng" aria-label="Permalink to &quot;tray.png {#main-icons-traypng}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>托盘图标，尺寸要求 <code>16 x 16</code> 。</p><h4 id="main-icons-tray2xpng" tabindex="-1">tray@2x.png <a class="header-anchor" href="#main-icons-tray2xpng" aria-label="Permalink to &quot;tray@2x.png {#main-icons-tray2xpng}&quot;">​</a></h4><ul><li>类型：<code>electron</code></li></ul><p>高分辨率托盘图标，尺寸要求 <code>32 x 32</code> 。</p><h2 id="public" tabindex="-1">public <a class="header-anchor" href="#public" aria-label="Permalink to &quot;public {#public}&quot;">​</a></h2><ul><li>类型：<code>vue</code></li></ul><p>存放公共文件。</p><h3 id="public-audios" tabindex="-1">audios <a class="header-anchor" href="#public-audios" aria-label="Permalink to &quot;audios {#public-audios}&quot;">​</a></h3><ul><li>类型：<code>vue</code></li></ul><p>存放音效文件。</p><h3 id="public-compontnts" tabindex="-1">compontnts <a class="header-anchor" href="#public-compontnts" aria-label="Permalink to &quot;compontnts {#public-compontnts}&quot;">​</a></h3><ul><li>类型：<code>vue</code></li></ul><p>存放公共组件。</p><h3 id="public-fonts" tabindex="-1">fonts <a class="header-anchor" href="#public-fonts" aria-label="Permalink to &quot;fonts {#public-fonts}&quot;">​</a></h3><ul><li>类型：<code>vue</code></li></ul><p>存放字体。</p><h3 id="public-images" tabindex="-1">images <a class="header-anchor" href="#public-images" aria-label="Permalink to &quot;images {#public-images}&quot;">​</a></h3><ul><li>类型：<code>vue</code></li></ul><p>存放图片文件。</p><h3 id="public-styles" tabindex="-1">styles <a class="header-anchor" href="#public-styles" aria-label="Permalink to &quot;styles {#public-styles}&quot;">​</a></h3><ul><li>类型：<code>vue</code></li></ul><p>存放样式文件。</p><h3 id="public-utils" tabindex="-1">utils <a class="header-anchor" href="#public-utils" aria-label="Permalink to &quot;utils {#public-utils}&quot;">​</a></h3><ul><li>类型：<code>vue</code></li></ul><p>存放工具类。</p><h2 id="src" tabindex="-1">src <a class="header-anchor" href="#src" aria-label="Permalink to &quot;src {#src}&quot;">​</a></h2><ul><li>类型：<code>vue</code></li></ul><p>页面的开发入口，存放所有页面。</p><h3 id="src-pageone" tabindex="-1">page-one <a class="header-anchor" href="#src-pageone" aria-label="Permalink to &quot;page-one {#src-pageone}&quot;">​</a></h3><ul><li>类型：<code>vue</code></li></ul><p>存放页面文件。</p><h4 id="src-pageone-pages" tabindex="-1">pages <a class="header-anchor" href="#src-pageone-pages" aria-label="Permalink to &quot;pages {#src-pageone-pages}&quot;">​</a></h4><ul><li>类型：<code>vue</code></li></ul><p>存放路由页面文件。</p><h5 id="src-pageone-pages-pagevue" tabindex="-1">Page.vue <a class="header-anchor" href="#src-pageone-pages-pagevue" aria-label="Permalink to &quot;Page.vue {#src-pageone-pages-pagevue}&quot;">​</a></h5><ul><li>类型：<code>vue</code></li></ul><p>路由页面文件。</p><h4 id="src-pageone-appvue" tabindex="-1">App.vue <a class="header-anchor" href="#src-pageone-appvue" aria-label="Permalink to &quot;App.vue {#src-pageone-appvue}&quot;">​</a></h4><ul><li>类型：<code>vue</code></li></ul><p>页面文件。</p><h4 id="src-pageone-indexhtml" tabindex="-1">index.html <a class="header-anchor" href="#src-pageone-indexhtml" aria-label="Permalink to &quot;index.html {#src-pageone-indexhtml}&quot;">​</a></h4><ul><li>类型：<code>vue</code></li></ul><p>页面模板。</p><h4 id="src-pageone-mainjs" tabindex="-1">main.js <a class="header-anchor" href="#src-pageone-mainjs" aria-label="Permalink to &quot;main.js {#src-pageone-mainjs}&quot;">​</a></h4><ul><li>类型：<code>vue</code></li></ul><p>页面入口文件。</p><h2 id="gitignore" tabindex="-1">.gitignore <a class="header-anchor" href="#gitignore" aria-label="Permalink to &quot;.gitignore {#gitignore}&quot;">​</a></h2><ul><li>类型：<code>git</code></li></ul><p>Git 配置文件。</p><h2 id="jsconfigjson" tabindex="-1">jsconfig.json <a class="header-anchor" href="#jsconfigjson" aria-label="Permalink to &quot;jsconfig.json {#jsconfigjson}&quot;">​</a></h2><ul><li>类型：<code>vs code</code></li></ul><p>VS Code 编辑器配置文件。</p><h2 id="packagejson" tabindex="-1">package.json <a class="header-anchor" href="#packagejson" aria-label="Permalink to &quot;package.json {#packagejson}&quot;">​</a></h2><ul><li>类型：<code>package</code></li></ul><p>文件项目清单。</p><h2 id="viteconfigjs" tabindex="-1">vite.config.js <a class="header-anchor" href="#viteconfigjs" aria-label="Permalink to &quot;vite.config.js {#viteconfigjs}&quot;">​</a></h2><ul><li>类型：<code>vite</code></li></ul><p>Vite 配置文件。</p>`,114)]))}const m=e(l,[["render",o]]);export{h as __pageData,m as default};
