import Main from "../Components/Main"
import Row from "../Components/Row"
import requests from "../Request"

function Home(props){
    return(
        <>
            <Main />
            <Row rowID={1} title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID={2} title='TopRated' fetchURL={requests.requestTopRated} />
            <Row rowID={3} title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID={4} title='Horror' fetchURL={requests.requestHorror} />
            <Row rowID={5} title='Upcoming' fetchURL={requests.requestUpcoming} />
        </>
    )
}

export default Home