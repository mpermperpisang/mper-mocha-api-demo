const BASE_URL = 'https://petstore.swagger.io/v2';

module.exports = {
  BASE_URL,
  PET_ENDPOINT: `${BASE_URL}/pet`,
  FIND_BY_STATUS: (status) => `${BASE_URL}/pet/findByStatus?status=${status}`
};
