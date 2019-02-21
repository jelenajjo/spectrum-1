// @flow
const IS_PROD = !process.env.FORCE_DEV && process.env.NODE_ENV === 'production';

export const SEND_NEW_MESSAGE_EMAIL = 'send new message email';
export const SEND_NEW_DIRECT_MESSAGE_EMAIL = 'send new direct message email';
export const SEND_COMMUNITY_INVITE_EMAIL = 'send community invite email';
export const SEND_NEW_USER_WELCOME_EMAIL = 'send new user welcome email';
export const SEND_NEW_COMMUNITY_WELCOME_EMAIL =
  'send new community welcome email';

export const SEND_THREAD_CREATED_NOTIFICATION_EMAIL =
  'send thread created notification email';
export const SEND_DIGEST_EMAIL = 'send digest email';
export const SEND_EMAIL_VALIDATION_EMAIL = 'send email validation email';
export const SEND_ADMINISTRATOR_EMAIL_VALIDATION_EMAIL =
  'send administrator email validation email';
export const SEND_ADMIN_COMMUNITY_CREATED_EMAIL = 'admin community created';
export const SEND_NEW_MENTION_THREAD_EMAIL = 'send thread mention email';
export const SEND_NEW_MENTION_MESSAGE_EMAIL = 'send message mention email';
export const SEND_ADMIN_TOXIC_MESSAGE_EMAIL = 'admin toxic content email';
export const SEND_ADMIN_SLACK_IMPORT_PROCESSED_EMAIL =
  'admin slack import processed email';
export const SEND_ACTIVE_COMMUNITY_ADMIN_REPORT_EMAIL =
  'send active community admin report email';
export const SEND_PRIVATE_CHANNEL_REQUEST_SENT_EMAIL =
  'send request join private channel email';
export const SEND_PRIVATE_CHANNEL_REQUEST_APPROVED_EMAIL =
  'send private channel request approved email';
export const SEND_PRIVATE_COMMUNITY_REQUEST_SENT_EMAIL =
  'send request join private community email';
export const SEND_PRIVATE_COMMUNITY_REQUEST_APPROVED_EMAIL =
  'send private community request approved email';
export const SEND_ADMIN_USER_SPAMMING_THREADS_NOTIFICATION_EMAIL =
  'send admin user spamming threads notification email';
export const SEND_ADMIN_USER_REPORTED_EMAIL = 'send admin user reported email';
export const SENDGRID_WEBHOOK_EVENT = 'process sendgrid webhook event';

export const NEW_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-1379042b64ba4c6093fecaec7161480a'
  : 'd-7a4c14fd440146f1b1cfcafb633bb040';
export const NEW_MENTION_THREAD_TEMPLATE = IS_PROD
  ? 'd-343ec51df23943e88d0709aa8e30312b'
  : 'd-ff421ea0112a4525b6615bcc666ede00';
export const NEW_MENTION_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-5ef46b71baee4c67bc46ab867e14d5bb'
  : 'd-637189bc871744e9846694bff9f572ae';
export const NEW_DIRECT_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-f2e518b1bf4347478bfe62bebcdcb85f'
  : 'd-f2e518b1bf4347478bfe62bebcdcb85f';
export const NEW_USER_WELCOME_TEMPLATE = IS_PROD
  ? 'd-584544303d44469081181d96e66146a9'
  : 'd-584544303d44469081181d96e66146a9';
export const COMMUNITY_INVITE_TEMPLATE = IS_PROD
  ? 'd-5d52175477b74997b2ae229a51f92dce'
  : 'd-5d52175477b74997b2ae229a51f92dce';
export const NEW_COMMUNITY_WELCOME_TEMPLATE = IS_PROD
  ? '14d97a348c4445fd8d58fac72ab9c48c'
  : '14d97a348c4445fd8d58fac72ab9c48c';

export const NEW_THREAD_CREATED_TEMPLATE = IS_PROD
  ? 'd-2809d28ff1cc4d89a503e04de3388411'
  : 'd-084c11332981443388ebdae05d0a2ff4';
export const DIGEST_TEMPLATE = IS_PROD
  ? 'd-54e8d4905da64158a98ddb92c9330583'
  : 'd-5e52250c25be4654af82172970551919';
export const EMAIL_VALIDATION_TEMPLATE = IS_PROD
  ? 'd-8cd6c640e2d944c7a4bb8877722ff00f'
  : 'd-9fbb3cc969364050aac891c255d31209';
export const ADMINISTRATOR_EMAIL_VALIDATION_TEMPLATE = IS_PROD
  ? 'd-c7ab6234c65b47d88413d9deaae0f7f1'
  : 'd-a60e1df2d5294c73818759be13f09df4';

export const ADMIN_COMMUNITY_CREATED_TEMPLATE =
  'd-a7087be1226d4ea88aa9a48db1e286fd';
export const ADMIN_TOXIC_MESSAGE_TEMPLATE =
  'd-f6e52c81dd8d49e29f23c5c6112d676b';
export const ADMIN_SLACK_IMPORT_PROCESSED_TEMPLATE =
  'd-80e4bcfafff548dc9f4bbe4453b393de';
export const ADMIN_ACTIVE_COMMUNITY_REPORT_TEMPLATE =
  'd-f8458ee08cb54001aa530f6a5d4874a7';
export const ADMIN_USER_SPAMMING_THREADS_NOTIFICATION_TEMPLATE =
  'd-51bb58e9db4840a9a4815c33af861123';
export const ADMIN_USER_REPORTED_TEMPLATE =
  'd-2610f4efe7cc435486f91eaaea2de9bc';

export const PRIVATE_CHANNEL_REQUEST_SENT_TEMPLATE = IS_PROD
  ? 'd-1d863d2d96844fd49fae8429f09c3ee6'
  : 'd-1d863d2d96844fd49fae8429f09c3ee6';
export const PRIVATE_CHANNEL_REQUEST_APPROVED_TEMPLATE = IS_PROD
  ? 'd-42f319a0d18c474c8e7cdb6ad01304f0'
  : 'd-42f319a0d18c474c8e7cdb6ad01304f0';

export const PRIVATE_COMMUNITY_REQUEST_SENT_TEMPLATE = IS_PROD
  ? '025124979b234781abcfb188bed745b6'
  : '025124979b234781abcfb188bed745b6';
export const PRIVATE_COMMUNITY_REQUEST_APPROVED_TEMPLATE = IS_PROD
  ? 'd-7f4e67e918d14e73962249825b1faf1a'
  : 'd-7f4e67e918d14e73962249825b1faf1a';

// types used to generate unsubscribe tokens
export const TYPE_DAILY_DIGEST = 'dailyDigest';
export const TYPE_WEEKLY_DIGEST = 'weeklyDigest';
export const TYPE_NEW_THREAD_CREATED = 'newThreadCreated';
export const TYPE_NEW_MESSAGE_IN_THREAD = 'newMessageInThreads';
export const TYPE_NEW_DIRECT_MESSAGE = 'newDirectMessage';
export const TYPE_NEW_MENTION = 'newMention';
export const TYPE_MUTE_CHANNEL = 'muteChannel';
export const TYPE_MUTE_COMMUNITY = 'muteCommunity';
export const TYPE_MUTE_THREAD = 'muteThread';
export const TYPE_MUTE_DIRECT_MESSAGE_THREAD = 'muteDirectMessageThread';
