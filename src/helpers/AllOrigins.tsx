export const allOriginsWrapper = (url: string) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
}
