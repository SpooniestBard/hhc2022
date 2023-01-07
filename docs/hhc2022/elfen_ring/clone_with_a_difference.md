---
sidebar_position: 1
---
# Clone with a Difference

### Challenge
:::info Challenge Text
*Difficulty:* ★✰✰✰✰

Clone a code repository. Get hints for this challenge from Bow Ninecandle in the Elfen Ring.
:::


### Answers


:::note Terminal Question Prompt
We just need you to clone one repo: git clone git@haugfactory.com:asnowball/aws_scripts.git 
This should be easy, right?

Thing is: it doesn't seem to be working for me. This is a public repository though. I'm so confused!

Please clone the repo and cat the README.md file.
Then runtoanswer and tell us the last word of the README.md file!
:::









This challenge instructs us to clone the repository ```git@haugfactory.com:asnowball/aws_scripts.git```. Unfortunately, since this is the SSH URL for this repository, this would require us to have an account on the Git server: haugfactory.com.

However, this is a public repository, so we can just use the HTTP URL to clone it. It's easy enough to infer from the SSH URL, but if we wanted to double check, we could always look at the [Gitlab page for the repo](https://haugfactory.com/orcadmin/aws_scripts).

<details>
<summary>Answer: <code>git clone https://haugfactory.com/aws_scripts.git</code></summary>



```bash
bow@be60c9676c7e:~$ git clone https://haugfactory.com/aws_scripts.git
Cloning into 'aws_scripts'...
Username for 'https://haugfactory.com': ^C
bow@be60c9676c7e:~$ git clone https://haugfactory.com/asnowball/aws_scripts.git
Cloning into 'aws_scripts'...
remote: Enumerating objects: 64, done.
remote: Total 64 (delta 0), reused 0 (delta 0), pack-reused 64
Unpacking objects: 100% (64/64), 23.83 KiB | 1.32 MiB/s, done.
```

</details>

<details>
<summary>Answer: <code>maintainers</code></summary>

Once we have the readme, we can ```cat``` it to discover that the last word of the file is **```maintainers```**.

</details>
