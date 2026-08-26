export class ClientError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

