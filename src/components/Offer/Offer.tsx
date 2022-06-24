import React, {FC} from 'react';

interface IOffer {
	text: string;
}

const Offer: FC<IOffer> = ({text}) => {
	return <span>{text}</span>
};

export default Offer;
