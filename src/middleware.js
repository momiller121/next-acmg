export const onRequest = async (context, next) => {
    const response = await next();
    let html = await response.text();

    if(context.request.url.endsWith('.txt')){
        console.log('correcting for .txt')
        html = html.replaceAll('<!DOCTYPE html>', '');
    }
    
    return new Response(html, {
        status: 200,
        headers: response.headers
    });
};