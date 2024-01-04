import React, { useState, useEffect } from "react";
// import Layout from './layout';
import { TECHNOLOGIES } from "../../statics/technologies";
import Select from "react-select";
import { Categories } from "../../statics/categories";
import http, { http2, http3 } from "../../utils/service";
import useAuth from "../../hooks/useAuth";

const Calculator = () => {
	const { email: userEmail } = useAuth();
	const [technologies, setTechnologies] = useState();
	// const [technologies, setTechnologies] = useState(TECHNOLOGIES);
	const [stayOpen, setStayOpen] = useState(false);
	const [removeSelected, setRemoveSelected] = useState(true);
	// const [process, setProcess] = useState("");
	const [processes, setProcesses] = useState([]);
	const [perks, setPerks] = useState([]);
	const [industry, setIndustry] = useState([]);
	const [result, setResult] = useState("");
	const [email, setEmail] = useState("");
	const [yoe, setYoe] = useState(0); 
	const [teamIc, setTeamIc] = useState(0);
	const [teamLed, setTeamLed] = useState(0);
	const [project, setProject] = useState(0);
	const [scale, setScale] = useState(0);
	const [stack, setStack] = useState(0);
	const [fetchIndustry, setFetchIndustry] = useState([]);
	const [selected, setSelected] = useState([]);

	var handleChange = (select) => {

		// let val = [];
		let val = "";
		select.forEach(sel => {
			// console.log(sel.value);
			// val = [...val, sel.value];
			val += sel.value + ",";
		});
		setSelected(val);
		console.log(selected, "Selected");
	};
	/**
	 * Get all processes defined on the backend. 
	 */
	const getProcesses = () => {
		http("/processes", "GET").then(res => {
			if (res.status) {
				setProcesses(res.data);
				console.log(res.data);
			} else {
				console.log("Error occured", res);
			}
		});
	};

	/**
	 * Get all processes defined on the backend.
	 */
	const getIndustries = () => {
		http("/processes/industries", "GET").then(res => {
			if (res.status) {
				setFetchIndustry(res.data);
				console.log(res.data);
			} else {
				console.log("Error occured", res);
			}
		});
	};


	const selectProcesses = e => {
		// setSelected(selected.value);
		// if it's checked, store in the array state.
		// if unchecked, remove through filter from the array

		// retrieve e.target into value and checked
		const { value, checked } = e.target;
		// let totalPerks = [];
		// let totalPerks = 0;
		if (checked) {
			// totalPerks = [...totalPerks, value];
			setPerks([...perks, parseInt(value)]);

		} else {
			// totalPerks.filter(e => e !== value);
			setPerks(perks.filter(e => e !== value));
			// totalPerks = totalPerks - value;
		}

	};

	const selectIndustry = e => {
		// setSelected(selected.value);
		// if it's checked, store in the array state.
		// if unchecked, remove through filter from the array

		// retrieve e.target into value and checked
		const { value, checked } = e.target;

		if (checked) {
			setIndustry([...industry, parseInt(value)]);
		} else {
			setIndustry(industry.filter(e => e !== value));
		}
	};
	// console.log(perks, "Processses");

	const calculateSalary = async e => {
		e.preventDefault();
		const data = {
			stack,
			email,
			tech: selected,
			processes: perks,
			yoe,
			industry,
			teamIc,
			teamLed,
			project,
			scale
		};
		// console.log(data);
		try {
			const res = await http3("/processes/calculate", data);
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

	console.log(technologies);

	useEffect(() => {
		window.scroll(0, 0);
		// const user = JSON.parse(localStorage.getItem("user"));
		// if (user) {
		setEmail(userEmail);
		// }
		getProcesses();
		getIndustries();
	}, []);

	const options = TECHNOLOGIES;
	return (
		<section className="container pt-32 mx-auto mb-10 bg-white rounded-lg shadow-lg md:w-1/2 md:mt-16 md:p-16">
			{!result && (
				<div className="px-6 space-y-8">
					<form className="space-y-4 ">
						<h4 className="font-gdblue text-gdsubBlue ">Salary calculator</h4>

						<div className="flex flex-wrap justify-center md:justify-between ">
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<select className="block w-full mt-1 form-select"
									onChange={e => setStack(e.target.value)}
								>
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
								<select className="block w-full mt-1 form-select"
									onChange={e => setYoe(e.target.value)}
								>
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
									<option value="11">10+ </option>
								</select>
							</label>
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<Select
									className="block w-full mt-1 "
									closeOnSelect={!stayOpen}
									// defaultValue={[]}
									required
									isMulti
									// onChange={e => setTechnologies(e.target)}
									onChange={handleChange}
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
						<div>
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
						</div>
						<div className="mt-3 border-b">
							<h4 className="text-gdsubBlue">Development Experience</h4>
						</div>
						<div className="flex">
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<select className="block w-full mt-1 form-select"
									onChange={e => setProject(e.target.value)}
								>
									<option>Live Projects</option>
									<option value="0">0</option>
									<option value="1">1 </option>
									<option value="2">2 </option>
									<option value="3">3 </option>
									<option value="4">4 </option>
									<option value="5">5  </option>
									<option value="6">6  </option>
									<option value="7">7  </option>
									<option value="8">8  </option>
									<option value="9">9  </option>
									<option value="10">10  </option>
									<option value="11">10+ </option>
								</select>
							</label>
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<select className="block w-full mt-1 form-select"
									onChange={e => setTeamIc(e.target.value)}
								>
									<option>Team Size you have worked in</option>
									<option value="0">None</option>
									<option value="1">1 </option>
									<option value="2">2 </option>
									<option value="3">3 </option>
									<option value="4">4 </option>
									<option value="5">5  </option>
									<option value="6">6  </option>
									<option value="7">7  </option>
									<option value="8">8  </option>
									<option value="9">9  </option>
									<option value="10">10  </option>
									<option value="11">10+ </option>
								</select>
							</label>
						</div>
						<div className="flex">
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<select className="block w-full mt-1 form-select"
									onChange={e => setScale(e.target.value)}
								>
									<option>Number of users for your biggest project</option>
									<option value="0">None</option>
									<option value="1">1 </option>
									<option value="2">2 </option>
									<option value="3">3 </option>
									<option value="4">4 </option>
									<option value="5">5  </option>
									<option value="6">6  </option>
									<option value="7">7  </option>
									<option value="8">8  </option>
									<option value="9">9  </option>
									<option value="10">10  </option>
									<option value="11">10+ </option>
								</select>
							</label>
							<label className="block w-full p-2 md:w-1/2 md:p-1">
								<select className="block w-full mt-1 form-select"
									onChange={e => setTeamLed(e.target.value)}
								>
									<option>Team Size you have led</option>
									<option value="0">None</option>
									<option value="1">1 </option>
									<option value="2">2 </option>
									<option value="3">3 </option>
									<option value="4">4 </option>
									<option value="5">5  </option>
									<option value="6">6  </option>
									<option value="7">7  </option>
									<option value="8">8  </option>
									<option value="9">9  </option>
									<option value="10">10  </option>
									<option value="11">10+ </option>
								</select>
							</label>
						</div>
						<div>
							<div className="mt-3 border-b">
								<h4 className="text-gdsubBlue">Industry Experience</h4>
							</div>
							<div className="flex flex-wrap justify-between mt-3 ">
								{fetchIndustry.map(pro => (
									<label className="flex items-center w-1/2 p-2 md:w-1/3 md:p-1">
										<input
											type="checkbox"
											className="form-checkbox"
											onChange={selectIndustry}
											value={pro.value}
											name="industry"
											key={pro.id}
										/>
										<span className="ml-2">{pro.name} </span>
									</label>
								))}
							</div>
						</div>

						<div>
							<button
								onClick={calculateSalary}
								role="submit"
								className="w-full mt-10 mb-10 text-center transition duration-500 ease-in-out transform bg-red-600 btn-gray hover:-translate-y-1 hover:scale-100"
							>
								{" "}
								<span className="text-white">Calculate</span>
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
				<div className="px-6 h-[160px]">
					<p>Your result is {result}</p>
					<button
						className="content-center p-3 btn mt-4"
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
