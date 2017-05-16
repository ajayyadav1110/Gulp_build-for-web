# Gulp_build-for-web
This is a treehouse project 8th

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
In this project you’ll be provided a website with HTML, SCSS, JPEGs, PNGs and JavaScript files. You’ll be required to set up a Gulp build process to prepare the website for deployment.

The build process must fulfill the following criteria:

Concatenate and minify the JavaScript files
Compile SCSS into CSS in a concatenated and minified file
Generate JavaScript and CSS source maps
Compress any JPEG or PNG files
All output for the build process should be in a dist folder for distribution or deployment.

Before you start

To prepare for this project you'll need to make sure you complete and understand these steps.

 4 steps
To prepare for this project you'll need to make sure you complete and understand these steps.
Have a GitHub account and know how to create a new repository and upload files to it. As with the previous projects, you'll submit your finished working using GitHub.
If you need a reminder on how to use GitHub and GitHub desktop to create a new repository check out the workshop 'Share Your Projects wIth GitHub Desktop' in the Project Resources.
Download the project files. We've supplied a project folder containing the following files for you to use:
index.html -- the web page for the project
images directory -- contains jpg and png images
sass directory -- contains various Sass files
js directory -- contains a global.js file and a subdirectory -- circle -- with two other helper JavaScript files
icons directory -- you can ignore this folder in your build process, but you will need to copy this folder over to the dist directory for the final build
Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

 11 steps
To complete this project, implement the User Stories below. Here are your user stories to get to the requested Minimum Viable Product:
As a developer, I should be able to run the npm install command to install all of the dependencies for the build process.
As a developer, I should be able to run the gulp scripts command at the command line to concatenate, minify, and copy all of the project’s JavaScript files into an all.min.js file that is then copied to the dist/scripts folder.
As a developer, I should be able to run the gulp styles command at the command line to compile the project’s SCSS files into CSS, then concatenate and minify into an all.min.css file that is then copied to the dist/styles folder.
As a developer, when I run the gulp scripts or gulp styles commands at the command line, source maps are generated for the JavaScript and CSS files respectively.
As a developer, I should be able to run the gulp images command at the command line to optimize the size of the project’s JPEG and PNG files, and then copy those optimized images to the dist/content folder.
As a developer, I should be able to run the gulp clean command at the command line to delete all of the files and folders in the dist folder.
As a developer, I should be able to run the gulp build command at the command line to run 
the clean, scripts, styles, and images tasks with confidence that the clean task completes before the other commands.
As a developer, I should be able to run the gulp command at the command line to run the “build” task.
As a developer, I should be able to run the gulp serve command on the command line to build and serve the project using a local web server.
As a developer, when I run the gulp watch command, the scripts task should run and the current page should be reloaded in the browser when a change is made to any JavaScript (*.js) file.
Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

 1 step
As a developer, when I run the gulp scripts command at the command line, all of my project’s JavaScript files will be linted using ESLint and if there’s an error, the error will output to the console and the build process will be halted.
NOTE:
To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
