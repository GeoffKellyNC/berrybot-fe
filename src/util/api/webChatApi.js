import { axiosWithAuth } from "../axiosAuth";

const LOCAL = process.env.REACT_APP_LOCAL_MODE

const WEB_CHAT_EP = 'https://api.berrythebot.app/ai/chat-from-web'


 const webChatApi = async (channel, message) => { 
    try {
        const aiRes = await axiosWithAuth().post(WEB_CHAT_EP, {
            channel,
            message
        })

        console.log('AiRes: ', aiRes.data)

        return aiRes.data
    } catch (error) {
        console.log(error)
    }

}

export default webChatApi