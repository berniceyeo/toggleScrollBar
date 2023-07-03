export interface ApiInfo {
  info: {
    description: string;
    title: string;
    contact?: ApiContact;
  };
  link: string;
  swaggerUrl: string;
}

export interface ApiContact {
  email: string;
  name: string;
  url: string;
}
