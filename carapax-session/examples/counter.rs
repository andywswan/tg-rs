#[cfg(feature = "redis-store")]
fn main() {
    use carapax::prelude::*;
    use carapax_session::{
        session_handler,
        store::{redis::RedisSessionStore, Session, SessionStore},
    };
    use dotenv::dotenv;
    use env_logger;
    use futures::{future::lazy, Future};
    use std::env;

    const SESSION_NAMESPACE: &str = "carapax-session";

    fn handle_set(context: &mut Context, message: &Message, args: Vec<String>) -> HandlerFuture {
        log::info!("got a message: {:?}\n", message);
        let session = context.get::<Session<RedisSessionStore>>().clone();
        let api = context.get::<Api>().clone();
        let chat_id = message.get_chat_id();
        let val = if args.is_empty() {
            0
        } else {
            match args[0].parse::<usize>() {
                Ok(x) => x,
                Err(err) => {
                    return HandlerFuture::new(
                        api.execute(&SendMessage::new(chat_id, err.to_string()))
                            .and_then(|_| Ok(HandlerResult::Stop)),
                    )
                }
            }
        };
        HandlerFuture::new(session.set("counter", &val).and_then(move |()| {
            api.execute(&SendMessage::new(chat_id, "OK"))
                .and_then(|_| Ok(HandlerResult::Stop))
        }))
    }

    fn handle_expire(context: &mut Context, message: &Message, args: Vec<String>) -> HandlerFuture {
        log::info!("got a message: {:?}\n", message);
        let session = context.get::<Session<RedisSessionStore>>().clone();
        let api = context.get::<Api>().clone();
        let chat_id = message.get_chat_id();
        let seconds = if args.is_empty() {
            0
        } else {
            match args[0].parse::<usize>() {
                Ok(x) => x,
                Err(err) => {
                    return HandlerFuture::new(
                        api.execute(&SendMessage::new(chat_id, err.to_string()))
                            .and_then(|_| Ok(HandlerResult::Stop)),
                    )
                }
            }
        };
        HandlerFuture::new(session.expire("counter", seconds).and_then(move |()| {
            api.execute(&SendMessage::new(chat_id, "OK"))
                .and_then(|_| Ok(HandlerResult::Stop))
        }))
    }

    fn handle_reset(context: &mut Context, message: &Message, _args: Vec<String>) -> HandlerFuture {
        log::info!("got a message: {:?}\n", message);
        let session = context.get::<Session<RedisSessionStore>>().clone();
        let api = context.get::<Api>().clone();
        let chat_id = message.get_chat_id();
        HandlerFuture::new(session.del("counter").and_then(move |()| {
            api.execute(&SendMessage::new(chat_id, "OK"))
                .and_then(|_| Ok(HandlerResult::Stop))
        }))
    }

    fn handle_message(context: &mut Context, message: &Message) -> HandlerFuture {
        log::info!("got a message: {:?}\n", message);
        let session = context.get::<Session<RedisSessionStore>>().clone();
        let api = context.get::<Api>().clone();
        let chat_id = message.get_chat_id();
        HandlerFuture::new(session.get::<usize>("counter").and_then(move |val| {
            let val = val.unwrap_or(0) + 1;
            session.set("counter", &val).and_then(move |()| {
                api.execute(&SendMessage::new(chat_id, format!("Count: {}", val)))
                    .and_then(|_| Ok(HandlerResult::Continue))
            })
        }))
    }

    dotenv().ok();
    env_logger::init();

    let token = env::var("CARAPAX_TOKEN").expect("CARAPAX_TOKEN is not set");
    let proxy = env::var("CARAPAX_PROXY").ok();
    let redis_url = env::var("CARAPAX_REDIS_URL").expect("CARAPAX_REDIS_URL is not set");

    let mut config = Config::new(token);
    if let Some(proxy) = proxy {
        config = config.proxy(proxy);
    }

    let api = Api::new(config).unwrap();
    tokio::run(lazy(|| {
        let commands = CommandsHandler::default()
            .add_handler("/set", handle_set)
            .add_handler("/reset", handle_reset)
            .add_handler("/expire", handle_expire);
        RedisSessionStore::open(redis_url, SESSION_NAMESPACE)
            .map_err(|err| {
                log::error!("Failed to create store: {:?}", err);
            })
            .and_then(|store| {
                App::new()
                    .add_handler(session_handler(store))
                    .add_handler(Handler::message(commands))
                    .add_handler(Handler::message(handle_message))
                    .run(api.clone(), UpdateMethod::poll(UpdatesStream::new(api)))
            })
    }));
}

#[cfg(not(feature = "redis-store"))]
fn main() {
    println!(r#"Please enable "redis-store" feature"#);
}