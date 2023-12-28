export default function Home() {
	return (
		<section className="section flex-col-center-center px-4 py-4 relative" id="home">
			<div className="w-full h-full rounded-lg flex-col-center-center backdrop-blur-sm border-2">
				<div className="w-full h-full flex-col-center-center max-w-5xl text-center">
					<h1 className="flex-col-center-center gap-16">
						<span className="text-6xl">Hey, 👋 I am</span>
						<span className="text-8xl font-semibold">arthur</span>
						<span className="text-6xl max-w-xl font-light">
							<span className="font-semibold">frontend developer</span> and <span className="font-semibold">creative coder</span>
						</span>
					</h1>
				</div>
				<div className="w-full h-auto flex-row-center-between px-12 py-12 text-2xl">
					<p>2024</p>
					<p>Angers, France</p>
				</div>
			</div>
			<div className="blob-c">
				<div className="shape-blob"></div>
				<div className="shape-blob one"></div>
				<div className="shape-blob two"></div>
				<div className="shape-blob three"></div>
    			<div className="shape-blob four"></div>
    			<div className="shape-blob five"></div>
    			<div className="shape-blob six"></div>
			</div>
		</section>
  	);
};

