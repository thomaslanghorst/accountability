export function onRequestPost(context) {
    try {
  
      var formdata = context.request.formData();
      console.log('formdata: ', formdata);
      console.log('context.env.KV: ', context.env.KV);
  
      var tableData = formdata.get('tableData');
  
      context.env.KV.put('tableData', tableData);
  
      return new Response('{"success": true}');
    } catch (error) {
      return new Response(`error: ${error}`);
    }
  }