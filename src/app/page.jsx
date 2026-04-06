"use client"
import Image from "next/image";
import ArrowIcon from "@/components/ArrowIcon";
import Button from "@/components/Button";
import RecoverCard from "@/components/RecoverCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { locations } from "@/utils/location";
import { useSearchParams } from "next/navigation";

const testimonialData = [
  {
    id: 1,
    name: "Lauren Hill",
    date: "2 months ago",
    stars: 5,
    text: "Thank you brilliant service.cant fult them.thay turned up on time very friendly and cheap 100%.recommend them.abz recovery"
  },
  {
    id: 2,
    name: "Millie Mcpherson",
    date: "2 months ago",
    stars: 5,
    text: "Abz managed to get my car in the garage within 30 minutes of me calling up and then have my car fixed and ready to pick up within less than 24..."
  },
  {
    id: 3,
    name: "William Hughes",
    date: "2 months ago",
    stars: 5,
    text: "excillent job , very professional."
  },
  {
    id: 4,
    name: "Nathan Scott",
    date: "2 months ago",
    stars: 5,
    text: "Excellent service from start to finish. The team replaced the radiators on my cars and carried out a full service, all completed to a very high standard. Th..."
  },
  {
    id: 5,
    name: "Amy Tibbitts",
    date: "2 months ago",
    stars: 5,
    text: "Absolutely brilliant service. Turned up with a day's notice and delivered my car safely to its destination. Definitely use these guys in the future if needed."
  },
  {
    id: 6,
    name: "Jack Mitchell",
    date: "2 months ago",
    stars: 5,
    text: "Great service, arrived on time, friendly driver, great value, couldn't recommend more highly"
  }
];

const recoverData = [
  {
    id: 1,
    "image": "https://abzrecoveryservices.co.uk/wp-content/uploads/2024/06/call-3.png",
    title: "Contact and Dispatch",
    description: "When you find yourself in need of emergency towing or roadside assistance, simply give us a call."
  },
  {
    id: 2,
    "image": "https://abzrecoveryservices.co.uk/wp-content/uploads/2024/06/call-1.png",
    title: "Secure Towing",
    description: "Once our tow truck arrives, We will securely tow your vehicle. We use state-of-the-art equipment to ensure damage-free towing."
  },
  {
    id: 3,
    "image": "https://abzrecoveryservices.co.uk/wp-content/uploads/2024/06/call-5.png",
    title: "Transparent Billing",
    description: "We believe in transparent and fair pricing. Before we begin any towing services, you'll receive a clear explanation of the costs involved."
  },
]

export default function Home() {

  const params = useSearchParams();

  const location = params.get("loc");
  const locationName = locations[location]?.name ? locations[location]?.name : "West Midlands";
  console.log(Object.keys(locations).length);
  const kwd = params.get("kwd");
  const keyword = kwd ? kwd : "Car Recovery Service";
  const city = location ? locations[location]?.name : "UK";


  return (
    <>

      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="pr-5 mx-w-[600px]">
              <h1 className="text-[32px] md:text-[42px] font-bold leading-tight mb-2">
                <span className="text-[24px] md:text-[32px] text-orange font-normal">24 Hours</span><br />
                {keyword} In
                <span className="text-orange"> {locationName}</span> & Outskirts
              </h1>
              <h4 className="text-[20px] md:text-[26px] font-bold text-blue">Arrive in less than 15 mins</h4>

              <ul className="border-t border-cyan-900/20 mt-3 mb-6 pl-8 pt-3 opacity-90 space-y-2 md:space-y-1 text-[16px] md:text-[20px]" >
                <li className="relative"><svg className="absolute -left-8  top-1 fill-[#38A132] size-6" viewBox="0 0 512 512" data-id="icon-arrow-circle-right-solid" data-name=""><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>  <strong>Rapid</strong> Response Time</li>
                <li className="relative"><svg className="absolute -left-8  top-1 fill-[#38A132] size-6" viewBox="0 0 512 512" data-id="icon-arrow-circle-right-solid" data-name=""><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>  Transparent <strong>Pricing</strong></li>
                <li className="relative"><svg className="absolute -left-8  top-1 fill-[#38A132] size-6" viewBox="0 0 512 512" data-id="icon-arrow-circle-right-solid" data-name=""><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>  Latest Tow <strong>Trucks </strong></li>
                <li className="relative"><svg className="absolute -left-8  top-1 fill-[#38A132] size-6" viewBox="0 0 512 512" data-id="icon-arrow-circle-right-solid" data-name=""><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg> <strong>Trusted & Reliable</strong> Service</li>
                <li className="relative"><svg className="absolute -left-8  top-1 fill-[#38A132] size-6" viewBox="0 0 512 512" data-id="icon-arrow-circle-right-solid" data-name=""><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg> <strong>24/7</strong> {keyword}</li>
                <li className="relative"><svg className="absolute -left-8  top-1 fill-[#38A132] size-6" viewBox="0 0 512 512" data-id="icon-arrow-circle-right-solid" data-name=""><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg> <strong>Damage-Free</strong> Car Recovery</li>
              </ul>
              <div className="max-w-82.5">
                <Button href="tel:+4407360544819" title="0736 054 4819" subTitle="24/7 Service - Call Now" text="Arrive in less than 15 mins" />
              </div>
            </div>

            <div className="mt-8 lg:mt-0 relative w-full h-[350px] sm:h-[450px] lg:h-full">
              <Image 
                className="block object-cover rounded-lg" 
                sizes="(max-width: 1024px) 100vw, 50vw" 
                fill 
                priority 
                src="https://uploads.webspires.co.uk/recovery961lp/Towing-Service-1-1.jpg" 
                alt={keyword} 
              />
            </div>

          </div>
        </div>
      </section>


      {/*  RECOVERD SECTION */}
      <section className="py-10 mt-20">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[36px] md:text-[60px] text-orange leading-tight font-bold">Get Your Car Recovered</h2>
            <p className="text-blue text-[24px] md:text-[36px] font-semibold">in 3 Easy Steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-10">

            {
              recoverData.map((item) => (
                <div key={item.id}>
                  <RecoverCard data={item} />
                </div>
              ))

            }

          </div>

          <div className="max-w-[350px] mx-auto mt-10">
            <Button href="tel:+4407360544819" title="0736 054 4819" subTitle="24/7 Service - Call Now" text="Arrive in less than 15 mins" />
          </div>


        </div>
      </section>

      {/*  RECOVERD SECTION */}
      <section className="py-20 mt-20 bg-[#333333] relative overflow-hidden">
        <Image 
          src="https://uploads.webspires.co.uk/recovery961lp/images.jpeg" 
          alt="Background" 
          fill 
          sizes="100vw"
          quality={75}
          className="object-cover object-center mix-blend-multiply opacity-90" 
        />
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-[36px] md:text-[60px] text-orange leading-tight font-bold">Emergency Towing Service<br className="max-md:hidden" />
              <span className="md:hidden"> </span>in <span className="text-white">{locationName}</span> & <span className="text-white">Outskirts</span>
            </h2>
          </div>


          <div className="max-w-[350px] mx-auto mt-10">
            <Button href="tel:+4407360544819" title="0736 054 4819" subTitle="24/7 Service - Call Now" text="Arrive in less than 15 mins" theme="dark" />
          </div>


        </div>
      </section>

      <section>
        <div className="max-w-[1180px] py-16 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h5 className="text-[18px] md:text-[24px] text-black/70 font-medium">Your Rapid Response Partner for Stress-Free Vehicle Assistance.</h5>
          </div>

          <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-8 text-[16px] md:text-[20px] font-light">
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold">24 HOUR EMERGENCY CAR RECOVERY:</strong><br /> Available 24/7, our Emergency {keyword} ensures swift assistance for breakdowns and mishaps, anytime, anywhere in {locationName} & Outskirts.</p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold">Roadside Assistance:</strong><br />
                Get back on the road swiftly with our reliable roadside assistance. Available around the clock for all your vehicle needs in {locationName} & Outskirts. Call Now!</p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold">Vehicle Transportation:</strong> Seamless vehicle transportation tailored to your needs. Trust us for safe and efficient transport services in {locationName} & Outskirts.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold">Jump Start:</strong> Quick and efficient jump-start services to revive your vehicle's battery, available whenever you need it.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-10 mt-20">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-blue text-[24px] md:text-[36px] font-bold">Trusted by <span className="text-orange">1000s</span> Across The {city}</h4>
            <h2 className="text-[36px] md:text-[60px] text-orange leading-tight font-extrabold">OUR CUSTOMERS LOVE US</h2>
            <div className="max-w-[150px] h-2.5 bg-[#FFD245] mx-auto"></div>
          </div>

          <div className="text-center mt-10 md:mt-20 flex flex-col justify-center items-center gap-2">
            <strong className="text-[20px] md:text-[24px]">EXCELLENT</strong>
            <div className="flex justify-center gap-0.5">
              {
                [...Array(5)].map((_, i) => (
                  <Image key={i} width={28} height={28} src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Star"
                    className="inline-block size-7" />
                ))
              }
            </div>
            <p className="text-[15px]">Based on <strong>1695  reviews</strong></p>
            <div className="flex justify-center mb-2">
              <Image style={{ width: 'auto' }} className="h-8" width={90} height={32} src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt="Google Logo" />
            </div>
          </div>


          <TestimonialCarousel data={testimonialData} />


        </div>
      </section>


      {/* Why Choose us*/}
      <section className="py-20 mt-20 bg-[#EAEAEA]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[36px] md:text-[60px] text-orange leading-tight font-bold">WHY CHOOSE US</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-15 mt-10 md:mt-20">
            <div className="img-wrapper z-10 relative pb-10 sm:pb-12 md:pb-[12%] pt-[5%]">
              <div className="absolute inset-x-0 bottom-0 -z-10 rounded-b-[32px] overflow-hidden">
                <svg version="1.1" viewBox="0 0 1000 234.7" className="w-full h-[180px] sm:h-[240px] md:h-[320px] fill-[#283C90]" preserveAspectRatio="none">
                  <path d="M1000,2.2L571,172c-60.6,23.6-85.4,22.6-146.2,0L0,0v234.7h1000V2.2z" />
                </svg>
              </div>
              <div className="w-[85%] z-10 aspect-square mx-auto rounded-[24px] overflow-hidden drop-shadow-xl relative bg-[#EAEAEA]">
                <Image className="object-cover" sizes="(max-width: 1024px) 85vw, 40vw" fill src="https://uploads.webspires.co.uk/recovery961lp/pexels-artem-makarov-13151224-scaled-1.jpg" alt="Why Choose Us" />
              </div>
            </div>

            {/* text */}
            <div className="">

              <div className="flex items-start mb-6">
                <svg className="size-[28px] text-[#38A132] mr-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                <div className="text-[16px] md:text-[20px]">
                  <h5 className="font-semibold">Swift Responce</h5>
                  <p className="font-light">Immediate assistance when you need it most.</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <svg className="size-[28px] text-[#38A132] mr-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                <div className="text-[16px] md:text-[20px]">
                  <h5 className="font-semibold">24/7 Availability</h5>
                  <p className="font-light">We're here for you around the clock.</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <svg className="size-[28px] text-[#38A132] mr-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                <div className="text-[16px] md:text-[20px]">
                  <h5 className="font-semibold">Expertise</h5>
                  <p className="font-light">Skilled professionals ensuring reliable solutions.</p>
                </div>
              </div>

              <div className="max-w-[300px] mx-auto mt-10">
                <Button href="tel:+4407360544819" title="0736 054 4819" subTitle="24/7 Service - Call Now" text="Arrive in less than 15 mins" />
              </div>

            </div>

          </div>




        </div>
      </section>


      <footer className="py-8 mt-20 bg-[#252727] text-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h5 className="text-md text-white/80 font-light">Copyright © {new Date().getFullYear()} Group 961 Ltd. All rights reserved.</h5>
          </div>
        </div>
      </footer>


    </>
  );
}
