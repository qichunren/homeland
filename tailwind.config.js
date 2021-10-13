module.exports = {
  mode: 'jit',
  purge: [
    './app/views/**/*.erb',
    './app/components/**/*.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ]
}
