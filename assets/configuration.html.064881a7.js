import{_ as n,o as s,c as a,e}from"./app.27b7d6e3.js";const t={},i=e(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>The library can be configured by passing an configuration object to the <code>createFormKitInputsPlugin</code> function.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> formKitInputPlugin <span class="token operator">=</span> <span class="token function">createFormKitInputsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Configure the plugin here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * To use the image input type with an automatic upload function
     * you have to pass an uploadHandler function.
     * This can also be passed as a property to the \`image\` input type.
     *
     * The uploadHandler receives the HTML5 \`File\` object
     * as first argument and expects an src string as return value.
     */</span>
    <span class="token function-variable function">uploadHandler</span><span class="token operator">:</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> File<span class="token punctuation">,</span> node<span class="token operator">:</span> FormKitNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * Default image input type configuration can be overwritten with the following properties.
     */</span>
    image<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/**
       * Overwrites the default key for the image id in the form data.
       * (Only applies for image inputs which accept *multiple images.)
       */</span>
      idKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * Overwrites the default key for the image name in the form data.
       * (Only applies for image inputs which accept multiple images.)
       */</span>
      nameKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * Overwrites the default key for the image src in the form data.
       * (Only applies for image inputs which accept multiple images.)
       */</span>
      srcKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="uploadhandler" tabindex="-1"><a class="header-anchor" href="#uploadhandler" aria-hidden="true">#</a> uploadHandler</h3><ul><li>Type: <code>Function</code></li><li>Default: <code>undefined</code></li></ul><p>To use the image input type with an automatic upload function you have to pass an uploadHandler function. This can also be passed as a property to the <code>image</code> input type. The uploadHandler receives the HTML5 <code>File</code> object as first argument and expects an src string as return value.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
    <span class="token function-variable function">uploadHandler</span><span class="token operator">:</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> File<span class="token punctuation">,</span> node<span class="token operator">:</span> FormKitNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[i];function p(l,c){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","configuration.html.vue"]]);export{u as default};
