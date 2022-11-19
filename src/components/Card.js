import Picture from "./Picture";
import Profile from "./Profile";
import Social from "./Social";

function Card() {
    return (
        <div className="card">
            <Picture />
            <Profile />
            <Social />
        </div>
    )
}

export default Card;