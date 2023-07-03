export interface ApiInfo {
  info: {
    description: string;
    title: string;
    contact?: ApiContact;
    "x-logo"?: { url: string };
  };
  link: string;
  swaggerUrl: string;
}

export interface ApiContact {
  email: string;
  name: string;
  url: string;
}
