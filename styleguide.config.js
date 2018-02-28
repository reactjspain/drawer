const spaceFactor = 8

const theme = {
  space: [
    spaceFactor / 2,
    spaceFactor,
    spaceFactor * 2,
    spaceFactor * 3,
    spaceFactor * 4,
    spaceFactor * 5,
    spaceFactor * 6
  ],
  color: {
    base: '#002b80',
    light: '#999',
    lightest: '#ccc',
    link: '#B45C00',
    linkHover: '#F57C00',
    border: '#e8e8e8',
    name: '#B08C0A',
    type: '#b77daa',
    error: '#fff',
    baseBackground: '#fff',
    errorBackground: '#c00',
    codeBackground: '#f5f5f5'
  },
  fontFamily: {
    base: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Roboto"',
      '"Oxygen"',
      '"Ubuntu"',
      '"Cantarell"',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif'
    ],
    monospace: ['Consolas', '"Liberation Mono"', 'Menlo', 'monospace']
  },
  fontSize: {
    base: 15,
    text: 16,
    small: 13,
    h1: 48,
    h2: 36,
    h3: 24,
    h4: 18,
    h5: 16,
    h6: 16
  },
  mq: {
    small: '@media (max-width: 600px)'
  },
  borderRadius: 3,
  maxWidth: 1000
}

const styles = {
  Heading: {
    h2: {
      display: 'none'
    }
  }
}

module.exports = {
  theme,
  styles,
  title: 'RJSDrawer Documentation',
  components: 'src/[A-Za-z]*.js',
  showUsage: true,
  showSidebar: false,
  showCode: true,
  styleguideDir: './public/docs'
}