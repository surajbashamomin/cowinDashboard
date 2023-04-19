// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {cowin} = props
  //   const {vaccineData, dose1, dose2} = cowin

  const DataFormatter = number => {
    if (number > 100) {
      return `${(number / 100).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={cowin} margin={{top: 5}}>
        <XAxis dataKey={cowin.vaccineData} />
        <YAxis tickFormatter={DataFormatter} />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey={cowin.dose1} name="Dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey={cowin.dose2} name="Dose2" fill="#f54394" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
