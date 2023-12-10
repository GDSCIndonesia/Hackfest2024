"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
	// Navbar Hooks
	const [showNavbar, setNavbar] = useState(false);

	// Close navbar outside
	const menuRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handler = (e: Event) => {
			if (!menuRef.current?.contains(e.target as Node)) {
				setNavbar(false);
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<section className="navbar" ref={menuRef}>
			<div className="navbarContent">
				<div className="pl-[30px] md:pl-[60px] pr-[20px]">
					<a href="#about">
						<img
							src="/libraries/images/svg/gdsc-logo.svg"
							className="h-[28px]"
						/>
					</a>
				</div>
				<div className="pr-[30px] md:pr-[60px] lg:hidden">
					<button onClick={() => setNavbar(true)} className="py-[14px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-9 h-9 inline-block"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
				<div
					className={`${
						showNavbar ? "right-0" : "right-[-100%]"
					} navbarController`}
				>
					<div className="navbarItems">
						<ul className="navbarUl">
							<li className="navbarLiTop">
								<div className="flex space-x-8 lg:hidden">
									<img
										className="w-[140px] h-auto"
										src="/libraries/images/svg/hackfest2024.svg"
									/>
									<button
										onClick={() => setNavbar(false)}
										className="font-gooReg"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</li>
							<li className="navbarLi">
								<a href="#about" className="navbarLink">
									About
								</a>
							</li>
							<li className="navbarLi">
								<a href="#events" className="navbarLink">
									Events
								</a>
							</li>
							<li className="navbarLi">
								<a href="#timeline" className="navbarLink">
									Timeline
								</a>
							</li>
							<li className="navbarLi">
								<a href="#prizes" className="navbarLink">
									Prizes
								</a>
							</li>
							<li>
								<a href="#faq" className="navbarLink">
									FAQ
								</a>
							</li>
						</ul>
						<ul className="flex flex-col lg:flex-row w-full lg:w-fit ">
							<li>
								<a href="https://goo.gle/googledevsid" className="navDiscord">
									Join Discord
								</a>
							</li>
							<li>
								<a
									href="https://s.id/register-hackfest2024"
									className="navRegister"
								>
									Register
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
