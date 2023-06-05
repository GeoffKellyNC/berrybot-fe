import { combineReducers } from "redux";

import { appErrorNotification } from "./notify/notify.reducer";
import { appNotification } from "./notify/notify.reducer";
import { criticalNotification } from "./notify/notify.reducer";
import { isAuthenticated } from "./auth/auth.reducer";
import { isVerifying } from "./auth/auth.reducer";
import { nofifyActive } from "./notify/notify.reducer";
import { userData } from "./user/user.reducer";


export default combineReducers({
    appErrorNotification,
    appNotification,
    criticalNotification,
    isAuthenticated,
    isVerifying,
    nofifyActive,
    userData
})