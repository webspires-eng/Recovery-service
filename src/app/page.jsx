"use client"
import React, { Suspense } from "react";
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

function HomeContent() {

  const params = useSearchParams();

  const location = params.get("loc");
  const locationName = locations[location]?.name ? locations[location]?.name : "West Midlands";
  console.log(Object.keys(locations).length);
  const kwd = params.get("kwd");
  const eKeyword = kwd ? kwd : "Emergency Towing Service";
  const keyword = kwd ? kwd : "Car Recovery Service";
  const city = location ? locations[location]?.name : "UK";


  return (
    <>

      {/* Mobile-Only Sticky Header */}
      <div className="sticky top-0 z-[100] bg-[#FFE803] py-3 px-4 shadow-xs w-full  md:hidden">
        <div className="max-w-[400px] w-full mx-auto">
          <a href="tel:+4407360544819" className="bg-orange mb-1 shadow-md outline-none text-white rounded-full flex items-center justify-center relative w-full h-[56px] overflow-hidden">
            <div className="bg-[#51A051] rounded-full size-12 flex items-center justify-center shadow-sm absolute left-1 top-1">
              <svg className="size-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center pl-8">
              <span className='text-[22px] font-bold leading-tight'>0736 054 4819</span>
              <span className='text-[13px] font-semibold leading-tight'>24/7 Service - Call Now</span>
            </div>
          </a>
          <div className="text-[16px] text-gray-800 text-center font-normal mt-1">Arrive in less than 15 mins</div>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="pr-5 mx-w-[600px]">
              <h1 className=" text-[32px] capitalize md:text-[42px] font-bold leading-tight mb-2">
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
      <section className="py-6 md:py-10 mt-6 md:mt-16">
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
      <section className="py-10 md:py-20 mt-8 md:mt-16 bg-[#333333] relative overflow-hidden">
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
            <h2 className="text-[36px] capitalize md:text-[60px] text-orange leading-tight font-bold">{eKeyword}<br className="max-md:hidden" />
              <span className="md:hidden"> </span>in <span className="text-white">{locationName}</span> & <span className="text-white">Outskirts</span>
            </h2>
          </div>


          <div className="max-w-[350px] mx-auto mt-10">
            <Button href="tel:+4407360544819" title="0736 054 4819" subTitle="24/7 Service - Call Now" text="Arrive in less than 15 mins" theme="dark" />
          </div>


        </div>
      </section>

      <section>
        <div className="max-w-[1180px] py-6 md:py-16 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h5 className="text-[18px] md:text-[24px] text-black/70 font-medium">Your Rapid Response Partner for Stress-Free Vehicle Assistance.</h5>
          </div>

          <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-8 text-[16px] md:text-[20px] font-light">
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold capitalize">24 HOUR {kwd ? kwd : "EMERGENCY CAR RECOVERY"}:</strong><br /> Available 24/7, our {kwd ? kwd : "Emergency Car Recovery"} ensures swift assistance for breakdowns and mishaps, anytime, anywhere in {locationName} & Outskirts.</p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold capitalize">Roadside Assistance:</strong><br />
                Get back on the road swiftly with our reliable roadside assistance. Available around the clock for all your vehicle needs in {locationName} & Outskirts. Call Now!</p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold capitalize">Vehicle Transportation:</strong> Seamless vehicle transportation tailored to your needs. Trust us for safe and efficient transport services in {locationName} & Outskirts.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowIcon className="shrink-0 mt-1 fill-[#38A132] size-6" />
              <p><strong className="font-semibold capitalize">Jump Start:</strong> Quick and efficient jump-start services to revive your vehicle's battery, available whenever you need it.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-6 md:py-10 mt-6 md:mt-16">
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
      <section className="py-8 md:py-20 mt-8 md:mt-16 bg-[#EAEAEA]">
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


      <footer className="py-8  bg-[#252727] text-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h5 className="text-md text-white/80 font-light">Copyright © {new Date().getFullYear()} Group 961 Ltd. All rights reserved.</h5>
          </div>
        </div>
      </footer>


      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/4407360544819" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
        <div className="bg-white rounded-md px-3 py-1.5 shadow-xl text-sm font-bold text-black border border-gray-100 relative drop-shadow-md hidden sm:block">
          Need Help?
          <div className="absolute top-1/2 -translate-y-1/2 -right-[5px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white drop-shadow-sm"></div>
        </div>
        <div className="bg-[#25D366] hover:bg-[#128C7E] transition-colors rounded-full size-14 md:size-16 flex items-center justify-center shadow-lg border-2 border-white drop-shadow-lg group-hover:scale-110 duration-300">
          <svg className="size-8 md:size-9 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </div>
      </a>

    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <HomeContent />
    </Suspense>
  );
}
