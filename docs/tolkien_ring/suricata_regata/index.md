---
sidebar_position: 3
---
# Suricata Regata

:::note Question 1
Please create a Suricata rule to catch the DNS lookups for adv.epostoday.uk. Whenever there's a match, the alert message (msg) should read "Known bad DNS lookup, possible Dridex infection".
:::
:::info Answer: ```alert dns any any -> any any (msg:"Known bad DNS lookup, possible Dridex infection"; dns.query; content:"adv.epostoday.uk"; nocase; sid: 0001;)```
:::

:::note Question 2
Develop a Suricata rule that alerts whenever the infected IP address ```192.185.57.242``` communicates with internal systems over HTTP. When there's a match, the message (msg) should read ```Investigate suspicious connections, possible Dridex infection```.
:::
:::info Answer: ```alert http 192.185.57.242 any <> any any (msg:"Investigate suspicious connections, possible Dridex infection"; sid: 0002;)```
:::

:::note Question 3
We heard that some naughty actors are using TLS certificates with a specific ```CN```. Develop a Suricata rule to alert and match on an SSL certificate for ```heardbellith.Icanwepeh.nagoya```. When your rule matches, the message (msg) should read ```Investigate bad certificates, possible Dridex infection```.
:::
:::info Answer: ```alert tls any any <> any any (msg:"Investigate bad certificates, possible Dridex infection"; tls..cert_subject; content:"heardbellith.Icanwepeh.nagoya"; sid: 0003;)```
:::

:::note Question 4
Okay, one more to rule them all and in the darkness find them. Let's watch for one line from the JavaScript: ```let byteCharacters = atob```. Oh, and that string might be Gzip compressed - I hope that's OK! Just in case they try this again, please alert on HTTP data with the message ```Suspicious JavaScript function, possible Dridex infection```
:::
:::info Answer: ```alert http any any <> any any (msg:"Suspicious JavaScript function, possible Dridex infection"; file_data; content: "let byteCharacters = atob"; sid: 0004;)```
:::


After we've finished creating the Suricata rules, we can talk to Fitzy Shortstack to banish the Snowrog for good!

![The Snowrog banished, the day saved](../assets/img/tr-final.png)