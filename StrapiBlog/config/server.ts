export {};
interface Env {
  (key: string, defaultValue?: string): string;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  array(key: string): string[];
}

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});
