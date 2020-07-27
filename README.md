<div align="center">

<br>
<img src="https://raw.githubusercontent.com/soroushchehresa/github-readme-linkedin/master/linkedin-github.png" width="150" />

# GitHub Readme LinkedIn
Get dynamically generated images from your LinkedIn profile on your GitHub readmes!

</div>

<br>

## Example
#### [Example.md](/Example.md)

## Usage
```MD
<img src="https://github-readme-linkedin.vercel.app/METHOD?username=YOUR_LINKEDIN_USERNAME" />
```

## Methods

#### `/experience`
```MD
https://github-readme-linkedin.vercel.app/experience?username=YOUR_LINKEDIN_USERNAME
```
#### `/education`
```MD
https://github-readme-linkedin.vercel.app/education?username=YOUR_LINKEDIN_USERNAME
```
#### `/skills`
```MD
https://github-readme-linkedin.vercel.app/skills?username=YOUR_LINKEDIN_USERNAME
```
#### `/languages`
```MD
https://github-readme-linkedin.vercel.app/languages?username=YOUR_LINKEDIN_USERNAME
```
#### `/user`
```MD
https://github-readme-linkedin.vercel.app/user?username=YOUR_LINKEDIN_USERNAME
```

## Parameters
|    Name    |                  Example                  |        Description         |
| ---------- | ----------------------------------------- | -------------------------- |
| username   | ?username=YOUR_LINKEDIN_USERNAME          | Your LinkedIn username.    |
| limit      | ?username=YOUR_LINKEDIN_USERNAME&limit=10 | Count of the lists items.  |

## Let's run
#### Development
```bash
yarn && yarn dev
```
#### Production
```bash
yarn && yarn build && yarn start
```

## Data Scraper
[github-readme-linkedin-scraper](https://github.com/soroushchehresa/github-readme-linkedin-scraper)

## Technologies
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Node.js](https://github.com/nodejs/node)
- [Express.js](https://github.com/expressjs/express)
- [Serverless](https://vercel.com)

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/soroushchehresa/github-readme-linkedin)
