import React, { useEffect, useState } from "react";
import { users } from "../utils/credential";
const HomePage = () => {
	const [userData, setUserData] = useState(users);

	return (
		<div className="homepage">
			<table>
				<thead>
					<tr>
						<td>id</td>
						<td>Name</td>
                        <td>Role</td>
                        <td>Department</td>
					</tr>
				</thead>
				<tbody>
					{userData?.map((item, index) => {
						if (index == 3) {
							return "";
						}
						return (
							<tr>
								<td>{item?.id}</td>
								<td>{item?.name}</td>
                                <td>{item?.role}</td>
								<td>{item?.department}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default HomePage;
