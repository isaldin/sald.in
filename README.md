**Bundler**: FuseBox

**Lang**: TypeScript

**Styles**: SASS/CSS-modules

---

#### Development:

`yarn dev`

#### Production

`yarn dist` builds your app in `dist` folder

`yarn docker:prod` -- builds docker image with nginx and your app, then you can run it with `docker run -p 8080:80 <image-id>` command and open http://localhost:8080 for see a result.
