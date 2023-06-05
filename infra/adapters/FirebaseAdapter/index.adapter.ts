import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, getAuth, GoogleAuthProvider } from 'firebase/auth'

export class FirebaseAdapter {
    private app: FirebaseApp

    constructor() {
        this.app = initializeApp({
            apiKey: 'AIzaSyAclRkXfu8NvEMdgJtEtrbiZQ6TPBZ4eCQ',
            authDomain: 'finance-app-388115.firebaseapp.com',
            projectId: 'finance-app-388115',
            storageBucket: 'finance-app-388115.appspot.com',
            messagingSenderId: '80704575118',
            appId: '1:80704575118:web:6facf78b9ff14e344e5bdf',
            measurementId: 'G-KCM1FGYYBP'
        })
    }

    getAppInstance(): FirebaseApp {
        return this.app
    }

    getAuthInstance(): Auth {
        return getAuth(this.app)
    }

    getProvider(): GoogleAuthProvider {
        const provider = new GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        return provider
    }
}