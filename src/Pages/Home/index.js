import React from 'react';
import './Style.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: [],
        }
    }

    //exclusiva para componentes de classe:
    componentDidMount () {
        const users = [
            {
                id: 1,
                login: 'drishaolin',
                name: 'Adriana Mucciolo'
            },
            {
                id: 2,
                login: 'drishaolin',
                name: 'Drika Mucci'
            },
        ];
        this.setState ({ users: users, isLoading: false})
    }

    render() {
        {/*usando const nao é necessario escrever this.state.isLoading na condicional da ul abaixo:*/}
        const {isLoading, users} = this.state;
        return (
            <div className="app">
                <div className="app-body">
                    <p>Selecione o Usuário:</p>
                    <ul>
                         {/*renderização condicional:*/}
                        {isLoading ? <RenderLoader/> : users.map (item => <RenderUserLine key={item.id} login={item.login} name={item.name}/>)}

                    </ul>
                </div>
            </div>
            
        )
    }
}

function RenderLoader () {
    return (
        <li> Carregando...</li>
    )
}
function RenderUserLine ({login, name}) {
return(
    <li>
        {name} e {login}
    </li>
)
}

export default Home;
