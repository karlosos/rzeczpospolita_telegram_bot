<div align="center">

![vscode-portfolio banner](./docs/telegram.png)

</div>

<div align="center">

[![Code style: standardjs](https://img.shields.io/badge/code%20style-standardjs-F3DF49.svg)](https://standardjs.com/)

</div>

***

<h4 align="center">Rzeczpospolita Bot</h4>


<p align="center">
  <a href="#about">About</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0"><br>
Website: <b><a href="https://t.me/rzeczpospolitapl">https://t.me/rzeczpospolitapl 💬</a></b><br>
<img width="2000" height="0">
</td>
</tbody>
</table>
</p>

## About

Rzeczpspolita.pl bot is a RSS reader that notifies the telegram channel of new articles on the rp.pl website.

## Development

You need to create a MongoDB, Telegram bot at @botfather and create an Wykop API key.

1. Install dependencies with `npm install`.
1. Configure `.env`. Template is available in `.env.template`.
1. Run locally `npm run start`.


## Deployment

Add `heroku.buildpack-nodejs` buildpack with:

```
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nodejs.git
```

Add environmental variables in heroku dashboard.

Application in deployed to Heroku as a background worker. It should not eat the hour quota from free plan.
