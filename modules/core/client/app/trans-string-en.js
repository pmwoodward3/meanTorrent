(function (app) {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module(app.applicationModuleName)
    .config(transConfig);

  // **************************************************
  // English Strings
  // --------------------------------------------------
  // Don`t change other code
  // **************************************************

  var string_en = {
    COMINGSOON: 'coming soon...',

    //client topbar menu
    MENU_CHAT: 'Chat',
    MENU_TORRENTS: 'Torrents',
    MENU_TORRENTS_ADMIN: 'Manage Torrents',
    MENU_USERS_ADMIN: 'Manage User',
    MENU_UPLOAD: 'Upload',
    MENU_FORUMS: 'Forums',
    MENU_RANKING: 'Ranking',
    MENU_RULES: 'Rules',
    MENU_VIP: 'VIP',
    MENU_ADMIN: 'Admin',

    //sub menu of torrents
    MENU_TORRENTS_SUB: {
      SUB_MOVIE: 'Movie',
      SUB_MTV: 'MTV',
      SUB_MUSIC: 'Music',
      SUB_OTHER: 'Other'
    },

    //client menu
    SIGNOUT: 'Logout',
    SIGNIN: 'Login',
    SIGNUP: 'Register',
    EDIT_PROFILE: 'Edit Profile',
    EDIT_PROFILE_PIC: 'Edit Profile Picture',
    CHANGE_PASSWORD: 'Change Password',
    RESET_PASSKEY: 'Reset Passkey',
    MANAGE_SOCIAL_ACCOUNTS: 'Manage Social Accounts',

    //Upload rules
    UPLOAD_RULES: 'Upload Rules:',
    UPLOAD_RULES_COUNT: '6',
    UPLOAD_RULES_CONTENT: [
      'The torrent file`s Tracker URL must be: <mark><strong>{{url}}</strong></mark>.',
      'The torrent file`s TMDB_ID must be TheMovieDB resources ID, <strong><a href="https://www.themoviedb.org/" target="_blank">you can find the ID from here</a></strong>.',
      'The resources detail info is pulled from the ID, if everything looks good, hit submit. ',
      'Select one or more tags that match the resources, which will play a significant role in your search results.',
      'After submission, the upload may need to be approved by management, if it does not meet our requirments or is objectionable it will be deleted directly.',
      'For additional assistance, please contact our administrator: <strong><a href="mailto:#">{{admin}}</a></strong>.'
    ],

    //HomeController & home views
    LOADING_TOP: 'Loading recommended info, please wait...',
    TOP_MOVIE_INFO_ERROR: 'Top Movie info retrieval failed',
    NEWEST_MOVIE_LIST: 'Newest Movie Torrents',

    //element title/alt
    TITLE_ALT: {
      SEEDS: 'Seeds',
      LEECHERS: 'Leechers',
      FINISHED: 'Finished',
      IMDB_VOTES: 'IMDB Votes',
      MORE_TAGS: 'Show More Search Tags',
      RESET_TAGS: 'Reset All Search Tags',
      DOWNLOAD_TORRENT: 'Download torrent'
    },

    //table fields
    TABLE_FIELDS: {
      //torrent
      INFO: 'Torrent info',
      SIZE: 'Size',
      SEEDS_LEECHERS_FINISHED: 'S/L/F',
      PUBLISHER: 'Uploader',
      ADMIN_TOOLS: 'Admin Tools',
      LIFETIME: 'Life',
      VOTES: 'Votes',

      //peer
      USERNAME: 'DisplayName',
      UPLOADED: 'Uploaded',
      DOWNLOADED: 'Downloaded',
      RATIO: 'Ratio',
      FINISHED: 'Finished',
      STARTED: 'Started',
      ACTIVE: 'Active',
      CLIENT: 'Client',
      CONNECTABLE: 'Connectable',

      //ranking
      UPLOAD: 'Uploaded',
      DOWNLOAD: 'Downloaded',
      SEEDED: 'Seeded',
      LEECHED: 'Leeched',
      SCORE: 'Score',
      JOINED: 'Joined'
    },

    //page title
    PAGETITLE: {
      UPLOAD: 'Upload',
      MOVIE_LIST: 'Movie List',
      TORRENT_INFO: 'Torrent Info',
      RANKING: 'Ranking',
      RULES: 'Rules',
      VIP: 'Vip',
      FORUM: 'Forum',
      ADMIN_USER_LIST: 'User List',
      ADMIN_USER_VIEW: 'View User',
      ADMIN_USER_EDIT: 'Edit User',
      ADMIN_TORRENTS_LIST: 'Torrents List',
      PASSWORD_FORGOT: 'Password forgot',
      PASSWORD_RESET: 'Password reset'
    },

    //TorrentsController & views
    MOVIE_PAGE_INFO_ERROR: 'Movie info retrieval failed',
    MOVIE_PAGE_INFO_EMPTY: 'Movie info not found',
    TAGS_SEARCH: 'Tags Search',
    CA_KEYWORD: 'Keyword',
    CA_TORRENT_STATUS: 'Torrent status',
    PH_KEYWORD: 'Search keyword',
    CLEAR_ALL_CONDITION: 'Clear All Condition',
    MORE_TAGS: 'More Tags',
    CA_RESET: 'Reset',
    CA_DOWNLOAD: 'Download',
    TORRENT_DOWNLOAD_ERROR: 'Torrent file download failed',
    TORRENTS_DOWNLOAD_SUCCESSFULLY: 'Torrent file download successful',

    //torrent info
    UNIT_MILLION: 'million',
    UNIT_MITUTE: 'min',
    TMDB_INFO_OK: 'Load TMDB movie info OK',
    TMDB_INFO_FAILED: 'Load TMDB movie info ERROR',
    TAB_VIDEO_INFO: 'Video Info',
    TAB_USER_SUBTITLE: 'Subtitle Info',
    TAB_USER_INFO: 'User Info',
    TAB_OTHER_TORRENTS: 'Other Torrents',
    TAB_MY_PANEL: 'My Pannel',
    TAB_ADMIN_PANEL: 'Admin Panel',

    TRANCKER_URL: 'Tracker Url',
    ATTRIBUTE_TAGS: 'Video Attribute (tags)',
    VIDEO_NFO: 'Video NFO',
    VIDEO_SIZE: 'Video Size',
    VIDEO_SALE_INFO: 'Video Sale Info',
    SALE_EXPIRES_TIME: 'expires',
    UPLOAD_SUBTITLE: 'Upload Subtitle file',
    SUBTITLE_LIST: 'Subtitle list',
    SUBTITLE_RULES: {
      0: 'If the torrent has no subtitle files, you have the following actions.',
      1: 'Please note the filename format, such as: <mark>Movie (20XX) RESp.eng/chi.srt/ass</mark>'
    },
    MY_TORRENT_RULES: {
      0: 'This torrent file is uploaded by you, you have actions bellow.',
      1: 'For additional assistance, please contact our administrator: <strong><a href="mailto:#">{{admin}}</a></strong>'
    },
    ENTER_VIDEO_NFO: 'Please enter video NFO',
    TORRENT_SEED_USERS: 'Seed Users',
    TORRENT_LEECHER_USERS: 'Leecher Users',
    TORRENT_FINISHED_USERS: 'Finished Users',
    SUBTITLE_UPLOAD_FAILED: 'Failed to upload subtitle file',
    SUBTITLE_DELETE_ICON_TITLE: 'Delete this subtitle',
    SUBTITLE_CONFIRM_OK: 'Delete',
    SUBTITLE_CONFIRM_CANCEL: 'Cancel',
    SUBTITLE_CONFIRM_HEADER_TEXT: 'Confirm Deletion',
    SUBTITLE_CONFIRM_BODY_TEXT: 'Are you sure want to delete this subtitle?',
    SUBTITLE_DOWNLOAD_SUCCESSFULLY: 'Subtitle file download successfully',
    SUBTITLE_DOWNLOAD_ERROR: 'Subtitle file download failed',
    SUBTITLE_DELETE_SUCCESSFULLY: 'Subtitle file delete successfully',
    SUBTITLE_DELETE_ERROR: 'Subtitle file deletion failed',
    OTHER_TORRENT_LIST_TITLE: 'This resources has {{x}} other versions, you can view or download from here:',

    ADMIN_BASIC_COMMAND: 'Basic Command',
    ADMIN_BASIC_REVIEWED: 'Reviewed',
    ADMIN_BASIC_UPDATE: 'Update torrent info from TMDB',
    ADMIN_BASIC_DELETE: 'Delete torrent',
    ADMIN_BASIC_TYPE_SET: 'Sale Type',
    ADMIN_SALE_TYPE_SET: 'Sale Type Set',
    ADMIN_BASIC_RLEVEL_SET: 'Recommend Level',
    ADMIN_RLEVEL_SET: 'Recommend Level Set',

    TORRENT_DELETE_CONFIRM_OK: 'Delete',
    TORRENT_DELETE_CONFIRM_CANCEL: 'Cancel',
    TORRENT_DELETE_CONFIRM_HEADER_TEXT: 'Confirm Deletion',
    TORRENT_DELETE_CONFIRM_BODY_TEXT: 'Are you sure want to delete this torrent?',
    TORRENT_DELETE_SUCCESSFULLY: 'Torrent delete successfully',
    TORRENT_DELETE_ERROR: 'Torrent deletion failed',
    TORRENT_UPDATE_CONFIRM_OK: 'Update',
    TORRENT_UPDATE_CONFIRM_CANCEL: 'Cancel',
    TORRENT_UPDATE_CONFIRM_HEADER_TEXT: 'Update Confirm',
    TORRENT_UPDATE_CONFIRM_BODY_TEXT: 'Are you sure want to update the torrent info from TMDB?',
    TORRENT_UPDATE_SUCCESSFULLY: 'Torrent info update successfully',
    TORRENT_UPDATE_ERROR: 'Torrent info update failed',
    TORRENT_SETSALETYPE_SUCCESSFULLY: 'Torrent sale type set successfully',
    TORRENT_SETSALETYPE_ERROR: 'Torrent sale type set failed',
    TORRENT_SETREVIEWED_SUCCESSFULLY: 'Torrent status reviewed set successfully',
    TORRENT_SETREVIEWED_ERROR: 'Torrent status reviewed set failed',
    TORRENT_SETRLEVEL_SUCCESSFULLY: 'Torrent recommend level set successfully',
    TORRENT_SETRLEVEL_ERROR: 'Torrent recommend level set failed',

    //page text
    PAGE_TEXT_FIRST: 'First',
    PAGE_TEXT_PREVIOUS: 'Previous',
    PAGE_TEXT_NEXT: 'Next',
    PAGE_TEXT_LAST: 'Last',

    //comment
    USER_COMMENT_LIST: 'User Comments List',
    POST_NEW_COMMENT: 'Post New Comment',
    EDIT_COMMENT: 'Edit Comment',
    REPLY_COMMENT: 'Reply Comment',
    SUBMIT_COMMENT: 'Submit Comment',
    SUBMIT_CANCEL: 'Cancel',
    MARKDOWN_LINK: 'Styling with Markdown is supported',
    COMMENT_REPLY_BUTTON: '@ & reply',
    COMMENT_REPLY_DELETE: 'Delete',
    COMMENT_REPLY_EDIT: 'Edit',
    COMMENT_EDITED_INFO: 'Edit at',
    COMMENT_CONFIRM_OK: 'Delete',
    COMMENT_CONFIRM_CANCEL: 'Cancel',
    COMMENT_CONFIRM_HEADER_TEXT: 'Confirm Deletion',
    COMMENT_CONFIRM_BODY_TEXT: 'Are you sure want to delete this comment?',
    COMMENT_CONFIRM_BODY_TEXT_REPLY: 'Are you sure want to delete this comment reply?',
    COMMENT_EDIT_ICON_TITLE: 'Edit this reply',
    COMMENT_DELETE_ICON_TITLE: 'Delete this reply',

    //TorrentsUploadController & views
    TORRENTS_UPLOAD_SUCCESSFULLY: 'Successfully upload file',
    TORRENTS_UPLOAD_FAILED: 'Failed to upload file',
    TORRENTS_NO_FILE_SELECTED: 'No file selected',

    SELECT_TORRENT_FILE: 'Please select the torrent file',
    SELECT_FILE: 'Select file',
    DO_UPLOAD: 'Upload',
    ENTER_TMDB_ID: 'Please enter theMovieDB id 　<span style="font-size: 10pt;">[<a href="https://www.themoviedb.org/" target="_blank">find id on themofiedb.org</a>]</span>',
    LOAD_TMDB_INFO: 'Load info',
    TMDB_ID: 'TMDB ID',
    TMDB_ID_OK: 'TMDB ID retrival successful',
    TMDB_ID_ERROR: 'TMDB ID is error! Get info failed',
    TMDB_ID_REQUIRED: 'Please enter TMDB ID',
    TMDB_MOVIE_INFO: 'The movie info from TMDB',
    TMDB_IS_LOADING: 'Loading movie info, please wait...',
    SELECT_TAGS: 'Please select any tags for the resource',
    TORRENTS_SUBMIT_UPLOAD: 'Agree the rules and submit your resource',
    SUBMIT_BUTTON: 'OK, SUBMIT NOW',
    CANCEL_BUTTON: 'NO, CANCEL IT',
    AGREE_RULES: 'I agree and already read all the rules, <a href="#">read here</a>',
    DOWNLOAD_TORRENT: 'Download Torrent',

    //ranking view
    PAGE_HEADER_RANKING_UPLOAD: 'Uploaded Ranking',
    PAGE_HEADER_RANKING_DOWNLOAD: 'Downloaded Ranking',
    PAGE_HEADER_RANKING_RATIO: 'Ratio Ranking',
    PAGE_HEADER_RANKING_SCORE: 'Score Ranking',

    //admin views
    USERS_LIST: 'Users',
    USERS_UPDATE: 'Update',
    TORRENT_STATUS_NEW: 'NEW',
    TORRENT_STATUS_REVIEWED: 'REVIEWED',
    TORRENT_STATUS_DELETED: 'DELETED',
    TORRENT_STATUS_ALL: 'ALL',
    TORRENT_RECOMMEND_LEVEL: 'Recommend Level',
    TORRENT_RECOMMEND_LEVEL_ITEM: {
      LEVEL0: 'NONE',
      LEVEL1: 'LEVEL1',
      LEVEL2: 'LEVEL2',
      LEVEL3: 'LEVEL3'
    },

    //vip,rules views
    BUTTON_DNATE: 'Donate Vip',

    //user settings
    SETTINGS: 'Settings',
    BUTTON_SAVE_PROFILE: 'Save Profile',
    BUTTON_SELECT_PICTURE: 'Select Picture',
    BUTTON_USE_THIS_PICTURE: 'Use This Picture',
    BUTTON_CANCEL: 'Cancel',
    BUTTON_COMPLETE: 'Complete',
    BUTTON_SAVE_PASSWORD: 'Save Password',
    CAPTION_CURRENT_PASSWORD: 'Current Password',
    CAPTION_NEW_PASSWORD: 'New Password',
    CAPTION_VERIFY_PASSWORD: 'Verify Password',
    CAPTION_REQUIRED_CURRENT_PASSWORD: 'Your current password is required.',
    CAPTION_REQUIRED_NEW_PASSWORD: 'Enter a new password.',
    CAPTION_REQUIRED_VERIFY_PASSWORD: 'Verify your new password.',
    CAPTION_PASSWORD_NOT_MATCH: 'Passwords do not match.',
    CURRENT_PASSKEY: 'Current Passkey: <mark class="text-danger">{{passkey}}</mark>',
    RESET_PASSKEY_NOTE: 'NOTE: Your passkey is unique, if you reset your passkey, you must re-download all torrent files, and re-add them to your download client.',

    RESET_PASSKEY_CONFIRM_OK: 'Reset',
    RESET_PASSKEY_CONFIRM_CANCEL: 'Cancel',
    RESET_PASSKEY_CONFIRM_HEADER_TEXT: 'Reset Passkey',
    RESET_PASSKEY_CONFIRM_BODY_TEXT: 'Are you sure want to reset your passkey?',
    RESET_PASSKEY_SUCCESSFULLY: 'Passkey reset successfully',
    RESET_PASSKEY_ERROR: 'Passkey reset failed',

    //chat view
    CHAT_USERS_LIST: 'Users List',
    CHAT_WELCOME: 'Welcome to the chat room, please follow the rules, and have a good time!',
    CHAT_PLACEHOLDER_INPUT: 'input new message and press enter',
    CHAT_USER_JOIN: 'is now connected and join the room.',
    CHAT_USER_QUIT: 'is now disconnect and quit the room.',
    CHAT_CLEAN_MESSAGE: 'Clean message list',
    CHAT_BOLD_MESSAGE: 'Bold font style, please use tag: <b>message</b>',
    CHAT_ITALIC_MESSAGE: 'Italic font style, please use tag: <i>message</i>',
    CHAT_MESSAGE_ALREADY_CLEAN: '*** chat messages list already be cleaned',
    CHAT_FONT_BOLD: 'Font Bold',
    CHAT_FONT_ITALIC: 'Font Italic',
    CHAT_BAN_KICK: 'Kick out and ban IP',
    CHAT_BAN_KICK_REASON: 'Contant site management.',
    CHAT_BAN_KICK_MESSAGE: '{{who}} was kicked or ban by {{by}} ({{reason}})',

    CHAT_CONFIRM_BAN_OK: 'Ban & Kick',
    CHAT_CONFIRM_BAN_CANCEL: 'Cancel',
    CHAT_CONFIRM_BAN_HEADER_TEXT: 'Ban & Kick Confirm',
    CHAT_CONFIRM_BAN_BODY_TEXT: 'Are you sure want to kick this user and ban the ip?',
    CHAT_DISCONNECT: 'disconnect from server, please check your network or chat server is down',
    CHAT_FONT_COLOR: 'Font color',

    //footer view
    MIT_PROTOCOL: 'The source of this project is protected by <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">MIT</a> open source protocol',
    GIT_REPO: 'Power by &copy;meanTottent，<a href="https://github.com/taobataoma/meanTorrent" target="_blank">view on GitHub</a>',

    ///////////////////////the movie db fields////////////////////////////////
    TMDB_FIELDS: {
      ID: 'id',
      IMDB_ID: 'imdb_id',
      IMDB_LINK: 'IMDB Link',
      TMDB_LINK: 'TMDB Link',
      HOMEPAGE: 'homepage',
      ADULT: 'adult',
      BUDGET: 'budget',
      REVENUE: 'revenue',
      ORIGINAL_LANGUAGE: 'original_language',
      ORIGINAL_TITLE: 'original_title',
      TITLE: 'title',
      BELONGS_TO_COLLECTION: 'belongs_to_collection',
      GENRES: 'genres',
      OVERVIEW: 'overview',
      POPULARITY: 'popularity',
      PRODUCTION_COMPANIES: 'production_companies',
      PRODUCTION_COUNTRIES: 'production_countries',
      RELEASE_DATE: 'release_date',
      RUNTIME: 'runtime',
      SPOKEN_LANGUAGES: 'spoken_languages',
      STATUS: 'status',
      TAGLINE: 'tagline',
      VIDEO: 'video',
      VOTE_AVERAGE: 'vote_average',
      VOTE_COUNT: 'vote_count',
      VOTE_UNIT: 'users',
      BACKDROP_PATH: 'backdrop_path',
      POSTER_PATH: 'poster_path',
      CAST: 'cast:',
      DIRECTOR: 'Director'
    },

    /////////////////////////resources tag fields///////////////////////////////////
    RESOURCESTAGS: {
      TYPE: {
        SELF: 'Type',
        BLU_RAY: 'BLU_RAY',
        REMUX: 'REMUX',
        ENCODE: 'ENCODE'
      },

      RESOLUTION: {
        SELF: 'Resolution',
        S4K: '4K',
        S1080P: '1080P',
        S720P: '720P'
      },

      VIDEO: {
        SELF: 'Video Codec',
        AVC: 'AVC',
        X265: 'X265',
        X264: 'X264'
      },

      AUDIO: {
        SELF: 'Audio Codec',
        AAC: 'AAC',
        DTS: 'DTS',
        DTS_HD: 'DTS HD',
        ATMOS_TRUEHD: 'Atmos TrueHD'
      },

      THREED: {
        SELF: '2D/3D',
        T2D: '2D',
        T3D: '3D',
        T2D_3D: '2D-3D'
      },

      RANKING: {
        SELF: 'Ranking',
        IMDB_TOP100: 'IMDB TOP100',
        IMDB_TOP250: 'IMDB TOP250',
        DOUBAN_TOP100: 'Douban TOP100',
        DOUBAN_TOP250: 'Douban TOP250'
      },

      REGION: {
        SELF: 'Region',
        CHINA: 'China',
        JAPAN: 'Japan',
        KOREA: 'Korea',
        INDIA: 'India',
        ARAB: 'Arab'
      },

      MODIFY: {
        SELF: 'Modify',
        DIY: 'DIY',
        GUOPEI: 'Mandarin',
        ZHONGZI: 'Chinese Subtitle'
      }
    }
  };

  // **************************************************
  // English Strings end
  // **************************************************

  // config $translateProvider
  transConfig.$inject = ['$translateProvider'];
  function transConfig($translateProvider) {
    $translateProvider.translations('en', string_en);
  }

}(ApplicationConfiguration));
