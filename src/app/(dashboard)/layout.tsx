import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-full flex">
			{/* LEFT: logo and menu */}
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] text-center bg-jodnaPurple1 text-white">
				<Link
					href="/"
					className="flex items-center logo justify-center lg:justify-start my-4 mt-10 ml-3 gap-2"
				>
					<Image
						src="/logo.png"
						alt="Jodna logo"
						width={30}
						height={30}
						className="ml-2"
					/>
					<span className="hidden lg:block font-bold uppercase">
						jodna tech
					</span>
				</Link>
				<Menu />
			</div>

			{/* RIGHT: other pages that will use the layout */}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white">
				{children}
			</div>
		</div>
	);
}
