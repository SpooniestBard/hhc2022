"use strict";(self.webpackChunkhhc_2022=self.webpackChunkhhc_2022||[]).push([[410],{5090:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(7294);function n(e){let{children:t,answer:a}=e;return i.createElement("details",{class:"details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module"},i.createElement("summary",null,"Answer: ",a),i.createElement("p",null,t))}},3862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=a(7462),n=(a(7294),a(3905)),o=(a(5090),a(814));const s={sidebar_position:3},r="Suricata Regata",l={unversionedId:"hhc2022/tolkien_ring/suricata_regata",id:"hhc2022/tolkien_ring/suricata_regata",title:"Suricata Regata",description:"Suricata",source:"@site/docs/hhc2022/tolkien_ring/suricata_regata.md",sourceDirName:"hhc2022/tolkien_ring",slug:"/hhc2022/tolkien_ring/suricata_regata",permalink:"/docs/hhc2022/tolkien_ring/suricata_regata",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Windows Event Logs",permalink:"/docs/hhc2022/tolkien_ring/windows_event_logs"},next:{title:"The Elfen Ring",permalink:"/docs/hhc2022/elfen_ring/"}},c={},d=[{value:"Suricata",id:"suricata",level:3},{value:"The Rule Format",id:"the-rule-format",level:3},{value:"Question 1",id:"question-1",level:3},{value:"Question 2",id:"question-2",level:3},{value:"Question 3",id:"question-3",level:3},{value:"Question 4",id:"question-4",level:3},{value:"Aftermath",id:"aftermath",level:3}],u={toc:d};function h(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"suricata-regata"},"Suricata Regata"),(0,n.kt)("h3",{id:"suricata"},"Suricata"),(0,n.kt)("p",null,"Suricata is an open-source intrusion detection system (IDS) and intrusion prevention system (IPS). Despite its age, neither of us had used it before working on this challenge."),(0,n.kt)("h3",{id:"the-rule-format"},"The Rule Format"),(0,n.kt)("p",null,"This challenge tasked us with creating custom Suricata rules to detect the Dridex malware that we interacted with in ",(0,n.kt)("a",{parentName:"p",href:"/docs/hhc2022/tolkien_ring/wireshark_practice"},"Wireshark Practice"),". Because of this, a brief summary of the Suricata rule format is helpful to spare you from reading the ",(0,n.kt)("a",{parentName:"p",href:"https://suricata.readthedocs.io/en/suricata-6.0.0/rules/intro.html"},"docs")," like we had to."),(0,n.kt)("p",null,"A Suricata rule consists of three parts, in this order:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The action performed if the rule is matched. There are a handful of valid actions, such as alert, drop, reject, etc., but since we are specifically interested in creating alerts in this challenge, the verb we will use is ",(0,n.kt)("inlineCode",{parentName:"li"},"alert")),(0,n.kt)("li",{parentName:"ol"},'A "header", which specifies which IP addresses this rule applies to (source, source port, destination, and destination port, both of which can be ranges or sets), the protocol to examine (tcp, dns, smb, tls, etc.), and the direction of the traffic to examine (either one way or bi-directional)'),(0,n.kt)("li",{parentName:"ol"},"The rule options - generally the longest and most complicated section of the rule. These options can allow the filter to be customized extensively depending on the protocol examined. For instance, when examining TLS traffic, rule options can be specified which filter for specific certificate subject names (no spoilers though \ud83e\udd2b)")),(0,n.kt)("h3",{id:"question-1"},"Question 1"),(0,n.kt)("admonition",{title:"Question 1",type:"note"},(0,n.kt)("p",{parentName:"admonition"},'Please create a Suricata rule to catch the DNS lookups for adv.epostoday.uk. Whenever there\'s a match, the alert message (msg) should read "Known bad DNS lookup, possible Dridex infection".')),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Answer:"),(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},'alert dns any any -> any any (msg:"Known bad DNS lookup, possible Dridex infection"; dns.query; content:"adv.epostoday.uk"; nocase; sid: 0001;)')),(0,n.kt)("p",null,"Beginning with a fairly easy rule: we'd like to alert on DNS traffic to the malicious endpoint encountered earlier. In order to match specific DNS queries, we need to add the ",(0,n.kt)("code",null,"dns.query")," keyword, which modifies all following ",(0,n.kt)("code",null,"content")," keywords to match the DNS query itself. We then add a plain ",(0,n.kt)("code",null,"content"),' match of "adv.epostoday.uk" to filter for DNS queries with match the malicious endpoint.')),(0,n.kt)("h3",{id:"question-2"},"Question 2"),(0,n.kt)("admonition",{title:"Question 2",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Develop a Suricata rule that alerts whenever the infected IP address ",(0,n.kt)("inlineCode",{parentName:"p"},"192.185.57.242")," communicates with internal systems over HTTP. When there's a match, the message (msg) should read ",(0,n.kt)("inlineCode",{parentName:"p"},"Investigate suspicious connections, possible Dridex infection"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Answer:"),(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},'alert http 192.185.57.242 any <> any any (msg:"Investigate suspicious connections, possible Dridex infection"; sid: 0002;)')),(0,n.kt)("p",null,"Next, we are asked to alert when a known infected IP address on our end (192.185.57.242) communicates with any external systems over HTTP. The rule itself is fairly self-explanatory: we alert on any http traffic to or from the specified IP address (using the <> direction specifier) towards any other IP on any port.")),(0,n.kt)("h3",{id:"question-3"},"Question 3"),(0,n.kt)("admonition",{title:"Question 3",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We heard that some naughty actors are using TLS certificates with a specific ",(0,n.kt)("inlineCode",{parentName:"p"},"CN"),". Develop a Suricata rule to alert and match on an SSL certificate for ",(0,n.kt)("inlineCode",{parentName:"p"},"heardbellith.Icanwepeh.nagoya"),". When your rule matches, the message (msg) should read ",(0,n.kt)("inlineCode",{parentName:"p"},"Investigate bad certificates, possible Dridex infection"),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Answer:"),(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},'alert tls any any <> any any (msg:"Investigate bad certificates, possible Dridex infection"; tls.cert_subject; content:"heardbellith.Icanwepeh.nagoya"; sid: 0003;)')),(0,n.kt)("p",null,"Now we want to alert when receiving traffic containing specific TLS certificate CN. For this, we use the ",(0,n.kt)("code",null,"tls")," protocol, and set the source and destination as any IP and any port. Since we need to match on a specific CN, we provide the ",(0,n.kt)("code",null,"tls.cert_subject")," keyword, much like the DNS query rule we created earlier. This keyword modifies following ",(0,n.kt)("code",null,"content")," fields to apply to (unsurprisingly) the TLS certificates subject, so we add the ",(0,n.kt)("code",null,"content")," field afterwards to match our target.")),(0,n.kt)("h3",{id:"question-4"},"Question 4"),(0,n.kt)("admonition",{title:"Question 4",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Okay, one more to rule them all and in the darkness find them. Let's watch for one line from the JavaScript: ",(0,n.kt)("inlineCode",{parentName:"p"},"let byteCharacters = atob"),". Oh, and that string might be Gzip compressed - I hope that's OK! Just in case they try this again, please alert on HTTP data with the message ",(0,n.kt)("inlineCode",{parentName:"p"},"Suspicious JavaScript function, possible Dridex infection"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Answer:"),(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},'alert http any any <> any any (msg:"Suspicious JavaScript function, possible Dridex infection"; file_data; content: "let byteCharacters = atob"; sid: 0004;)')),(0,n.kt)("p",null,"Finally, we need to alert on a specific JavaScript function. Again we use our bi-directional any/any header, but this time we set the protocol to ",(0,n.kt)("code",null,"http"),". In order to match on HTTP content, we use the ",(0,n.kt)("code",null,"file_data")," modifier keyword. Like the other protocol keywords we've used, this one modifies following content fields to apply to the contents of matched HTTP documents. Although the question warns us that the content might be Gzip compressed, the ",(0,n.kt)("code",null,"file_data")," keyword matches on decompressed data by default, so this doesn't complicate our answer.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"aftermath"},"Aftermath"),(0,n.kt)("p",null,"Once we've finished creating the Suricata rules, we can run ",(0,n.kt)("inlineCode",{parentName:"p"},"./rule_checker")," in order to verify them and confirm that they work. After that, we can talk to Fitzy Shortstack to banish the Snowrog for good!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Snowrog banished, the day saved",src:a(6947).Z,width:"2122",height:"1226"})))}h.isMDXComponent=!0},6947:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tr-final-0a88ee517f7ed6ec120f6e40f1ec0b0b.png"}}]);