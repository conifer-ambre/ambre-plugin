export interface App {
  component: (name: string, file) => {}
}
export interface Context {
  (name: string)
  keys: () => string[]
}

export interface LoadAnimation {
  playSegments: (array: number[], type: boolean) => {}
}
