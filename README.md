<div align="center">

<br>
<img src="https://raw.githubusercontent.com/soroushchehresa/github-readme-linkedin/master/linkedin-github.png" width="150" />

# GitHub Readme LinkedIn
Get dynamically generated images from your LinkedIn profile on your GitHub READMEs!

</div>

<br>

## Example
#### [Profile README](https://github.com/ssoroushhh)

## Usage
```MD
<img src="https://github-readme-linkedin.vercel.app/[METHOD]?username=[YOUR_LINKEDIN_USERNAME]" />
```

## Methods

**APP_URL = `https://github-readme-linkedin.vercel.app`**

|    URL    |                   Example                   |        Description         |
| ---------- | ------------------------------------------- | -------------------------- |
| `/experience` | `[APP_URL]/experience?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn experience section. |
| `/education` | `[APP_URL]/education?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn education section. |
| `/skills` | `[APP_URL]/skills?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn skills section. |
| `/languages` | `[APP_URL]/languages?username=[YOUR_LINKEDIN_USERNAME]` | Your LinkedIn languages section. |
| `/user` | `[APP_URL]/user?username=[YOUR_LINKEDIN_USERNAME]` | Your fullname, headline and location. |


## Parameters
|    Name    |                   Example                   |        Description         |  Required |
| ---------- | ------------------------------------------- | -------------------------- | --------- |
| username   | ?username=[YOUR_LINKEDIN_USERNAME]          | Your LinkedIn username.    | YES       |
| limit      | ?username=[YOUR_LINKEDIN_USERNAME]&limit=10 | Count of the lists items.  | NO        |

## Let's run
#### Development
```bash
yarn && yarn dev
```
#### Production
```bash
yarn && yarn build && yarn start
```

## Data scraper
[github-readme-linkedin-scraper](https://github.com/soroushchehresa/github-readme-linkedin-scraper)

## Technologies
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Node.js](https://github.com/nodejs/node)
- [Express.js](https://github.com/expressjs/express)
- [Serverless](https://vercel.com)

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/soroushchehresa/github-readme-linkedin)
