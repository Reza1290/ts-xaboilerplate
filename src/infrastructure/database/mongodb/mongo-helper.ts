import mongoose from "mongoose";

export const MongoHelper = {
    client: null as typeof mongoose | null,
    uri: null as string | null,

    async connect(uri: string): Promise<void> {
        this.uri = uri;
        this.client = await mongoose.connect(uri);
        console.log('Successfully connected to MongoDB.');
    },

    async disconnect(): Promise<void> {
        if (this.client) {
            await this.client.disconnect();
            this.client = null;
            console.log('Disconnected from MongoDB.');
        }
    },
};