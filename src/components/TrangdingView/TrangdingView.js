import React from 'react';
import PropTypes from 'prop-types';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Media,
    Table,
} from "reactstrap"


TrangdingView.propTypes = {
    symbol: PropTypes.string.isRequired,
};

function TrangdingView(props) {
    const {symbol} = props;

    return (
        <Row>
            <Col lg="12">
                <TradingViewWidget
                    symbol= {symbol}
                    theme={Themes.LIGHT}
                    locale="vn"
                    width= "1142"
                    height= "610"
                />
            </Col>
        </Row>
    );
}

export default TrangdingView;