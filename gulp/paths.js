module.exports = {
  root: './',
  styles: {
    watch: './scss/**/*.scss',
    src: './scss/style.scss',
    dest: './css'
  },
  scripts: {
    watch: './js/src/*.js',
    src: './js/src.js',
    dest: './js'
  },
  vendor: {
    watch: './js/vendor/**/*.js',
    src: './js/vendor/**/*.js',
    dest: './js'
  },
  images: {
    watch: './assets/images/**/*',
    src: './assets/images/**/*',
    dest: './images'
  },
  php: {
    watch: [
      './template-parts/**/*.php', 
      './includes/**/*.php', 
      './*.php'
    ]
  }
};
