# VCU Programming Project

## Project overview
This project is a complete shift from what I have been working on all semester. I wanted to create a website with a purpose
rather than having a dashboard with disconnected features. I decided to make an interactive page for users interested in switching to
Linux. It can be a confusing process as there are an overwhelming amount of options to choose from, and it is not always clear
what the reasons for picking one over another might be. I think a lot of users just accept that whatever OS their computer came with is
how that computer operates. The idea that there are other options is not necessarily intuitive, especially with the lessening of options
in modern devices. I belive Linux allows users to use their computer in the way they want, rather than using it in the way that a business
has decided would be best for them.

#### Deploying to Elastic Beanstalk
EB process:

The Elastic Beanstalk environment I created was called my-app-env and gave me a few problems in setting up.
I am on linux and had to download pipx, not pip, to successfully install awsebcli. After installing
and setting up my AWS account, I was able to use eb init in my project directory and create the environment
my-app-ev. eb deploy gave me a few issues, I think because of my file structure. I used the command eb console to
open my environment in AWS and was able to eventually get it to deploy. After that, eb open worked fine and
resulted in the screenshot provided alongside this README.