# Client Side Router Demos
[//]: # (
Based off this starter which is based off `create-react-app`.  
 -https://github.com/tylerbuchea/my-simple-app  
 -http://blog.tylerbuchea.com/super-simple-react-redux-application-example/  
)

## Setup
```bash
git clone
cd client-router-demos
yarn install
```

## Make it Go!
Since this is using `create-react-app` and I didn't want to bother ejecting and configuring, I had to get clever to run each version of the app wince there isn't a way to define a unique entry point. It's better if you don't ask questions.  
This is just for us, so why not some shenanigans?

To run the app with the various routers you can use these:
```bash
# Run the app without a router. It will basically only show the characters page regardless of the url.
yarn start

# Run the app with `redux-little-router`
yarn start-rlr

# Run the app with `redux-first-router`
yarn start-rfr

# Run the app with `router5`
# (not yet) yarn start-r5
```
