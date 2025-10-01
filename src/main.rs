use actix_files as fs;
use actix_web::{web, App, HttpResponse, HttpServer, Result};
use serde::{Deserialize, Serialize};
use std::sync::Mutex;
use std::collections::HashMap;

#[derive(Deserialize)]
struct CommandRequest {
    command: String,
    current_dir: String,
}

#[derive(Serialize)]
struct CommandResponse {
    output: String,
    new_dir: Option<String>,
}

struct AppState {
    filesystem: Mutex<HashMap<String, Vec<String>>>,
}

fn get_file_content(path: &str) -> String {
    match path {
        "/projetos/projetos.txt" => {
            match std::fs::read_to_string("./projetos/projetos.txt") {
                Ok(content) => content,
                Err(_) => "Erro ao ler arquivo".to_string(),
            }
        }
        _ => format!("cat: {}: Arquivo não encontrado", path),
    }
}

async fn process_command(
    cmd: web::Json<CommandRequest>,
    data: web::Data<AppState>,
) -> Result<HttpResponse> {
    let command_line = cmd.command.trim();
    let current_dir = cmd.current_dir.as_str();
    
    let parts: Vec<&str> = command_line.split_whitespace().collect();
    if parts.is_empty() {
        return Ok(HttpResponse::Ok().json(CommandResponse {
            output: String::new(),
            new_dir: None,
        }));
    }
    
    let command = parts[0];
    let args = &parts[1..];
    
    let (output, new_dir) = match command {
        "ls" => {
            let dir = if args.is_empty() {
                current_dir
            } else {
                args[0]
            };
            
            let filesystem = data.filesystem.lock().unwrap();
            let contents = filesystem.get(dir).cloned().unwrap_or_else(|| {
                vec!["projetos".to_string()]
            });
            
            let output = if contents.is_empty() {
                String::new()
            } else {
                contents.join("  ")
            };
            
            (output, None)
        }
        "cd" => {
            if args.is_empty() {
                ("/".to_string(), Some("/".to_string()))
            } else {
                let target = args[0];
                let new_path = if target == ".." {
                    if current_dir == "/" {
                        "/".to_string()
                    } else {
                        "/".to_string()
                    }
                } else if target.starts_with('/') {
                    target.to_string()
                } else if current_dir == "/" {
                    format!("/{}", target)
                } else {
                    format!("{}/{}", current_dir, target)
                };
                
                let filesystem = data.filesystem.lock().unwrap();
                if filesystem.contains_key(&new_path) || new_path == "/" || new_path == "/projetos" {
                    (String::new(), Some(new_path))
                } else {
                    (format!("cd: {}: Diretório não encontrado", target), None)
                }
            }
        }
        "cat" => {
            if args.is_empty() {
                ("cat: faltando operando".to_string(), None)
            } else {
                let file_path = if args[0].starts_with('/') {
                    args[0].to_string()
                } else if current_dir == "/" {
                    format!("/{}", args[0])
                } else {
                    format!("{}/{}", current_dir, args[0])
                };
                
                (get_file_content(&file_path), None)
            }
        }
        "pwd" => {
            (current_dir.to_string(), None)
        }
        "help" => {
            ("Comandos disponíveis:\n\
             ls [dir]       - Lista arquivos e diretórios\n\
             cd <dir>       - Muda de diretório\n\
             cat <arquivo>  - Mostra conteúdo de arquivo\n\
             pwd            - Mostra diretório atual\n\
             help           - Mostra esta mensagem\n\
             about          - Informações sobre o desenvolvedor\n\
             skills         - Minhas habilidades\n\
             contact        - Formas de contato\n\
             clear          - Limpa o terminal".to_string(), None)
        }
        "about" => {
            ("Desenvolvedor Full Stack apaixonado por tecnologia.\n\
             Especializado em Rust, Web Development e muito mais!".to_string(), None)
        }
        "skills" => {
            ("Skills:\n\
             - Rust\n\
             - JavaScript/TypeScript\n\
             - HTML/CSS\n\
             - Git\n\
             - Linux".to_string(), None)
        }
        "contact" => {
            ("Contato:\n\
             GitHub: VertigoFromOuterSpace\n\
             Email: seu-email@exemplo.com".to_string(), None)
        }
        "clear" => {
            ("CLEAR_TERMINAL".to_string(), None)
        }
        "" => (String::new(), None),
        _ => {
            (format!("bash: {}: comando não encontrado", command), None)
        }
    };

    Ok(HttpResponse::Ok().json(CommandResponse {
        output,
        new_dir,
    }))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Servidor rodando em http://localhost:8080");
    
    let mut filesystem = HashMap::new();
    filesystem.insert("/".to_string(), vec!["projetos".to_string()]);
    filesystem.insert("/projetos".to_string(), vec!["projetos.txt".to_string()]);
    
    let app_state = web::Data::new(AppState {
        filesystem: Mutex::new(filesystem),
    });
    
    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .route("/api/command", web::post().to(process_command))
            .service(fs::Files::new("/", "./static").index_file("index.html"))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
