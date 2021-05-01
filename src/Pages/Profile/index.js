import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            isLoading: true
        }
    }

    componentDidMount() {
        const { params: { userLogin } } = this.props.match;
        this.setState({ profile: userLogin, isLoading: false })
    }

    render() {
        const { isLoading, profile } = this.state;
        return (
            <div className="app">
                <div className="app-body">
                    <h1>Perfil do Usuário</h1>
                    <p> {isLoading ? 'Carregando...' : profile}</p>
                </div>

            </div>
        )
    }
}

export default Profile;