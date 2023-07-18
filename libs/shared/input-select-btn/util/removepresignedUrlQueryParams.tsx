export function removePresignedUrlQueryParams(url: string): string {
  const urlObj = new URL(url)
  urlObj.search = ''

  return urlObj.toString()
}
