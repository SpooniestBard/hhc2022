---
sidebar_position: 3
---
# Trufflehog Search

### Challenge
:::info Challenge Text
*Difficulty:* ★★✰✰✰

Use Trufflehog to find secrets in a Git repo. Work with Jill Underpole in the Cloud Ring for hints. What's the name of the file that has AWS credentials?
:::

### Answer

:::note Question 1
Use Trufflehog to find credentials in the Gitlab instance at https://haugfactory.com/asnowball/aws_scripts.git.
:::

<details>
<summary>Answer 1: <code>trufflehog git https://haugfactory.com/asnowball/aws_scripts.git</code></summary>
We get the following results from the trufflehog command:

![results from trufflehog search](./assets/img/cr2-1.png)


We can see three results. Two of them are changes to the README.md file, but the first one seems interesting so we check to see what was added in that commit. note: you can just enter the commit id in the "search GitLab" box to quickly pull up what was changed. 


![results from searching commit id 106d33e1ffd53eea753c1365eafc6588398279b5](./assets/img/cr2-2.png)

We can see ```aws_access_key_id: AKIAAIDAYRANYAHGQOHD``` and ```aws_secret_access_key: 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```.
</details>


:::note Question 2
Configure the credentials you found with trufflehog for us-east-1 and then run ```aws sts get-caller-identity```
:::

<details>
<summary>Answer 2: <code>aws configure then aws sts get-caller-identity</code></summary>

We paste the credentials when prompted

![using aws configure to add the credentials found from the trufflehog search](./assets/img/cr2-3.png)

Then we can run ```aws sts get-caller-identity```

![results of aws sts get-caller-identity](./assets/img/cr2-4.png)

</details>