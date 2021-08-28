import React from "react";

function Precautions() {
	return (
		<section class="precautions" id="precautions">
			<h1 class="heading">Take precautions against covid-19</h1>

			<div class="column">
				<div class="box-container">
					<h3 class="title">Things you should DO</h3>

					<div class="box">
						<img src="images/do-img1.png" alt="" />
						<div class="info">
							<h3>Wash your hand</h3>
							<p>
								According to experts, aiming for six to 10 washes a day can make
								a big difference when it comes to keeping viruses and bacteria.
							</p>
						</div>
					</div>

					<div class="box">
						<img src="images/do-img2.png" alt="" />
						<div class="info">
							<h3>Always wear a mask</h3>
							<p>
								Masks should be used as part of a comprehensive strategy of
								measures to suppress transmission and save lives.
							</p>
						</div>
					</div>

					<div class="box">
						<img src="images/do-img3.png" alt="" />
						<div class="info">
							<h3>Stay home during fever</h3>
							<p>
								If you have a fever, cough or other symptoms, stay in a specific
								room and away from other people and pets in your home.
							</p>
						</div>
					</div>
				</div>

				<div class="box-container">
					<h3 class="title">Things you should NOT DO</h3>

					<div class="box">
						<img src="images/dont-img1.png" alt="" />
						<div class="info">
							<h3>Avoid close contact with animals</h3>
							<p>
								People can spread SARS-CoV-2 to animals, especially during close
								contact.Avoid contact with your pet including petting,
								snuggling.
							</p>
						</div>
					</div>

					<div class="box">
						<img src="images/dont-img2.png" alt="" />
						<div class="info">
							<h3>Avoid close contact with peoples</h3>
							<p>
								Avoid close contact with people who are sick. If possible,
								maintain 6 feet between the person who is sick and other
								household members.
							</p>
						</div>
					</div>

					<div class="box">
						<img src="images/dont-img3.png" alt="" />
						<div class="info">
							<h3>Avoid crowded area</h3>
							<p>
								Maintain at least 6 feet of distance between yourself and
								others. Avoid crowded places, particularly indoors, and events
								that are likely to draw crowds.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Precautions;
