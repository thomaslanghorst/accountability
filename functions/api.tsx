export async function onRequestPost(context) {
    try {
  
      const formdata = await context.request.formData();
      console.log(formdata);
  
      return new Response('{"success": true}');
    } catch (error) {
      return new Response(`error: ${error}`);
    }
  }
  