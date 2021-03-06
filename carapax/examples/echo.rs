use carapax::prelude::*;
use dotenv::dotenv;
use env_logger;
use futures::{
    future::{self, Either},
    Future,
};
use log;
use std::env;

fn handle_message(context: &mut Context, message: Message) -> HandlerFuture {
    log::info!("got a message: {:?}\n", message);
    let api = context.get::<Api>().clone();
    HandlerFuture::new(future::lazy(move || match message.get_text() {
        Some(text) => {
            let chat_id = message.get_chat_id();
            let method = SendMessage::new(chat_id, text.data.clone());
            Either::A(api.execute(method).then(|x| {
                log::info!("sendMessage result: {:?}\n", x);
                Ok(HandlerResult::Continue)
            }))
        }
        None => Either::B(future::ok(HandlerResult::Continue)),
    }))
}

fn main() {
    dotenv().ok();
    env_logger::init();

    let token = env::var("TGRS_TOKEN").expect("TGRS_TOKEN is not set");
    let proxy = env::var("TGRS_PROXY").ok();

    let mut config = Config::new(token);
    if let Some(proxy) = proxy {
        config = config.proxy(proxy);
    }

    let api = Api::new(config).unwrap();
    tokio::run(
        App::new()
            .add_handler(FnHandler::from(handle_message))
            .run(api.clone(), UpdateMethod::poll(UpdatesStream::new(api))),
    );
}
