import one from '../../assets/fight.png'
import two from '../../assets/boxing-gloves..png'
import three from '../../assets/fightt.png'
import four from '../../assets/muay-thai.png'
import five from '../../assets/punch.png'
import six from '../../assets/boxing-gloves.png'
import seven from '../../assets/commitment.png'

const CompanyLogo = () => {
  const logos = [one, two, three, four, five, six, seven];

  return (
    <div className="w-full container mx-auto py-20 overflow-hidden flex  flex-col sm:flex-row sm:items-center items-start ">
      <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
        Because why do it yourself,  <br /> when you can Launde Bula Lo?
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-20 h-18 w-36 object-contain "
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-20 h-18 w-36 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo; 