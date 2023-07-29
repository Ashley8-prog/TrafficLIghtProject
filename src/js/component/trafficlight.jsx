import React, { useState, useEffect } from "react";
import "../../styles/trafficlight.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [redOn, setRedOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);


    return <>
        <div className="traffictop"></div>
        <div className="container rounded contenedor">
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center flex-column align-items-center">
                    <div className={redOn == false ? "red" : "red on"}
                        onClick={
                            (e) => {
                                setRedOn(!redOn)
                                setYellowOn(false)
                                setGreenOn(false)
                            }
                        }>

                    </div>


                    <div className={yellowOn == false ? "yellow" : "yellow on"}
                        onClick={
                            (e) => {
                                setYellowOn(!yellowOn)
                                setRedOn(false)
                                setGreenOn(false)
                            }
                        }>

                    </div>


                    <div className={!greenOn ? "green" : "green on"}
                        onClick={(e) => {
                            setGreenOn(!greenOn)
                            setRedOn(false)
                            setYellowOn(false)
                        }
                        }>

                    </div>


                </div>
            </div>



        </div>
    </>
}

export default TrafficLight