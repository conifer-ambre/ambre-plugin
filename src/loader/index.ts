export default (source: string, compiler_sfc: any) => {
  const { descriptor } = compiler_sfc.parse(source)
  const {
    template: {
      ast: { children }
    }
  } = descriptor
  // all tags
  let tags: {
    props: {
      name: string
    }[]
    isSelfClosing: Boolean
  }[] = []
  const extract = (array: Array<any>) => {
    array.forEach(element => {
      tags.push({
        ...element
      })
      if (element.children && element.children.length) {
        extract(element.children)
      }
    })
  }
  extract(children)
  // all props
  let props_group: Array<any> = []
  // all class
  let class_group: Array<any> = []
  // all styles
  let styles_group: Array<any> = []
  // all self_closing group
  let self_closing_group = []
  tags
    .filter(element => element.props && element.props.length)
    .forEach(element => {
      if (element.isSelfClosing) {
        self_closing_group.push(element)
      }
      element.props.forEach(element => {
        if (element.name === 'on') {
          props_group.push(element)
        } else if (element.name === 'class') {
          class_group.push(element)
        } else if (element.name === 'style') {
          styles_group.push(element)
        }
      })
    })

  const method_regular = /^handle/

  // props
  props_group.forEach(({ exp }) => {
    let reason = ''
    const {
      content,
      loc: {
        start: { line }
      }
    } = exp
    if (!method_regular.test(content)) {
      reason = 'Method naming must contain "handle"'
    }
    if (reason) {
      throw new Error(`
        An error was found on line ${line}
        Method:${content}
        Reason:${reason}
      `)
    }
  })

  // class
  class_group.forEach(({ value }) => {
    const {
      content,
      loc: {
        start: { line }
      }
    } = value
    const array = content.split(' ')
    array.forEach((element: string) => {
      let reason = ''
      if (element.split('-').length > 4) {
        reason = 'Style naming cannot exceed 4 levels'
      }
      if (reason) {
        throw new Error(`
          An error was found on line ${line}
          Style:${element}
          Reason:${reason}
        `)
      }
    })
  })

  // styles
  styles_group.forEach(({ value }) => {
    let reason = ''
    const {
      content,
      loc: {
        start: { line }
      }
    } = value
    if (content) {
      reason = 'Prohibit inline styles'
    }
    if (reason) {
      throw new Error(`
        An error was found on line ${line}
        Style:${content}
        Reason:${reason}
      `)
    }
  })

  return source
}
