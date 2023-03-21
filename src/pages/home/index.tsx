import CardItem from './component/Card'
const numbers = [1, 2, 3, 4]
function Home() {
  return (
    <>
      <div className="flex-x-between gap-x-16">
        {numbers.map((item, index) => (
          <CardItem key={index} info={item} />
        ))}
      </div>
    </>
  )
}

export default Home
