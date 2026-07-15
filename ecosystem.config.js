module.exports = {
  apps: [
    {
      name: "remohires-landing",
      cwd: __dirname,
      script: "node_modules/.bin/next",
      args: "start -p 3000 -H 127.0.0.1",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
