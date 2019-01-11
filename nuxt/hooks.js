import { join } from "path"
import { copyFile } from "fs"

export default {
  generate: {
    done({ options: { generate } }) {
      const redirectsFile = "_redirects"
      const redirectsPath = join(generate.dir, redirectsFile)
      copyFile(redirectsFile, redirectsPath, (error) => {
        if (error) throw error
      })
    }
  }
}
