import React from 'react';
import {Link} from 'react-router-dom';
import UserService from '../../Services/userService';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            isLoading: true
        }
    }

    async componentDidMount() {
        const { params: { userLogin } } = this.props.match;
        const userService = new UserService ();
        const profileData = await userService.getUserProfile (userLogin);


        this.setState({ profile: profileData, isLoading: false })
    }

    render() {
        const { isLoading, profile } = this.state;
        return (
            <div className="app">
                <div className="app-body">
                    <h1>Perfil do Usuário</h1>
                    <p> {isLoading ? 'Carregando...' : <RenderProfile profile = {profile}/>}</p>
                    <Link to="/">Voltar</Link>
                </div>
            </div>
        )
    }
};

function RenderProfile ({profile}) {
    return (
        <>
        <img src={profile.avatar_url} />
        <p>{profile.name}</p>
        <p>{profile.bio}</p>
        <p>{profile.html_url}</p>
        </>
    )
}

export default Profile;