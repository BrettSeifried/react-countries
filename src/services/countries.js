import { client, checkError } from './client';

export async function getCountries() {
  //   const { data, error } = await client.from('countries').select();
  //   console.log(data);
  //   console.log(error);
  //   return data;

  const response = await client.from('countries').select();
  return checkError(response);
}
