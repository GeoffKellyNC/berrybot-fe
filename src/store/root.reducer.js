import { combineReducers } from "redux";

import { appErrorNotification } from "./notify/notify.reducer";
import { appNotification } from "./notify/notify.reducer";
import { criticalNotification } from "./notify/notify.reducer";
import { currentSongPlaying } from "./music/music.reducer";
import { currentStreamData } from "./twitch/twitch.reducer";
import { isAuthenticated } from "./auth/auth.reducer";
import { isVerifying } from "./auth/auth.reducer";
import { music } from "./music/music.reducer";
import { nofifyActive } from "./notify/notify.reducer";
import { pendingMusic } from "./admin/admin.reducer";
import { twitchChatSettings } from "./twitch/twitch.reducer";
import { userData } from "./user/user.reducer";
import { userLevel } from "./auth/auth.reducer";


export default combineReducers({
    appErrorNotification,
    appNotification,
    criticalNotification,
    currentSongPlaying,
    currentStreamData,
    isAuthenticated,
    isVerifying,
    music,
    nofifyActive,
    pendingMusic,
    twitchChatSettings,
    userData,
    userLevel
}); 