const { test, expect } = require('@playwright/test');

test('Consultamos a la API', async ({ request }) => {
  const consulta = await request.get(`/getStats/khimea`);
  let res = await (consulta.json())
  expect(consulta.status()).toEqual(200);
  expect(res[0].name).toEqual('Khimea');
  expect(res[0].level).toEqual(3);
  expect(res[0].class_id).toEqual('Bardo');
});