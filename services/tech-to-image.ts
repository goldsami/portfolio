export const getTechImage = (techName: string) => {
  const name = techName.toLowerCase()

  if (name.startsWith('js') || name.startsWith('javascript')) {
    return '/images/tech/js.png'
  }
  if (name.startsWith('ts') || name.startsWith('typescript')) {
    return '/images/tech/ts.png'
  }
  if (name.startsWith('angular')) {
    return '/images/tech/angular.png'
  }
  if (name.startsWith('html')) {
    return '/images/tech/html.png'
  }
  if (name.startsWith('sass')) {
    return '/images/tech/sass.png'
  }
  if (name.startsWith('react')) {
    return '/images/tech/react.png'
  }
  if (name.startsWith('vue')) {
    return '/images/tech/vue.png'
  }
  if (name.startsWith('css')) {
    return '/images/tech/css.png'
  }

  return null
}
