# React Stylguidist

This Developer kit is for all the developers who wants to get started with React library but don't want to mess up their time in configuring the task runner.

### Steps to follow:

Import this repo and rename it with your project folder
```sh
git clone https://github.com/imparvez/react-starter-kit.git fela-project
```
Change the directory
```sh
cd fela-project
```

Download all the required packages
```sh
npm install
```

Download React Stylguidist package
```sh
npm install --save-dev react-styleguidist
```

Create StylGuidist config file.
```sh
touch styleguide.config.js
```

Point Styleguidist to your React components
```sh
module.exports = {
  components: 'app/components/**/[A-Z]*.js'
};
```

Build your code
```sh
npm run styleguide:build
```

Run development server
```sh
npm run styleguide
```

**Keep Coding**
