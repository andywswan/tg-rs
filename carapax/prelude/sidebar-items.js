initSidebarItems({"enum":[["AllowedUpdate","Type of update to receive"],["Chat","Chat"],["ChatAction","Type of action to tell the user that some is happening on the bot's side"],["ChatId","Chat ID or username"],["ChatMember","Information about one member of a chat"],["CommandError","An error occurred when parsing command arguments"],["EditMessageResult","Result of editMessage* requests"],["EncryptedPassportElement","Information about documents or other Telegram Passport elements shared with the bot by the user"],["EncryptedPassportElementKind","Type of encrypted passport element"],["ErrorStrategy","Defines how to deal with errors in handlers"],["ForwardFrom","Sender of the original message"],["HandlerResult","Result of a handler"],["InlineQueryResult","Result of an inline query"],["InputMessageContent","Content of a message to be sent as a result of an inline query"],["MaskPositionPoint","The part of the face relative to which the mask should be placed"],["MediaGroupError","A media group error"],["MessageData","Contains message data"],["MessageKind","Contains chat-specific data"],["ParseMode","Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption."],["ReplyMarkup","Reply markup"],["Response","API Response"],["TextEntity","Respresents an entity in a text"],["UpdateKind","Kind of update"],["UserId","User ID"]],"struct":[["AddStickerToSet","Add a new sticker to a set created by the bot"],["Animation","An animation file (GIF or H.264/MPEG-4 AVC video without sound)"],["AnswerCallbackQuery","Send answer to callback query sent from inline keyboard"],["AnswerInlineQuery","Use this method to send answers to an inline query"],["AnswerPreCheckoutQuery","Respond to pre-checkout query"],["AnswerShippingQuery","Reply to shipping query"],["Api","Telegram Bot API client"],["ApiFuture","An API future"],["App","A Telegram Bot App"],["Audio","Audio file to be treated as music by the Telegram clients"],["BotCommand","Bot command"],["CallbackQuery","Incoming callback query from a callback button in an inline keyboard"],["ChannelChat","Channel chat"],["ChatMemberAdministrator","Chat admin"],["ChatMemberKicked","Kicked user"],["ChatMemberRestricted","Restricted user"],["ChatPhoto","Chat photo"],["ChosenInlineResult","Result of an inline query that was chosen by the user and sent to their chat partner"],["CommandsHandler","A simple commands handler"],["Config","An API config"],["Contact","Phone contact"],["CreateNewStickerSet","Create new sticker set owned by a user"],["DeleteChatPhoto","Delete a chat photo"],["DeleteChatStickerSet","Delete a group sticker set from a supergroup"],["DeleteMessage","Delete a message, including service messages"],["DeleteStickerFromSet","Delete a sticker from a set created by the bot"],["DeleteWebhook","Remove webhook integration if you decide to switch back to getUpdates"],["Document","General file (as opposed to photos, voice messages and audio files)"],["EditMessageCaption","Edit caption of message sent by the bot or via the bot (for inline bots)"],["EditMessageLiveLocation","Edit live location messages sent by the bot or via the bot (for inline bots)"],["EditMessageMedia","Edit audio, document, photo, or video messages"],["EditMessageReplyMarkup","Edit only the reply markup of messages sent by the bot or via the bot (for inline bots)"],["EditMessageText","Edit text and game messages sent by the bot or via the bot (for inline bots)"],["EncryptedCredentials","Data required for decrypting and authenticating EncryptedPassportElement"],["EncryptedPassportElementAddress","Address"],["EncryptedPassportElementBankStatement","Bank statement"],["EncryptedPassportElementDriverLicense","Driver license"],["EncryptedPassportElementEmail","E-Mail"],["EncryptedPassportElementIdentityCard","Identity card"],["EncryptedPassportElementInternalPassport","Internal passport"],["EncryptedPassportElementPassport","Passport"],["EncryptedPassportElementPassportRegistration","Passport registration"],["EncryptedPassportElementPersonalDetails","Personal details"],["EncryptedPassportElementPhoneNumber","Phone number"],["EncryptedPassportElementRentalAgreement","Rental agreement"],["EncryptedPassportElementTemporaryRegistration","Temporary registration"],["EncryptedPassportElementUtilityBill","Utility bill"],["ExportChatInviteLink","Generate a new invite link for a chat"],["File","File ready to be downloaded"],["FnHandler","A function handler"],["ForceReply","Display a reply interface to the user"],["Forward","Contains information about original message"],["ForwardMessage","Forward message of any kind"],["Game","Game"],["GameHighScore","One row of the high scores table for a game"],["GetChat","Get up to date information about the chat"],["GetChatAdministrators","Get a list of administrators in a chat"],["GetChatMember","Get information about a member of a chat"],["GetChatMembersCount","Get the number of members in a chat"],["GetFile","Get basic info about a file and prepare it for downloading"],["GetGameHighScores","Get data for high score tables"],["GetMe","Returns basic information about the bot in form of a User object"],["GetStickerSet","Get a sticker set"],["GetUpdates","Receive incoming updates using long polling"],["GetUserProfilePhotos","Get a list of profile pictures for a user"],["GetWebhookInfo","Get current webhook status"],["GroupChat","Group chat"],["HandlerFuture","A handler future"],["InlineKeyboardButton","Button of an inline keyboard"],["InlineKeyboardMarkup","Inline keyboard that appears right next to the message it belongs to"],["InlineQuery","Incoming inline query"],["InlineQueryResultArticle","Link to an article or web page"],["InlineQueryResultAudio","Link to an mp3 audio file"],["InlineQueryResultCachedAudio","Link to an mp3 audio file stored on the Telegram servers"],["InlineQueryResultCachedDocument","Link to a file stored on the Telegram servers"],["InlineQueryResultCachedGif","Link to an animated GIF file stored on the Telegram servers"],["InlineQueryResultCachedMpeg4Gif","Link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers"],["InlineQueryResultCachedPhoto","Link to a photo stored on the Telegram servers"],["InlineQueryResultCachedSticker","Link to a sticker stored on the Telegram servers"],["InlineQueryResultCachedVideo","Link to a video file stored on the Telegram servers"],["InlineQueryResultCachedVoice","Link to a voice message stored on the Telegram servers"],["InlineQueryResultContact","Contact with a phone number"],["InlineQueryResultDocument","Link to a file"],["InlineQueryResultGame","Game"],["InlineQueryResultGif","Link to an animated GIF file"],["InlineQueryResultLocation","Location on a map"],["InlineQueryResultMpeg4Gif","Link to a video animation (H.264/MPEG-4 AVC video without sound)"],["InlineQueryResultPhoto","Link to a photo"],["InlineQueryResultVenue","Venue"],["InlineQueryResultVideo","Link to a page containing an embedded video player or a video file"],["InlineQueryResultVoice","Link to a voice recording in an .ogg container encoded with OPUS"],["InputFile","File to upload"],["InputFileInfo","Information about a file for reader"],["InputFileReader","File reader to upload"],["InputMedia","Content of a media message to be sent"],["InputMediaAnimation","Animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent"],["InputMediaAudio","Audio file to be treated as music to be sent"],["InputMediaDocument","General file to be sent"],["InputMediaPhoto","Photo to be sent"],["InputMediaVideo","Video to be sent"],["InputMessageContentContact","Contact message to be sent as the result of an inline query"],["InputMessageContentLocation","Location message to be sent as the result of an inline query"],["InputMessageContentText","Text message to be sent as the result of an inline query"],["InputMessageContentVenue","Venue message to be sent as the result of an inline query"],["Invoice","Basic information about an invoice"],["KeyboardButton","Button of the reply keyboard"],["KickChatMember","Kick a user from a group, a supergroup or a channel"],["LabeledPrice","Portion of the price for goods or services"],["LeaveChat","Leave a group, supergroup or channel"],["Location","Point on the map"],["MaskPosition","Position on faces where a mask should be placed by default"],["MediaGroup","Group of photos and/or videos to be sent"],["Message","This object represents a message"],["OrderInfo","Information about an order"],["PassportData","Telegram Passport data shared with the bot by the user"],["PassportElementError","Error in the Telegram Passport element which was submitted that should be resolved by the user"],["PassportFile","File uploaded to Telegram Passport"],["PhotoSize","Size of a photo or a file / sticker thumbnail"],["PinChatMessage","Pin a message in a group, supergroup or a channel"],["Poll","Contains information about a poll"],["PollOption","Contains information about one answer option in a poll"],["PreCheckoutQuery","Information about an incoming pre-checkout query"],["PrivateChat","Private chat"],["PromoteChatMember","Promote or demote a user in a supergroup or a channel"],["ReplyKeyboardMarkup","Custom keyboard with reply options"],["ReplyKeyboardRemove","Requests clients to remove the custom keyboard"],["ResponseError","Response error"],["ResponseParameters","Contains information about why a request was unsuccessful"],["RestrictChatMember","Restrict a user in a supergroup"],["SendAnimation","Send animation files (GIF or H.264/MPEG-4 AVC video without sound)"],["SendAudio","Send audio files"],["SendChatAction","Tell the user that something is happening on the bot's side"],["SendContact","Send phone contacts"],["SendDocument","Send general files"],["SendGame","Use this method to send a game"],["SendInvoice","Send invoice"],["SendLocation","Send point on the map"],["SendMediaGroup","Send a group of photos or videos as an album"],["SendMessage","Send text messages"],["SendPhoto","Send photo"],["SendPoll","Use this method to send a native poll"],["SendSticker","Send .webp sticker"],["SendVenue","Send information about a venue"],["SendVideo","Send video file"],["SendVideoNote","Send video message"],["SendVoice","Send audio files, if you want Telegram clients to display the file as a playable voice message"],["SetChatDescription","Change the description of a supergroup or a channel"],["SetChatPhoto","Set a new profile photo for the chat"],["SetChatStickerSet","Set a new group sticker set for a supergroup"],["SetChatTitle","Change the title of a chat"],["SetGameScore","Set the score of the specified user in a game"],["SetPassportDataErrors","Informs a user that some of the Telegram Passport elements they provided contains errors"],["SetStickerPositionInSet","Move a sticker in a set created by the bot to a specific position"],["SetWebhook","Specify a url and receive incoming updates via an outgoing webhook"],["ShippingAddress","Shipping address"],["ShippingOption","Shipping option"],["ShippingQuery","Information about an incoming shipping query"],["Sticker","Sticker"],["StickerSet","Sticker set"],["StopMessageLiveLocation","Stop updating a live location message sent by the bot or via the bot (for inline bots) before live_period expires"],["StopPoll","Use this method to stop a poll which was sent by the bot"],["SuccessfulPayment","Basic information about a successful payment"],["SupergroupChat","Supergroup chat"],["Text","Text with entities"],["TextEntityData","Actual data of text entity"],["TextHandler","A rules based message text handler"],["TextLink","Clickable text URLs"],["TextMention","Mention user without username"],["UnbanChatMember","Unban a previously kicked user in a supergroup or channel"],["UnexpectedEncryptedPassportElementKind","Unexpected encrypted passport element kind"],["UnpinChatMessage","Unpin a message in a group, supergroup or a channel"],["Update","Incoming update"],["UpdateMethod","Defines how to get updates from Telegram"],["UpdatesStream","Updates stream used for long polling"],["UpdatesStreamOptions","Update stream options"],["UploadStickerFile","Upload a .png file with a sticker for later use in createNewStickerSet and addStickerToSet methods"],["User","Telegram user or bot"],["UserProfilePhotos","User's profile pictures"],["Venue","Venue"],["Video","Video file"],["VideoNote","Video message"],["Voice","Voice note"],["WebhookInfo","Information about the current status of a webhook"]],"trait":[["CommandHandler","Actual command handler"],["FromUpdate","Allows to create an input for a handler from given update"],["Handler","An update handler"],["Method","Represents an API method"],["TextRule","Rule for text handler"]],"type":[["Float","Telegram Float type"],["Integer","Telegram Integer type"]]});