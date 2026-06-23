# 1. What is API?

API stands for Applicati.json Programming Interface.

Think of an API as a messenger that allows two software applicati.jsons to communicate with each other.

Simple Example :-----------
Imagine you're at a restaurant:----------

You = the user/applicati.json making a request
Waiter = the API
Kitchen = the server/applicati.json providing data

You tell the waiter what you want, the waiter takes your request to the kitchen, and then brings back the food. Similarly, an API takes a request from .jsone applicati.json, gets the needed informati.json or acti.json from another applicati.json, and returns the result.

# 2. REST API কী?--------------------------------------------------------

REST (Representati.jsonal State Transfer) হলো API ডিজাইন করার একটি জনপ্রিয় আর্কিটেকচারাল স্টাইল। REST API HTTP protocol ব্যবহার করে client এবং server-এর মধ্যে data আদান-প্রদান করে।

ধরুন, তুমি একটি User Management System তৈরি করছো। Client (Fr.jsontend) server-এর কাছে user data চাইবে বা পাঠাবে REST API-এর মাধ্যমে।

---

What is a REST API?

REST (Representati.jsonal State Transfer) is a popular architectural style for designing APIs. A REST API uses the HTTP protocol to exchange data between a client and a server.

For example, suppose you are building a User Management System. The client (fr.jsontend applicati.json) can request user data from the server or send user data to the server through a REST API.

In this setup:

The client sends an HTTP request (such as GET, POST, PATCH, or DELETE).
The server processes the request.
The server returns a resp.jsonse, usually in JS.json format.

---

\*\*\* HTTP Methods-------------------------------------------------
REST API-তে সাধারণত ৪টি Method বেশি ব্যবহার করা হয়:
get, post, patch/put, delete

---

\*\*\* REST API-এর 6টি মূল নীতি--------------------------------
Client-Server Architecture
Stateless (Server request-এর মাঝে state রাখে না)
Cacheable
Uniform Interface
Layered System
Code .json Demand (Opti.jsonal)

---

\*\*\* Status Codes--------------------------------------------------------
Server Resp.jsonse-এর সাথে Status Code পাঠায়।
200, 201, 400, 401, 403, 404, 500

---

# 3. What is scalable?-------------------------------------------------

Scalable means a system can handle increasing users, traffic, or data without significant performance problems.

Scalable (স্কেলেবল) বলতে বোঝায়, কোনো সফটওয়্যার, অ্যাপ্লিকেশন বা সিস্টেম এমনভাবে তৈরি করা হয়েছে যাতে ব্যবহারকারী, ট্রাফিক বা ডেটা অনেক বেড়ে গেলেও সেটি ভালোভাবে কাজ করতে পারে।
ধরো তুমি একটি REST API তৈরি করেছো।

শুরুতে:
১০০ জন user API ব্যবহার করছে → সব ঠিক আছে।
কিছুদিন পরে:
১০,০০০ জন user API ব্যবহার করছে।

# 4. express.json()---------------------------------------------

Express-এ express.json() হলো একটি built-in middleware যা client থেকে আসা JS.json data কে parse করে JavaScript object-এ রূপান্তর করে।

client request -----------
{
"name": "Azizul",
"email": "azizul@gmail.com"
}

**_express.json() = JS.json Body Parser_**
\*\*\* যদি app.use(express.json()) না দাও, তাহলে
req.body === undefined

\*\* javascript object fromate to change data
{
name: "Azizul",
email: "azizul@gmail.com"
}

# 5. MVC pattern ---------------------------------------

    -> model, view, C.jsontroller
    -> src--> app.ts--> routes-> route-> C.jsontroller-> service-> model--> database

    -> Client request পাঠায়
    -> C.jsontroller request receive করে
    -> C.jsontroller Model-কে call করে
    -> Model Database থেকে data আনে
    -> C.jsontroller resp.jsonse পাঠায়

# Mango server project planing------------------------------------------------------------

1. user --> name, email, ph.jsone, password, role
2. mango --> name, image, variety, price, origin, seas.json
3. order--> userId, mangoId, quantity, status

# 6. env--server.ts --> every file access name from .env--------------------------------

\*\* Single file access----------------------
import dotenv from "dotenv";
dotenv.c.jsonfig();

c.jsonst PORT = process.env.PORT || 5000;

\*\*\* Multiple file access-------------------
--> src--> c.jsonfig--> index.ts--->

import dotenv from "dotenv";

dotenv.c.jsonfig();
//dotenv.c.jsonfig({ path: path.join(process.cwd()) });

export default {
node_env: process.env.NODE_ENV,
port: process.env.PORT,
database_url: process.env.DATABASE_URL as string,
base_url: process.env.URL,
};

# 7. Middleware express--------------------------------------------------

1. express.urlencoded()-----------------------------------------------------------
   app.use(express.urlencoded({ extended: true }));---------
   HTML form data parse করে।
   login form
   c.jsontact form
   উদাহরণ:
   name=Azizul&age=25

2. cookieParser() -----------------------------------------
   Browser থেকে আসা cookies read করতে সাহায্য করে।
   cookie: token=abc123

3. app.use(m.jsongoSanitize());--------------------------------
   M.jsongoDB injecti.json attack থেকে রক্ষা করে।

4. app.use(hpp());--------------------------------
   Duplicate query parameters আটকায়।
   ✔ clean single value রাখে
   👉 এটা c.jsonfusi.json create করে

5. import xss from "xss-clean";-------------------------------
   app.use(xss());

   xss-clean.d.ts হলো একটি custom TypeScript file যা missing types fix করার জন্য module declarati.json করে।
   User input থেকে malicious script remove করে।
   xss-clean কী করে? 👉 এই script remove করে দেয়

6. import m.jsongoSanitize from "express-m.jsongo-sanitize";-------------
   app.use(m.jsongoSanitize());
   এই middleware তোমার request data থেকে dangerous M.jsongoDB operators remove করে।

7. user 1 minutes click to handle.........------------------------
   import ratLimit from "express-rate-limit";
   c.jsonst limiter = ratLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
   app.use(limiter);

---

import rateLimit from "express-rate-limit";

c.jsonst limiter = rateLimit({
windowMs: 1 _ 60 _ 1000, // 1 minute
max: 10, // max 10 requests
});

app.use(limiter);

8.  Cache c.jsontrol...................----------------
    app.set("etag", WEB_CACHE);
    app.set("etag", "str.jsong"); // app.set("etag", false);

9.  DefaultErrorHandler------------------------------------------------------------
    import { Request, Resp.jsonse, NextFuncti.json } from "express";
    c.jsonst DefaultErrorHandler = (
    err: any,
    req: Request,
    res: Resp.jsonse,
    next: NextFuncti.json
    ) => {
    c.jsonsole.error(err);

    res.status(500).json({
    success: false,
    message: "Something went wr.jsong",
    });
    };

    export default DefaultErrorHandler;
    app.use(DefaultErrorHandler);

10. NotFoundError(404)-----------------------------------------------------------
    import { Request, Resp.jsonse, NextFuncti.json } from "express";

        c.jsonst NotFoundError = (req: Request, res: Resp.jsonse, next: NextFuncti.json) => {
        res.status(404).json({
        success: false,
        message: "Route not found",
        });
        };

    export default NotFoundError;
    app.use(NotFoundError);

11. Router Error handler..........----------------
    app.use((req, res, next) => {
    res.send("Not Found!");
    });

12. Server Error handler.................
    app.use((err, req, res, next) => {
    res.send("Server is not Found!");
    });

# 8. 🧠 Form-data কী?----------------------------------------

form-data 👉 এটা ব্যবহার করা হয় multipart/form-data request বানানোর জন্য
image upload করো
file upload করো
Postman থেকে form-data পাঠাও
external API-তে file পাঠাও

👉 তখন এই package কাজ করে

# 9. "axios": "^1.7.7",-----------------------------------

# 10. "nodemailer": "^6.9.16",----------------------------

# 11. cors------------------------------------------------

app.use(

cors({
credentials: true,
origin: "http://localhost:8000",
})
);

# 12. instance and create methods-------------------------------------------

1.  static,
2.  custom static,
3.  instance,
4.  pre,
5.  post

# 13. update data ----------------------------------------------------

c.jsonst data = await MangoModel.findByIdAndUpdate(mangoId, payload, {
new: true,runValidators: true
});
return data;

\*\* runValidators: true
Update data schema validati.json pass করেছে কিনা check করবে।

runValidators: true হলো M.jsongoose-এর একটি অপশন, যা update করার সময় Schema-এর validati.json চালু করে।

ডিফল্টভাবে update.jsone(), findByIdAndUpdate(), find.jsoneAndUpdate() ইত্যাদি মেথডে validati.json চলে না। তাই invalid data database-এ save হয়ে যেতে পারে।

# 14. pre hook ---> before the operati.json-------------------------------------------------

এই hook শুধু save() এবং create()-এ চলবে।
করো, তাহলে pre("save") চলবে না।
সেক্ষেত্রে pre("find.jsoneAndUpdate") বা service layer-এ totalPrice recalculati.json করতে হবে।

# 15. post hook ---> after the operati.json-------------------------------------------------

# 16-1. instance method---------------------------------------------------------------------

# 16-2. instance--custom instance method------------------------------------------------------

# 17-1. static method---------------------------------------------------------------------

# 17-2. static-custom method-----------------------------------------------------------------------

# 18. Deployment of eslint setup---------------------------------------

      1. src-------------------------------------------------
         --> app
         --> servcer.ts
         --> app.ts
         --> routes.ts

      2. "build": "tsc",------------------------------------------
      3. eslint-installati.json--------------------------------------
      4. npm i -D eslint @eslint/js typescript typescript-eslint
      4. npm i -D eslint @eslint/js typescript-eslint prettier eslint-c.jsonfig-prettier
      5. npm i -D tsx
      6. file add:--------------------------------------------------
         1. .eslintignore
         2. eslint.c.jsonfig
         3. eslint.c.jsonfig.mjs

      7. package.json-------------------------------------------------
          "dev": "tsx watch src/server.ts",
          "build": "tsc",
          "start": "node dist/server",
          "lint": "eslint .",
          "lint:fix": "eslint . --fix"

# 17. Vercel deployment (CLI--github)--------------------------------------------------

1. create file : vercel.json
   {

"versi.json": 2,
"builds": [
{
"src": "dist/server",
"use": "node"
}
],
"routes": [
{
"src": "/(.*)",
"dest": "dist/server"
}
]
}

## 2. vercel ---> vercel CLI installati.json

    --> install---------------------------------------
    - npm i -g vercel
    - vercel -v
    - vercl login
    - vercel --prod
    - vercel logout

---> vercel project name ---> protfolio  
 ---> not vercel project name ---> protfolio/page-blogs

# npx -----------------------------------------------

--> npx vercel
--> npx vercel login
-- npx vercel --prod
--> npx vercel logout
--> npx vercel vercel

# Github-----------------------------------------------

---> github file add
---> .env import add
