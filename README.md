# A starter Gatsby template for a Wordpress blog, built using Typescript and Ant Design

[![Github version](https://img.shields.io/github/package-json/v/sagar7993/gatsby-wordpress-typescript-blog-boilerplate)](https://github.com/sagar7993/gatsby-wordpress-typescript-blog-boilerplate/releases)
[![GitHub License](https://img.shields.io/github/license/sagar7993/gatsby-wordpress-typescript-blog-boilerplate)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues-raw/sagar7993/gatsby-wordpress-typescript-blog-boilerplate.svg)](https://github.com/sagar7993/gatsby-wordpress-typescript-blog-boilerplate/issues)

This is an opinionated starter project to help you create lightning fast PWA websites with [Gatsby](https://gatsbyjs.org) and [Wordpress](https://wordpress.com) CMS, built using [Typescript](http://www.typescriptlang.org/) and [Ant Design](https://github.com/ant-design/ant-design).


- **[Gatsby](https://gatsbyjs.org)** static site generator
- **[Wordpress](https://wordpress.com)** for content management
- **[Typescript](https://typescriptlang.org)** for statically-typed clean JavaScript code
- **[Ant Design](https://github.com/ant-design/ant-design)** for theming and UI

## Getting started

Hit the **Deploy to Netlify** button. This will:

- Clone the repo into your Github account
- Create a new project on Netlify, build & deploy

## Setting up Wordpress

Use the included docker-compose.yml file to setup Wordpress on your local machine

## Developing

1.  Clone your repo to your local machine

1.  Install dependencies

`yarn` or `npm install`

1.  Run the development server

`yarn start` or `npm run start`

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

1.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:8000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).

## Uploadcare setup

Uploadcare is our file upload system. It hosts the files for us and delivers them trough their CDN network.
Each site you'll create need its own Uploadcare API key's. See below how to set this up

1. Create new project in Uploadcare and save API keys in project

- Go to [Uploadcare.com](https://uploadcare.com/accounts/login/) and login
- Once on the dashboard create a new project
- Set the name and hit create
- In the left menu click in API Keys and copy the public key
- Now open your project and open the CMS congif.yml file
- find the `media_library` settings and paste in the public key after `publicKey:`
- Done!!

For more details see the [Netlify CMS Docs](https://www.netlifycms.org/docs/uploadcare/)

## Scheduled content

Scheduled content allows you to schedule posts. Set the date / order field in a post to the feature.
For the scheduled content to appear on the website we need to deploy our website daily.

1. Setup a Netlify build hook

- Go to https://app.netlify.com/sites/_YOUR_SITE_NAME/setings/deploys/#build-hooks
- Hit build hook button in the build hooks section
- Give it a name for example: "Automatic deploy Zapier"
- Select branch, in most cases master will do.
- Hit save and copy the generated url

2. Zapier Setup

- Go to [Zapier.com](https://zapier.com/) and login
- Hit make a zap button in the right top corner
- Search for Schedule in the search bar and select "Schedule by Zapier"
- Check every day and hit continue
- Select a time and make sure trigger on weekends is turned on
- Double check your settings and hit continue
- On the left hit add a step - and search for webhook by Zapier
- Select post as action and continue
- Past in the url of our recently generated webhook in the url field
- Make sure "Payload Type" is set to form and hit continue
- check settings and hit the test button
- Check your Netlify site if there has been triggered a new deploy
- If that worked hit finish
- Give your zap a name, example: "Automatic deploy Yellowcake" and make sure your zap is turned on

That's it, you'r now ready to use scheduled content!!

## Mailchimp integration

https://hooks.zapier.com/hooks/catch/2881617/ea5exg/

- Go to [Zapier.com](https://zapier.com/) and login
- Hit make a zap button in the right top corner
- Search for webhook by Zapier and select catch hook and continue to next step
- In most cases leave this field empty and continue
- Copy the generated url
- Now go to the [form settings](https://app.netlify.com/sites/yellowcake/settings/forms#outgoing-notifications) in you Netlify project
- Find the form notifications section click the add notification button
- Select the option `outgoing webhook`
- Set the event to listen for
- Paste in our recent generated url in the URL to notify field
- Select your form and save settings
- Open your website navigate to your form, fill it out and send the data
- Go back to Zaper and see if your form data has come trough.
- Hit continue and add a new step on the left side of the screen
- Search for MailChimp and select add/update subscriber
- Select MailChimp account or add one and hit the test button
- if succeeded hit continue button
- Select your MailChimp list and select the subscriber email address
- Fill in other settings for your needs and continue
- Hit send test to MailChimp button and hit finish if succeeded
- Give your Zap a name and make sure your zap is turned on
- Submit your form one last time and see if all data is coming trough to MailChimp
- Thats is!

## Instagram Feed

Get Your Instagram Access Token [here](https://generator.thrivex.io/). In order to display your Instagram photos on your own website, you are required to provide an Instagram Access Token. You can do this by clicking the generator button on this site you will first need to login to your account.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sagar7993/gatsby-wordpress-typescript-blog-boilerplate)
