function Profile() {
    return (
        <div className="profile">
            <div className="biodata">
                <p className="name">Laura Smith</p>
                <p className="job">Frontend Developer</p>
                <p className="website">laurasmith.website</p>
            </div>
            <div className="contact">
                <button className="email"><i class="fa fa-envelope"></i> Email</button>
                <button className="linkedin"><i class="fa fa-linkedin"></i> LinkedIn</button>
            </div>
            <div className="about">
                <p className="title">About</p>
                <p className="content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interest">
                <p className="title">Interest</p>
                <p className="content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}

export default Profile;