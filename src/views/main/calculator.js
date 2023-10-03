import React, { useState, useEffect } from "react";
// import Layout from './layout';
import { TECHNOLOGIES } from "../../statics/technologies";
import Select from "react-select";
import { Categories } from "../../statics/categories";
import http from "../../utils/service";

const Calculator = () => {
	const [technologies, setTechnologies] = useState(TECHNOLOGIES);
	const [stayOpen, setStayOpen] = useState(false);
	const [removeSelected, setRemoveSelected] = useState(true);
	const [process, setProcess] = useState("");
	const [processes, setProcesses] = useState([]);
	const [perks, setPerks] = useState([]);
	const [result, setResult] = useState("");
	const [email, setEmail] = useState("");
	/**
	 * Get all processes defined on the backend.
	 */
	const getProcesses = () => {
		http("/processes", "get").then(res => {
			if (res.status) {
				setProcesses(res.data);
				// console.log(res.data);
			} else {
				console.log("Error occured", res);
			}
		});
	};
	const selectProcesses = e => {
		let pros;
		if (e.target.checked) {
			pros = process.concat(e.target.value);

			console.log(process);
		} else {
			let index = processes.indexOf(e.target.value);
			processes.splice(index, 1);
			setPerks(processes);
		}

		//pros.replace(/_([^_]*)$/, "$1");
		setProcess(pros);
	};

	const calculateSalary = async e => {
		e.preventDefault();
		const data = {
			email,
			technologies,
			processes: process,
		};
		try {
			const res = await http("/calculate", "post", data);
			setResult(res.message);
		} catch (err) {
			console.log(err);
		}

		// .then(res => {
		// 	if (res.status) {
		// 		setResult(res.data);
		// 	} else {
		// 		console.log("error occured!");
		// 	}
		// })
		// .then(dt => {
		// 	console.log(result);
		// });
	};

	useEffect(() => {
		window.scroll(0, 0);
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			setEmail(user.email);
		}
		getProcesses();
	}, []);

	const options = TECHNOLOGIES;
	return (
		<section className="container pt-32 mx-auto mb-10 bg-white rounded-lg shadow-lg md:w-1/2 md:mt-16 md:p-16">
			{!result && (
				<div className="px-6 ">
					<form>
						<h4 className="font-gdblue text-gdsubBlue ">Salary calculator</h4>

						<div className="flex flex-wrap justify-center md:justify-between ">
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<select className="block w-full mt-1 form-select">
									<option>Stack</option>
									{Categories.map(category => (
										<option
											value={category.id}
											// onChange={this.onChange}
											key={category.id}
										>
											{category.name}
										</option>
									))}
								</select>
							</label>
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<select className="block w-full mt-1 form-select">
									<option>Years of Experience</option>
									<option value="0">Beginner</option>
									<option value="1">1 year</option>
									<option value="2">2 years</option>
									<option value="3">3 years</option>
									<option value="4">4 years</option>
									<option value="5">5 years </option>
									<option value="6">6 years </option>
									<option value="7">7 years </option>
									<option value="8">8 years </option>
									<option value="9">9 years </option>
									<option value="10">10 years </option>
									<option value="11">10+ </option>>
								</select>
							</label>
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<Select
									className="block w-full mt-1 "
									closeOnSelect={!stayOpen}
									// defaultValue={[]}
									required
									isMulti
									onChange={e => setTechnologies(e.target)}
									options={options}
									placeholder="Select"
									removeSelected={removeSelected}
									// value={technologies}
									classNamePrefix="select"
								/>
							</label>

							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<input
									className="block w-full p-2 mt-1 border form-input"
									placeholder="Email"
									name="email"
									onChange={e => setEmail(e.target.value)}
									value={email}
								/>
							</label>
						</div>
						<div className="mt-3 border-b">
							<h4 className="text-gdsubBlue">Development Processes</h4>
						</div>
						<div className="flex flex-wrap justify-between mt-3 ">
							{processes.map(pro => (
								<label className="flex items-center w-1/2 p-2 md:w-1/3 md:p-1">
									<input
										type="checkbox"
										className="form-checkbox"
										onChange={selectProcesses}
										value={pro.value}
										name="processes"
										key={pro.id}
									/>
									<span className="ml-2">{pro.name} </span>
								</label>
							))}
						</div>

						<div>
							<button
								onClick={calculateSalary}
								role="submit"
								className="w-full mt-10 mb-10 text-center transition duration-500 ease-in-out transform bg-gray-200 btn-gray hover:-translate-y-1 hover:scale-100"
							>
								{" "}
								Calculate
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="inline-flex h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</button>
						</div>
					</form>
				</div>
			)}
			{result && (
				<div className="px-6">
					<p>Your result is {result}</p>
					<button
						className="content-center p-3 btn"
						onClick={() => setResult("")}
					>
						Go back
					</button>
				</div>
			)}
		</section>
	);
};

export default Calculator;
