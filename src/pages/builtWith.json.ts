export const prerender = false;
import exampleJson from '../data/sample.json'

export async function GET() {
    
    const respObj = {...exampleJson, ts: new Date().getTime()}
    return new Response(
      JSON.stringify(respObj, null, 2)
    )
  }