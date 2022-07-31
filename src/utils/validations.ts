export const validateEmail = (email: string): string => {
  const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim().length === 0) {
    return 'Eamil não pode ser vazio';
  }

  if (regularExpression.test(String(email).toLowerCase())) {
    return '';
  }

  return 'Digite um e-mail válido.';
};



export const validateText = (text: string, field: string): string =>
  text.trim().length < 1 ? `O campo ${field} está vazio` : '';