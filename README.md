# React Styleguidist

Create a living style guide.

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

Download React Styleguidist package
```sh
npm install --save-dev react-styleguidist
```

Create Styleguidist config file.
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
