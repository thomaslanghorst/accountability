export function onRequestPost(context) {
    try {
  
      var formdata = context.request.formData();
  
      var tableData = formdata.get('tableData');
  
      context.env.KV.put('tableData', tableData);
  
      return new Response('{"success": true}');
    } catch (error) {
      return new Response(`error: ${error}`);
    }
  }