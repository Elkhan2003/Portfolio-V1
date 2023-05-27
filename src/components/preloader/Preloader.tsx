import React, { FC } from "react";
import { Dna } from "react-loader-spinner";

interface PreloaderType {
	className?: any;
}

const Preloader: FC<PreloaderType> = ({ className }) => {
	return (
		<div className={className}>
			<Dna
				visible={true}
				height="225"
				width="225"
				ariaLabel="dna-loading"
				wrapperStyle={{}}
				wrapperClass="dna-wrapper"
			/>
		</div>
	);
};

export default Preloader;
