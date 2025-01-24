import React from "react";

const Experience = () => {
	return (
		<section id="experience" className="py-12 px-4 bg-white">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
				<ul className="space-y-8">
					<li>
						<h3 className="font-semibold text-xl">XYZ, Remote</h3>
						<p className="text-gray-700 mb-2">
							<strong>Role:</strong> Full Stack Developer (Dec 2023 - Present)
						</p>
						<p>
							Contributed to the Digital Banking Experience Enhancement
							initiative, optimizing digital interfaces and integrating
							real-time transaction tracking systems.
						</p>
					</li>
					<li>
						<h3 className="font-semibold text-xl">ABC, USA</h3>
						<p className="text-gray-700 mb-2">
							<strong>Role:</strong> Full Stack Developer (Dec 2021 - Nov 2023)
						</p>
						<p>
							Developed a Customer Support Automation System using AI/ML to
							enhance efficiency and reduce response times.
						</p>
					</li>
					<li>
						<h3 className="font-semibold text-xl">Adidas, Portland</h3>
						<p className="text-gray-700 mb-2">
							<strong>Role:</strong> Full Stack Developer (Jan 2020 - Nov 2021)
						</p>
						<p>
            Led the development of an Inventory Management System for Adidas, designed to optimize warehouse operations, track product availability, and improve supply chain efficiency.
						</p>
					</li>
					<li>
						<h3 className="font-semibold text-xl">Aricent, India</h3>
						<p className="text-gray-700 mb-2">
							<strong>Role:</strong>Junior Full Stack Developer (July 2017 - Dec
							2019)
						</p>
						<p>
							Developed and maintained an Employee Management System (EMS)
							designed to streamline HR processes, manage employee data, and
							optimize organizational workflows.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Experience;
