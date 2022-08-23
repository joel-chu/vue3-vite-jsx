// vite-plugin-sar (search and replace)
export type VitePluginSarReplacement = {
  from: string | RegExp
  to: string
}

export type VitePluginSarOption = {
  replacements: VitePluginSarReplacement | Array<VitePluginSarReplacement>
  fileExt: string | Array<string>
}



/* main method */
export function vitePluginSar () {
  return {
    name: 'vite-plugin-sar',
    transform(code: string, id: string) {

      return code
    }
  }
}
