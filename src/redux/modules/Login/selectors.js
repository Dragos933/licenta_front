export const selectToken = (state) => state.Login.data.token;
export const selectEmail = (state) => state.Login.data.email;
export const selectPassword = (state) => state.Login.data.password;
export const selectApiStatus = (state) => state.Login.data.apiStatus;
export const selectHasSubmitted = (state) => state.Login.data.hasSubmitted;
export const selectErrors = (state) => state.Login.errors;