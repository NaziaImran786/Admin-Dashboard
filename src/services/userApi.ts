'use server'

import { client } from "@/sanity/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function clerkGetUserData() {
    const {userId}  = await auth();
    const user = await currentUser();

    // console.log('☑️userId',userId);
    // console.log('✅user',user);
    //  console.log('✅user:',`${user?.firstName} ${user?.lastName}`);
    //  console.log('✅user:',user?.externalAccounts[0].emailAddress);
    //  console.log('✅user:',user?.imageUrl);

     const userName  = `${user?.firstName} ${user?.lastName}`
     const userEmail = user?.externalAccounts[0].emailAddress
     const userImage = user?.imageUrl

     return{
        userName,
        userEmail,
        userImage,
        userId  
    }
}

export async function sanityUserPost(){
    const user = await clerkGetUserData()

    const userObject ={
        _type: "user",
        _id:`user-${user.userId}`,
        email:`${user.userEmail}`,
        name:`${user.userName}`,
        userId:`${user.userId}`,
        image:`${user.userImage}`,
    }

    const res = await client.createOrReplace(userObject)

    console.log("🚀 res:", res);
    
}

