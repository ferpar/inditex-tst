export function milliToClock(milli: number, showHours = false): string {
  const hours = Math.floor(milli / 1000 / 60 / 60)
  const minutes = Math.floor((milli / 1000 / 60) % 60)
  const seconds = Math.floor((milli / 1000) % 60)
  const hoursStr = hours.toString().padStart(2, '0')
  const minutesStr = minutes.toString().padStart(2, '0')
  const secondsStr = seconds.toString().padStart(2, '0')
  return `${showHours ? `${hoursStr}:` : ''}${minutesStr}:${secondsStr}`
}

export function getFormattedDate(date: string): string {
  return new Date(date).toLocaleDateString('en-ES', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}
