**Bundler**: FuseBox

**Lang**: TypeScript

**Styles**: SASS/CSS-modules

---

#### Development:

`yarn dev`

#### Production

`yarn dist` builds your app in `dist` folder

`yarn docker:prod` -- builds docker image with nginx and your app, that you can run with `docker run -p 8080:80 <image-id>` and open http://localhost:8080
