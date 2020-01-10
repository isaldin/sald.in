import { fusebox, sparky, pluginSass } from 'fuse-box';

class Context {
  runServer: boolean;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getConfig = (adds: object = {}) =>
    fusebox({
      target: 'browser',
      entry: 'src/entry.tsx',
      webIndex: {
        template: 'src/assets/index.html',
      },
      cache: true,
      devServer: this.runServer,
      dependencies: {
        include: ['tslib'],
      },
      plugins: [
        pluginSass('*.scss', {
          asModule: { scopeBehaviour: 'local' },
        }),
      ],
      tsConfig: './src/tsconfig.json',
      ...adds,
    });
}

const { task } = sparky<Context>(Context);

task('default', async ctx => {
  ctx.runServer = true;
  const fuse = ctx.getConfig({ logging: { level: 'verbose' } });
  await fuse.runDev();
});

task('dist', async ctx => {
  ctx.runServer = false;
  const fuse = ctx.getConfig({ sourceMap: false });
  await fuse.runProd({ uglify: true });
});
