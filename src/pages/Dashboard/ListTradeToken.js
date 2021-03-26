import React, {useState,useEffect} from "react" 
import { Card, CardBody, CardTitle, Badge, Button, Image } from "reactstrap"
import { Link } from "react-router-dom"
import { method } from "lodash";
import "./dashboard.scss";
import { request, gql } from 'graphql-request'

const numberFormat = (num) => {
    return new Intl.NumberFormat().format(num.toFixed(0))
}

const ListTradeToken = () => {

    const [listTrade, setListTrade] = useState([])

    useEffect(() => {
        const query = `query ($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
            ethereum(network: $network) {
            dexTrades(options: {desc: ["block.height", "tradeIndex"], limit: $limit, offset: $offset}, date: {since: $from, till: $till}, smartContractAddress: {is: $address}) {
            block {
                timestamp {
                time(format: "%Y-%m-%d %H:%M:%S")
                }
                height
            }
            tradeIndex
            exchange {
                fullName
            }
            buyAmount
            buyCurrency {
                address
                symbol
            }
            sellAmount
            sellCurrency {
                address
                symbol
            }
            transaction {
                hash
            }
            exchange {
                fullName
            }
            }
        }
        }
        `
        const variables = {"limit":20,"offset":0,"network":"bsc","address":"0x1387cd767d797c834a8fed4c2a3bf84067582420","from":"2021-03-24","till":null,"dateFormat":"%Y-%m-%d"}
        request("https://graphql.bitquery.io", query, variables).then((data) => setListTrade(data.ethereum.dexTrades))

    },[]);

    console.log(listTrade);

    return( 
    <React.Fragment>
        <Card>
            <CardBody>
            <CardTitle className="mb-4">Token Trade</CardTitle>
            <div className="table-responsive">
                <table className="table align-middle table-nowrap mb-0">
                <thead className="table-light">
                    <tr>
                        <th className="align-middle text-center">Timestamp</th>
                        <th className="align-middle text-center">Block</th>
                        <th className="align-middle text-center">Sell amount</th>
                        <th className="align-middle text-center">Sell currency</th>
                        <th className="align-middle text-center">Buy amount</th>
                        <th className="align-middle text-center">Buy currency</th>
                        <th className="align-middle text-center">Exchange</th>
                        <th className="align-middle text-center">Hash</th>

                    </tr>
                </thead>
                <tbody>
                    {listTrade.map((value,key) => (
                        <tr key={"_tr_" + key}>
                            <td className="text-center">
                                {value.block.timestamp.time}
                            </td>
                            <td>
                                {value.block.height}
                            </td>
                            <td className="text-right">{value.sellAmount}</td>
                            <td className="text-right">{value.sellCurrency.symbol}</td>
                            <td className="text-right">{value.buyAmount}</td>
                            <td className="text-right">{value.buyCurrency.symbol}</td>
                            <td className="text-right">{value.exchange.fullName}</td>
                            <td className="text-right">{value.transaction.hash}</td>
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

export default ListTradeToken;