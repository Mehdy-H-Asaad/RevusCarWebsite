import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
const ContactData = [
	{
		name: "Head Office",
		information: `68 Landsriver St,  Welson California 22066`,
	},
	{
		name: "Phone",
		information: "+303 123 456 7890",
		dept: "Sales Dept : 0800 123 4567",
	},
	{
		name: "Email",
		information: `info@domain.com
        support@domain.com`,
	},
	{
		name: "Showroom",
		information: `FairView Ave, El Monte
        California 91732`,
	},
];

const ContactIcons = [
	<IoLocationOutline className="contact-icon" />,
	<IoCallOutline className="contact-icon" />,
	<MdOutlineEmail className="contact-icon" />,
	<FaRegMap className="contact-icon" />,
];

export { ContactIcons };
export default ContactData;
