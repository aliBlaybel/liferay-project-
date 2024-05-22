import React, { useEffect, useState } from 'react';
import { sum } from "abc-services";

export default function AppComponent(props) {
	const [sommation, setSommation] = useState(0);

	useEffect(() => {
		setSommation(sum(1,1))
	}, []);

	return (
		<>
			<h2>Result {sommation}</h2>
		</>
	);
}
