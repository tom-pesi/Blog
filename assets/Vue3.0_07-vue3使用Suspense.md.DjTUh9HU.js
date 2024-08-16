import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.Dez3CbjC.js";const c=JSON.parse('{"title":"Suspense","description":"","frontmatter":{},"headers":[],"relativePath":"Vue3.0/07-vue3使用Suspense.md","filePath":"Vue3.0/07-vue3使用Suspense.md"}'),n={name:"Vue3.0/07-vue3使用Suspense.md"},l=t(`<h1 id="suspense" tabindex="-1">Suspense <a class="header-anchor" href="#suspense" aria-label="Permalink to &quot;Suspense&quot;">​</a></h1><h3 id="实验性功能" tabindex="-1">实验性功能 <a class="header-anchor" href="#实验性功能" aria-label="Permalink to &quot;实验性功能&quot;">​</a></h3><p><code>&lt;Suspense&gt;</code> 是一项实验性功能。它不一定会最终成为稳定功能，并且在稳定之前相关 API 也可能会发生变化。</p><p><code>&lt;Suspense&gt;</code> 是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。 异步依赖 ​</p><h3 id="要了解-suspense-所解决的问题和它是如何与异步依赖进行交互的-我们需要想象这样一种组件层级结构" tabindex="-1">要了解 <code>&lt;Suspense&gt;</code> 所解决的问题和它是如何与异步依赖进行交互的，我们需要想象这样一种组件层级结构： <a class="header-anchor" href="#要了解-suspense-所解决的问题和它是如何与异步依赖进行交互的-我们需要想象这样一种组件层级结构" aria-label="Permalink to &quot;要了解 \`&lt;Suspense&gt;\` 所解决的问题和它是如何与异步依赖进行交互的，我们需要想象这样一种组件层级结构：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;Suspense&gt;</span></span>
<span class="line"><span>└─ &lt;Dashboard&gt;</span></span>
<span class="line"><span>   ├─ &lt;Profile&gt;</span></span>
<span class="line"><span>   │  └─ &lt;FriendStatus&gt;（组件有异步的 setup()）</span></span>
<span class="line"><span>   └─ &lt;Content&gt;</span></span>
<span class="line"><span>      ├─ &lt;ActivityFeed&gt; （异步组件）</span></span>
<span class="line"><span>      └─ &lt;Stats&gt;（异步组件）</span></span></code></pre></div><p>在这个组件树中有多个嵌套组件，要渲染出它们，首先得解析一些异步资源。如果没有<code>&lt;Suspense&gt;</code>，则它们每个都需要处理自己的加载、报错和完成状态。在最坏的情况下，我们可能会在页面上看到三个旋转的加载态，在不同的时间显示出内容。</p><p>有了 <code>&lt;Suspense&gt;</code> 组件后，我们就可以在等待整个多层级组件树中的各个异步依赖获取结果时，在顶层展示出加载中或加载失败的状态。</p><p><code>&lt;Suspense&gt;</code> 可以等待的异步依赖有两种：</p><ul><li><p>带有异步 setup() 钩子的组件。这也包含了使用 <code>&lt;script setup&gt;</code> 时有顶层 await 表达式的组件。</p></li><li><p>异步组件。</p></li></ul><h3 id="async-setup" tabindex="-1">async setup() <a class="header-anchor" href="#async-setup" aria-label="Permalink to &quot;async setup()&quot;">​</a></h3><p>组合式 API 中组件的 setup() 钩子可以是异步的： js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      posts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果使用 <code>&lt;script setup&gt;</code>，那么顶层 <code>await</code> 表达式会自动让该组件成为一个异步依赖：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {{ posts }} &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="异步组件" tabindex="-1">异步组件 <a class="header-anchor" href="#异步组件" aria-label="Permalink to &quot;异步组件&quot;">​</a></h3><p>异步组件默认就是“suspensible”的。这意味着如果组件关系链上有一个 <code>&lt;Suspense&gt;</code>，那么这个异步组件就会被当作这个 <code>&lt;Suspense&gt;</code> 的一个异步依赖。在这种情况下，加载状态是由 <code>&lt;Suspense&gt;</code> 控制，而该组件自己的加载、报错、延时和超时等选项都将被忽略。</p><p>异步组件也可以通过在选项中指定 suspensible: false 表明不用 Suspense 控制，并让组件始终自己控制其加载状态。 加载中状态 ​</p><p><code>&lt;Suspense&gt;</code> 组件有两个插槽：<strong>#default</strong> 和 <strong>#fallback</strong>。两个插槽都只允许一个直接子节点。在可能的时候都将显示默认槽中的节点。否则将显示后备槽中的节点。 template</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- 具有深层异步依赖的组件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Dashboard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- 在 #fallback 插槽中显示 “正在加载中” --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #fallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; Loading... &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在初始渲染时，<code>&lt;Suspense&gt;</code> 将在内存中渲染其默认的插槽内容。如果在这个过程中遇到任何异步依赖，则会进入挂起状态。在挂起状态期间，展示的是后备内容。当所有遇到的异步依赖都完成后，<code>&lt;Suspense&gt;</code> 会进入完成状态，并将展示出默认插槽的内容。</p><p>如果在初次渲染时没有遇到异步依赖，<code>&lt;Suspense&gt;</code> 会直接进入完成状态。</p><p>进入完成状态后，只有当默认插槽的根节点被替换时，<code>&lt;Suspense&gt;</code> 才会回到挂起状态。组件树中新的更深层次的异步依赖不会造成 <code>&lt;Suspense&gt;</code> 回退到挂起状态。</p><p>发生回退时，后备内容不会立即展示出来。相反，<code>&lt;Suspense&gt;</code> 在等待新内容和异步依赖完成时，会展示之前 #default 插槽的内容。这个行为可以通过一个 timeout prop 进行配置：在等待渲染新内容耗时超过 timeout 之后，<code>&lt;Suspense&gt;</code> 将会切换为展示后备内容。若 timeout 值为 0 将导致在替换默认内容时立即显示后备内容。 事件 ​</p><p><code>&lt;Suspense&gt;</code> 组件会触发三个事件：pending、resolve 和 fallback。pending 事件是在进入挂起状态时触发。resolve 事件是在 default 插槽完成获取新内容时触发。fallback 事件则是在 fallback 插槽的内容显示时触发。</p><p>例如，可以使用这些事件在加载新组件时在之前的 DOM 最上层显示一个加载指示器。 错误处理 ​</p><p><code>&lt;Suspense&gt;</code> 组件自身目前还不提供错误处理，不过你可以使用 errorCaptured 选项或者 onErrorCaptured() 钩子，在使用到 <code>&lt;Suspense&gt;</code> 的父组件中捕获和处理异步错误。 和其他组件结合 ​</p><p>我们常常会将 <code>&lt;Suspense&gt;</code> 和 <code>&lt;Transition&gt;、&lt;KeepAlive&gt;</code> 等组件结合。要保证这些组件都能正常工作，嵌套的顺序非常重要。</p><p>另外，这些组件都通常与 Vue Router 中的 <code>&lt;RouterView&gt;</code> 组件结合使用。</p><p>下面的示例展示了如何嵌套这些组件，使它们都能按照预期的方式运行。若想组合得更简单，你也可以删除一些你不需要的组件： template</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">RouterView</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ Component }&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Transition</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;out-in&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">KeepAlive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          &lt;!-- 主要内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">component</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          &lt;!-- 加载中状态 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #fallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 正在加载... &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">KeepAlive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">RouterView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Vue Router 使用动态导入对懒加载组件进行了内置支持。这些与异步组件不同，目前他们不会触发 <code>&lt;Suspense&gt;</code>。但是，它们仍然可以有异步组件作为后代，这些组件可以照常触发 <code>&lt;Suspense&gt;</code>。</p>`,32),e=[l];function p(h,k,d,E,g,r){return a(),i("div",null,e)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};
