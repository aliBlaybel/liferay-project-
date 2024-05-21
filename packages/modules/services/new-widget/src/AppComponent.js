import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';
import ImageGallery from "react-image-gallery";
import { sum } from "@abc/services";

export default function AppComponent(props) {
	const [news, setNews] = useState([]);
	const [sommation, setSommation] = useState(0);

	useEffect(() => {
		setNews([
			{
				title: "title one",
				subTitle: "subtitle one",
				autor: "author one"
			},
			{
				title: "title two",
				subTitle: "subtitle two",
				autor: "author two"
			},
			{
				title: "title three",
				subTitle: "subtitle three",
				autor: "author three"
			},
		])

		setSommation(sum(1,1))
	}, []);

	return (
		<>
			<h2>Result {sommation}</h2>
			{news.slice(0, props.configuration.system.number).map((n) => (
				<div className="container">
					<h2>{n.title}</h2>
					<p>{n.subTitle}</p>
					<div className="infos">
						<span>{n.autor}</span>
					</div>
				</div>
			))}
		</>
	);
}
