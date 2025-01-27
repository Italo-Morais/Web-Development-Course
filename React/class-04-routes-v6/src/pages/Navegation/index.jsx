import "./style.css"

export function Navegation() {
    return (
        <div className="container">
            <main>
                <article>
                    <section>
                        <h1>Class Routers</h1>
                    </section>
                    <section>
                        <p>
                            O React Router permite "roteamento do lado do cliente".
                        </p>

                        <p>
                            Em sites tradicionais, o navegador solicita um documento de um servidor da web, baixa e avalia recursos CSS e JavaScript e renderiza o HTML enviado do servidor. Quando o usuário clica em um link, ele inicia o processo novamente para uma nova página.
                        </p>

                        <p>
                            O roteamento do lado do cliente permite que seu aplicativo atualize a URL de um clique no link sem fazer outra solicitação para outro documento do servidor. Em vez disso, seu aplicativo pode renderizar imediatamente uma nova interface do usuário e fazer solicitações de dados com busca para atualizar a página com novas informações.
                        </p>

                        <p>
                            Isso permite experiências de usuário mais rápidas porque o navegador não precisa solicitar um documento totalmente novo ou reavaliar recursos CSS e JavaScript para a próxima página. Ele também permite experiências de usuário mais dinâmicas com coisas como animação.
                        </p>
                    </section>
                </article>
            </main>
        </div>
    )
}