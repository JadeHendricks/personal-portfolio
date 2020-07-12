# sass-build
SASS compiler, with live server, browser prefixing and minimization packages to boost CSS productivity

## How to use
```bash
1 - npm install
1.1 - Don't have live server? - npm install live-server -g
2 - npm run start (To start watching the SASS files)
3 - npm run build:css (to build the SASS into CSS) - Run before every Pull Request
4 - Deploy!
```

## Information
All SASS written will be minimized, prefixed and concated together at the end.
So you do not need to pay attention to browser support when it comes to using prefixes. jutincase [CanIUse](https://caniuse.com/).

have fun and enjoy! Credits to [Jonas Schmedtmann](https://codingheroes.io/)
