---
sidebar_position: 2
---
# Windows Event Logs

### Challenge
:::info Challenge Text
*Difficulty:* ★★✰✰✰

Investigate the Windows event log mystery in the terminal or offline. Get hints for this challenge by typing hint in the upper panel of the Windows Event Logs terminal.
:::

### Answers

:::note Terminal Question Prompt 1
What month/day/year did the attack take place? For example, 09/05/2021.
:::

<details>
<summary>Answer: <code>12/24/2022</code></summary>
</details>



:::note Terminal Question Prompt 2
An attacker got a secret from a file. What was the original file's name?
:::

<details>
<summary>Answer: <code>Recipe.txt</code></summary>
</details>


:::note Terminal Question Prompt 3
The contents of the previous file were retrieved, changed, and stored to a variable by the attacker. This was done multiple times. Submit the last full PowerShell line that performed only these actions.
:::

<details>
<summary>Answer:

```$foo = Get-Content .\Recipe| % {$_ -replace 'honey', 'fish oil'} $foo | Add-Content -Path 'recipe_updated.txt'```
</summary>
</details>



:::note Terminal Question Prompt 4
After storing the altered file contents into the variable, the attacker used the variable to run a separate command that wrote the modified data to a file. This was done multiple times. Submit the last full PowerShell line that performed only this action.
:::


<details>
<summary>Answer: 

```$foo | Add-Content -Path 'Recipe'```

</summary>
</details>




:::note Terminal Question Prompt 5
The attacker ran the previous command against one file multiple times. What is the name of this file?
:::

<details>
<summary>Answer: <code>Recipe.txt</code></summary>
</details>



:::note Terminal Question Prompt 6
Were any files deleted? (yes/no)
:::

<details>
<summary>Answer: <code>Yes</code></summary>
</details>



:::note Terminal Question Prompt 7
Was the original file (from question 2) deleted (Yes/No)
:::

<details>
<summary>Answer: <code>No</code></summary>
</details>



:::note Terminal Question Prompt 8
What is the Event ID of the logs that show the actual command lines the attacker typed and ran?
:::


<details>
<summary>Answer: <code>4104</code></summary>
</details>



:::note Terminal Question Prompt 9
Is the secret ingrediant compromised (Yes/No)?
:::


<details>
<summary>Answer: <code>Yes</code></summary>
</details>



:::note Terminal Question Prompt 10
What is the secret ingrediant?
:::

<details>
<summary>Answer: <code>Honey</code></summary>
</details>