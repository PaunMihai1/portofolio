export const sendEmail = () => {
  const email = 'paun.mihaialexandru@yahoo.com';
  const subject = 'Colaborare';
  const message = 'Imi doresc sa colaboram.';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
};