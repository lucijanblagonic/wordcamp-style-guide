


 # Readme.md #

## CampSite 2017 theme and a style guide 
[WordCamp Europe 2017](https://2017.europe.wordcamp.org/) design team ported the [Underscores](https://underscores.me/) theme and made it available for [all WordCamps](https://make.wordpress.org/community/2017/05/08/the-new-wordcamp-base-theme-campsite-2017/) as a base theme. The theme was improved with additional [widget areas](https://lucijanblagonic.github.io/wceu-2018/styleguide/section-6.html#kssref-6-widget-areas) and a “Day of” template —based on the feedback received from the WordPress community.

## Why use the style guide 

Some WordCamps choose to build their design from scratch, by using a base theme or by styling available default themes. Others duplicate one of the existing designs and modifiy it. The WordCamp Europe 2017 design team created a [modular WordCamp design](https://2017.europe.wordcamp.org/2017/05/09/using-style-guides-for-modular-wordcamp-designs/) approach with the help of the style guide.

After you setup the style guide on your machine, the style guide is generated directly from CSS and HTML examples. This speeds up  development of your design, since you are working on static examples and don’t need to emulate CampSite 2017 and WordCamp website codebase and plugins (some of which are specially created for WordCamps).

## Style guide setup 

For using and modifying this style guide and CSS locally, you are going to need several tools.
* Node.js and npm — Read how to install the Node.js on macOS and Windows
* Terminal or Command Prompt on Windows to run commands
* Working Gulp environment to generate CSS files and a style guide

### macOS 
Make sure you have node.js installed. If you have, download the wordcamp-style-guide repository on your computer in the folder you want to setup gulp. Navigate to that folder with terminal. 

Install gulp by using the command:

    npm install gulp

Once gulp is installed, continue installing all gulp related packages with:

    npm install

You are done. If you want to test that everything is working properly, run:

    gulp

The process for on-the-fly compiling should be active now. You will see the live preview of the style guide in your browser and each time one of the files is changed (SCSS, HTML…) the style guide will be updated.

If you want to build the style guide once, without the browser-sync live preview, run:

    gulp build

### Windows 

**These videos are recorded on virtual Windows 7 machine (where no development has ever been done and no dev tools are installed). [GIT Bash](https://git-scm.com/downloads) is used because that’s the only CLI tool for Windows that’s close enough to Linux terminal.**

Repository: https://github.com/lucijanblagonic/wordcamp-style-guide

### Local setup

1. **Clone repository** - [Video](https://drive.google.com/file/d/1hYB9cBHam6UaujkZzuouc48d94iLelTZ/view)

You can select any folder you wish and clone github repository into it. For some reason I couldn’t use https but http works just fine. Command from video:
*git clone [http://github.com/lucijanblagonic/wordcamp-style-guide.git](http://github.com/lucijanblagonic/wordcamp-style-guide.git)* 

2. **Install node.js (npm comes in package)** - [video](https://drive.google.com/file/d/1gv_iR5TqLuTLT6uETNJckxQ5CetfGSOJ/view)
3. **Install node modules** - [video](https://drive.google.com/file/d/1ee3axBDh_2TVdzt71kvw-eQhH_JMsDxf/view)

Be patient with *npm install*, it needs time (watch the video till the end).

4. **Run gulp** - [video](https://drive.google.com/file/d/18pe0q83NYj67iwDBOhc9OoRtKX03-i2-/view)

In my settings, gulp wasn’t installed properly. Every time you see “Command not found” error it means that software/tool is not installed (or not installed properly). 

Running command `npm install -g gulp` solved the problem. If you don’t know commands just type into terminal `npm --help`. This works for every command in terminal (git as well).
At the end of video, local server will open IE (because that was still default browser) with security warning, which can be ignored.

5. **Gulp tasks** - *gulp* and *gulp build* - [video](https://drive.google.com/file/d/1yh085RhcKVokfyNNvuJx0WTotklKMR3C/view)

Running *gulp build* will just re-build files from **source** directory to **styleguide** directory

Running *gulp* will rebuild files and additionally run local server (it will open styleguide in your default browser) and you’ll be able to see your own local version in browser (along with changes you made to it). It should look like this -[https://lucijanblagonic.github.io/wordcamp-style-guide/styleguide/]( https://lucijanblagonic.github.io/wordcamp-style-guide/styleguide/)

## Connecting style guide 


----------


If you are hosting your style guide repository on GitHub, you can use the power of GitHub to share compiled CSS with your WordCamp website. After CSS is updated on GitHub, you can update it on WordPress By using Hooks, you can make your WordCamp website update every time the CSS file is updated. Here are steps on how to setup that.

* Make sure your style guide is available on GitHub and that you have Administrator access to your WordCamp website wp-admin
* Go to your repository **settings** on GitHub and find **Hooks**.
* Paste the hook URL: **year.wordcamp-name**.wordcamp.org/wp-admin/admin-ajax.php?action=wcrcss_webhook
* Go to your WordCamp admin and find **Remote CSS** **under Appearance**.
* Paste the link to your compiled CSS on GitHub. Example: [https://raw.githubusercontent.com/lucijanblagonic/wordcamp-style-guide/master/build/assets/stylesheets/style.css](https://raw.githubusercontent.com/lucijanblagonic/wordcamp-style-guide/master/build/assets/stylesheets/style.css)

If you need more help, check the Help screen on Remote CSS page on your WordCamp website admin.

## Making changes to your style guide 
[Description]
* Changing variables (colors)
* Adding or removing components
* Adding images

## Style guides examples
 * [WordCamp Europe 2017](https://lucijanblagonic.github.io/wceu-2017/styleguide)
 * [WordCamp Zagreb 2017](https://lucijanblagonic.github.io/2017.zagreb.wordcamp.org/styleguide/)
 * [WordCamp Europe 2018](https://lucijanblagonic.github.io/wceu-2018/styleguide)
