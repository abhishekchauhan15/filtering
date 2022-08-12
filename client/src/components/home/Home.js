import React, {useEffect, useState} from 'react'

const Home = () => {
  const [catogeries, setCatogeries] = useState([])

  useEffect(() => {
    const fetchCatogeries = async () => {
      const res = await fetch('/api/data')
      const data = await res.json()
      console.log(data);
      setCatogeries(data)
    }
    fetchCatogeries()
  }, [])
  return (
    <div>
      home
    <div>
      {
        catogeries.map(catogery => {
          return (
            <div key={catogery.id}>
              <h1>{catogery.catogeries}</h1>
            </div>
          )
        }
          )}
          </div>
    </div>
  )
}

export default Home