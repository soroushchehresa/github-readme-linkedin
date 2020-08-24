<div align="center">

<br>
<img src="https://raw.githubusercontent.com/soroushchehresa/github-readme-linkedin/master/linkedin-github.png" width="150" />

# GitHub Readme LinkedIn
Get dynamically generated images from your LinkedIn profile on your GitHub READMEs!

</div>

<br>

## Demo
[Example profile README](https://github.com/ssoroushhh)

## Recommendation
If you want to use this project on your GitHub profile, I recommend you [fork and deploy it to your own Vercel instance](https://github.com/soroushchehresa/github-readme-linkedin/#Deploy) and use this project from your personal URLs because [`github-readme-linkedin.vercel.app`](https://github-readme-linkedin.vercel.app) hosted on [Vercel](https://vercel.com) free plan and used by many people, therefore it could be break at any time!

Check out [this issue](https://github.com/soroushchehresa/github-readme-linkedin/issues/1) for more information...

## Usage
```MD
<img src="https://github-readme-linkedin.vercel.app/[METHOD]?username=[YOUR_LINKEDIN_USERNAME]" />
```

## Methods

**APP_URL = [https://github-readme-linkedin.vercel.app](https://github-readme-linkedin.vercel.app)**

|    URL    |                   Example                   |        Description         |
| ---------- | ------------------------------------------- | -------------------------- |
| `/experience` | `[APP_URL]/experience?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn experience section. |
| `/education` | `[APP_URL]/education?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn education section. |
| `/skills` | `[APP_URL]/skills?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn skills section. |
| `/languages` | `[APP_URL]/languages?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn languages section. |
| `/user` | `[APP_URL]/user?username=[YOUR_LINKEDIN_USERNAME]` | Your Fullname, Headline and Location. |


## Parameters
|    Name    |                   Example                   |        Description         |  Required |
| ---------- | ------------------------------------------- | -------------------------- | --------- |
| username   | ?username=[YOUR_LINKEDIN_USERNAME]          | Your LinkedIn username.    | YES       |
| limit      | ?username=[YOUR_LINKEDIN_USERNAME]&limit=10 | Count of the lists items.  | NO        |

## Deploy
You can deploy and use this project without any errors on your own [Vercel](https://vercel.com) instance by the following steps:
<details>
 <summary><b>Steps  🔨 </b></summary>
 
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

## Technologies
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Node.js](https://github.com/nodejs/node)
- [Express.js](https://github.com/expressjs/express)
- [Serverless](https://vercel.com)

<br>

![https://vercel.com](https://res.cloudinary.com/anuraghazra/image/upload/v1597827714/powered-by-vercel_1_ug4uro.svg)

**Contributions are welcomed!**

**Made with :heart: and TypeScript.**
