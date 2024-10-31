export async function onRequestPost(context) {
    try {
  
      const formdata = await context.request.formData();

      console.log('context.env: ', context.env);
      console.log('formdata: ',formdata);
  
      const tableData = formdata.get('tableData');
  
      await context.env.KV.put('tableData', tableData);
  
      return new Response('{"success": true}');
    } catch (error) {
      return new Response(`error: ${error}`);
    }
  }