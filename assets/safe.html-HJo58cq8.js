import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as n,c as a,a as e,b as t,d,e as r}from"./app-madcDHCB.js";const s="/idocker-docs/assets/https-error-BSuAJh3F.png",p="/idocker-docs/assets/2facode-CTIBZqeG.png",l={},h=e("h1",{id:"安全",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安全"},[e("span",null,"安全")])],-1),g=e("h2",{id:"一、https",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、https"},[e("span",null,"一、https")])],-1),_=e("code",null,"iDocker",-1),u=e("code",null,"https",-1),m={href:"https://www.zhihu.com/question/620860158",target:"_blank",rel:"noopener noreferrer"},v=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>iDocker</code>在登录时会对密码进行含盐加密后再传到后台服务，可一定程度上降低密码泄露的风险，但由于加密逻辑在网页上，仍可以分析出加密方式导致密码泄露</p></div><p>可直接通过<code>3543</code>端口访问<code>iDocker</code>的<code>https</code>服务，也可在服务器上部署<code>nginx</code>实现<code>https</code>访问，然后转发<code>http</code>请求到<code>iDocker</code>的<code>3580</code>端口</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>iDocker</code>默认<code>https</code>证书为自签名证书，浏览器会提示警告，如下图：</p><figure><img src="'+s+`" alt="Https Error" tabindex="0" loading="lazy"><figcaption>Https Error</figcaption></figure><p>可点击【高级】按钮继续访问。</p></div><h3 id="_1-1-更换证书" tabindex="-1"><a class="header-anchor" href="#_1-1-更换证书"><span>1.1 更换证书</span></a></h3><p>如果用户有<code>CA</code>机构签名的证书，可以将<code>iDocker</code>默认的自签名证书修改为<code>CA</code>证书</p><p><code>iDocker</code>默认证书保存在<code>/docker/idocker/ssl</code>（容器内路径）文件下</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请将<code>CA</code>证书的<code>key</code>文件名修改为默认的<code>idocker.key</code>，密钥文件修改为默认的<code>idocker.pem</code>，否则，服务将无法启动</p></div><h2 id="二、异常登录通知" tabindex="-1"><a class="header-anchor" href="#二、异常登录通知"><span>二、异常登录通知</span></a></h2><p>在【设置】-&gt;【通知】-&gt;【通知发件箱】配置好通知发件箱后，如果密码登录失败超过尝试次数或者成功在新设备登录，则会发送邮件进行提醒。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>后续将增加<code>IP</code>黑白名单机制</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果使用了<code>nginx</code>进行反向代理，可在转发路径增加下面请求头，这样<code>iDocker</code>才能拿到真实的用户<code>IP</code>和建立socket链接，以便进行流量控制和<code>IP</code>封禁和链接终端</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  location / {
    ...
    proxy_set_header Host $host;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection &quot;upgrade&quot;;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="三、二次验证-2fa" tabindex="-1"><a class="header-anchor" href="#三、二次验证-2fa"><span>三、二次验证（2FA）</span></a></h2><p>为保障<code>iDocker</code>的账户安全，<code>iDocker</code>支持二次验证功能</p><p>开启二次验证功能后，当用户在新设备上进行登录操作时，除了输入账户密码外，还要求输入二次验证码</p><p>目前支持邮箱验证和App验证。</p><h3 id="_3-1-邮箱验证" tabindex="-1"><a class="header-anchor" href="#_3-1-邮箱验证"><span>3.1 邮箱验证</span></a></h3><p>在【设置】-&gt;【用户信息】-&gt;【用户安全】-&gt;【验证方式】选择【通知邮箱】后保存</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>邮箱验证需先设置通知邮箱才可启用，路径：【设置】-&gt;【通知】-&gt;【通知发件箱】</p></div><p>新设备登录弹出二次验证输入框时，<code>iDocker</code>会向通知发件箱发送二次验证码，<code>5</code>分钟内有效</p><h3 id="_3-2-app验证" tabindex="-1"><a class="header-anchor" href="#_3-2-app验证"><span>3.2 App验证</span></a></h3><p>在【设置】-&gt;【用户信息】-&gt;【用户安全】-&gt;【验证方式】选择【验证APP】后保存，然后使用验证<code>APP</code>（微软<code>Authenticator</code>、<code>Google Authenticator</code>等）扫描右侧二维码即可绑定成功。将验证<code>App</code>中的验证码填入输入框点击右侧的验证测试可进行正确性验证</p><figure><img src="`+p+'" alt="App验证" tabindex="0" loading="lazy"><figcaption>App验证</figcaption></figure><p>新设备登录弹出二次验证输入框时，打开验证<code>App</code>输入验证码即可登录，验证码<code>30</code>秒刷新一次</p><h2 id="四、流量控制" tabindex="-1"><a class="header-anchor" href="#四、流量控制"><span>四、流量控制</span></a></h2><p>为防止被恶意攻击导致服务崩溃，<code>iDocker</code>对服务、<code>IP</code>、接口进行了分级流量限制，当请求次数超过阈值时，会直接返回<code>429</code>错误同时提示【请求速度过快！，请稍后再试】</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>为防止暴力破解，对于登录接口严格限制：单个<code>IP</code>每<code>5</code>秒允许请求<code>2</code>两次。</p></div><p>目前暂不支持修改流量控制阈值，后续可能开放设置自定义阈值。</p><h2 id="五、数据安全" tabindex="-1"><a class="header-anchor" href="#五、数据安全"><span>五、数据安全</span></a></h2><p><code>iDocker</code>不会上传用户数据至其他服务器，所有数据均保存在<code>iDocker</code>所在服务器本地，不放心的可以进行抓包分析或者不使用该工具，</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>目前<code>iDocker</code>没有进行开源，未来是否开源待定，介意者勿用！</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>软件不会主动删除用户数据，因操作不当或者软件<code>bug</code>导致的数据丢失，作者不承担责任，请做好数据备份工作！</p></div><h2 id="六、声明" tabindex="-1"><a class="header-anchor" href="#六、声明"><span>六、声明</span></a></h2><div class="hint-container caution"><p class="hint-container-title">警告</p><p>软件仅用于交流、学习，方便管理自身服务器所用，不用用于发布任何非法的、违反国家规定的内容。</p><p>工具内的内容用户填写或上传，由用户对其提供并上传的所有信息承担相应法律责任</p></div>',33);function f(k,x){const o=i("ExternalLinkIcon");return n(),a("div",null,[h,g,e("p",null,[t("为防止页面在网络中明文传输遭到劫持攻击，从而泄露用户账户和密码，外网访问"),_,t("时应使用"),u,t("进行连接。 "),e("a",m,[t("什么是http劫持"),d(o)])]),v])}const y=c(l,[["render",f],["__file","safe.html.vue"]]),A=JSON.parse('{"path":"/guide/safe.html","title":"安全","lang":"zh-CN","frontmatter":{"order":7,"title":"安全","description":"安全 一、https 为防止页面在网络中明文传输遭到劫持攻击，从而泄露用户账户和密码，外网访问iDocker时应使用https进行连接。 什么是http劫持 注意 iDocker在登录时会对密码进行含盐加密后再传到后台服务，可一定程度上降低密码泄露的风险，但由于加密逻辑在网页上，仍可以分析出加密方式导致密码泄露 可直接通过3543端口访问iDocker...","head":[["meta",{"property":"og:url","content":"https://idocker.fzq.info/idocker-docs/guide/safe.html"}],["meta",{"property":"og:site_name","content":"iDocker"}],["meta",{"property":"og:title","content":"安全"}],["meta",{"property":"og:description","content":"安全 一、https 为防止页面在网络中明文传输遭到劫持攻击，从而泄露用户账户和密码，外网访问iDocker时应使用https进行连接。 什么是http劫持 注意 iDocker在登录时会对密码进行含盐加密后再传到后台服务，可一定程度上降低密码泄露的风险，但由于加密逻辑在网页上，仍可以分析出加密方式导致密码泄露 可直接通过3543端口访问iDocker..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-09T08:12:40.000Z"}],["meta",{"property":"article:author","content":"evan"}],["meta",{"property":"article:modified_time","content":"2024-07-09T08:12:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安全\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-09T08:12:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"evan\\"}]}"]]},"headers":[{"level":2,"title":"一、https","slug":"一、https","link":"#一、https","children":[{"level":3,"title":"1.1 更换证书","slug":"_1-1-更换证书","link":"#_1-1-更换证书","children":[]}]},{"level":2,"title":"二、异常登录通知","slug":"二、异常登录通知","link":"#二、异常登录通知","children":[]},{"level":2,"title":"三、二次验证（2FA）","slug":"三、二次验证-2fa","link":"#三、二次验证-2fa","children":[{"level":3,"title":"3.1 邮箱验证","slug":"_3-1-邮箱验证","link":"#_3-1-邮箱验证","children":[]},{"level":3,"title":"3.2 App验证","slug":"_3-2-app验证","link":"#_3-2-app验证","children":[]}]},{"level":2,"title":"四、流量控制","slug":"四、流量控制","link":"#四、流量控制","children":[]},{"level":2,"title":"五、数据安全","slug":"五、数据安全","link":"#五、数据安全","children":[]},{"level":2,"title":"六、声明","slug":"六、声明","link":"#六、声明","children":[]}],"git":{"createdTime":1710684753000,"updatedTime":1720512760000,"contributors":[{"name":"evan.feng","email":"evan.feng@temu.com","commits":4}]},"readingTime":{"minutes":3.64,"words":1092},"filePathRelative":"guide/safe.md","localizedDate":"2024年3月17日","autoDesc":true}');export{y as comp,A as data};
