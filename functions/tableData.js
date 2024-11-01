export async function onRequest(context) {
  try {
    const data = await context.env.KV.get('tableData');
    return new Response(data);
  } catch (error) {
    return new Response('{"error": "not found"}', {
      status: 404,
    });
  }
}

export async function onRequestPost(context) {
  try {

    const formdata = await context.request.formData();

    const tableData = formdata.get('tableData');

    await context.env.KV.put('tableData', tableData);

    return new Response('{"success": true}');
  } catch (error) {
    return new Response(`error: ${error}`);
  }
}