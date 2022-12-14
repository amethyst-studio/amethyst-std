// Export variables related to the application in multiple locations.
export const name = "amethyst-common";
export const description =
  "Shared components and middleware for amethyst services.";
export const version = "1.0.0";

/** cryptoRandomString */
export { cryptoRandomString } from "https://deno.land/x/crypto_random_string@1.1.0/mod.ts";

/** drash */
export * as Drash from "https://deno.land/x/drash@v2.7.1/mod.ts";
export { ResourceLoaderService } from "https://deno.land/x/drash@v2.7.1/src/services/resource_loader/resource_loader.ts";

/** hex */
export {
  decode as hexDecode,
  encode as hexEncode,
} from "https://deno.land/std@0.165.0/encoding/hex.ts";

/** mongo */
export {
  Collection,
  Database,
  MongoClient,
  ObjectId,
} from "https://deno.land/x/mongo@v0.31.1/mod.ts";
export type {
  Filter,
  UpdateFilter,
} from "https://deno.land/x/mongo@v0.31.1/mod.ts";

/** oaut2_client */
export { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.0/mod.ts";
export type { OAuth2ClientConfig } from "https://deno.land/x/oauth2_client@v1.0.0/mod.ts";
