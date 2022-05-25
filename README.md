
![Logo](https://avatars.githubusercontent.com/u/67993582?s=100&v=4)


# Portfolio Website - Vaishnav Vivek Prabhu

Built With: NextJS, ReactJS, HTML, CSS & Common JS


## Deployment

I used Firebase to deploy the project.

All you have to do is:

-  Create a firebase account
- Create a project
- Install Firebase tools in your root directory with 
    
        npm install -g firebase-tools

- Login to Firebase using

        firebase login

- Initialise Firebase using

        firebase init

- While Initialising Firebase, refer to this link

    https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/

- Make sure your firebase.json file looks like this

        
        {
            "hosting": {
                "public": "out",
                "ignore": [
                    "firebase.json",
                    "**/.*",
                    "**/node_modules/**"
                ]
            }
        }

- Nuild & Export using

        npm run export

- Finally, to deploy the project, use
```bash
  firebase deploy
```


## Licenses


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

