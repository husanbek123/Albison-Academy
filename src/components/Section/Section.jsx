import React from 'react'
import oneStepImg from "../../assets/one-step-img.svg"
import strongPortfolioImg from "../../assets/strong-portfolio-img.svg"
import findJob from "../../assets/find-job-img.svg"
import "./Section.scss"

export default function Section({className, sectionType}) {

  if(sectionType === "one-step") {
    return (
      <div 
        className={className + " section" }
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-duration="500"
        id={className}
      >
        <div className={className + "__img section__img"}>
          <img src={oneStepImg} alt="" />
        </div>
        <div className={className + "__info section__info"}>
          <h1 className='sec-title'>Bir qadam oldinda</h1>
          <p className='p'>Bizning barcha ustozlarimiz boy tajribaga ega. Mentorlarimiz tomonidan yaratilgan o'quv dasturlari esa doimiy yangilab boriladi va sizga eng so'ngi hamda faol dasturlash tillari o'rgatiladi.</p>
        </div>
      </div>
    )
  }
  else if(sectionType === "strong-portfolio") {
    return (
      <div 
        className={className + " section"}
        id={className}
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-duration="500"
      >
        <div className={className + "__info section__info"}>
          <h1 className='sec-title'>Kuchli portfolio</h1>
          <p className='p'>O'quv jarayonlarida har bir talaba o'z bilim darajasiga mos loyihalarda qatnashishi yoki o'z loyihalarini amalga oshirishi mumkin.</p>
        </div>
        <div className={className + "__img section__img"}>
          <img src={strongPortfolioImg} alt="" />
        </div>
      </div>
    )
  }
  else if(sectionType === "find-job") {
    return (
      <div 
        className={className + " section"}
        id={className}
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-duration="500"  
      >
        <div className={className + "__img section__img"}>
          <img src={findJob} alt="" />
        </div>
        <div className={className + "__info section__info"}>
          <h1 className='sec-title'>Ish topish</h1>
          <p className='p'>Kurslarimizni yakunlagan har bir talabaga ishga joylashishida ko'maklashamiz. Eng zo'r bitiruvchilar esa Albisonda ishlash imkoniga ega bo'ladilar.</p>
        </div>
      </div>
    )
  }
}
