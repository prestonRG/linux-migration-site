The Elastic Beanstalk environment I created was calle my-app-env and gave me a few problems in setting up.

I am on linux and had to download pipx, not pip, to successfully install awsebcli. After installing
and setting up my AWS account, I was able to use eb init in my project directory and create the environment
my-app-ev. eb deploy gave me a few issues, I think because of my file structure. I used the command eb console to
open my environment in AWS and was able to eventually get it to deploy. After that, eb open worked fine and
resulted in the screenshot provided alongside this README.