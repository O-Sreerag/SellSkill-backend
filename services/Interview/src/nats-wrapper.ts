import nats, { Stan } from "node-nats-streaming";


class NatsWrapperClass {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error("Cannot access Nats client before connection");
    }

    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this._client!.on("connect", () => {
        console.log("Connected to NATS");
        resolve();
      });
      this._client!.on("error", (err: any) => {
        console.error("error connecting to NATS", err);
        reject(err);
      });
    });
  }
}

export type NatsWrapper = typeof natsWrapper;
export const natsWrapper = new NatsWrapperClass();