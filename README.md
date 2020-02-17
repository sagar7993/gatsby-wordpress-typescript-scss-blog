# A starter Gatsby template for a Wordpress blog, built using Typescript and Ant Design

[![Github version](https://img.shields.io/github/package-json/v/sagar7993/gatsby-wordpress-typescript-scss-blog)](https://github.com/sagar7993/gatsby-wordpress-typescript-scss-blog/releases)
[![GitHub License](https://img.shields.io/github/license/sagar7993/gatsby-wordpress-typescript-scss-blog)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues-raw/sagar7993/gatsby-wordpress-typescript-scss-blog.svg)](https://github.com/sagar7993/gatsby-wordpress-typescript-scss-blog/issues)

This is an opinionated starter project to help you create lightning fast PWA websites with [Gatsby](https://gatsbyjs.org) and [Wordpress](https://wordpress.com) CMS, built using [Typescript](http://www.typescriptlang.org/), [SCSS](https://sass-lang.com/) and [Ant Design](https://github.com/ant-design/ant-design).

- **[Gatsby](https://gatsbyjs.org)** static site generator
- **[Wordpress](https://wordpress.com)** for content management
- **[Typescript](https://typescriptlang.org)** for statically-typed clean JavaScript code
- **[Ant Design](https://github.com/ant-design/ant-design)** for theming and UI

## Demo

https://gatsby-wordpress-typescript-scss-blog.netlify.com/

## Using the environment variables

This Gatsby starter template comes with 2 environments, one for development and testing, and another for production. This allows you to use different tokens, API URL's, social account id's etc as needed for your development, testing and production environments. The environment variables defined are as follows: 

- GATSBY_GITHUB_USER (Mandatory)
This is the username of your Github account

- GATSBY_GITHUB_REPO (Mandatory)
This is the Github repository URL

- GATSBY_SITE_NAME (Mandatory)
This is the title of the generated Gatsby site

- GATSBY_SITE_DESCRIPTION (Mandatory)
This is the description of the generated Gatsby site

- GATSBY_SITE_URL_PATH (Mandatory)
This is the URL where you will be deploying the generated Gatsby site, but without the http protocol
For example `mywebsite.com` or `localhost:8000`

- GATSBY_SITE_URL_PROTOCOL (Mandatory)
This is the http protocol of the URL where you will be deploying the generated Gatsby site, i.e. `http` or `https`

- GATSBY_WORDPRESS_URL_PATH (Mandatory)
This is the URL of your wordpress site from where you will fetch your posts/pages etc, but without the http protocol
For example `mywebsite-wordpress.com` or `localhost:8001`

- GATSBY_WORDPRESS_URL_PROTOCOL (Mandatory)
This is the http protocol of the URL of your wordpress site from where you will fetch your posts/pages etc, i.e. `http` or `https`

- GATSBY_SITE_AUTHOR
This is the name of the Gatsby site author

- GATSBY_ENABLE_COMMENTS (Optional)
This is a feature switch flag. If it's set to `1`, comment form will be displayed on all your blog posts. If this is not defined or it's value is anything other than `1` then commenting will be disabled on the website. Check out the documentation on `Comments` section below.

- GATSBY_PRIMARY_ACCENT_COLOR (Optional)
This is the primary accent color of your website, which will be used as the theme color in your web manifest file.

- GATSBY_INSTAGRAM_SOURCE (Optional)
This is the name of the Instagram account whose feed you want to display on your website.
Note: Do not include the `@` symbol here.

- GATSBY_TWITTER_SOURCE (Optional)
This is the handle of the Twitter account whose timeline/follow button you want to display on your website.
Note: Do not include the `@` symbol here.

- GATSBY_FACEBOOK_SOURCE (Optional)
This is the name of the Facebook account/page whose timeline/like button you want to display on your website.
Note: Do not include the `@` symbol here.

- GATSBY_GOOGLE_ANALYTICS (Optional)
This is your Google Analytics tracking id.

- GATSBY_STATICMAN_BASE (Optional)
This is the base URL of the of your Staticman instance. You can use either the public Staticman instance or host your own.
Note: This is required to enable comments on the website.

Note: Any new environment variables you want to define MUST have the `GATSBY_` prefix. You can access them using `process.env.GATSBY_MY_ENVIRONMENT_VARIABLE`. Also, `process.env` object cannot be de-structured. To access any variable from this object, use the full variable name.

For example, the following code will NOT work.

```javascript
const { GATSBY_MY_ENVIRONMENT_VARIABLE } = process.env;
```
## Setting up Wordpress locally on your machine

1. Install [Docker](https://www.docker.com/get-started) on your machine

2. Use the included docker-compose.yml file in this repository to setup Wordpress on your local machine by using the command `docker-compose up -d` (Have a look at Docker's documentation for more details)

3. This will create a dockerized wordpress installation on your machine, which you can access here [http://localhost:8001](http://localhost:8001)

4. As given in the docker-compose.yml file, your credentials are the following by default (make sure you change these credentials before deploying anything to production)
    
    - MySQL username: `wordpress`
    - MySQL password: `wordpress`
    - Wordpress username: `wordpress`
    - Wordpress password: `wordpress`

5. Once you're done setting up and installing Wordpress, you will see the Wordpress admin dashboard. Go to plugins, and add the following plugins

    ###### If you're planning to use Wordpress custom fields in your Gatsby GraphQL schema, install these 2 plugins (optional, but recommended)

    - `Advanced Custom Fields`
    - `ACF to REST API`
    
        Note: After installing these 2 plugins

        - Go to Wordpress Admin Dashboard here [http://localhost:8001/wp-admin](http://localhost:8001/wp-admin) -> Settings -> Permalinks -> Choose either `Day and name` or `Month and name` option as your permalink structure and click Save.
        - In the `ACF to REST API` setting just below the permalinks, select `v2` from the `Request Version` menu

    ###### If you're planning to use Yoast for your SEO in the Gatsby GraphQL schema, install these 3 plugins (optional, but recommended)

    - `Yoast SEO`
    - `Yoast to REST API`
    - `ACF Content Analysis for Yoast SEO`

6. At this point you have a fully functional Wordpress blog setup, but you haven't added any posts to it. If you type `gatsby develop` in your terminal in the project directory at this point, there won't be any posts or pages for Gatsby to pull. If you want to copy the example blog posts that I have used in the demo for this Gatsby starter template, follow these instructions

    - Install this plugin to your Wordpress installation `All-in-One WP Migration` by going Wordpress Admin Dashboard to [http://localhost:8001/wp-admin](http://localhost:8001/wp-admin) -> Plugins -> Add New, and then activate this plugin.
    - Go to this plugin's settings, and click on `Import` -> `Import From` -> `File`
    - Select the file `localhost.wpress` from the root folder of this repository.
    - Done! The plugin will now import all the sample posts that I have used for creating the demo of this Gatsby starter template.

## Using existing Wordpress blog as your source instead of setting up local installation

If you're planning to use an already existing Wordpress blog as your CMS instead of setting everything up on your local machine, then simply ignore the instructions given in the section above. You might still want to consider installing the Wordpress plugins recommended above if you haven't already.

## Ant Design

This Gatsby starter template uses [Ant Design](https://github.com/ant-design/ant-design) for theming and UI. Although, it's not mandatory to use it for any new visual components that you might create. Feel free to build everything from scratch or use any other UI framework of your choice.

## Comments

- User-generated content are typically the Achilles heel of any static site — a blog commenting platform, a reviews section or a voting system are just a few common examples. To implement these on a static site, developers often resort to third-party services that inject content into pages through JavaScript embeds or iframes.
- [Staticman](https://staticman.net/) handles user-generated content for you and transforms it into data files that sit in your GitHub repository, along with the rest of your content.
- Staticman is free and open source. Check out the documentation [here](https://staticman.net/docs/)
- This Gatsby starter template uses Staticman to handle comments on blog posts, although you could also use it for handling any user generated data such as reviews, form submits, contact me requests, etc.
- The documentation on the official website is a bit outdated, therefore you'll have to do a bit of searching on Google to figure stuff out. A lot of the heavy lifting is already done for you in this Gatsby starter template. Check out the Staticman Integration steps below.

## Staticman integration steps

The integration steps mentioned on the official documentation are very outdated. You can follow the instructions below to get started.

1. Add Staticman to your repository - Go to the [Staticman Github App](https://github.com/apps/staticman-net) and click on configure. Grant Staticman write access to your repository. Whenever a user fills out a comment form, Staticman will automatically create a pull request. If you approve it, the comment will be stored as a `.yml` file in your Github repository. The next time you build your Gatsby site, the comment will be visible. You can automate this by triggering a build everytime Staticman's pull request is merged to your release branch. You can use any CI/CD tool for this purpose.

2. Check the `staticman.yml` file in the root directory of this project. All comments will be saved as a `.yml` file in the `src/data/comments` folder. The `gatsby-transformer-yaml` plugin will then scan the folder, and you will be able to access your comments as the `allCommentsYaml` object in your GraphQL schema.

Note: Please check out this plugin's documentation [here](https://www.gatsbyjs.org/packages/gatsby-transformer-yaml/) to understand all the plugin customization options.

3. Create a form on your website, and ensure that the submit URL points to the Staticman API (refer to the official docs for more details)

## Images

This Gatsby starter template uses `gatsby-source-wordpress` to source content from your Wordpress CMS. While this plugin can apply image transformations on the featured images, it cannot do that for images within the post/page content. What this means is that if you have any image within your Wordpress post/page, it will have to be served from your original wordpress url without any image transforms. Obviously this isn't ideal, and there could be 2 possible solutions for this.

1. Insert images from URL in your Wordpress post/page instead of uploading images to the Wordpress `wp-content/uploads` folder (Maybe a good CDN like AWS Cloudfront, Google Photos etc). By doing so, the images will be served from the CDN, and everything works as expected. You still won't be able to do fluid transforms on these images though.

2. This Gatsby starter template uses (untested) [gatsby-wordpress-inline-images](https://github.com/TylerBarnes/gatsby-wordpress-inline-images) plugin to download images within Wordpress the post/page content, to the local static folder and also lets you applies fluid image transforms on those images. This is because `gatsby-source-wordpress` doesn't process images in blocks of text which means your admin site has to serve the images. However, I haven't fully tested this plugin and you can feel free to comment it out from the `gatsby-config.js` file if you run into any issues.

Note: Please check out this plugin's documentation [here](https://github.com/TylerBarnes/gatsby-wordpress-inline-images) to understand all the plugin customization options.

## Git Hooks using Husky

This Gatsby starter template uses [Husky](https://github.com/typicode/husky) to create Git hooks. Husky can prevent bad git commit, git pushes etc. You can use the husky hooks in the `package.json` file to execute custom scripts and tasks before each git commit and git push. For example, this project uses the `pre-commit` hook to run the lint script, and the `pre-push` hook to create gatsby build and verify that everything works before git push happens to the repository. This is optional though, and you can opt out of it by simply commenting out the `husky` object in the `package.json` file.

## PWA

This Gatsby starter template uses `gatsby-plugin-offline` plugin. If you don't want your site to work offline, simply comment this plugin out from the `gatsby-config.js` file.

## SEO

This Gatsby starter template has some basic SEO capabilities out of the box such as robots.txt file, sitemap.xml file, meta tags defined in `react-helmet` etc.

## Social widgets

This Gatsby starter template uses the [gatsby-plugin-pinterest-twitter-facebook](https://www.gatsbyjs.org/packages/gatsby-plugin-pinterest-twitter-facebook/) plugin to load the following social media widgets. No API tokens needed for any of these widgets, and no complicated setup procedure. Just plug and play.

## Reading progress bar

This Gatsby starter template displays a reading progress bar at the top of each page. Feel free to tweak it, hide or show it on certain pages, or remove it altogether if you don't like it.

- ###### Pinterest
    - Display the `Pin it` button while hovering over any image on your website.

- ###### Twitter
    - Display the Twitter follow button, and the Twitter timeline anywhere on your website.

- ###### Facebook
    - Display the Facebook loke button, and the Facebook timeline anywhere on your website.

Note: Please check out this plugin's documentation [here](https://www.gatsbyjs.org/packages/gatsby-plugin-pinterest-twitter-facebook/) to understand all the plugin customization options.

## Instagram

This Gatsby starter template uses the [gatsby-source-instagram](https://www.gatsbyjs.org/packages/gatsby-source-instagram/) plugin to display upto 12 most recent posts of any Instagram account.

Note: Please check out this plugin's documentation [here](https://www.gatsbyjs.org/packages/gatsby-source-instagram/) to understand all the plugin customization options.

## Developing

Once you have defined the mandatory environment variables mentioned above, and have a Wordpress site ready (either on your local machine or a pre-existing live website), follow these instructions to use this Gatsby starter template

1.  Install dependencies

    `yarn` or `npm install`

2.  Run the development server

    `yarn start` or `npm run start`

    Note:
    
    - This project uses Typescript, so create new files components with the `.tsx` or `.ts` extension instead of `.jsx` or `.js`
    - This project uses SASS to write stylesheets. You can create new stylesheets with `.scss` extension and import them into any React component, it will automatically get transpiled into CSS.

## Issues

If you face any issues while working with this Gatsby starter template, feel free to create a new issue [here](https://github.com/sagar7993/gatsby-wordpress-typescript-scss-blog/issues). Please check if there's any existing similar issue already created before creating a new one.

## Contribute

Fork this repo and make a PR.

## License

This project is licensed under the [MIT License](https://github.com/sagar7993/gatsby-wordpress-typescript-scss-blog/blob/master/LICENSE) - see the LICENCE.md file for details
