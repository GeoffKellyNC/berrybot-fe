/* eslint-disable no-unused-vars */

const LOCAL = process.env.REACT_APP_LOCAL_MODE

 const local_redirect_uri = 'http://localhost:3000/redirect/';
 const dev_redirect_uri = 'https://berrythebot.app/redirect/'
 const beta_redirect_uri = 'https://beta.berrythebot.app/redirect/'
 
 
 
 const twitchLoginLink = ` https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=vs40ip3ilb143d90iez91xm66q8ww2&redirect_uri=${beta_redirect_uri}&scope=analytics:read:extensions+analytics:read:games+bits:read+channel:edit:commercial+channel:manage:broadcast+channel:manage:extensions+channel:manage:moderators+channel:manage:polls+channel:manage:predictions+channel:manage:raids+channel:manage:redemptions+channel:manage:schedule+channel:manage:videos+channel:read:editors+channel:read:goals+channel:read:hype_train+channel:read:polls+channel:read:predictions+channel:read:redemptions+channel:read:stream_key+channel:read:subscriptions+channel:read:vips+channel:manage:vips+clips:edit+moderation:read+moderator:manage:announcements+moderator:manage:automod+moderator:read:automod_settings+moderator:manage:automod_settings+moderator:manage:banned_users+moderator:read:blocked_terms+moderator:manage:blocked_terms+moderator:manage:chat_messages+moderator:read:chat_settings+moderator:manage:chat_settings+user:edit+user:edit:follows+user:manage:blocked_users+user:read:blocked_users+user:read:broadcast+user:manage:chat_color+user:read:email+user:read:follows+user:read:subscriptions+user:manage:whispers+channel:moderate+chat:read+chat:edit+whispers:read+whispers:edit+moderator:read:followers`


 export default twitchLoginLink;


