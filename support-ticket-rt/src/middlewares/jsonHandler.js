
export async function jsonHandler(req, res) {
  
  const buffersRequest = []

  for await (const chunk of req) {
    buffersRequest.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffersRequest).toString())
  } catch (error) {
    req.body = null
  }

  res.setHeader("Content-Type", "application/json")

}