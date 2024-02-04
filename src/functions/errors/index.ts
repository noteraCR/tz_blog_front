export default function handleError({ e }: { e: unknown }) {
  const message =
    e !== null && typeof e === 'object' && 'message' in e && typeof e.message === 'string' ? e.message : 'Unknown error'

  console.error(`An error occured with message ${message}`)
  console.error(e)
  return message
}
