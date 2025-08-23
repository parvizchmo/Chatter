import {Inngest} from "inngest"
import {connectDB} from "../db.js";
import {User} from "../models/user.model.js";

export const inngest = new Inngest({id: "chatter"})

const syncingUser = inngest.createFunction(
    {id: "sync-user"},
    {event: "clerk/user.created"},
    async ({event}) => {
        await connectDB()
        const {id, email_adresses, first_name, last_name, image_url} = event.data
        const newUser = {
            clerkId: id,
            email: email_adresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`,
            image_url: image_url,

        }
        await User.create(newUser)
        //T
    }
)

const deleteUser = inngest.createFunction(
    {id: "syncing-user"},
    {event: "clerk/user.created"},
    async ({event}) => {
        await connectDB()
        const {id} = event.data
        await User.deleteOne({clerkId: id})
    }
)
export const functions = [syncingUser,deleteUser];