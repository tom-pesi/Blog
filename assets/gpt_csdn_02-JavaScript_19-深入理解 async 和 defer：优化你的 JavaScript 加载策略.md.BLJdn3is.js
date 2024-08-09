import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.Dez3CbjC.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"gpt_csdn/02-JavaScript/19-深入理解 async 和 defer：优化你的 JavaScript 加载策略.md","filePath":"gpt_csdn/02-JavaScript/19-深入理解 async 和 defer：优化你的 JavaScript 加载策略.md"}'),l={name:"gpt_csdn/02-JavaScript/19-深入理解 async 和 defer：优化你的 JavaScript 加载策略.md"},e=t(`<h2 id="深入理解-async-和-defer-优化你的-javascript-加载策略" tabindex="-1">深入理解 <code>async</code> 和 <code>defer</code>：优化你的 JavaScript 加载策略 <a class="header-anchor" href="#深入理解-async-和-defer-优化你的-javascript-加载策略" aria-label="Permalink to &quot;深入理解 \`async\` 和 \`defer\`：优化你的 JavaScript 加载策略&quot;">​</a></h2><p>在现代网页开发中，优化页面加载速度和性能是至关重要的。JavaScript 文件的加载和执行可以显著影响页面的加载时间和用户体验。HTML5 引入了两个重要的属性：<code>async</code> 和 <code>defer</code>，它们可以帮助我们更好地控制脚本的加载和执行行为。那么，<code>async</code> 和 <code>defer</code> 到底是什么，它们之间有什么区别，又该如何选择呢？让我们一起来深入探讨。</p><h3 id="async-和-defer-的基本概念" tabindex="-1"><code>async</code> 和 <code>defer</code> 的基本概念 <a class="header-anchor" href="#async-和-defer-的基本概念" aria-label="Permalink to &quot;\`async\` 和 \`defer\` 的基本概念&quot;">​</a></h3><p>在默认情况下，当浏览器遇到一个 <code>&lt;script&gt;</code> 标签时，会停止解析 HTML，开始下载和执行该脚本。这个过程会阻塞页面的渲染，导致页面加载速度变慢。为了优化这一点，HTML5 引入了 <code>async</code> 和 <code>defer</code> 属性，它们允许脚本异步加载，从而避免阻塞 HTML 的解析。</p><h4 id="async-属性" tabindex="-1"><code>async</code> 属性 <a class="header-anchor" href="#async-属性" aria-label="Permalink to &quot;\`async\` 属性&quot;">​</a></h4><p><code>async</code> 属性表示脚本是异步加载和执行的。具体来说：</p><ul><li>当浏览器遇到带有 <code>async</code> 属性的 <code>&lt;script&gt;</code> 标签时，会开始下载该脚本，同时继续解析 HTML 文档。</li><li>脚本下载完成后，会立即执行脚本，无论此时 HTML 是否解析完毕。</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>使用 <code>async</code> 的脚本不会保证执行顺序。因此，如果有多个带有 <code>async</code> 属性的脚本，它们的执行顺序是不可预测的，取决于各自的下载时间。</p><h4 id="defer-属性" tabindex="-1"><code>defer</code> 属性 <a class="header-anchor" href="#defer-属性" aria-label="Permalink to &quot;\`defer\` 属性&quot;">​</a></h4><p><code>defer</code> 属性表示脚本在 HTML 解析完成后执行。具体来说：</p><ul><li>当浏览器遇到带有 <code>defer</code> 属性的 <code>&lt;script&gt;</code> 标签时，会开始下载该脚本，同时继续解析 HTML 文档。</li><li>脚本下载完成后，不会立即执行，而是在 HTML 解析完毕后，按照在文档中出现的顺序依次执行。</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>使用 <code>defer</code> 的脚本保证了执行顺序，即使有多个带有 <code>defer</code> 属性的脚本，它们也会按照在文档中出现的顺序依次执行。</p><h3 id="async-和-defer-的区别" tabindex="-1"><code>async</code> 和 <code>defer</code> 的区别 <a class="header-anchor" href="#async-和-defer-的区别" aria-label="Permalink to &quot;\`async\` 和 \`defer\` 的区别&quot;">​</a></h3><ol><li><p><strong>加载和执行时机</strong></p><ul><li><code>async</code>：脚本异步加载，并在下载完成后立即执行，不会等待 HTML 解析完毕。</li><li><code>defer</code>：脚本异步加载，但在 HTML 解析完毕后才会按顺序执行。</li></ul></li><li><p><strong>执行顺序</strong></p><ul><li><code>async</code>：执行顺序不确定，取决于各个脚本的下载时间。</li><li><code>defer</code>：执行顺序确定，按照脚本在文档中出现的顺序执行。</li></ul></li><li><p><strong>使用场景</strong></p><ul><li><code>async</code>：适用于独立的脚本，不依赖其他脚本或 DOM 内容。例如，统计代码、广告脚本等。</li><li><code>defer</code>：适用于需要保证执行顺序的脚本，通常是有依赖关系的脚本，例如，库文件和依赖它们的脚本。</li></ul></li></ol><h3 id="实践中的选择" tabindex="-1">实践中的选择 <a class="header-anchor" href="#实践中的选择" aria-label="Permalink to &quot;实践中的选择&quot;">​</a></h3><p>选择 <code>async</code> 还是 <code>defer</code> 取决于具体的应用场景和需求：</p><ul><li><p><strong>使用 <code>async</code> 的情况</strong>：如果你的脚本不依赖于其他脚本或 DOM 内容，并且你希望尽快执行它们，例如第三方统计、广告脚本等，可以使用 <code>async</code> 属性。这些脚本不需要等待整个页面解析完成，可以并行下载和执行，减少阻塞时间。</p></li><li><p><strong>使用 <code>defer</code> 的情况</strong>：如果你的脚本依赖于其他脚本或需要在 DOM 内容加载完成后执行，可以使用 <code>defer</code> 属性。这种方式保证了脚本按顺序执行，并且在 HTML 解析完成后执行，不会阻塞页面的加载过程。</p></li></ul><h3 id="例子比较" tabindex="-1">例子比较 <a class="header-anchor" href="#例子比较" aria-label="Permalink to &quot;例子比较&quot;">​</a></h3><h4 id="async-示例" tabindex="-1"><code>async</code> 示例 <a class="header-anchor" href="#async-示例" aria-label="Permalink to &quot;\`async\` 示例&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Async Example&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, World!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script1.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script2.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在这个例子中，<code>script1.js</code> 和 <code>script2.js</code> 将会同时开始下载，并在下载完成后立即执行。它们的执行顺序不确定。</p><h4 id="defer-示例" tabindex="-1"><code>defer</code> 示例 <a class="header-anchor" href="#defer-示例" aria-label="Permalink to &quot;\`defer\` 示例&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Defer Example&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, World!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script1.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script2.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在这个例子中，<code>script1.js</code> 和 <code>script2.js</code> 将会同时开始下载，但它们会在 HTML 解析完毕后，按照顺序依次执行。</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h3><p><code>async</code> 和 <code>defer</code> 是优化网页性能的重要工具，它们允许脚本异步加载，避免阻塞页面的渲染。了解它们之间的区别和适用场景，可以帮助开发者更好地优化网页加载性能，提升用户体验。在实际项目中，根据脚本的依赖关系和执行顺序需求，合理选择 <code>async</code> 和 <code>defer</code>，可以实现最佳的性能优化效果。</p><hr><p>希望这篇博客文章对你了解 <code>async</code> 和 <code>defer</code> 的区别有所帮助！如果你有任何问题或需要更多的信息，欢迎在评论区留言讨论。</p>`,30),h=[e];function n(p,k,d,E,r,c){return a(),i("div",null,h)}const y=s(l,[["render",n]]);export{g as __pageData,y as default};
