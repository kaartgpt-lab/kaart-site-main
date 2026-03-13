import CounterAnimation from '@/utils/CounterAnimation'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const cardData = [
  { number: 50, label: 'Successful projects delivered', prefix: '+' },
  { number: 4, label: 'Years of Experience', prefix: '+' },
  { number: 80, label: 'Happy clients and agencies', prefix: '+' },
]

const OurAchievement = () => {
  return (
    <section className="pb-4 pt-4 md:pb-6 md:pt-6 lg:pb-[88px] lg:pt-[88px] xl:pb-[10px] xl:pt-[10px]">
      <div className="container">
        <div className="flex items-center justify-center gap-[30px] max-xl:flex-wrap">
          {cardData.map((card, index) => (
            <RevealWrapper
              key={index}
              className="flex min-h-[210px] min-w-[320px] flex-col items-center justify-center space-y-3 border px-9 py-7 dark:border-dark lg:px-16 lg:py-10">
              <h2 className="lg:text-7xl">
                <CounterAnimation number={card.number} /> {card.prefix}
              </h2>
              <p className="text-center">{card.label}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurAchievement
