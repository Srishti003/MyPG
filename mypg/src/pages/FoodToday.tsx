import FoodCard from '../components/FoodCard'
import { foodToday } from '../data/foodData'
import { Button } from '@fluentui/react-components'
import { PersonDelete24Regular } from '@fluentui/react-icons'


const styles = {
  grid: {
    display: 'flex',
    gap: 12,
    overflowX: 'auto' as const
  }
}


export default function FoodToday() {
  const today = new Date().toDateString()

  return (
    <>
      <h2>What's in food today</h2>
      <p>{today}</p>

      <Button icon={<PersonDelete24Regular />}>Absent Today</Button>

      <h3>Breakfast</h3>
      <div style={styles.grid}>
        {foodToday.breakfast.map(f => <FoodCard key={f.id} {...f} />)}
      </div>

      <h3>Lunch</h3>
      <div style={styles.grid}>
        {foodToday.lunch.map(f => <FoodCard key={f.id} {...f} />)}
      </div>

      <h3>Dinner</h3>
      <div style={styles.grid}>
        {foodToday.dinner.map(f => <FoodCard key={f.id} {...f} />)}
      </div>
    </>
  )
}

