import React, {useEffect, useState} from 'react'

const Home = () => {
  const [catogeries, setCatogeries] = useState([])

  useEffect(() => {
    const fetchCatogeries = async () => {
      const res = await fetch('http://localhost:8000/api/data')
      const data = await res.json()
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
              <h1>{catogery.name}</h1>
              yo
              {/* <p>{catogery.description}</p> */}
            </div>
          )
        }
          )}
          </div>
    </div>
  )
}

export default Home