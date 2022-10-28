import{_ as i,r as t,o as l,c as u,a as n,b as s,d as a,w as e,e as r}from"./app.27b7d6e3.js";const d={},k={href:"https://formkit.com",target:"_blank",rel:"noopener noreferrer"},m=n("h3",{id:"how-to-use",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-use","aria-hidden":"true"},"#"),s(" How to use")],-1),v=n("p",null,"Install it in your project",-1),g=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @kgierke/formkit-inputs
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Install it in your project"),s(`
`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @kgierke/formkit-inputs
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=r(`<p>Initialize FormKit with the plugin:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> createApp <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultConfig<span class="token punctuation">,</span> plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@formkit/vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createFormKitInputsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@kgierke/formkit-inputs&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> formKitInputPlugin <span class="token operator">=</span> <span class="token function">createFormKitInputsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    plugin<span class="token punctuation">,</span>
    <span class="token function">defaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      plugins<span class="token operator">:</span> <span class="token punctuation">[</span>formKitInputPlugin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enjoy!</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormKit</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function _(h,q){const p=t("ExternalLinkIcon"),o=t("CodeGroupItem"),c=t("CodeGroup");return l(),u("div",null,[n("p",null,[s("A collection of additional input types to use with "),n("a",k,[s("FormKit"),a(p)]),s(".")]),m,v,a(c,null,{default:e(()=>[a(o,{title:"NPM",active:""},{default:e(()=>[g]),_:1}),a(o,{title:"YARN"},{default:e(()=>[f]),_:1})]),_:1}),b])}const w=i(d,[["render",_],["__file","index.html.vue"]]);export{w as default};