---
sidebar_position: 3
---
# Suricata Regata

<!-- MDX imports -->
import Answer from '@site/src/components/Answer'
import CodeBlock from '@theme/CodeBlock';

<!-- Page content -->

### Suricata
Suricata is an open-source intrusion detection system (IDS) and intrusion prevention system (IPS). Despite its age, neither of us had used it before working on this challenge.

### The Rule Format
This challenge tasked us with creating custom Suricata rules to detect the Dridex malware that we interacted with in [Wireshark Practice](./wireshark_practice.md). Because of this, a brief summary of the Suricata rule format is helpful to spare you from reading the [docs](https://suricata.readthedocs.io/en/suricata-6.0.0/rules/intro.html) like we had to.

A Suricata rule consists of three parts, in this order:

1. The action performed if the rule is matched. There are a handful of valid actions, such as alert, drop, reject, etc., but since we are specifically interested in creating alerts in this challenge, the verb we will use is ```alert```
1. A "header", which specifies which IP addresses this rule applies to (source, source port, destination, and destination port, both of which can be ranges or sets), the protocol to examine (tcp, dns, smb, tls, etc.), and the direction of the traffic to examine (either one way or bi-directional)
1. The rule options - generally the longest and most complicated section of the rule. These options can allow the filter to be customized extensively depending on the protocol examined. For instance, when examining TLS traffic, rule options can be specified which filter for specific certificate subject names (no spoilers though 🤫)


### Question 1
:::note Question 1
Please create a Suricata rule to catch the DNS lookups for adv.epostoday.uk. Whenever there's a match, the alert message (msg) should read "Known bad DNS lookup, possible Dridex infection".
:::
<details>
<summary><b>Answer:</b>
<CodeBlock language="bash">alert dns any any -> any any (msg:"Known bad DNS lookup, possible Dridex infection"; dns.query; content:"adv.epostoday.uk"; nocase; sid: 0001;)</CodeBlock>
</summary>
<p>
Beginning with a fairly easy rule: we'd like to alert on DNS traffic to the malicious endpoint encountered earlier. In order to match specific DNS queries, we need to add the <code>dns.query</code> keyword, which modifies all following <code>content</code> keywords to match the DNS query itself. We then add a plain <code>content</code> match of "adv.epostoday.uk" to filter for DNS queries with match the malicious endpoint.
</p>
</details>

### Question 2
:::note Question 2
Develop a Suricata rule that alerts whenever the infected IP address ```192.185.57.242``` communicates with internal systems over HTTP. When there's a match, the message (msg) should read ```Investigate suspicious connections, possible Dridex infection```.
:::

<details>
<summary><b>Answer:</b>
<CodeBlock language="bash">alert http 192.185.57.242 any &lt;&gt; any any (msg:"Investigate suspicious connections, possible Dridex infection"; sid: 0002;)</CodeBlock>
</summary>
<p>
Next, we are asked to alert when a known infected IP address on our end (192.185.57.242) communicates with any external systems over HTTP. The rule itself is fairly self-explanatory: we alert on any http traffic to or from the specified IP address (using the &lt;&gt; direction specifier) towards any other IP on any port.
</p>
</details>

### Question 3
:::note Question 3
We heard that some naughty actors are using TLS certificates with a specific ```CN```. Develop a Suricata rule to alert and match on an SSL certificate for ```heardbellith.Icanwepeh.nagoya```. When your rule matches, the message (msg) should read ```Investigate bad certificates, possible Dridex infection```.
:::

<details>
<summary><b>Answer:</b>
<CodeBlock language="bash">alert tls any any &lt;&gt; any any (msg:"Investigate bad certificates, possible Dridex infection"; tls.cert_subject; content:"heardbellith.Icanwepeh.nagoya"; sid: 0003;)</CodeBlock>
</summary>
<p>
Now we want to alert when receiving traffic containing specific TLS certificate CN. For this, we use the <code>tls</code> protocol, and set the source and destination as any IP and any port. Since we need to match on a specific CN, we provide the <code>tls.cert_subject</code> keyword, much like the DNS query rule we created earlier. This keyword modifies following <code>content</code> fields to apply to (unsurprisingly) the TLS certificates subject, so we add the <code>content</code> field afterwards to match our target.
</p>
</details>

### Question 4
:::note Question 4
Okay, one more to rule them all and in the darkness find them. Let's watch for one line from the JavaScript: ```let byteCharacters = atob```. Oh, and that string might be Gzip compressed - I hope that's OK! Just in case they try this again, please alert on HTTP data with the message ```Suspicious JavaScript function, possible Dridex infection```
:::

<details>
<summary><b>Answer:</b>
<CodeBlock language="bash">alert http any any &lt;&gt; any any (msg:"Suspicious JavaScript function, possible Dridex infection"; file_data; content: "let byteCharacters = atob"; sid: 0004;)</CodeBlock>
</summary>
<p>
Finally, we need to alert on a specific JavaScript function. Again we use our bi-directional any/any header, but this time we set the protocol to <code>http</code>. In order to match on HTTP content, we use the <code>file_data</code> modifier keyword. Like the other protocol keywords we've used, this one modifies following content fields to apply to the contents of matched HTTP documents. Although the question warns us that the content might be Gzip compressed, the <code>file_data</code> keyword matches on decompressed data by default, so this doesn't complicate our answer.
</p>
</details>

---
### Aftermath

Once we've finished creating the Suricata rules, we can run ```./rule_checker``` in order to verify them and confirm that they work. After that, we can talk to Fitzy Shortstack to banish the Snowrog for good!

![The Snowrog banished, the day saved](./assets/img/tr-final.png)