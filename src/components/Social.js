import twitterIcon from '../images/TwitterIcon.png';
import facebookIcon from '../images/FacebookIcon.png';
import instagramIcon from '../images/InstagramIcon.png';
import githubIcon from '../images/GitHubIcon.png';

function Social() {
    return (
        <div className="social">
            <img src={twitterIcon} alt="Twitter Picture" />
            <img src={facebookIcon} alt="Facebook Picture" />
            <img src={instagramIcon} alt="Instagran Picture" />
            <img src={githubIcon} alt="Github Picture" />
        </div>
    )
}

export default Social;