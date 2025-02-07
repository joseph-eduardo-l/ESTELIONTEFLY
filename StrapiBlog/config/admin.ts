interface Env {
  (key: string): string;
  bool(key: string, defaultValue?: boolean): boolean;
}

const config = ({ env }: { env: Env }) => {

  // Imprimir las variables de entorno para verificar que se cargan correctamente
  console.log('API_TOKEN_SALT:', env("API_TOKEN_SALT"));
  console.log('ADMIN_JWT_SECRET:', env("ADMIN_JWT_SECRET"));
  console.log('TRANSFER_TOKEN_SALT:', env("TRANSFER_TOKEN_SALT"));

  return {

  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
  },
};
  }


export default config;
