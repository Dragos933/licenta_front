export const selectErrors = (state) => state.VerifyNumber.errors;
export const selectStatus = (state) => state.VerifyNumber.apiStatus;
export const selectVerified = (state) => state.VerifyNumber.data.isVerified;
export const selectEmailSent = (state) => state.VerifyNumber.data.emailSent;
