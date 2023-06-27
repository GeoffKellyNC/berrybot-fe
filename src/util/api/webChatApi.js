import { axiosWithAuth } from "../axiosAuth";


const WEB_CHAT_EP = 'https://api.berrythebot.app/ai/chat-from-web'


 const webChatApi = async (channel, message) => { 
    try {
        const aiRes = await axiosWithAuth().post(WEB_CHAT_EP, {
            channel,
            message
        })

        return aiRes.data
    } catch (error) {
        console.log(error)
    }

}

export default webChatApi