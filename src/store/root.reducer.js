import { combineReducers } from "redux";

import { appErrorNotification } from "./notify/notify.reducer";
import { appNotification } from "./notify/notify.reducer";
import { criticalNotification } from "./notify/notify.reducer";
import { currentSongPlaying } from "./music/music.reducer";
import { currentStreamData } from "./twitch/twitch.reducer";
import { customCommands } from "./user/user.reducer";
import { isAuthenticated } from "./auth/auth.reducer";
import { isVerifying } from "./auth/auth.reducer";
import { music } from "./music/music.reducer";
import { nofifyActive } from "./notify/notify.reducer";
import { pendingMusic } from "./admin/admin.reducer";
import { scheduledMessages } from "./user/user.reducer";
import { twitchChatters } from "./twitch/twitch.reducer";
import { twitchChatterCount } from "./twitch/twitch.reducer";
import { twitchChatLog } from "./twitch/twitch.reducer";
import { twitchChatSettings } from "./twitch/twitch.reducer";
import { twitchMods } from "./twitch/twitch.reducer";
import { userData } from "./user/user.reducer";
import { userLevel } from "./auth/auth.reducer";


export default combineReducers({
    appErrorNotification,
    appNotification,
    criticalNotification,
    currentSongPlaying,
    currentStreamData,
    customCommands,
    isAuthenticated,
    isVerifying,
    music,
    nofifyActive,
    pendingMusic,
    scheduledMessages,
    twitchChatters,
    twitchChatterCount,
    twitchChatLog,
    twitchChatSettings,
    twitchMods,
    userData,
    userLevel
}); 