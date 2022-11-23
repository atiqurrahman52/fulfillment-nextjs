import phone from "../assets/images/contact/phone.svg";
import email from "../assets/images/contact/mail.svg";
import location from "../assets/images/contact/location.svg";
import share from "../assets/images/contact/share.svg";
import facebook from "../assets/images/contact/facebook.svg";
import twitter from "../assets/images/contact/twitter.svg";
import instagram from "../assets/images/contact/instagram.svg";

const contactData = [
  {
    id: 0,
    img: phone,
    title: "PHONE",
    description: "+880 1245 586 544",
  },
  {
    id: 1,
    img: email,
    title: "EMAIL",
    description: "help@pickme.xyz",
  },
  {
    id: 2,
    img: location,
    title: "ADDRESS",
    description: "Knoxville, TN",
  },
  {
    id: 3,
    img: share,
    title: "SHARE",
    description: [
      {
        id: 0,
        img: facebook,
      },
      {
        id: 0,
        img: twitter,
      },
      {
        id: 0,
        img: instagram,
      },
    ],
  },
];

export { contactData };
