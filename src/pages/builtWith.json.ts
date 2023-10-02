export const prerender = false;
import exampleJson from '../data/sample.json'

export async function GET() {
    
    const respObj = {...exampleJson, ts: new Date().getTime()}
    const resp = new Response(
      JSON.stringify(respObj, null, 2)
    )
    resp.headers.set('content-type','application/json')
    return resp;
  }