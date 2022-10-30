const EMAIL_REXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const isEmailValid = (email: string) => {
  return email.match(EMAIL_REXP);
};
