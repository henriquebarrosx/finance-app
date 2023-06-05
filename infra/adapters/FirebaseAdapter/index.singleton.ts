import { FirebaseAdapter } from "#/infra/adapters/FirebaseAdapter/index.adapter"

export class FirebaseAdapterSingleton {
    private static instance: FirebaseAdapter

    private constructor() { }

    static getInstance(): FirebaseAdapter {
        if (!FirebaseAdapterSingleton.instance) {
            FirebaseAdapterSingleton.instance = new FirebaseAdapter()
        }

        return FirebaseAdapterSingleton.instance
    }
}