import{_ as v,f as p,r as k,o as b,c as _,a,b as e,t as o,d as l,e as u}from"./app.27b7d6e3.js";const f={id:"frontmatter-title",tabindex:"-1"},q=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=a("h2",{id:"options",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),e(" Options")],-1),I=a("p",null,"The image input accepts the following options:",-1),x=a("thead",null,[a("tr",null,[a("th",null,"Property"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),V=a("td",null,"uploadHandler",-1),w=a("td",null,"Function",-1),S=a("td",null,"-",-1),U=a("code",null,"File",-1),H={href:"/reference/configuration",target:"_blank",rel:"noopener noreferrer"},M=a("tr",null,[a("td",null,"multiple"),a("td",null,"Boolean"),a("td",null,"false"),a("td",null,"Allow multiple images to be selected.")],-1),T=a("td",null,"accept",-1),F=a("td",null,"String",-1),L=a("td",null,"-",-1),E={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept",target:"_blank",rel:"noopener noreferrer"},K=u(`<p><strong><em>Note:</em></strong> <em>All other props are passed directly to the <code>&lt;input type=&quot;file&quot;&gt;</code> element.</em></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Below you can find some examples of the image input type.</p><h3 id="single-image" tabindex="-1"><a class="header-anchor" href="#single-image" aria-hidden="true">#</a> Single Image</h3><p>In its standard form the image input type allows you to upload an image and have a preview directly in the form. It only accepts one image and selecting a new one will replace the old one.</p><p><strong>Source:</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormKit</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Single Image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>`,8),N=a("p",null,[a("strong",null,"Value:")],-1),O=u(`<h3 id="single-image-with-uploader" tabindex="-1"><a class="header-anchor" href="#single-image-with-uploader" aria-hidden="true">#</a> Single Image with uploader</h3><p>The image input also accepts an optional uploadHandler function. If present, the uploadHandler receives the HTML5 <code>File</code> object as first argument and expects an src string as return value. You can use this to upload the image to your server before the user submits the form. The uploadHandler can also be defined globally in the configuration.</p><p><strong>Source:</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormKit</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Single Image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">upload-handler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fakeUpload<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>`,5),B=a("p",null,[a("strong",null,"Value:")],-1),D=u(`<h3 id="multiple-images" tabindex="-1"><a class="header-anchor" href="#multiple-images" aria-hidden="true">#</a> Multiple Images</h3><p>You can also upload multiple images and get a list of all selected images with previews. It is also possible to remove images from the list by clicking the remove button.</p><p><strong>Source:</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormKit</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Multiple Images<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>`,5),W=a("p",null,[a("strong",null,"Value:")],-1),j=u(`<h3 id="multiple-images-with-uploader" tabindex="-1"><a class="header-anchor" href="#multiple-images-with-uploader" aria-hidden="true">#</a> Multiple Images with uploader</h3><p>Similar to the single image with uploader the multiple image input type also accepts an uploadHandler function. It gets called asynchronously for each selected image.</p><p><strong>Source:</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormKit</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Multiple Images<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">multiple</span>
    <span class="token attr-name">upload-handler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fakeUpload<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>`,5),A=a("p",null,[a("strong",null,"Value:")],-1),C={__name:"image.html",setup(P){const i=p(""),c=p(""),r=p([]),d=p([]),h=m=>new Promise((n,g)=>{setTimeout(()=>{const s=URL.createObjectURL(m);n(s)},1e3)});return(m,n)=>{const g=k("ExternalLinkIcon"),s=k("FormKit");return b(),_("div",null,[a("h1",f,[q,e(" "+o(m.$frontmatter.title),1)]),y,I,a("table",null,[x,a("tbody",null,[a("tr",null,[V,w,S,a("td",null,[e("A function that receives the HTML5 "),U,e(" object as first argument and expects an src string as return value. The uploadHandler function can also be defined globally for all image uploads, see the plugin "),a("a",H,[e("Configuration"),l(g)]),e(".")])]),M,a("tr",null,[T,F,L,a("td",null,[e("A comma separated list of accepted MIME types. "),a("a",E,[e("MDN Docs"),l(g)]),e(".")])])])]),K,l(s,{type:"image",label:"Single Image",modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=t=>i.value=t)},null,8,["modelValue"]),N,a("pre",null,""+o(i.value)+`
`,1),O,l(s,{type:"image",label:"Single Image",modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=t=>c.value=t),"upload-handler":h},null,8,["modelValue"]),B,a("pre",null,""+o(c.value)+`
`,1),D,l(s,{type:"image",label:"Multiple Images",multiple:"",modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=t=>r.value=t)},null,8,["modelValue"]),W,a("pre",null,""+o(r.value)+`
`,1),j,l(s,{modelValue:d.value,"onUpdate:modelValue":n[3]||(n[3]=t=>d.value=t),type:"image",label:"Multiple Images",multiple:"","upload-handler":h},null,8,["modelValue"]),A,a("pre",null,""+o(d.value)+`
`,1)])}}},Y=v(C,[["__file","image.html.vue"]]);export{Y as default};
