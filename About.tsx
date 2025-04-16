function AboutPage() {
    return (
        <>
            <h1 className="name">About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};



export default function MyApp() {
    return (
        <>
            <div>
                <h1>Welcome to my app</h1>
                <AboutPage />
            </div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}