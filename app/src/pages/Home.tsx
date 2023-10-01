const Home = () => {
    return (<div className="min-h-[50em] bg-white">
        {Array.from(Array(100)).map((_, i) => <div key={i}>{i}</div>)}
    </div>)
}

export default Home;
