const CONFIG = {
  API_ROOT: 'https://bb18499c9604.ngrok.io',
  GOOGLE_CLIENT_ID: '650068002981-iivventkbtgnqjfl1cso0vs2upvkkt9t.apps.googleusercontent.com',
  // IMAGE_URL: 'https://storage.googleapis.com/duy-bucket/',
  IMAGE_URL: 'https://storage.googleapis.com/trendsvietnam',
  // API_POST: 'https://tinanime.com/api/news/',
  API_POST: 'https://trendsvietnam.vn/api/v1/posts',
  API_AUTH_CALLBACK: '/api/authentication',
  API_REFRESH_TOKEN: 'api/refresh-token',
}

export default CONFIG;

export const SETTING = {
  ACCEPTED_FILE_TYPES: 'image/png, image/jpg, image/jpeg', //, image/jpg, image/jpeg
  MAX_SIZE: 3000000, // 3MB = 3000000,
  MAX_TOTAL_FILE: 10
}