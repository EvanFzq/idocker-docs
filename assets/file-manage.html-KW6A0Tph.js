import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as i,e as c}from"./app-madcDHCB.js";const l="/idocker-docs/assets/file-manage-AtW1H4oq.jpg",t="/idocker-docs/assets/file-task-B6O4RqxU.jpg",d={},a=c('<h1 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理"><span>文件管理</span></a></h1><h2 id="一、支持功能" tabindex="-1"><a class="header-anchor" href="#一、支持功能"><span>一、支持功能</span></a></h2><p>管理<code>docker</code>难免要进行文件管理，例如：创建配置文件夹、查看/修改配置文件，删除缓存文件，文件备份等，所以为了更方便的管理<code>docker</code>，<code>iDocker</code>集成的基础的文件管理功能。</p><figure><img src="'+l+'" alt="文件管理" tabindex="0" loading="lazy"><figcaption>文件管理</figcaption></figure><p>目前已实现新建文件、新建文件夹、复制、剪切、重命名、删除、上传、下载、查看图片、查看/编辑常见文本文件、获取宿主机路径、排序，搜索等功能。</p><p>未来可能会实现的功能：回收站、音视频查看、批量重命名等</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为稳定性考虑，目前只支持管理宿主机挂载到<code>iDocker</code>容器内的文件，且显示的是<code>iDocker</code>容器内路径，如果需要获取文件（夹）对应的宿主机路径，可右键文件（夹）点击【宿主机路径】选项获取</p></div><h2 id="二、任务队列" tabindex="-1"><a class="header-anchor" href="#二、任务队列"><span>二、任务队列</span></a></h2><p>由于批量复制、剪切、删除的耗时较长，所以复制、剪切、删除操作为后台任务，有多个任务时会队列执行，此时在用户头像旁显示任务进度，因后台任务导致的文件列表未及时刷新可点击列表右上方的刷新按钮刷新列表</p><figure><img src="'+t+'" alt="任务进度" tabindex="0" loading="lazy"><figcaption>任务进度</figcaption></figure><h2 id="三、上传、下载" tabindex="-1"><a class="header-anchor" href="#三、上传、下载"><span>三、上传、下载</span></a></h2><p>只需将想要上传的文件(夹)拖拽至文件列表区域即可进行上传，上传时会弹出进度弹窗，需等待上传进度完成才能关闭或刷新网页，否则上传将失败。</p><p>目前支持单个文件(夹)下载，如果下载的是文件，则直接进行下载，如果下载的是文件夹，则会下载文件夹的压缩包（为了保持文件夹内的文件路径）</p><h2 id="四、查看、编辑文本文件" tabindex="-1"><a class="header-anchor" href="#四、查看、编辑文本文件"><span>四、查看、编辑文本文件</span></a></h2><p>目前支持查看、编辑的文本文件格式为：</p><ul><li><code>.txt</code></li><li><code>.json</code></li><li><code>.conf</code></li><li><code>.md</code></li><li><code>.xml</code></li><li><code>.html</code></li><li><code>.yaml</code></li><li><code>.yml</code></li><li><code>.toml</code></li><li><code>.properties</code></li><li><code>.plist</code></li><li><code>.ini</code></li><li><code>.js</code></li><li><code>.ts</code></li><li><code>.css</code></li><li><code>.less</code></li><li><code>.scss</code></li><li><code>.tsx</code></li><li><code>.jsx</code></li><li><code>.vue</code></li><li><code>.php</code></li><li><code>.py</code></li><li><code>.java</code></li><li><code>.go</code></li><li><code>.c</code></li><li><code>.sh</code></li><li><code>.rs</code></li><li><code>.log</code></li><li><code>.conf</code></li><li><code>.types</code></li><li><code>.bat</code></li><li><code>.sql</code></li><li><code>.properties</code></li><li><code>.env</code></li><li><code>.plist</code></li></ul><p>其中多数格式支持语法高亮，其他文件格式可右键文件点击【以文本打开】选项进行尝试进行文本编辑</p>',17),n=[a];function r(s,p){return o(),i("div",null,n)}const g=e(d,[["render",r],["__file","file-manage.html.vue"]]),f=JSON.parse('{"path":"/guide/file-manage.html","title":"文件管理","lang":"zh-CN","frontmatter":{"order":5,"description":"文件管理 一、支持功能 管理docker难免要进行文件管理，例如：创建配置文件夹、查看/修改配置文件，删除缓存文件，文件备份等，所以为了更方便的管理docker，iDocker集成的基础的文件管理功能。 文件管理文件管理 目前已实现新建文件、新建文件夹、复制、剪切、重命名、删除、上传、下载、查看图片、查看/编辑常见文本文件、获取宿主机路径、排序，搜索等...","head":[["meta",{"property":"og:url","content":"https://idocker.fzq.info/idocker-docs/guide/file-manage.html"}],["meta",{"property":"og:site_name","content":"iDocker"}],["meta",{"property":"og:title","content":"文件管理"}],["meta",{"property":"og:description","content":"文件管理 一、支持功能 管理docker难免要进行文件管理，例如：创建配置文件夹、查看/修改配置文件，删除缓存文件，文件备份等，所以为了更方便的管理docker，iDocker集成的基础的文件管理功能。 文件管理文件管理 目前已实现新建文件、新建文件夹、复制、剪切、重命名、删除、上传、下载、查看图片、查看/编辑常见文本文件、获取宿主机路径、排序，搜索等..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-09T08:12:40.000Z"}],["meta",{"property":"article:author","content":"evan"}],["meta",{"property":"article:modified_time","content":"2024-07-09T08:12:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-09T08:12:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"evan\\"}]}"]]},"headers":[{"level":2,"title":"一、支持功能","slug":"一、支持功能","link":"#一、支持功能","children":[]},{"level":2,"title":"二、任务队列","slug":"二、任务队列","link":"#二、任务队列","children":[]},{"level":2,"title":"三、上传、下载","slug":"三、上传、下载","link":"#三、上传、下载","children":[]},{"level":2,"title":"四、查看、编辑文本文件","slug":"四、查看、编辑文本文件","link":"#四、查看、编辑文本文件","children":[]}],"git":{"createdTime":1710684753000,"updatedTime":1720512760000,"contributors":[{"name":"evan.feng","email":"evan.feng@temu.com","commits":4}]},"readingTime":{"minutes":1.87,"words":561},"filePathRelative":"guide/file-manage.md","localizedDate":"2024年3月17日","autoDesc":true}');export{g as comp,f as data};
