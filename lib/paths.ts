const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path
  }

  return `${basePath}${path}`
}

// Bump the version when the resume PDF changes so browsers fetch the latest file.
export const RESUME_URL = withBasePath("/Prasad_Adhau_Resume.pdf?v=20260530")
