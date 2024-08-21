import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

// Account ke sabhi services:- create Account, logout, login ..etc
    async createAccount({email, password, name}) {
        try {
            // account.create me email aur password pass ho jayga tab new Account baan jayega
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) { // agar user already hai to login ho jayega by calling login method 
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount; // user nahi to create ho jayega
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // acount hai ki nahi
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

