import React from "react";
import { Banner } from "../../atoms/banner/Banner";
import { Footer } from "../../atoms/footer/Footer";
import { TableScores } from "../../templates/table/TableScores";

const Dashboard = () => {
	return (
		<>
			<Banner />
			<TableScores />
			<Footer />
		</>
	);
};

export default Dashboard;
