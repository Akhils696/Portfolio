export type EmailClient = "default" | "gmail" | "outlook";

type BuildEmailHrefInput = {
  to: string;
  client: EmailClient;
  subject?: string;
  body?: string;
};

const encode = (value: string) => encodeURIComponent(value);

export function buildEmailHref({ to, client, subject = "", body = "" }: BuildEmailHrefInput) {
  const encodedTo = encode(to);
  const encodedSubject = encode(subject);
  const encodedBody = encode(body);

  if (client === "gmail") {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
  }

  if (client === "outlook") {
    return `https://outlook.office.com/mail/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
  }

  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}
