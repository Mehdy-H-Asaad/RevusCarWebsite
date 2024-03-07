import Img1 from "../../src/Assets/imgs/topcar_mercedes_amg_glc_klasse_coupe_inferno_4k-1280x720-1-520x440.jpg";
import Img2 from "../../src/Assets/imgs/ferrari_488_pista_spider_2018_4k-1280x720-1-520x440.jpg";
import Img3 from "../../src/Assets/imgs/mercedes_benz_gle_450_4matic_amg_line_2019_4k-1280x720-1-520x440.jpg";
import Img4 from "../../src/Assets/imgs/bmw_m8_competition_coupe_2020_5k_3-1280x720-1-520x440.jpg";
import Img5 from "../../src/Assets/imgs/2020_ford_mustang_ecoboost_high_performance_package_5k-1280x720-1-520x440.jpg";
import Img6 from "../../src/Assets/imgs/mansory_lamborghini_urus_2020_5k-1280x720-1-520x440.jpg";

import ImgSectionOne from "../Assets/CarInfoImgs/topcar_mercedes_amg_glc_klasse_coupe_inferno_4k-1280x720-1-750x430.jpg";
import ImgSectiontwo from "../Assets/CarInfoImgs/ferrari_488_pista_spider_2018_4k-1280x720-1-750x430.jpg";
import ImgSectionThree from "../Assets/CarInfoImgs/mercedes_benz_gle_450_4matic_amg_line_2019_4k-1280x720-1-750x430.jpg";
import ImgSectionFour from "../Assets/CarInfoImgs/bmw_m8_competition_coupe_2020_5k_3-1280x720-1-750x430.jpg";
import ImgSectionFive from "../Assets/CarInfoImgs/2020_ford_mustang_ecoboost_high_performance_package_5k-1280x720-1-750x430.jpg";
import ImgSectionSix from "../Assets/CarInfoImgs/mansory_lamborghini_urus_2020_5k-1280x720-1-750x430.jpg";

export const CarData = [
	{
		id: 1,
		image: Img1,
		carName: "mercedes amg glc",
		model: "2018",
		maxSpeed: "155 MPH",
		type: "Petrol",
		price: "50000",
		sectionImage: ImgSectionOne,
	},
	{
		id: 2,
		image: Img2,
		carName: "ferrari 488 pista spider",
		model: "2018",
		maxSpeed: "205 MPH",
		type: "Petrol",
		price: "313000",
		sectionImage: ImgSectiontwo,
	},
	{
		id: 3,
		image: Img3,
		carName: "mercedes benz gle 450",
		model: "2019",
		maxSpeed: "220",
		type: "Petrol",
		price: "313000",
		sectionImage: ImgSectionThree,
	},
	{
		id: 4,
		image: Img4,
		carName: "bmw m8",
		model: "2019",
		maxSpeed: "220",
		type: "Petrol",
		price: "512000",
		sectionImage: ImgSectionFour,
	},
	{
		id: 5,
		image: Img6,
		carName: "lamborghini mansory urus",
		model: "2019",
		maxSpeed: "220",
		type: "Petrol",
		price: "120000",
		sectionImage: ImgSectionSix,
	},
	{
		id: 6,
		image: Img5,
		carName: "ford mustang",
		model: "2019",
		maxSpeed: "660",
		type: "Petrol",
		price: "45000",
		sectionImage: ImgSectionFive,
	},
];

export const carDataSection = [
	{
		id: 1,
		sectionImg: ImgSectionOne,
		Make: "mercedes",
		mileage: 22000,
		condition: "new",
		year: 2019,
		fuel: "Petrol",
		horsePower: 230,
		seats: 5,
		color: "Blue",
		price: 50000,
	},
	{
		id: 2,
		sectionImg: ImgSectiontwo,
		Make: "ferrari",
		mileage: 22000,
		condition: "New",
		year: 2019,
		fuel: "Petrol",
		horsePower: 230,
		seats: 5,
		color: "Blue",
		price: 313000,
	},
	{
		id: 3,
		sectionImg: ImgSectionThree,
		Make: "mercedes",
		mileage: 22000,
		condition: "New",
		year: 2019,
		fuel: "Petrol",
		horsePower: 230,
		seats: 5,
		color: "Blue",
		price: 313000,
	},
	{
		id: 4,
		sectionImg: ImgSectionFour,
		Make: "bmw",
		mileage: 22000,
		condition: "New",
		year: 2019,
		fuel: "Petrol",
		horsePower: 230,
		seats: 5,
		color: "Blue",
		price: 512000,
	},
	{
		id: 5,
		sectionImg: ImgSectionSix,
		Make: "lamborghini",
		mileage: 18000,
		condition: "New",
		year: 2019,
		fuel: "Petrol",
		horsePower: 230,
		seats: 4,
		color: "black",
		price: 120000,
	},
	{
		id: 6,
		sectionImg: ImgSectionFive,
		Make: "ford",
		mileage: 22000,
		condition: "New",
		year: 2019,
		fuel: "Petrol",
		horsePower: 230,
		seats: 5,
		color: "Blue",
		price: 45000,
	},
];
