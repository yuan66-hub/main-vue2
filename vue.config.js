const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  filenameHashing:true,
  devServer: {
    port: 8081
  },
  configureWebpack:{
    output:{
      filename:'js/[name].[contenthash:8].js',
    }
  }
});
