import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react"
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
import { Link } from "react-router-dom"

import ListPair from "./ListPair"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"


const Dashboard = props => {
	return (
		<React.Fragment>
			<div className="page-content">
				<MetaTags>
					<title>Dashboard | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
				</MetaTags>
				<Container fluid>
					<Breadcrumbs
						title={props.t("Dashboard")}
						breadcrumbItem={props.t("Pair explorer")}
					/>
				</Container>
        <ListPair/>
			</div>
		</React.Fragment>
	)
}

export default withTranslation()(Dashboard)
