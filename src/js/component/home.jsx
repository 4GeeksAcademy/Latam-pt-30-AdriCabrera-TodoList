import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todoList, setTodoList] = useState([])

	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<li>
					<input type="text" placeholder="Add new task"
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={event => {
							if (event.key === "Enter") {
								if (inputValue.trim() !== "") {
									setTodoList(todoList.concat([inputValue.trim()]))
									setInputValue("")
								}
							}
						}}
					></input>
				</li>
				{todoList.map((todo, index) => {
					return <li key={index}>{todo} {" "}
						<i className="delete fa fa-xmark"
							onClick={() =>
								setTodoList(
									todoList.filter(
										(todo, currentIndex) =>
											index != currentIndex
									)
								)
							}></i>
					</li>
				})
				}
			</ul>
			<div>
				{todoList.length} Items left
			</div>
		</div>
	);
};

export default Home;
