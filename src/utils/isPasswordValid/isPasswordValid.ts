const PASSWORD_REXP =
    /(?=.*[0-9])(?=.*[!?+\-_~@#$%^&()\[\]{}|\\/\,.`<>"':;=±§*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!?+\-_~@#$%^&()\[\]{}|\\/\,.`<>"':;=±§*]{8,}/g;

export const isPasswordValid = (password: string) => {
  return password.match(PASSWORD_REXP);
};
