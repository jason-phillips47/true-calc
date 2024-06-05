module.exports = {
  devServer: {
    proxy: {
      '/calculate_ev': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  outputDir: 'dist'
}
