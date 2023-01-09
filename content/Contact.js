export const contactInfo = {
    title: "Are you interested in working with us?",
    description: "Contact us via phone, email or visit us at our office.",

    contacts: [
        {
            title:"Location",
            description: "Suite 312, 203-233 New South Head Road Edgecliff NSW 2027",
            link: <a className='text-blue-500' target='_blank' href='https://goo.gl/maps/xuvxXX91agQ4774o8'>Suite 312, 203-233 New South Head Road Edgecliff NSW 2027</a>,
            icon: "location.png",
            size: "w-[40px]"
        },
        {
            title:"Phone",
            link: <a className='underline' href="tel:0280390400"> (02) 8039 0400 </a>,
            icon: "phone.png",
            size: "w-[40px]"
        },
        {
            title:"Fax",
            link: <a className='underline'>(02) 9475 4444</a>,
            icon: "fax.png",
            size: "w-[40px]"
        },
        {
            title:"Email",
            link: <a className='text-blue-500' target='_blank' href="mailto:info@graintrend.com"> info@graintrend.com </a>,
            icon: "email.png",
            size: "w-[40px]"
        },
    ]
}