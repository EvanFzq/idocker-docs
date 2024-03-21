import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as d,e as o}from"./app-C-NQptJR.js";const c="/idocker-docs/assets/create-container-mode-B2tD10Sb.jpg",r="/idocker-docs/assets/mount-B-XWc7Sg.jpg",a="/idocker-docs/assets/path-tips-Dv1GMhpD.png",i="/idocker-docs/assets/compose-C5IPbYoN.jpg",n={},p=o('<h1 id="容器" tabindex="-1"><a class="header-anchor" href="#容器"><span>容器</span></a></h1><h2 id="一、创建容器" tabindex="-1"><a class="header-anchor" href="#一、创建容器"><span>一、创建容器</span></a></h2><p><code>iDocker</code> 在<code>PC</code>下有三种模式创建容器，分为基础模式、高级模式、<code>compose</code>模式。在移动端只有基础模式</p><figure><img src="'+c+'" alt="创建容器模式" tabindex="0" loading="lazy"><figcaption>创建容器模式</figcaption></figure><h3 id="_1-1-基础模式、高级模式" tabindex="-1"><a class="header-anchor" href="#_1-1-基础模式、高级模式"><span>1.1 基础模式、高级模式</span></a></h3><p>基础模式适合对<code>docker</code>不是很了解的用户，它相比高级模式隐藏了一些不必要的设置项，适合创建一些只需要挂载路径和映射端口的简单容器，减少不必要的选项避免误操作。</p><p>高级模式适合创建一些需要多网络、特殊能力的容器，高级模式的设置项更多一些，适合对<code>docker</code>比较了解的用户更细节的控制创建</p><p>他们的功能对比如下</p><table><thead><tr><th>功能</th><th>基础模式</th><th>高级模式</th></tr></thead><tbody><tr><td>图标</td><td>✔</td><td>✔</td></tr><tr><td>内外网地址</td><td>✔</td><td>✔</td></tr><tr><td>重启策略</td><td>✔</td><td>✔</td></tr><tr><td>端口配置</td><td>✔</td><td>✔</td></tr><tr><td>挂载配置</td><td>✔</td><td>✔</td></tr><tr><td>环境变量配置</td><td>✔</td><td>✔</td></tr><tr><td>镜像源</td><td>官方镜像源</td><td>支持切换镜像源</td></tr><tr><td>网络</td><td>单网络</td><td>多网络且支持配置ip、mac</td></tr><tr><td>hostname</td><td>✘</td><td>✔</td></tr><tr><td>domainName</td><td>✘</td><td>✔</td></tr><tr><td>启动命令</td><td>✘</td><td>✔</td></tr><tr><td>Hosts文件配置</td><td>✘</td><td>✔</td></tr><tr><td>特权模式</td><td>✘</td><td>✔</td></tr><tr><td>CPU、内存资源限制</td><td>✘</td><td>✔</td></tr><tr><td>能力限制</td><td>✘</td><td>✔</td></tr></tbody></table><h4 id="_1-1-1-设备挂载" tabindex="-1"><a class="header-anchor" href="#_1-1-1-设备挂载"><span>1.1.1 设备挂载</span></a></h4><p>在挂载配置中可进行设备挂载，路径为宿主机设备路径和容器设备路径，只读开启代表<code>r</code>，关闭代表<code>rwm</code></p><figure><img src="'+r+'" alt="设备挂载" tabindex="0" loading="lazy"><figcaption>设备挂载</figcaption></figure><h4 id="_1-1-2-内外网地址模板" tabindex="-1"><a class="header-anchor" href="#_1-1-2-内外网地址模板"><span>1.1.2 内外网地址模板</span></a></h4><p>内外网地址支持模板格式，支持<code>PROTOCOL</code>、<code>HOST</code>、<code>PORT</code>参数。<code>PROTOCOL</code>、<code>HOST</code>为<code>iDocker</code>访问页地址的<code>protocol</code>和<code>host</code>。<code>PORT</code>为绑定给容器的第一个宿主机端口，可使用<code>PORTx</code>指定为第<code>x</code>个端口，例：<code>[PROTOCOL]//[HOST]:[PORT2]</code></p><h4 id="_1-1-3-路径提示" tabindex="-1"><a class="header-anchor" href="#_1-1-3-路径提示"><span>1.1.3 路径提示</span></a></h4><p>为方便创建容器时填写路径，<code>iDocker</code>针对宿主机已挂载到<code>iDocker</code>容器内的路径可以进行提示</p><figure><img src="'+a+'" alt="路径提示" tabindex="0" loading="lazy"><figcaption>路径提示</figcaption></figure><p>建议将所有容器的配置文件放到一个文件夹然后挂载到<code>iDocker</code>内，然后在【设置】-&gt;【docker设置】-&gt;【预填充路径】中将该文件夹的宿主机路径填入，这样每次在新增挂载时都会自动填入预填充路径，然后针对后续文件夹路径进行提示</p><p>同时在提示弹窗内还支持新建文件夹，在创建新容器时新建配置文件夹时会很方便</p><h3 id="_1-2-compose模式" tabindex="-1"><a class="header-anchor" href="#_1-2-compose模式"><span>1.2 <code>compose</code>模式</span></a></h3><p><code>compose</code>模式则是编辑<code>yaml</code>配置文件使用<code>docker compose</code>命令创建容器的模式.</p><p><code>Compose</code> 项目是 <code>Docker</code> 官方的开源项目，负责实现对 <code>Docker</code> 容器集群的快速编排。在日常开发工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 <code>Web</code> 项目，除了 <code>Web</code> 服务容器本身，往往还需要再加上后端的数据库服务容器；再比如在分布式应用一般包含若干个服务，每个服务一般都会部署多个实例。如果每个服务都要手动启停，那么效率之低、维护量之大可想而知。这时候就需要一个工具能够管理一组相关联的的应用容器，这就是<code>Docker Compose</code>.</p><figure><img src="'+i+'" alt="Compose" tabindex="0" loading="lazy"><figcaption>Compose</figcaption></figure><p><code>compose</code>模式支持<code>yaml</code>格式的配置，创建时可保存为模版，以便下次重新创建时复用</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于<code>compose</code>支持了更多基础模式和高级模式不支持的功能，所以只在基础模式和高级模式切换至<code>compose</code>模式时提示可将已填写数据转换成<code>compose</code>模式的配置，反向无法转换</p></div><p>对应<code>iDocker</code>的一些特有功能，例如图标、内外网地址，可通过给容器添加<code>label</code>的形式添加，具体<code>label</code>如下：</p><table><thead><tr><th>label</th><th>格式</th></tr></thead><tbody><tr><td>docker.idocker.icon</td><td>url|https://www.idocker.com/test.webp</td></tr><tr><td>docker.idocker.icon</td><td>svg|&lt;svg&gt;&lt;path d=&quot;M563.8 512l...512z&quot; /&gt;&lt;/svg&gt;</td></tr><tr><td>docker.idocker.localUrl</td><td>http://192.168.0.2:18080</td></tr><tr><td>docker.idocker.internetUrl</td><td>https://www.idocker.com:18080</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">本地图片图标</p><p>对于<code>compose</code>模式想使用本地图片作为图片，可先在普通模式上传图片后，点击预览图标然后在右键获取图片地址，然后填入<code>compose</code>模式的<code>label</code>：<code>docker.idocker.icon</code>中，<mark>注意：如果想内外网都能显示该图片，需将图片在外网地址下进行上传</mark></p></div><h2 id="二、管理容器" tabindex="-1"><a class="header-anchor" href="#二、管理容器"><span>二、管理容器</span></a></h2><p>容器列表页展示了所有已创建的容器，在列表页可对容器进行管理，在操作列现支持查看详情、查看日志、终端、编辑、启动、暂停、恢复、重启、停止、删除等操作</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>出于稳定性考虑，对于<code>iDocker</code>本身，只支持查看详情、日志、终端操作。对于非使用<code>iDocker</code>普通模式和高级模式创建的容器，不支持编辑操作。<code>compose</code>模式创建的容器不支持编辑，建议保存模版，后续通过删除容器使用模版并修改重新创建</p></div><h3 id="_2-1-检查更新" tabindex="-1"><a class="header-anchor" href="#_2-1-检查更新"><span>2.1 检查更新</span></a></h3><p>检查更新会拉取容器<code>tag</code>的最新镜像，判断当前镜像是否为最新，如果不是最新，则在操作列显示更新按钮，检查过程耗时较长，为后台进行，视容器数量可稍等几分钟再查看是否需要更新</p><p>点击更新按钮时会使用相同配置重新创建容器</p>',34),s=[p];function l(h,m){return e(),d("div",null,s)}const _=t(n,[["render",l],["__file","container.html.vue"]]),f=JSON.parse('{"path":"/guide/container.html","title":"容器","lang":"zh-CN","frontmatter":{"order":3,"description":"容器 一、创建容器 iDocker 在PC下有三种模式创建容器，分为基础模式、高级模式、compose模式。在移动端只有基础模式 创建容器模式创建容器模式 1.1 基础模式、高级模式 基础模式适合对docker不是很了解的用户，它相比高级模式隐藏了一些不必要的设置项，适合创建一些只需要挂载路径和映射端口的简单容器，减少不必要的选项避免误操作。 高级模式...","head":[["meta",{"property":"og:url","content":"https://idocker.fzq.info/idocker-docs/guide/container.html"}],["meta",{"property":"og:site_name","content":"iDocker"}],["meta",{"property":"og:title","content":"容器"}],["meta",{"property":"og:description","content":"容器 一、创建容器 iDocker 在PC下有三种模式创建容器，分为基础模式、高级模式、compose模式。在移动端只有基础模式 创建容器模式创建容器模式 1.1 基础模式、高级模式 基础模式适合对docker不是很了解的用户，它相比高级模式隐藏了一些不必要的设置项，适合创建一些只需要挂载路径和映射端口的简单容器，减少不必要的选项避免误操作。 高级模式..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T12:32:40.000Z"}],["meta",{"property":"article:author","content":"evan"}],["meta",{"property":"article:modified_time","content":"2024-03-21T12:32:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"容器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-21T12:32:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"evan\\"}]}"]]},"headers":[{"level":2,"title":"一、创建容器","slug":"一、创建容器","link":"#一、创建容器","children":[{"level":3,"title":"1.1 基础模式、高级模式","slug":"_1-1-基础模式、高级模式","link":"#_1-1-基础模式、高级模式","children":[]},{"level":3,"title":"1.2 compose模式","slug":"_1-2-compose模式","link":"#_1-2-compose模式","children":[]}]},{"level":2,"title":"二、管理容器","slug":"二、管理容器","link":"#二、管理容器","children":[{"level":3,"title":"2.1 检查更新","slug":"_2-1-检查更新","link":"#_2-1-检查更新","children":[]}]}],"git":{"createdTime":1710684753000,"updatedTime":1711024360000,"contributors":[{"name":"evan.feng","email":"evan.feng@temu.com","commits":4}]},"readingTime":{"minutes":4.49,"words":1348},"filePathRelative":"guide/container.md","localizedDate":"2024年3月17日","autoDesc":true}');export{_ as comp,f as data};
