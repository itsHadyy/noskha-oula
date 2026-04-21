import './Marquee.css'

const items = [
  'Curious Minds', 'Joyful Readers', 'Happy Families', 'Little Explorers',
  'Bright Hearts', 'Al Noskha Al Oula', 'Books for Life', 'Growing Together',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee__item">
            <span className="marquee__dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
