import { useParams } from "react-router-dom";

export const CustomUseParams = () => {
	const { carId } = useParams();
	const { carName } = useParams();

	if ((carId === undefined && carName === undefined) || (carId && carName)) {
		throw new Error("Invalid params");
	}
	const validCarId: string = carId || "";

	return { carId, carName, validCarId };
};
