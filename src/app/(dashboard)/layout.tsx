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
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[12%] text-center bg-jodnaPurple1 text-white p-4">
				<Link
					href="/"
					className="flex items-center justify-center my-4 pt-1 gap-2"
				>
					<Image src="/logo.png" alt="logo" width={32} height={32} />
					<span className="hidden lg:block font-bold text-xl uppercase">
						jodna tech
					</span>
				</Link>
				<Menu />
			</div>

			{/* RIGHT: other pages that'll use the layout */}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white overflow-scroll">
				{children}
			</div>
		</div>
	);
}
