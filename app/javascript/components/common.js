export const getHeaders = ({ email, token }) => ({
  'X-Auth-Email': email,
  'X-Auth-Token': token,
});
