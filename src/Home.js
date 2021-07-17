import DataItem from "./DataItem";

const Home = () => <div>
    <div className="container-fluid">
        <div className="row">


            {

                Object.entries(DataItem[0])[3][1].map((data, index) => {
                    return <div  className="col-12 col-md-4 col-lg-2 col-xs-2" key={index}>
                        <div className="card">
                            <div className="card-header">
                                {data[1]}
                            </div>
                            <div className="card-body">
                                <div className="card-element">
                                    <div className="card-title">
                                        Nhiễm
                                    </div>
                                    <div className="card-text">
                                        {data[2]}
                                    </div>
                                </div>
                                <div className="card-element">
                                    <div className="card-title">
                                        Tử vong
                                    </div>
                                    <div className="card-text">
                                        {data[3]}
                                    </div>
                                </div>
                                <div className="card-element">
                                    <div className="card-title">
                                        Phục hồi
                                    </div>
                                    <div className="card-text">
                                        {data[4]}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                })
            }
        </div>
    </div>
</div>
export default Home;
// <div>
//     <div className="container-fluid">
//         <h1>World</h1>
//         <div className="row">
//             {
//                 Object.entries(Global.Global).map((title, index) => {
//                     return (
//                         <div className="col-2" key={index}>
//                             <h6>{title[0]}</h6>
//                             <h5>{title[1]}</h5>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
//     <div className="container-fluid bg-light">
//         <div className="row">
//             {
//                 Countries.map((element, index) => {
//                     return <div className="col-12 col-md-4 col-lg-2 col-xs-2" key={index}>
//                         <div className="card">
//                             {/*{element.TotalRecovered / element.TotalConfirmed >= 0.5 ?*/}
//                             {/*    <div className="card-status-green"></div> :*/}
//                             {/*    <div className="card-status-red"></div>}*/}
//                             {
//                                 //     if (element.TotalRecovered/element.TotalConfirmed >=0.8) {
//                                 //     return <div className="card-status-green"></div>;
//                                 // }
//                                 //     else if (element.TotalRecovered/element.TotalConfirmed >=0.5 && element.TotalRecovered/element.TotalConfirmed <0.8) {
//                                 //     return <div className="card-status-orange"></div>;
//                                 // }
//                                 //     else{
//                                 //     return <div className="card-status-red"></div>;
//                                 // }
//                                 element.TotalRecovered/element.TotalConfirmed >=0.8 && <div className="card-status-green"></div>
//                             }
//                             {
//                                 element.TotalRecovered/element.TotalConfirmed >=0.5 && element.TotalRecovered/element.TotalConfirmed <0.8 && <div className="card-status-orange"></div>
//                             }
//                             {
//                                 element.TotalRecovered/element.TotalConfirmed <0.5 && <div className="card-status-red"></div>
//                             }
//                             <div className="card-header">
//                                 {element.Country}</div>
//                             <div className="card-body">
//                                 {/*<div className="card-element">*/}
//                                 {/*    <div className="card-title">NewConfirmed</div>*/}
//                                 {/*    <div className="card-text">{element.NewConfirmed}</div>*/}
//                                 {/*</div>*/}
//                                 <div className="card-element">
//                                     <div className="card-title">TotalConfirmed</div>
//                                     <div className="card-text">{element.TotalConfirmed}</div>
//                                 </div>
//                                 {/*<div className="card-element">*/}
//                                 {/*    <div className="card-title">NewDeaths</div>*/}
//                                 {/*    <div className="card-text">{element.NewDeaths}</div>*/}
//                                 {/*</div>*/}
//                                 <div className="card-element">
//                                     <div className="card-title">TotalDeaths</div>
//                                     <div className="card-text">{element.TotalDeaths}</div>
//                                 </div>
//                                 {/*<div className="card-element">*/}
//                                 {/*    <div className="card-title">NewRecovered</div>*/}
//                                 {/*    <div className="card-text">{element.NewRecovered}</div>*/}
//                                 {/*</div>*/}
//                                 <div className="card-element">
//                                     <div className="card-title">TotalRecovered</div>
//                                     <div className="card-text">{element.TotalRecovered}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 })
//             }
//         </div>
{/*    </div>*/
}
{/*</div>*/
}
