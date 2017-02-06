const ghpages = require('gh-pages')

const options = {
  src: [
    'index.html',
    'bundle.js',
    'logo.png'
  ]
}

ghpages.publish(__dirname, options, function (err) {
  if (err) {
    process.exit(1)
  }
  console.log('Published!')
})
