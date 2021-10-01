<br>
<br>
<br>

<div align="center">
<img src="https://raw.githubusercontent.com/soroushchehresa/github-readme-linkedin/master/linkedin-github.png" width="150" />

# GitHub Readme LinkedIn
A serverless application to get dynamically generated images from your LinkedIn profile on your GitHub READMEs!

</div>

<br>
<br>

## Usage
If you want to use this project on your GitHub profile, I recommend you [fork and deploy it to your own Vercel instance](https://github.com/soroushchehresa/github-readme-linkedin/#deploy-your-own) and use this project from your own URLs.

<br>

## Example
```MD
<img src="[YOUR_VERCEL_PROJECT_DOMAIN]/[METHOD]?username=[YOUR_LINKEDIN_USERNAME]" />
```

<br>

## Methods

|    URL    |                   Example                   |        Description         |
| ---------- | ------------------------------------------- | -------------------------- |
| `/experience` | `[YOUR_DOMAIN]/experience?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn experience section. |
| `/education` | `[YOUR_DOMAIN]/education?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn education section. |
| `/skills` | `[YOUR_DOMAIN]/skills?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn skills section. |
| `/languages` | `[YOUR_DOMAIN]/languages?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn languages section. |
| `/user` | `[YOUR_DOMAIN]/user?username=[YOUR_LINKEDIN_USERNAME]` | Your Fullname, Headline and Location. |

<br>

## Parameters
|    Name    |                   Example                   |        Description         |  Required |
| ---------- | ------------------------------------------- | -------------------------- | --------- |
| username   | ?username=[YOUR_LINKEDIN_USERNAME]          | Your LinkedIn username.    | YES       |
| limit      | ?username=[YOUR_LINKEDIN_USERNAME]&limit=10 | Count of the lists items.  | NO        |

<br>

## Deploy your own
You can deploy and use this project without any errors on your own [Vercel](https://vercel.com) instance by the following steps:
<details>
 <summary><b>Guide on setting up Vercel 🔨 </b></summary>
 
 1. Go to [vercel.com](https://vercel.com)
 1. Click on `Login`  
   ![](https://files.catbox.moe/tct1wg.png)
 1. Sign in with GitHub by pressing `Continue with GitHub`  
   ![](https://files.catbox.moe/btd78j.jpeg)
 1. Sign into GitHub and allow access to all repositories, if prompted
 1. Fork this repo
 1. Go back to your [Vercel dashboard](https://vercel.com/dashboard)
 1. Select `Import Project`  
   ![](https://i.imgur.com/yzVClIY.png)
 1. Select `Import a Git Repository`  
   ![](https://i.imgur.com/8E96p4U.png)
 1. Select root and keep everything as is, just place your LinkedIn cookie called `li_at` as your environment variable named `LINKEDIN_TOKEN` and click `Deploy`
   ![](https://i.imgur.com/ngBYKat.png)
 1. You're good to go. See your domains to use the API!
</details>

<br>

## Technologies
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Node.js](https://github.com/nodejs/node)
- [Express.js](https://github.com/expressjs/express)
- [Serverless](https://vercel.com)
