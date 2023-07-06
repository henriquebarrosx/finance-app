import { Firebase } from '#/domain/Firebase/index.entity'

export class FirebaseSingleton {
    private static instance: Firebase

    private constructor() { }

    static getInstance(): Firebase {
        if (!FirebaseSingleton.instance) {
            FirebaseSingleton.instance = new Firebase()
        }

        return FirebaseSingleton.instance
    }
}