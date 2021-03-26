import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
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
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { withTranslation } from "react-i18next"
import { useParams } from 'react-router-dom';

import ListTradeToken from '../Dashboard/ListTradeToken'

import TrangdingView from '../../components/TrangdingView/TrangdingView.js'


const DashboardDetail = props => {
    let { symbol } = useParams();
    console.log(symbol);

    return (
        <React.Fragment>
			<div className="page-content">
				<MetaTags>
					<title>Dashboard | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
				</MetaTags>
				<Container fluid>
					<Breadcrumbs
						title={props.t("Detail")}
						breadcrumbItem={props.t("Pair explorer")}
					/>
                {
                    (!symbol ? <ListTradeToken/> : <TrangdingView symbol={symbol}/>)
                }
            
				</Container>
			</div>
		</React.Fragment>
    );
}

DashboardDetail.propTypes = {
    t: PropTypes.any
};

export default withTranslation()(DashboardDetail);