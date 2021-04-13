import {useState} from 'React'
import Button from '../components/Button'
import { AiFillGithub }  from 'react-icons/ai'
import {loginWithGitHub} from '../firebase/client'

const Code = () => {
    const [user, setUser] = useState(null)

    const handleClick = () => {
        loginWithGitHub().then(user => {
            const {avatar, username, url} = user
            setUser(user)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
            <div>
                {
                    user === null ? 
                        <Button onClick={handleClick}>
                            <span className="text-2xl"><AiFillGithub /></span>
                            Login with GitHub
                        </Button> 
                        :
                        <div>
                            <img src={user.avatar} />
                            <span>{user.username}</span>
                        </div>
                }
            </div>
    )
}

export default Code;
