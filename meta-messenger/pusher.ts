import Pusher from "pusher";
import ClientPusher from 'pusher-js'

const key = process.env.NEXT_PUBLIC_PUSHER_KEY
const appId = process.env.NEXT_PUBLIC_PUSHER_APP_ID
const cluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER
const secret = process.env.NEXT_PUBLIC_PUSHER_SECRET



export const serverPusher = new Pusher({
    appId: appId!,
    key: key!,
    secret: secret!,
    cluster: cluster!,
    useTLS: true,



});


export const clientPusher = new ClientPusher(key!, {
    cluster: cluster!,
    forceTLS: true
});
