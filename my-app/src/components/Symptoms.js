import React from "react";

function Symptoms() {
	return (
		<section class="symptoms" id="symptoms">
			<h1 class="heading">covid-19 symptoms</h1>

			<div class="column">
				<div class="main-image">
					<img src="images/main-symp-img.png" alt="" />
				</div>

				<div class="box-container">
					<div class="box">
						<img src="images/symp-a.png" alt="" />
						<h3>dry cough</h3>
					</div>

					<div class="box">
						<img src="images/symp-b.png" alt="" />
						<h3>sore throat</h3>
					</div>

					<div class="box">
						<img src="images/symp-c.png" alt="" />
						<h3>cold</h3>
					</div>

					<div class="box">
						<img src="images/symp-d.png" alt="" />
						<h3>fever</h3>
					</div>

					<div class="box">
						<img src="images/symp-e.png" alt="" />
						<h3>headache</h3>
					</div>

					<div class="box">
						<img src="images/symp-f.png" alt="" />
						<h3>vomiting</h3>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Symptoms;
