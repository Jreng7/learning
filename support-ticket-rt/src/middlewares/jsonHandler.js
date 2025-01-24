
export async function jsonHandler(req, res) {
  
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(buffers.concat(buffers).toString())
  } catch {
    req.body = null
  }

}