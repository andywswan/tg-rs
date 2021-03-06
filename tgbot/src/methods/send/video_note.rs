use crate::{
    methods::Method,
    request::{Form, RequestBuilder},
    types::{ChatId, InputFile, Integer, Message, ReplyMarkup},
};
use failure::Error;

/// Send video message
///
/// As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long
#[derive(Debug)]
pub struct SendVideoNote {
    form: Form,
}

impl SendVideoNote {
    /// Creates a new SendVideoNote with empty optional parameters
    ///
    /// # Arguments
    ///
    /// * chat_id - Unique identifier for the target chat
    /// * video_note - Video note to send
    pub fn new<C, V>(chat_id: C, video_note: V) -> Self
    where
        C: Into<ChatId>,
        V: Into<InputFile>,
    {
        let mut form = Form::new();
        form.insert_field("chat_id", chat_id.into());
        form.insert_field("video_note", video_note.into());
        SendVideoNote { form }
    }

    /// Duration of sent video in seconds
    pub fn duration(mut self, value: Integer) -> Self {
        self.form.insert_field("duration", value);
        self
    }

    /// Video width and height, i.e. diameter of the video message
    pub fn length(mut self, value: Integer) -> Self {
        self.form.insert_field("length", value);
        self
    }

    /// Thumbnail of the file sent
    ///
    /// The thumbnail should be in JPEG format and less than 200 kB in size
    /// A thumbnail‘s width and height should not exceed 320
    /// Ignored if the file is not uploaded using multipart/form-data
    /// Thumbnails can’t be reused and can be only uploaded as a new file,
    /// so you can pass “attach://<file_attach_name>” if the thumbnail was
    /// uploaded using multipart/form-data under <file_attach_name>
    pub fn thumb<V>(mut self, value: V) -> Self
    where
        V: Into<InputFile>,
    {
        self.form.insert_field("thumb", value.into());
        self
    }

    // Sends the message silently
    /// Users will receive a notification with no sound
    pub fn disable_notification(mut self, value: bool) -> Self {
        self.form.insert_field("disable_notification", value);
        self
    }

    /// If the message is a reply, ID of the original message
    pub fn reply_to_message_id(mut self, value: Integer) -> Self {
        self.form.insert_field("reply_to_message_id", value);
        self
    }

    /// Additional interface options
    pub fn reply_markup<R: Into<ReplyMarkup>>(mut self, value: R) -> Result<Self, Error> {
        let value = serde_json::to_string(&value.into())?;
        self.form.insert_field("reply_markup", value);
        Ok(self)
    }
}

impl Method for SendVideoNote {
    type Response = Message;

    fn into_request(self) -> Result<RequestBuilder, Error> {
        RequestBuilder::form("sendVideoNote", self.form)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{
        request::{RequestBody, RequestMethod},
        types::ForceReply,
    };

    #[test]
    fn send_video_note() {
        let request = SendVideoNote::new(1, InputFile::file_id("file-id"))
            .duration(50)
            .length(100)
            .thumb(InputFile::file_id("thumb-id"))
            .disable_notification(true)
            .reply_to_message_id(1)
            .reply_markup(ForceReply::new(true))
            .unwrap()
            .into_request()
            .unwrap()
            .build("base-url", "token");
        assert_eq!(request.method, RequestMethod::Post);
        assert_eq!(request.url, "base-url/bottoken/sendVideoNote");
        if let RequestBody::Form(form) = request.body {
            assert_eq!(form.fields["chat_id"].get_text().unwrap(), "1");
            assert!(form.fields["video_note"].get_file().is_some());
            assert_eq!(form.fields["duration"].get_text().unwrap(), "50");
            assert_eq!(form.fields["length"].get_text().unwrap(), "100");
            assert!(form.fields["thumb"].get_file().is_some());
            assert_eq!(form.fields["disable_notification"].get_text().unwrap(), "true");
            assert_eq!(form.fields["reply_to_message_id"].get_text().unwrap(), "1");
            assert_eq!(
                form.fields["reply_markup"].get_text().unwrap(),
                r#"{"force_reply":true}"#
            );
        } else {
            panic!("Unexpected request body: {:?}", request.body);
        }
    }
}
