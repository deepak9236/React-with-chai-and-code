import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// Note:- jab class bannate hai us class ko use karne ke liya humko object bananana padega.
//         First way:- ussa oject ki help se class me member ko use kar sakte hai
//         secound way:- Object baanna kar export kar do(class ke sabhi methods lage hoge pehle se). jaha use karna hoga vaa par object ko import karo aur use karo
//                 const authService = new AuthService();
//                 export default authService;

export class AuthService {
  // properties hai client and account
  client = new Client();
  account; // new Account es liya use nahi kiya kyoki usme(this.client)--> pass karna hai aur (this.client me --> setEndpoint(),setProject())

// The constructor initializes a client with a specified endpoint and project ID, and creates a new account using the client.
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Account ke sabhi services:- create Account, logout, login ..etc
  // this.account.create() ya Appwrite(create()--> appwrite ka method hai jo account create karta hai) hi create kar raha background me.
  // hum  createAccount({ email, password, name }) --> bas es method hai jisme appwite help karraha hai account create karne me
  // suppose you want to switch appwite then:- userAccount , counstuctor change karna hoga code me (createAccount ka koi lena dena nahi hai--> vo usi tarah user se data lega frontend par)
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create( ID.unique(), email, password, name);
      if (userAccount) {
        // agar user already hai to login ho jayega by calling login method
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount; // user nahi to create ho jayega
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
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

const authService = new AuthService(); // new key word use kar rahe hai matlab constructer hoga hi.
// authService object banne ga tab uske andar client, account rahe ga
// constructor apne aap call hoga jo clint and acoount me value set kar raha hai

export default authService;