import{u as o,o as r,c as i,k as a,t as s,l as n,Q as c,a as e}from"./chunks/framework.a9f6acec.js";const d=c(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6),h=a("h3",{id:"page-data",tabindex:"-1"},[e("Page Data "),a("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1),m=a("h3",{id:"page-frontmatter",tabindex:"-1"},[e("Page Frontmatter "),a("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1),g=a("h2",{id:"more",tabindex:"-1"},[e("More "),a("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),u=a("p",null,[e("Check out the documentation for the "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),e(".")],-1),x=JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en/api-examples.md","filePath":"en/api-examples.md"}'),f={name:"en/api-examples.md"},D=Object.assign(f,{setup(_){const{site:E,theme:t,page:l,frontmatter:p}=o();return(b,y)=>(r(),i("div",null,[d,a("pre",null,s(n(t)),1),h,a("pre",null,s(n(l)),1),m,a("pre",null,s(n(p)),1),g,u]))}});export{x as __pageData,D as default};
