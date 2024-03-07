import { createContext, useContext } from "react";

interface ContextProps {
	id: number;
	sectionImg: string;
	Make: string;
	mileage: number;
	condition: string;
	year: number;
	fuel: string;
	horsePower: number;
	seats: number;
	color: string;
	price: number;
}

export const CarContext = createContext<ContextProps[] | undefined>(undefined);

export const useCarContext = () => {
	const Car = useContext(CarContext);

	if (Car === undefined) {
		throw new Error("Undefined");
	}
	return Car;
};
