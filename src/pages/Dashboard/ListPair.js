import React, {useState,useEffect} from "react" 
import { Card, CardBody, CardTitle, Badge, Button, Image } from "reactstrap"
import { Link } from "react-router-dom"
import { method } from "lodash";
import "./dashboard.scss";

const numberFormat = (num) => {
    return new Intl.NumberFormat().format(num.toFixed(0))
}

const ListPair = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        const run = () => {
            fetch(
                `https://api.bsc.tools/pair/all`,
                {
                    method: "GET",
                    headers: new Headers({
                        Accept: "application/vnd.github.cloak-preview"
                })
                }
                )
                .then(res => res.json())
                .then(response => {
                    setList(response)
                    
                })
                .catch(error => console.log(error));
        }

        run();
    },[]);

    console.log(list);

    return( 
    <React.Fragment>
        <Card>
            <CardBody>
            <CardTitle className="mb-4">List Pair</CardTitle>
            <div className="table-responsive">
                <table className="table align-middle table-nowrap mb-0">
                <thead className="table-light">
                    <tr>
                        <th className="align-middle text-center">#</th>
                        <th className="align-middle text-center">NAME</th>
                        <th className="align-middle text-center">LIQUIDITY</th>
                        <th className="align-middle text-center">VOLUME (24HRS)	</th>
                        <th className="align-middle text-center">VOLUME (7DS)</th>
                        <th className="align-middle text-center">FILTER</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value,key) => (
                        <tr key={"_tr_" + key}>
                            <td className="text-center">
                                {key+1}
                            </td>
                            <td>
                                <div>
                                    
                                    <Link to={`/dashboard-detail/${value.token_a_symbol}`} className="text-body fw-bold">
                                        <img className="rounded-circle mr-2" width="30" src={value.token_a_logo}/>
                                    </Link>
                                    <Link to={`/dashboard-detail/${value.token_b_symbol}`} className="text-body fw-bold">
                                    <img className="rounded-circle mr-5" width="30" src={value.token_b_logo}/>
                                    </Link>
                                    <Link to={`/dashboard-detail/tokenTrade/${value.address}`} className="text-body fw-bold">
                                    
                                        {value.symbol}
                                    </Link>
                                </div>
                                
                            </td>
                            <td className="text-right">
                                {numberFormat(value.liquidity)}

                            </td>
                            <td className="text-right">{value.volume24h == "-" ? "..." : value.volume24h}</td>
                            <td className="text-right">{value.volume7d == "-" ? "..." : value.volume7d}</td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <a href="#" className="text-body fw-bold">
                                        <img className="mr-2" width="30" src="https://bsc.tools/static/media/bsc-scan.2bd34ea3.svg"/>
                                    </a>
                                    <a href="#" className="text-body fw-bold">
                                        <img className="mr-2" width="30" src="https://bsc.tools/static/media/bsc-tools.720cd963.svg"/>
                                    </a>
                                    <a href="https://www.coingecko.com/" className="text-body fw-bold">
                                        <img className="mr-2" width="30" src="https://bsc.tools/static/media/coin-gecko.d202c3c8.svg"/>
                                    </a>
                                    <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x1311b352467d2B5c296881BaDEA82850bcd8f886&amp;outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" className="text-body fw-bold">
                                        <img width="30" src="https://bsc.tools/static/media/pancake.45ac3e8f.svg"/>
                                    </a>
                                </div>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </CardBody>
        </Card>
        </React.Fragment>
    )
}

export default ListPair;