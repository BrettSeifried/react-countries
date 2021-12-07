import { client, checkError } from './client';

export async function getCountries() {
  const array = await client.from('countries').select();
  console.log(array);
  return checkError(array);
}
