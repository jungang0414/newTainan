import Ratio from "react-bootstrap/Ratio";


function MyVideo() {
    return (
        <div className="container" style={{width: 300}}>
        <Ratio>
        <iframe src="https://www.youtube.com/embed/hKEER6eGmHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Ratio>
        </div>
        


    );
}

export default MyVideo