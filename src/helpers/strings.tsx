export function replaceCarriageReturns(input: string) {
  if (typeof input !== 'string') return input // Ensure input is a string
  return input.replace(/(\r\n|\n|\r)/g, '<br/>')
}
